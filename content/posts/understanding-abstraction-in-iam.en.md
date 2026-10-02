+++
title = 'Understanding the Concept of Abstraction in Identity and Access Management'
date = 2024-12-15T14:49:06+03:00
draft = false
translationKey = 'abstraction-kavramini-inceleyelim'
tags = ['Identity Management', 'Access Management', 'IAM', 'Abstraction', 'Digital Security', 'Role-Based Access Control RBAC']
+++

In our series on Identity and Access Management concepts, let's take a look together at **Abstraction**.

**Abstraction** is the practice of identifying and isolating the repeating aspects of operations or permissions. This way, those aspects can be managed in a single place and referenced in many others. This approach simplifies complex structures and creates a more manageable system.

### Let's Consider a Sample Application Like the One Below

- View Page1
- View Page2
- View Page3
- View Page4
- Click Page1Button1
- Click Page1Button2
- Click Page1Button3
- Click Page1Button4
- Click Page2Button1
- Click Page2Button2
- ...
- ...
- ...
- Click Page50ButtonX
- Edit Page50TextBox

<img src="/images/abstraction-kavramini-inceleyelim/iam-abstraction.jpg" alt="iam abstraction" style="width:100%;">




Let's assume that, in total, there are 150 permissions defined at the individual **permission** level for these operations.

In a scenario like this, if **Abstraction** is not applied, a question like "Can you check user X's permissions?" becomes complex and unmanageable for both managers and users.


### The Solution Through Abstraction: Roles

To eliminate this complexity, we can move the entirety of these permissions into the logic of a **role**.

**For example:**
We can create a role called "Finance Employee Sample Application Role" and define it as follows:

> This is the role under which finance employees have the permissions to view, write, and trigger actions through buttons within the finance section of the Sample Application.

With this definition, everyone across the company can easily understand the purpose and scope of the role just by looking at it. In addition, permissions can be assigned and managed much faster through this role.

### Advantages

- Easy to Understand: The meaning and scope of roles are far easier to grasp than individual permission lists.
- Efficiency: Managing permissions in bulk saves time.
- Security: Permission distribution becomes more controlled and orderly. The risk of mis-assigning permissions is reduced.

Faster Answers to Questions: Thanks to this role structure, questions about a user's permissions can be answered much more easily.

### Conclusion

In the field of Identity and Access Management, Abstraction provides companies with a major advantage by simplifying complex and repetitive permission management tasks. By applying this method, you allow your team and your managers to run their processes far more effectively.
