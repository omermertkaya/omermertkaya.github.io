+++
title = 'What Is Access Certification?'
date = 2024-12-16T20:33:05+03:00
draft = false
translationKey = 'access-certification'
tags = ['Identity Management', 'Access Management', 'IAM', 'Abstraction', 'Digital Security', 'Role-Based Access Control RBAC', 'Zero-Trust Security Model', 'IAM Strategy', 'Access Review', 'Entitlement Management']
+++

Identity and Access Management (IAM) plays a critical role in securing an organization's IT infrastructure and sensitive data. Access Certification, an important component of IAM, refers to the process of regularly reviewing the permissions and roles users hold. In this post, we'll look at what Access Certification is and how you can implement it at your company.

### What Is Access Certification?

Access Certification is **a review process set up to confirm the correctness of access rights and remove unnecessary permissions.** The main goals of this process are:

- Preventing unauthorized or unnecessary access,
- Meeting compliance requirements,
- Reducing security risks.

Access Certification is carried out within the company by both managers and the relevant permission owners, and it ensures that what permissions and roles users actually need is clearly determined.

### How Is an Access Review Performed?

To better understand an Access Certification process, let's walk through this scenario:

- Your company has 3,000 employees.
- Your employees hold a wide variety of access rights across different IT systems.
- You manage access for 10 core applications through your IAM system.

Many of these employees will have gone through various organizational changes over the course of their careers. As a result, there will definitely be cases where certain permissions are no longer used, or employees shouldn't hold them at all. The access review process addresses exactly this problem.

The key steps followed in the process are:

1. **Collecting User and Permission Data:** The IAM system reports the current permissions and roles of users to all managers in the company via a dashboard.

2. **Manager Review:** Each manager analyzes the permissions of the employees on their team and decides which permissions are necessary and which are not. They either approve the permissions or flag them for removal.

3. At the end of the process, depending on how the IAM team has configured things, permissions or roles may be removed from employees directly, or — depending on the setup — the permission matrix is automatically updated with flagged items after review by the Information Security team.

4. **Applying Updates:** Unnecessary permissions are removed or adjusted through the IAM system.

### Alignment with the Zero-Trust Model

Access Certification aligns perfectly with the logic of the Zero-Trust security model. Zero-Trust is built on the principle of "never trust, always verify." This model requires that all access held by employees be continuously verified, and that only the permissions actually needed are granted.

The Access Certification process:

- Questions whether the permissions and roles users hold are actually necessary.
- Preserves the functionality and security of permissions while creating a more transparent permission structure across the company.

### Entitlement Owner: A Second Layer of Control

To make Access Certification even more effective, you can introduce the concept of an **Entitlement Owner** at your company.

- Having an owner for every permission or role adds an extra layer of oversight to the review process.

The entitlement owner, by better understanding the purpose and criticality of the role within the company, decides who the relevant permission should actually be granted to.

This model adds a two-layer control system on top of the review performed by the manager.

Throughout the user lifecycle, many permissions, roles, or access rights get requested. Access Certification ensures that these access grants are reviewed regularly, creating a structure aligned with the **need-to-know** and **need-to-access** principles. A thorough review conducted once a year:

- Prevents unauthorized access,
- Strengthens the organization's overall security posture,
- Creates a more efficient and secure working environment.

By putting this process in place at your company, you can take your IAM strategy a step further and build a security infrastructure aligned with the Zero-Trust model.

I've also written about this topic before, and the following posts may be useful for going deeper into the subject.

[Review Process for Permission and Role Owners](https://omermertkaya.github.io/posts/rol-yetki-sahibi-gozden-gecirme-sureci/)

[Permission Review Efforts in Identity and Access Management](https://omermertkaya.github.io/posts/rol-yetki-gozden-gecirme/)

[User Permission Review Reporting (Dashboard)](https://omermertkaya.github.io/posts/kullanici-yetki-gozden-gecirme-rapor/)


<img src="/images/access-certification/access-certification.png" alt="server screenshot" style="width:75%;">
