+++
title = 'Active Directory Attributes List'
date = 2026-05-28T11:00:30+03:00
draft = false
translationKey = 'active-directory-attribute-list'
+++ 



This page is a complete reference for Active Directory user attributes. The tables are organized by the tabs found in the Active Directory Users and Computers (ADUC) interface. Each table includes the friendly name, the LDAP attribute name, the attribute's **data type (Syntax)**, whether it is **multi-valued**, and a sample value. You can use this page as a reference when writing PowerShell scripts, building CSV imports, or configuring LDAP queries.

> The **Multi-Valued** column indicates whether the attribute can hold more than one value (for example, a user can have several "Other" phone numbers). **Syntax** is the attribute's data type in the AD schema (String, Integer, Integer8, Boolean, DN, etc.).

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

| Friendly Name             | LDAP Attribute Name        | Syntax | Multi-Valued | Example            |
|--------------------------|----------------------------|--------|--------------|--------------------|
| Name (RDN)               | cn                         | String | No           | John Smith         |
| First Name               | givenName                  | String | No           | John               |
| Initials                 | initials                   | String | No           | JS                 |
| Last Name                | sn                         | String | No           | Smith              |
| Display Name             | displayName                | String | No           | John Smith         |
| Description              | description                | String | No           | Sales Manager      |
| Office                   | physicalDeliveryOfficeName | String | No           | London Office      |
| Telephone Number         | telephoneNumber            | String | No           | 949-555-1234       |
| Telephone Number (Other) | otherTelephone             | String | Yes          | 949-555-1234       |
| Email                    | mail                       | String | No           | jsmith@company.com |
| Web Page                 | wWWHomePage                | String | No           | www.company.com    |
| Web Page (Other)         | url                        | String | Yes          | www.company.com/team |


![active directory general](/images/active-directory-attribute/ldap-mapping-1a.webp)

---

### Address Tab

| Friendly Name         | LDAP Attribute Name | Syntax  | Multi-Valued | Example         |
|----------------------|---------------------|---------|--------------|-----------------|
| Street               | streetAddress       | String  | No           | 123 Main Street |
| P.O. Box             | postOfficeBox       | String  | Yes          | PO Box 456      |
| City                 | l                   | String  | No           | Los Angeles     |
| State/Province       | st                  | String  | No           | California      |
| Zip/Postal Code      | postalCode          | String  | No           | 90210           |
| Country              | co                  | String  | No           | United States   |
| Country Abbreviation | c                   | String  | No           | US              |
| Country Code         | countryCode         | Integer | No           | 840             |

![active directory address](/images/active-directory-attribute/ldap-mapping-2.jpg)


---

### Account Tab

| Friendly Name                               | LDAP Attribute Name | Syntax   | Multi-Valued | Example            |
|---------------------------------------------|---------------------|----------|--------------|--------------------|
| User Logon Name                             | userPrincipalName   | String   | No           | jsmith@company.com |
| User Logon Name (Pre-Windows 2000)          | sAMAccountName      | String   | No           | jsmith             |
| Account Expires                             | accountExpires      | Integer8 | No           | 12/31/2026         |
| Logon Hours                                 | logonHours          | Binary   | No           | —                  |
| Log On To (Workstations)                    | userWorkstations    | String   | Yes          | PC01, PC02         |
| Account Is Disabled                         | userAccountControl  | Integer  | No           | 514                |
| Account Is Locked                           | lockoutTime         | Integer8 | No           | —                  |
| User Must Change Password at Next Logon     | pwdLastSet          | Integer8 | No           | 0                  |
| Password Never Expires                      | userAccountControl  | Integer  | No           | 66048              |
| User Cannot Change Password                 | userAccountControl  | Integer  | No           | 68                 |
| Store Password Using Reversible Encryption  | userAccountControl  | Integer  | No           | 128                |

![active directory account](/images/active-directory-attribute/ldap-mapping-3.jpg)


---

### Profile Tab

| Friendly Name                | LDAP Attribute Name | Syntax | Multi-Valued | Example                  |
|-----------------------------|------------------|--------|--------------|--------------------------|
| Profile Path                | profilePath      | String | No           | \\server\profiles\jsmith |
| Logon Script                | scriptPath       | String | No           | logon.bat                |
| Home Folder (Local Path)    | homeDirectory    | String | No           | C:\Users\jsmith          |
| Home Folder (Connect Drive) | homeDrive        | String | No           | H:                       |
| Home Folder (To Path)       | homeDirectory    | String | No           | \\server\home\jsmith     |

![active directory profile](/images/active-directory-attribute/ldap-mapping-4.jpg)

---

### Telephones Tab

| Friendly Name           | LDAP Attribute Name           | Syntax | Multi-Valued | Example      |
|-------------------------|-------------------------------|--------|--------------|--------------|
| Home Phone              | homePhone                     | String | No           | 949-555-5678 |
| Home Phone (Other)      | otherHomePhone                | String | Yes          | 949-555-5678 |
| Mobile                  | mobile                        | String | No           | 949-555-9999 |
| Mobile (Other)          | otherMobile                   | String | Yes          | 949-555-9999 |
| Pager                   | pager                         | String | No           | 949-555-0000 |
| Pager (Other)           | otherPager                    | String | Yes          | 949-555-0000 |
| Fax                     | facsimileTelephoneNumber      | String | No           | 949-555-1111 |
| Fax (Other)             | otherFacsimileTelephoneNumber | String | Yes          | 949-555-1111 |
| IP Phone                | ipPhone                       | String | No           | 5001         |
| IP Phone (Other)        | otherIpPhone                  | String | Yes          | 5002         |
| Notes                   | info                          | String | No           | Free-form note |

