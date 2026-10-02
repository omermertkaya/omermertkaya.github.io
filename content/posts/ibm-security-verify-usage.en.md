+++
title = 'Using IBM Security Verify'
date = 2024-04-02T20:11:04+03:00
draft = true
translationKey = 'ibm-security-verify-kullanimi'
tags = ['Authentication','IBM','SecurityVerify']
+++

Hi everyone,

In this post, we'll walk through a sign-in scenario using the Postman API with the trial version of the cloud-based IBM Security Verify.

In short, we can use IBM Security Verify for things like authentication, access control, risk-based access control, API security, and similar areas. With SSO, it offers us a very broad range of protocols for single sign-on functionality.

IBM Security Verify gives us a 90-day package to try it out, running on the cloud.
We create our own account by signing up at https://www.ibm.com/account/reg/us-en/signup?formid=urx-30041. For the trial version, we can proceed without being asked for a credit card or anything of that sort.

To summarize, I want to illustrate the architecture we'll be setting up using a diagram I took from IBM's own documentation.
You can also follow this tutorial at this [link](https://learn.ibm.com/pluginfile.php/2271988/mod_resource/content/1/Developer%20cookbook%20-%20Policy-based%20Authentication.pdf
).

![IBM Security Verify](/images/ibm-security-verify-kullanimi/diyagram.png)


After creating the account, let's first pull down the repo on GitHub into our system.
You can download the repo from https://github.com/IBM-Security/verify-postman, or clone it locally using git.

Let's open the repo we downloaded locally in Postman, organized by folder.

![Postman view](/images/ibm-security-verify-kullanimi/postman-goruntusu.png)

After importing it into Postman, let's go back to the account we created on IBM Security Cloud.
After creating the account, a link specific to us was generated, something like https://<yourtenantid>.verify.ibm.com/ui/admin. The tenantid part is actually the name we chose ourselves. For example, mine was created as https://merttest.verify.ibm.com/ui/admin.

Let's create a new user in the admin panel. Click the hamburger menu icon on the left and open Users and Groups under Directory.

![Postman view](/images/ibm-security-verify-kullanimi/user-olusturma.png)

Here, click new and create a test account using an email address different from the one we're already a member with.
We'll use this test account later in Postman.


After creating the test account, let's move on to creating a new application. Before creating the application, we need to create a rule set for it. First, let's go to the Access Policies section under the Security tab in the left-hand menu.

![Access Policies](/images/ibm-security-verify-kullanimi/security-access.png)
