+++
title = 'What Is Entitlement?'
date = 2024-06-04T21:45:54+03:00
draft = false
translationKey = 'entitlement-nedir'
tags = ['entitlement','identity access management','IAM']
+++

Entitlement is one of the concepts we use most in Identity and Access Management (IAM) products. Entitlement, meaning granting authority or rights, is essentially the complete set of access rights held by an identity.

- Role definitions are a type of entitlement. For example, we can define them as **IT roles** or **business roles**.
- Permissions can be thought of as the smallest building block of authority. For example, permission to read, write, or delete a file.
- Access Policies refer to conditional access. For example, access permissions tied to an IP address, etc.
- Resources are the files, applications, or databases, etc. that users can access.

When managing entitlements, we generally prefer to build management structures around roles. For example, let's think of the Manager and Employee job definitions within the Employee Relations department of an organization's HR function.

![Entitlement-Human_Resources](/images/entitlement/entitlements_1.png)


Team employees can see all employees' permissions but can only view their own payroll, meaning we can define and associate this as the Employee Relations Employee Business Role. The Employee Relations Manager Business Role, on the other hand, can view and edit all employees' permissions and view all employees' payroll records.

When defining business roles here, the complete set within which we configure resource access permissions, access policies, and permissions inside a business role is what we'd call a user's entitlements.

If I were to model this using IBM's Security Verify Governance product, the structure below would better illustrate the **IT role** and **business role** concepts I mentioned above.

![Entitlement-Human_Resources](/images/entitlement/entitlements_2.png)

Looking at this model, we can see that a single **business role** can be associated with multiple IT and/or business roles, and can include permissions belonging to different applications.
An **IT role**, on the other hand, represents a type of role made up of permissions belonging to a specific application.

In Identity and Access Management, when asked what a user's entitlements are, we can think of it as the complete set of authorities, permissions, and access a user has across all applications. As a quick footnote: authorization tables generally keep track of which permissions belong to which user.
