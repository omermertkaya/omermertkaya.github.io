+++
title = 'Active Directory Attributes List'
date = 2026-05-28T11:00:30+03:00
draft = false
translationKey = 'active-directory-attribute-list'
+++ 



This page is a complete reference for Active Directory user attributes. The tables are organized by the tabs found in the Active Directory Users and Computers (ADUC) interface. Each table includes the friendly name, the LDAP attribute name, and a sample value. You can use this page as a reference when writing PowerShell scripts, building CSV imports, or configuring LDAP queries.

---

## Table of Contents

- [Attribute List](#attribute-list)
  - [General Tab](#general-tab)
  - [Address Tab](#address-tab)
  - [Account Tab](#account-tab)
  - [Profile Tab](#profile-tab)
  - [Telephones Tab](#telephones-tab)
  - [Organization Tab](#organization-tab)
  - [Exchange / Email](#exchange--email)
  - [Password / Security](#password--security)
  - [Extension Attributes](#extension-attributes)


---

## Attribute List

### General Tab

| Friendly Name             | LDAP Attribute Name        | Example            |
|--------------------------|----------------------------|--------------------|
| First Name               | givenName                  | John               |
| Initials                 | initials                   | JS                 |
| Last Name                | sn                         | Smith              |
| Display Name             | displayName                | John Smith         |
| Description              | description                | Sales Manager      |
| Office                   | physicalDeliveryOfficeName | London Office      |
| Telephone Number         | telephoneNumber            | 949-555-1234       |
| Telephone Number (Other) | otherTelephone             | 949-555-1234       |
| Email                    | mail                       | jsmith@company.com |
| Web Page                 | wWWHomePage                | www.company.com    |


![active directory general](/images/active-directory-attribute/ldap-mapping-1a.webp)

---

### Address Tab

| Friendly Name         | LDAP Attribute Name | Example         |
|----------------------|---------------------|-----------------|
| Street               | streetAddress       | 123 Main Street |
| P.O. Box             | postOfficeBox       | PO Box 456      |
| City                 | l                   | Los Angeles     |
| State/Province       | st                  | California      |
| Zip/Postal Code      | postalCode          | 90210           |
| Country              | co                  | United States   |
| Country Abbreviation | c                   | US              |
| Country Code         | countryCode         | 840             |

![active directory address](/images/active-directory-attribute/ldap-mapping-2.jpg)


---

### Account Tab

| Friendly Name                            | LDAP Attribute Name | Example            |
|-----------------------------------------|---------------------|--------------------|
| User Logon Name                         | userPrincipalName   | jsmith@company.com |
| User Logon Name (Pre-Windows 2000)      | sAMAccountName      | jsmith             |
| Account Expires                         | accountExpires      | 12/31/2026         |
| Logon Hours                             | logonHours          | —                  |
| Log On To (Workstations)                | userWorkstations    | PC01, PC02         |
| Account Is Disabled                     | userAccountControl  | 514                |
| Account Is Locked                       | lockoutTime         | —                  |
| User Must Change Password at Next Logon | pwdLastSet          | 0                  |
| Password Never Expires                  | userAccountControl  | 66048              |
| User Cannot Change Password             | userAccountControl  | 68                 |

![active directory account](/images/active-directory-attribute/ldap-mapping-3.jpg)


---

### Profile Tab

| Friendly Name                | LDAP Attribute Name | Example                  |
|-----------------------------|------------------|--------------------------|
| Profile Path                | profilePath      | \\server\profiles\jsmith |
| Logon Script                | scriptPath       | logon.bat                |
| Home Folder (Local Path)    | homeDirectory    | C:\Users\jsmith          |
| Home Folder (Connect Drive) | homeDrive        | H:                       |
| Home Folder (To Path)       | homeDirectory    | \\server\home\jsmith     |

![active directory profile](/images/active-directory-attribute/ldap-mapping-4.jpg)

---

### Telephones Tab

| Friendly Name      | LDAP Attribute Name      | Example      |
|--------------------|--------------------------|--------------|
| Home Phone         | homePhone                | 949-555-5678 |
| Mobile             | mobile                   | 949-555-9999 |
| Pager              | pager                    | 949-555-0000 |
| Fax                | facsimileTelephoneNumber | 949-555-1111 |
| IP Phone           | ipPhone                  | 5001         |

![active directory phone](/images/active-directory-attribute/ldap-mapping-5.jpg)
---

### Organization Tab

| Friendly Name      | LDAP Attribute Name | Example                             |
|--------------------|---------------------|-------------------------------------|
| Title              | title               | IT Manager                          |
| Department         | department          | Information Technology              |
| Company            | company             | Contoso Ltd                         |
| Manager            | manager             | CN=Jane Doe,OU=IT,DC=company,DC=com |
| Direct Reports     | directReports       | —                                   |
| Employee ID        | employeeID          | EMP001                              |
| Employee Number    | employeeNumber      | 12345                               |
| Employee Type      | employeeType        | Full-Time                           |
| Division           | division            | North America                       |

![active directory organization](/images/active-directory-attribute/ldap-mapping-6.jpg)
---

### Exchange / Email

| Friendly Name           | LDAP Attribute Name        | Example                                          |
|-------------------------|----------------------------|------------------------------------------------|
| Email Addresses (Proxy) | proxyAddresses             | SMTP:jsmith@company.com                        |
| Alias                   | mailNickname               | jsmith                                         |
| Hide from Address List  | msExchHideFromAddressLists | TRUE                                           |
| Target Address          | targetAddress              | SMTP:jsmith@company.mail.onmicrosoft.com       |
| Legacy Exchange DN      | legacyExchangeDN           | /o=Company/ou=Exchange/cn=Recipients/cn=jsmith |

---

### Password / Security

| Friendly Name             | LDAP Attribute Name | Example              |
|---------------------------|---------------------|--------------------|
| Password Last Set         | pwdLastSet          | 133500000000000000 |
| Last Bad Password Attempt | badPasswordTime     | 133500000000000000 |
| Bad Password Count        | badPwdCount         | 3                  |
| Last Logon                | lastLogon           | 133500000000000000 |
| Last Logon (Replicated)   | lastLogonTimestamp  | 133500000000000000 |
| Logon Count               | logonCount          | 487                |
| When Created              | whenCreated         | 1/15/2024          |
| When Changed              | whenChanged         | 4/10/2026          |
| SID                       | objectSid           | S-1-5-21-…         |
| SID History               | sidHistory          | —                  |

---

### Extension Attributes

| Friendly Name          | LDAP Attribute Name  | Example      |
|------------------------|----------------------|--------------|
| Extension Attribute 1  | extensionAttribute1  | Custom Value |
| Extension Attribute 2  | extensionAttribute2  | Custom Value |
| Extension Attribute 3  | extensionAttribute3  | Custom Value |
| Extension Attribute 4  | extensionAttribute4  | Custom Value |
| Extension Attribute 5  | extensionAttribute5  | Custom Value |
| Extension Attribute 6  | extensionAttribute6  | Custom Value |
| Extension Attribute 7  | extensionAttribute7  | Custom Value |
| Extension Attribute 8  | extensionAttribute8  | Custom Value |
| Extension Attribute 9  | extensionAttribute9  | Custom Value |
| Extension Attribute 10 | extensionAttribute10 | Custom Value |
| Extension Attribute 11 | extensionAttribute11 | Custom Value |
| Extension Attribute 12 | extensionAttribute12 | Custom Value |
| Extension Attribute 13 | extensionAttribute13 | Custom Value |
| Extension Attribute 14 | extensionAttribute14 | Custom Value |
| Extension Attribute 15 | extensionAttribute15 | Custom Value |

---
