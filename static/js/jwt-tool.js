(function () {
  'use strict';

  function b64urlToBytes(str) {
    str = String(str || '').replace(/-/g, '+').replace(/_/g, '/').replace(/\s+/g, '');
    while (str.length % 4) str += '=';
    var bin = atob(str);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  function bytesToB64url(bytes) {
    var bin = '';
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function b64urlToStr(str) {
    return new TextDecoder('utf-8').decode(b64urlToBytes(str));
  }

  function strToB64url(str) {
    return bytesToB64url(new TextEncoder().encode(str));
  }

  function concatBytes(a, b) {
    var out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }

  // Minimal PEM (SPKI, "-----BEGIN PUBLIC KEY-----") -> DER ArrayBuffer
  function pemToDer(pem) {
    var lines = String(pem || '').split(/\r?\n/).filter(function (l) {
      return l.indexOf('-----') !== 0 && l.trim().length > 0;
    });
    var b64 = lines.join('');
    var bin = atob(b64);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes.buffer;
  }

  var ALG_INFO = {
    HS256: { family: 'hmac', hash: 'SHA-256' },
    HS384: { family: 'hmac', hash: 'SHA-384' },
    HS512: { family: 'hmac', hash: 'SHA-512' },
    RS256: { family: 'rsa', hash: 'SHA-256' },
    RS384: { family: 'rsa', hash: 'SHA-384' },
    RS512: { family: 'rsa', hash: 'SHA-512' },
    ES256: { family: 'ec', hash: 'SHA-256', curve: 'P-256' },
    ES384: { family: 'ec', hash: 'SHA-384', curve: 'P-384' },
    ES512: { family: 'ec', hash: 'SHA-512', curve: 'P-521' },
    none: { family: 'none' }
  };

  function init(root) {
    var $ = function (sel) { return root.querySelector(sel); };

    var encodedEl = $('#jwt-encoded');
    var headerEl = $('#jwt-header');
    var payloadEl = $('#jwt-payload');
    var algBadge = $('#jwt-alg-badge');
    var errorEl = $('#jwt-error');
    var panelHmac = $('#jwt-verify-hmac');
    var panelPub = $('#jwt-verify-pubkey');
    var panelNone = $('#jwt-verify-none');
    var resultEl = $('#jwt-verify-result');
    var secretInput = $('#jwt-secret');
    var pubkeyInput = $('#jwt-pubkey');
    var verifyBtn = $('#jwt-verify-btn');
    var signBtn = $('#jwt-sign-btn');
    var verifyPubBtn = $('#jwt-verify-pub-btn');

    var state = { headerB64: '', payloadB64: '', sigB64: '', alg: null };
    var suppressReencode = false;

    function showError(msg) {
      if (!msg) {
        errorEl.hidden = true;
        errorEl.textContent = '';
        return;
      }
      errorEl.hidden = false;
      errorEl.textContent = msg;
    }

    function showResult(ok, msg) {
      resultEl.hidden = false;
      resultEl.className = 'jwt-tool-result ' + (ok === null ? '' : ok ? 'jwt-tool-result-ok' : 'jwt-tool-result-bad');
      resultEl.textContent = msg;
    }

    function updateVerifyPanels(alg) {
      panelHmac.hidden = true;
      panelPub.hidden = true;
      panelNone.hidden = true;
      resultEl.hidden = true;
      var info = ALG_INFO[alg];
      if (!info) {
        panelNone.hidden = false;
        panelNone.textContent = root.dataset.unknownAlg || 'Unsupported algorithm: ' + alg;
        return;
      }
      if (info.family === 'hmac') panelHmac.hidden = false;
      else if (info.family === 'rsa' || info.family === 'ec') panelPub.hidden = false;
      else panelNone.hidden = false;
    }

    function decodeFromEncoded() {
      var token = encodedEl.value.trim();
      if (!token) {
        showError(null);
        headerEl.value = '';
        payloadEl.value = '';
        algBadge.textContent = '';
        panelHmac.hidden = panelPub.hidden = panelNone.hidden = true;
        resultEl.hidden = true;
        return;
      }
      var parts = token.split('.');
      if (parts.length !== 3) {
        showError(root.dataset.errFormat || 'This does not look like a valid JWT (expected 3 dot-separated parts).');
        return;
      }
      try {
        var headerJson = JSON.parse(b64urlToStr(parts[0]));
        var payloadJson = JSON.parse(b64urlToStr(parts[1]));
        state.headerB64 = parts[0];
        state.payloadB64 = parts[1];
        state.sigB64 = parts[2];
        state.alg = headerJson.alg;

        suppressReencode = true;
        headerEl.value = JSON.stringify(headerJson, null, 2);
        payloadEl.value = JSON.stringify(payloadJson, null, 2);
        suppressReencode = false;

        algBadge.textContent = headerJson.alg || '?';
        showError(null);
        updateVerifyPanels(headerJson.alg);
      } catch (e) {
        showError((root.dataset.errDecode || 'Could not decode token: ') + e.message);
      }
    }

    function reencodeFromDecoded() {
      if (suppressReencode) return;
      try {
        var headerObj = JSON.parse(headerEl.value);
        var payloadObj = JSON.parse(payloadEl.value);
        state.headerB64 = strToB64url(JSON.stringify(headerObj));
        state.payloadB64 = strToB64url(JSON.stringify(payloadObj));
        state.alg = headerObj.alg;
        algBadge.textContent = headerObj.alg || '?';

        var newToken = state.headerB64 + '.' + state.payloadB64 + '.' + (state.sigB64 || '');
        encodedEl.value = newToken;
        showError(null);
        updateVerifyPanels(headerObj.alg);
      } catch (e) {
        showError((root.dataset.errJson || 'Invalid JSON: ') + e.message);
      }
    }

    function signingInputBytes() {
      return new TextEncoder().encode(state.headerB64 + '.' + state.payloadB64);
    }

    function verifyHmac() {
      var info = ALG_INFO[state.alg];
      if (!info || info.family !== 'hmac') return;
      var secret = secretInput.value || '';
      crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(secret),
        { name: 'HMAC', hash: info.hash },
        false,
        ['verify']
      ).then(function (key) {
        return crypto.subtle.verify('HMAC', key, b64urlToBytes(state.sigB64), signingInputBytes());
      }).then(function (ok) {
        showResult(ok, ok ? (root.dataset.okMsg || '✅ Signature verified') : (root.dataset.badMsg || '❌ Invalid signature'));
      }).catch(function (e) {
        showResult(false, (root.dataset.errVerify || 'Verification error: ') + e.message);
      });
    }

    function signHmac() {
      var info = ALG_INFO[state.alg];
      if (!info || info.family !== 'hmac') return;
      var secret = secretInput.value || '';
      crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(secret),
        { name: 'HMAC', hash: info.hash },
        false,
        ['sign']
      ).then(function (key) {
        return crypto.subtle.sign('HMAC', key, signingInputBytes());
      }).then(function (sigBuf) {
        state.sigB64 = bytesToB64url(new Uint8Array(sigBuf));
        encodedEl.value = state.headerB64 + '.' + state.payloadB64 + '.' + state.sigB64;
        showResult(true, root.dataset.signedMsg || '✅ Re-signed with this secret');
      }).catch(function (e) {
        showResult(false, (root.dataset.errVerify || 'Verification error: ') + e.message);
      });
    }

    function verifyAsymmetric() {
      var info = ALG_INFO[state.alg];
      if (!info) return;
      var der;
      try {
        der = pemToDer(pubkeyInput.value);
      } catch (e) {
        showResult(false, (root.dataset.errKey || 'Could not parse public key: ') + e.message);
        return;
      }
      var algoParams, verifyParams;
      if (info.family === 'rsa') {
        algoParams = { name: 'RSASSA-PKCS1-v1_5', hash: info.hash };
        verifyParams = 'RSASSA-PKCS1-v1_5';
      } else {
        algoParams = { name: 'ECDSA', namedCurve: info.curve };
        verifyParams = { name: 'ECDSA', hash: info.hash };
      }
      crypto.subtle.importKey('spki', der, algoParams, false, ['verify']).then(function (key) {
        return crypto.subtle.verify(verifyParams, key, b64urlToBytes(state.sigB64), signingInputBytes());
      }).then(function (ok) {
        showResult(ok, ok ? (root.dataset.okMsg || '✅ Signature verified') : (root.dataset.badMsg || '❌ Invalid signature'));
      }).catch(function (e) {
        showResult(false, (root.dataset.errVerify || 'Verification error: ') + e.message);
      });
    }

    encodedEl.addEventListener('input', decodeFromEncoded);
    headerEl.addEventListener('input', reencodeFromDecoded);
    payloadEl.addEventListener('input', reencodeFromDecoded);
    if (verifyBtn) verifyBtn.addEventListener('click', verifyHmac);
    if (signBtn) signBtn.addEventListener('click', signHmac);
    if (verifyPubBtn) verifyPubBtn.addEventListener('click', verifyAsymmetric);

    if (encodedEl.value.trim()) decodeFromEncoded();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var roots = document.querySelectorAll('.jwt-tool');
    for (var i = 0; i < roots.length; i++) init(roots[i]);
  });
})();
