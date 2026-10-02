+++
title = 'What Is SAML Authentication?'
date = 2026-03-16T20:00:34+03:00
draft = false
translationKey = 'saml-authentication-nedir'
tags = ['SAML','SAMLAuthentication','SSO','SingleSignOn','IAM','IdentityAndAccessManagement','FederatedIdentity','Authentication','CyberSecurity','InformationSecurity','AccessManagement','IdentityFederation']
+++


**SAML (Security Assertion Markup Language)** is a protocol that allows authentication information to be securely exchanged between systems.

The SAML protocol is used in many systems during the **authentication** process. You can think of authentication simply as **the user signing in and having their identity verified**.

SAML stands for **Security Assertion Markup Language**.

Thanks to this protocol, a user's identity information can be **securely passed from one system to another**.

---

## How Does SAML Work?

With SAML, a user:

1. **Signs in to System A**
2. Gets authenticated
3. **Doesn't need to sign in again when moving to System B**

This mechanism is generally known as **Single Sign-On (SSO)**.

As a result:

- The user experience improves
- The user doesn't have to log in repeatedly
- Identity is shared securely between systems

SAML typically carries the following information between systems:

- Username
- Email address
- First name
- Last name
- Other identity attributes belonging to the user

---

## The Technical Structure of SAML

SAML is **an XML-based protocol**.

Authentication information is transmitted between systems as a **SAML Assertion**, an XML-formatted structure.

The SAML standard was developed and published by **OASIS (Organization for the Advancement of Structured Information Standards)**.

---

# SAML Components

SAML's architecture has two core components.

## Service Provider (SP)

The **Service Provider** is the application the user wants to access.

For example:

- A web application
- A SaaS platform
- An internal corporate panel

The user ultimately wants to sign in to this system.

---

## Identity Provider (IdP)

The **Identity Provider** is the system that authenticates users.

This service:

- Authenticates the user
- Generates identity information
- Sends this information to the Service Provider as a **SAML Assertion**

Examples of Identity Providers:

- Okta
- Azure AD
- Keycloak
- Auth0

---

## My Sample SAML Service Provider (SP) Repo

Below I'm sharing a screenshot and GitHub repo link for a simple **Service Provider (SP)** I built using SAML.

This app lets you quickly test **SAML integration** against various **Identity Provider (IdP)** services.

I built it with **Node.js**. To make setup easier, I moved it to a **Docker container architecture** and published it on GitHub.

You can clone the project and have it running in just a few minutes to run your own SAML integration tests.

[GitHub Repo](https://github.com/omermertkaya/easy-saml)

[Live Demo](https://easy-samli.onrender.com/)

<img src="/images/saml-authentication-nedir/saml-auth.png" alt="SAML authentication screenshot" style="width:100%;">

### Features

- A simple **SAML Service Provider** implementation
- Test against different **Identity Provider** services
- Built with **Node.js**
- Quick setup with **Docker**
- Easy to spin up a test environment
