+++
title = 'What Is AAA (Authentication, Authorization, Accounting)?'
date = 2025-01-02T18:57:49+03:00
draft = false
translationKey = 'AAA-Nedir'
tags = ['Identity Management', 'Access Management', 'IAM', 'What is AAA', 'Digital Security', 'Cyber Security', 'IDM Concepts', 'IAM Concepts', 'Authentication', 'Authorization', 'Accounting']
+++

In cybersecurity, we use a number of concepts to detect and structure problems. One of the best known and most fundamental of these is probably CIA.

**CIA**: made up of Confidentiality, Integrity, and Availability.

In this post, we'll look at a similar but less talked about concept that sits at the foundation of identity and access management: **AAA**. **AAA** stands for Authentication, Authorization, and Accounting.

### Authentication

- Authentication is the process of verifying that a user really is who they claim to be.
- In computer systems, this is usually done with a username, email, and password. In real life, you can think of it as the equivalent of showing your ID card.
- Once the user's credentials are verified, the authentication step is complete.
- As an interesting example, you can scan your national ID card at a printer so that only the documents belonging to you are released from the printer.

### Authorization

- Authorization defines what the user is allowed to do within the system. For example, it defines rights such as which web pages they can access (VPN authorization), which folders they can read, write, or delete files in on a shared drive, or which actions they can perform on a web page.
- Authorization can be granted based on the user's attributes in a role-based manner, or it can be shaped by specific policies and conditions.

### Accounting

- Accounting is the detailed recording of a user's activities.
- It includes details such as logging the time the user signed in, the actions they performed, and the IP address they connected from.
- It also logs, in detail, information such as which actions were performed with which privileges, and whether an error occurred while performing the action.


<img src="/images/aaa-nedir/aaa-nedir.png" alt="What is AAA" style="width:65%;">
