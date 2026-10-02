+++
title = "Identity and Access Management Controls: A Look Through the Lens of the Presidency's Information Security Guide"
date = 2024-09-24T21:31:21+03:00
draft = false
translationKey = 'kimlik-ve-erisim-yonetimi-bilgi-ve-iletisim-guvenligi-rehberinden'
tags = ['IdentityAndAccessManagement','IAM','InformationAndCommunicationSecurity','CyberSecurityControls']
+++


Identity and Access Management (IDM/IAM) has become the standardized foundation that allows the right people to access the right resources, at the right time, for the right reasons.
The ["Information and Communication Security Guide"](https://cbddo.gov.tr/SharedFolderServer/Genel/File/bg_rehber.pdf), published under the leadership of the Presidential Digital Transformation Office, serves as a guiding resource for us in the field of "Authentication and Access Management." Examining this guide in detail lets us better understand the general outline of Information and Communication Security. Even though each heading represents a different area of expertise, having a general understanding of these areas adds value in many respects.

The section on controls and audits under the guide's heading "3.1.12 Authentication and Access Management" is quite useful for people working on IAM teams. Seeing the topics that internal or external auditors might ask about in the "Identity and Access Management" field, as listed in the audit section, is important for managing these kinds of audit processes more effectively.

These audit headings also serve not only as a checklist but as an important set of questions that the IAM team itself should ask annually in order to build a more value-adding "Identity and Access Management" process. A review like this makes it possible to determine what kind of improvements have been made under each heading.


## Controls

| **Control No.** | **Control Level** | **Control Name**                          | **Control Description**                                                                                                                                                          |
|--------------|-------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.1.12.1     | 1                 | Establishing and Enforcing an Access Control Policy | Access control policies must be established, enforced, and periodically checked for currency. User account operations and access requests must be tracked and logged as part of defined processes. |
| 3.1.12.2     | 1                 | Management of User Accounts         | A unique account must be defined for each user, and passwords must comply with security standards.                                                                     |
| 3.1.12.3     | 1                 | Managing Failed Sign-In Attempts | Appropriate security measures (rate limiting, IP blocking, CAPTCHA, etc.) must be taken to prevent sign-in attacks, and failed attempts must be logged. |
| 3.1.12.4     | 1                 | Changing Default Users and Passwords | Default usernames and passwords must not be used. Default users and passwords in test environments must be deleted or changed before going to production.  |
| 3.1.12.5     | 1                 | Use of Administrator Accounts         | System administrators must have separate accounts for operations requiring elevated privileges, and actions performed with these accounts must be tracked via audit logs.                   |
| 3.1.12.6     | 1                 | Terminating Idle Sessions | Idle sessions must be terminated after a certain period of inactivity.                                                                                                      |
| 3.1.12.7     | 1                 | Authentication                       | Authentication mechanisms must be used for access to organizational resources.                                                                                              |
| 3.1.12.8     | 1                 | Updating User Privileges    | The privileges of system administrators and users must be reviewed regularly, privileges must be updated when duties change, and unnecessary privileges must be revoked.       |
| 3.1.12.9     | 1                 | Remote Access by External Stakeholders  | Remote access by external stakeholders must not take place without the approval of organizational personnel, and security measures such as multi-factor authentication and access logging must be applied. |
| 3.1.12.10    | 2                 | Disabling Unused Accounts | All accounts that are unused or cannot be associated with anyone must be automatically disabled after a certain period of inactivity.                                           |
| 3.1.12.11    | 2                 | Operation of Administrator Accounts          | All administrator accounts must be managed with automated tools, and multi-factor authentication must be used. Administrator sign-in attempts must be logged.                |
| 3.1.12.12    | 2                 | Restricting Access to the Use of Scripting Languages | Access to scripting tools (PowerShell, Python, etc.) must be restricted to authorized accounts solely for business purposes.                             |
| 3.1.12.13    | 2                 | Maintaining an Inventory of Identity Management and Authentication Systems | An inventory of all of the organization's authentication systems and integrated applications must be maintained.                                                                                |
| 3.1.12.14    | 2                 | Centralized Authentication               | Authentication should be performed centrally; where a central system is not available, compensating controls should be applied based on a risk analysis.                              |
| 3.1.12.15    | 2                 | Enforcing Multi-Factor Authentication | Multi-factor authentication must be used for access to the organizational network from outside.                                                                                  |
| 3.1.12.16    | 2                 | Securely Storing Authentication Information | All authentication information must be stored using strong cryptographic algorithms and transmitted over encrypted channels.                                         |
| 3.1.12.17    | 2                 | Management of Service Accounts            | Service accounts must be created on the principle of least privilege and reviewed regularly. User accounts must not be used as service accounts.                |
| 3.1.12.18    | 3                 | Detecting Changes in Account Sign-In Behavior | User behavior must be monitored for signs of a security breach, and alerting mechanisms must be put in place.                                                              |
| 3.1.12.19    | 3                 | Maintaining Session Logs           | Sessions must be logged and verified on systems that process confidentiality-classified data.                                                              |
| 3.1.12.20    | 3                 | Security of System Administrator Duties | System administrators must only perform work that requires administrative privileges, and these privileges must be reviewed at least once a year.                                            |
| 3.1.12.21    | 3                 | Ensuring Data and Password Security  | An automated password management tool (password vault) must be used for data and password security.                                                                               |


## Audits


| **Control No.**  | **Control Name**                            | **Suggested Audit Methods**   | **Suggested Audit Questions**                                                                                                                                                           |
|----------------|-------------------------------------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.1.12.1       | Establishing and Enforcing an Access Control Policy | Interview, Review        | Are access control policies being established? What process is defined within the policy for managing user account operations and access requests?         |
| 3.1.12.2       | Management of User Accounts           | Interview, Security Audit     | Which information security controls are applied to the management of user accounts?                                                                                           |
| 3.1.12.3       | Managing Failed Sign-In Attempts | Interview, Penetration Test           | Which security measures are taken to prevent attacks on the sign-in mechanism? Are failed sign-in attempts logged?             |
| 3.1.12.4       | Changing Default Users and Passwords | Interview, Penetration Test           | Are default passwords of assets in the organization's information systems changed? Are default passwords changed during test activities? Are unused default accounts deleted? |
| 3.1.12.5       | Use of Administrator Accounts           | Interview, Penetration Test           | Do system administrators in the organization use a separate account for administrative operations? How do administrators access target devices?                                      |
| 3.1.12.6       | Terminating Idle Sessions | Interview, Penetration Test           | Are idle sessions terminated after a certain period of time?                                                                                                             |
| 3.1.12.7       | Authentication                         | Interview, Penetration Test           | Which authentication mechanisms are used for access to organizational resources?                                                                                                 |
| 3.1.12.8       | Updating User Privileges      | Interview, Review        | Are the privileges of system administrators and users reviewed at regular intervals? Is an inventory maintained of all accounts managed by the authentication system? Are accounts whose role has ended disabled? Has an automated process been established for this? Are access attempts to disabled accounts monitored and logged? |
| 3.1.12.9       | Remote Access by External Stakeholders    | Interview, Security Audit     | Which security controls are applied to remote access to organizational systems by external stakeholders?                                                                       |
| 3.1.12.10      | Disabling Unused Accounts | Interview, Security Audit     | Are all accounts that cannot be associated with a business process or organizational employee disabled?                                                                                 |
| 3.1.12.11      | Operation of Administrator Accounts            | Interview                       | Is an inventory of administrator accounts maintained in the organization? Is this done with automated tools? How is administrator account access carried out?                                  |
| 3.1.12.12      | Restricting Access to the Use of Scripting Languages | Interview, Security Audit     | Which users are granted permission to run scripts on organizational computers?                                                                                                   |
| 3.1.12.13      | Maintaining an Inventory of Identity Management and Authentication Systems | Interview, Review        | Is an inventory maintained of all the organization's identity providers, including those at local or remote service providers?                                               |
| 3.1.12.14      | Centralized Authentication                 | Interview, Security Audit, Penetration Test | Does the organization perform identity verification centrally wherever possible?                                                                                                     |
| 3.1.12.15      | Enforcing Multi-Factor Authentication   | Interview, Security Audit     | Are there any places where multi-factor authentication is not applied in the identity verification performed by the organization?                                                           |
| 3.1.12.16      | Securely Storing Authentication Information | Interview, Security Audit     | Which security measures are taken for storing authentication information? Is all of the organization's authentication information transmitted over encrypted channels? Have the measures taken been tested by authorized bodies? |
| 3.1.12.17      | Management of Service Accounts              | Interview, Security Audit     | How are access privileges for service accounts defined? How is the review process for service accounts carried out? Are user or privileged accounts used as service accounts? |
| 3.1.12.18      | Detecting Changes in Account Sign-In Behavior | Interview                       | Are user account sign-in behaviors monitored regularly? Are alerts generated in cases such as changes in user role and privilege level?                        |
| 3.1.12.19      | Maintaining Session Logs             | Interview, Security Audit     | Are activities carried out during sessions opened on systems that store/process confidentiality-classified data logged? How are the resulting logs verified? |
| 3.1.12.20      | Security of System Administrator Duties  | Interview, Security Audit     | Are all administrative duties performed via specific computers that are not used for non-administrative activities? Are privileges reviewed periodically?       |
| 3.1.12.21      | Ensuring Data and Password Security    | Interview, Penetration Test           | Is an automated password management tool (password vault) used for the security of data and passwords?                                                                                 |


<br>

<img src="/images/kimlik-ve-erisim-yonetimi-bilgi-ve-iletisim-guvenligi-rehberinden/bgrehbermavi1.png" alt="AltText">




# 3.2.3. Authorization

In the authorization section, we see that it consists of topics that form the foundation of "Identity and Access Management" activities.
The fact that this section specifically references applying the principle of least privilege shows just how valuable this concept is.


### Controls

| Control No. | Control Level | Control Name                                            | Control Description                                                                                      |
|------------|------------------|------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| 3.2.3.1    | 1                | Authorization Audit                                       | An authorization matrix defining users' access to the application must be established and updated at regular intervals. A user must only be able to access and use the application components and resources they are authorized for. Authorization checks must be enforced for every request made to the application. |
| 3.2.3.2    | 1                | Logging Access to Critical Data and Resources | The application must be able to generate audit logs in order to log access to the data and resources it manages. See Control No: 3.1.8.1                                       |
| 3.2.3.3    | 1                | Applying the Principle of Least Privilege                  | Privileges granted to users must be determined based on the tasks they perform and their actual needs. Under the principle of least privilege, no privilege beyond the minimum required for a user's relevant operations should be defined. |
| 3.2.3.4    | 3                | Context-Aware and Advanced Access Control          | The application must be able to perform context-aware access control (based on attributes such as time, location, IP address). The application must be able to restrict access durations, usage rates, or frequency of use for functions, resources, and data. |

### Audit Items

| Control No. | Control Name                                                | Suggested Audit Methods                     | Suggested Audit Questions                                                                                                                                       |
|------------|----------------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.2.3.1    | Authorization Audit                                           | Interview, Review, Penetration Test      | Has an authorization matrix defining access to applications been established, and is it updated at regular intervals? <br> Has an authorization mechanism been defined in the application that ensures users can only access the application components and resources relevant to them? <br> What kind of authorization mechanism has been defined in the application to prevent users from accessing other users' critical information? <br> Is an authorization check performed for every request that comes into the application? |
| 3.2.3.2    | Logging Access to Critical Data and Resources | Interview, Review, Penetration Test      | Are trace and audit logs generated for data flow and access to resources? What information do the logs contain? <br> Can the logs be queried from the user interface? <br> Can the logs be deleted or modified? <br> How long are the logs retained? |
| 3.2.3.3    | Applying the Principle of Least Privilege                      | Interview, Security Audit                | Are the privileges granted to users determined based on the tasks they perform and their actual needs?                                                                         |
| 3.2.3.4    | Context-Aware and Advanced Access Control              | Interview, Security Audit, Penetration Test   | Can authorizations in the application be restricted based on attributes such as time, location, network used, and IP address? <br> Can the application's authorization mechanism restrict access based on parameters such as access duration or frequency of use? <br> Can context-aware controls and authorizations be defined within the application's access control mechanism? |
