---
date: 2026-10-01
type: section
title: "SSO Tracer — Privacy Policy"
---

_Last updated: 1 October 2026_

SSO Tracer is a Chrome extension that decodes OAuth 2.0, OIDC and SAML 2.0 sign-in traffic
inside your own browser. This policy describes exactly what it touches and where that data
goes.

## The short version

**Nothing leaves your browser.** SSO Tracer has no backend, no analytics, no telemetry and
no account. It never transmits anything anywhere. The only data that ever leaves the
extension is a file you explicitly ask it to export, written to your own disk.

## What the extension reads

To show you an authentication flow, SSO Tracer observes the browser traffic that carries
that flow:

| Data | Where it comes from | Why |
|---|---|---|
| Request URLs, methods, status codes | `webRequest`, `webNavigation` | To detect authorization requests, callbacks, token endpoints and discovery documents |
| `SAMLRequest` / `SAMLResponse` form fields | The submitted form, read by the content script | The only place a SAML POST-binding message is readable before it is sent |
| Request and response **bodies** of auth-related requests | Chrome DevTools network API, **only while the SSO Tracer DevTools panel is open** | Token endpoints return `access_token` / `id_token` in the response body; nothing else can read it |

Captured material can include authorization codes, access tokens, ID tokens, refresh tokens,
SAML assertions, and the identity claims inside them (such as your email address, name or
user ID). That is the point of the tool: these are the values you are trying to debug.

## Where it is stored

Captured events are held in `chrome.storage.session`, which is **held in memory and discarded
when you close the browser**. They are not written to `storage.local`, `storage.sync`, disk,
IndexedDB, cookies, or anywhere else. The store is capped at the 500 most recent events, and
"Clear" in the panel or popup empties it immediately.

## Where it is not sent

The extension makes no network requests of its own. There is no `fetch`, `XMLHttpRequest`,
`WebSocket` or `sendBeacon` call anywhere in its code, and its Content Security Policy
(`script-src 'self'`) blocks loading or executing remotely hosted code. The extension ships
uncompiled and unminified, so what is published is what runs.

## Export

The "Export JSON" and "Copy Flow" actions write a trace to a file you choose, or to your
clipboard. **Redact is enabled by default**: tokens, authorization codes, SAML assertions,
sensitive request headers and PII claims are replaced with `[REDACTED]` / `[REDACTED-PII]`
before anything is written. Turning redaction off requires confirming a dialog that lists
what the unredacted file will contain. Once exported, the file is yours — handle it like any
other file containing credentials.

## Permissions, and why each one exists

- **`webRequest`** — read-only observation of request URLs, methods and status codes. This
  extension does not use the blocking API; it cannot modify, redirect or cancel any request.
- **`webNavigation`** — to see URL *fragments* (`#access_token=…`). Fragments never reach the
  network, so implicit-flow tokens and some SAML redirects are invisible without it.
- **`storage`** — the in-memory session store described above.
- **Host access to all sites (`<all_urls>`)** — an identity provider can live on any domain,
  and so can the service provider it redirects back to. The extension cannot know in advance
  which hosts your SSO flow crosses, so it must be able to observe any of them. It reads only
  the auth-related traffic described above and ignores everything else.

## Data sold or shared

None. No data is sold, shared, or transferred to any third party, and none is used for
anything other than showing it to you in the DevTools panel. This is consistent with the
Chrome Web Store Limited Use requirements.

## Children

SSO Tracer is a developer tool and is not directed at children.

## Changes

Material changes to this policy will be published on this page and reflected in the Chrome
Web Store listing.

## Contact

Ömer Mert Kaya — <omermertkaya@gmail.com>