![active directory phone](/images/active-directory-attribute/ldap-mapping-5.jpg)
---

### Organization Tab

| Friendly Name      | LDAP Attribute Name | Syntax | Multi-Valued | Example                             |
|--------------------|---------------------|--------|--------------|-------------------------------------|
| Title              | title               | String | No           | IT Manager                          |
| Department         | department          | String | No           | Information Technology              |
| Company            | company             | String | No           | Contoso Ltd                         |
| Manager            | manager             | DN     | No           | CN=Jane Doe,OU=IT,DC=company,DC=com |
| Direct Reports     | directReports       | DN     | Yes          | —                                   |
| Employee ID        | employeeID          | String | No           | EMP001                              |
| Employee Number    | employeeNumber      | String | No           | 12345                               |
| Employee Type      | employeeType        | String | No           | Full-Time                           |
| Division           | division            | String | No           | North America                       |

![active directory organization](/images/active-directory-attribute/ldap-mapping-6.jpg)
---

### Exchange / Email

| Friendly Name           | LDAP Attribute Name        | Syntax  | Multi-Valued | Example                                          |
|-------------------------|----------------------------|---------|--------------|------------------------------------------------|
| Email Addresses (Proxy) | proxyAddresses             | String  | Yes          | SMTP:jsmith@company.com                        |
| Alias                   | mailNickname               | String  | No           | jsmith                                         |
| Hide from Address List  | msExchHideFromAddressLists | Boolean | No           | TRUE                                           |
| Target Address          | targetAddress              | String  | No           | SMTP:jsmith@company.mail.onmicrosoft.com       |
| Legacy Exchange DN      | legacyExchangeDN           | String  | No           | /o=Company/ou=Exchange/cn=Recipients/cn=jsmith |

---

### Password / Security

| Friendly Name             | LDAP Attribute Name | Syntax          | Multi-Valued | Example            |
|---------------------------|---------------------|-----------------|--------------|--------------------|
| Password Last Set         | pwdLastSet          | Integer8        | No           | 133500000000000000 |
| Last Bad Password Attempt | badPasswordTime     | Integer8        | No           | 133500000000000000 |
| Bad Password Count        | badPwdCount         | Integer         | No           | 3                  |
| Last Logon                | lastLogon           | Integer8        | No           | 133500000000000000 |
| Last Logon (Replicated)   | lastLogonTimestamp  | Integer8        | No           | 133500000000000000 |
| Logon Count               | logonCount          | Integer         | No           | 487                |
| When Created              | whenCreated         | GeneralizedTime | No           | 1/15/2024          |
| When Changed              | whenChanged         | GeneralizedTime | No           | 4/10/2026          |
| SID                       | objectSid           | Octet String    | No           | S-1-5-21-…         |
| SID History               | sidHistory          | Octet String    | Yes          | —                  |

---

### Extension Attributes

| Friendly Name          | LDAP Attribute Name  | Syntax | Multi-Valued | Example      |
|------------------------|----------------------|--------|--------------|--------------|
| Extension Attribute 1  | extensionAttribute1  | String | No           | Custom Value |
| Extension Attribute 2  | extensionAttribute2  | String | No           | Custom Value |
| Extension Attribute 3  | extensionAttribute3  | String | No           | Custom Value |
| Extension Attribute 4  | extensionAttribute4  | String | No           | Custom Value |
| Extension Attribute 5  | extensionAttribute5  | String | No           | Custom Value |
| Extension Attribute 6  | extensionAttribute6  | String | No           | Custom Value |
| Extension Attribute 7  | extensionAttribute7  | String | No           | Custom Value |
| Extension Attribute 8  | extensionAttribute8  | String | No           | Custom Value |
| Extension Attribute 9  | extensionAttribute9  | String | No           | Custom Value |
| Extension Attribute 10 | extensionAttribute10 | String | No           | Custom Value |
| Extension Attribute 11 | extensionAttribute11 | String | No           | Custom Value |
| Extension Attribute 12 | extensionAttribute12 | String | No           | Custom Value |
| Extension Attribute 13 | extensionAttribute13 | String | No           | Custom Value |
| Extension Attribute 14 | extensionAttribute14 | String | No           | Custom Value |
| Extension Attribute 15 | extensionAttribute15 | String | No           | Custom Value |

---

## Downloadable Resource

You can download the Excel table of the attributes above, organized by ADUC tab, LDAP provider name, WinNT provider name, Syntax, and multi-valued flag:

📥 **[ADUCProperties.xls — Active Directory User Attributes Table](/files/ADUCProperties.xls)**

> Source: the classic "ADUC Properties" reference table compiled by Richard L. Mueller (Hilltop Lab).

---
