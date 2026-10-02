---
date: 2026-10-01
type: section
title: "SSO Tracer — Support"
---

**SSO Tracer** is a Chrome DevTools panel for debugging single sign-on. It watches OAuth 2.0,
OIDC and SAML 2.0 traffic as you authenticate and shows you the decoded flow — authorization
requests, PKCE challenges, token exchanges, ID token claims, SAML assertions — instead of a
wall of raw network rows.

Everything stays in the browser: no backend, no analytics, no account.
See the [privacy policy](/sso-tracer-privacy/).

## Getting help

Email **omermertkaya@gmail.com** with:

- what you were trying to debug (OAuth / OIDC / SAML, and which identity provider),
- what you expected to see in the panel and what you saw instead,
- your Chrome version and the extension version (shown on `chrome://extensions`).

If you can, attach a **redacted** export: open the panel, leave the **Redact** checkbox
ticked, and use **Export JSON**. Redacted exports have tokens, authorization codes, SAML
assertions, sensitive headers and PII claims stripped out, so they are safe to send. Please
never send an unredacted trace — it contains live credentials.

## Known limitations

**Open the panel before you authenticate.** Request and response *bodies* are only readable
through the Chrome DevTools network API, which is inert while DevTools is closed. URLs,
methods and statuses are captured either way, but a token endpoint's JSON body is gone if the
panel was opened after the exchange already happened. This is a limitation of the browser,
not something the extension can work around.

**SAML assertions posted inside an iframe are not decoded.** The flow is still recorded, but
without the assertion body.

## Reporting a security issue

If you believe you have found a vulnerability in the extension, email
**omermertkaya@gmail.com** directly rather than posting it publicly, and please allow time
for a fix before disclosing.
