+++
title = 'IAM & IAG & IGA & IDM: Concepts and Differences'
date = 2025-02-16T22:00:00+03:00
draft = false
translationKey = 'IAM-IAG-IGA-IDM-Farklari'
tags = ['IAM','IAG','IGA','IDM','IdentityAndAccessManagement']
+++

Identity and Access Management products keep helping us today across a wide range of use cases.
I think IDM tends to get used generally because it's an easy abbreviation to say.

In conversations I've had with people working in Identity and Access Management, we generally just say IDM.
But IAM, IGA, IAG, and IDM each actually have their own distinct characteristics — you could say they're products aimed at the same overall goal, but with different features.

I'd like to start with IAM first.

### What Is IAM?

IAM stands for Identity and Access Management. IAM is a general term that covers the execution of authentication and authorization processes.
At its core, it's what guarantees that the right people access the right resources, at the right time, with the right permissions — the thing we always keep coming back to.

### What Is IAG?

IAG stands for Identity and Access Governance. Since "governance" isn't a word we use very often, you might wonder how it's different from "management."

You can think of IAG as more of the managerial and oversight component of IAM.

Topics like:

- Access review
- Compliance reporting (SOX, GDPR, etc.)

are good reminders of the kind of compliance that governance is meant to produce.

### What Is IGA?

IGA stands for Identity Governance and Administration. It combines IAM and IAG — in other words, it covers the full set of processes around managing identities, governing them, and controlling access.

- User lifecycle management
- Automated provisioning and deprovisioning
- Compliance and audit processes
- Reporting and analytics


<img src="/images/IAM-IAG-IGA-IDM-Farklari/iga-idm-iam.png" alt="Differences between IAM, IGA, and IDM" style="width:100%;">



### What Is IDM?

IDM stands for Identity Management. It focuses on the user lifecycle (onboarding, role change, offboarding). It manages processes such as provisioning identities — in other words, creating and managing user accounts — storing identities in the appropriate directories, and self-service password management.



| Concept | Description | Key Features |
|---------|----------|----------------------|
| **IAM** | The overall system that manages identity and access | User management, authentication, authorization |
| **IAG** | Governance and compliance management for IAM processes | Auditing, access review, compliance policies |
| **IGA** | The combination of identity management and governance processes | Combines IAM and IAG, automation, audit and administration |
| **IDM** | The process that manages identity data and the user lifecycle | User management, account creation, password policies |
