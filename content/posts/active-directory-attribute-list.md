+++
title = 'Active Directory Attributes List'
date = 2026-05-28T11:00:30+03:00
draft = false
translationKey = 'active-directory-attribute-list'
+++ 



Bu sayfa, Active Directory kullanıcı niteliklerinin (attributes) eksiksiz bir referansıdır. Tablolar, Active Directory Users and Computers (ADUC) arayüzündeki sekmelere göre düzenlenmiştir. Her tablo; kullanıcı dostu adı, LDAP nitelik adını, niteliğin **veri tipini (Syntax)**, **çok değerli (multi-valued)** olup olmadığını ve örnek bir değeri içerir. PowerShell betikleri yazarken, CSV içe aktarmaları oluştururken veya LDAP sorguları yapılandırırken bu sayfayı referans olarak kullanabilirsiniz.

> **Çok Değerli** sütunu, niteliğin birden fazla değer tutabildiğini gösterir (örneğin bir kullanıcının birden çok "Other" telefon numarası olabilir). **Syntax**, niteliğin AD şemasındaki veri tipidir (String, Integer, Integer8, Boolean, DN vb.).

---

## İçindekiler

- [Nitelik Listesi](#nitelik-listesi)
  - [General (Genel) Sekmesi](#general-genel-sekmesi)
  - [Address (Adres) Sekmesi](#address-adres-sekmesi)
  - [Account (Hesap) Sekmesi](#account-hesap-sekmesi)
  - [Profile (Profil) Sekmesi](#profile-profil-sekmesi)
  - [Telephones (Telefonlar) Sekmesi](#telephones-telefonlar-sekmesi)
  - [Organization (Organizasyon) Sekmesi](#organization-organizasyon-sekmesi)
  - [Exchange / E-posta](#exchange--e-posta)
  - [Password / Security (Parola / Güvenlik)](#password--security-parola--güvenlik)
  - [Extension Attributes (Uzantı Nitelikleri)](#extension-attributes-uzantı-nitelikleri)


---

## Nitelik Listesi

### General (Genel) Sekmesi

| Kullanıcı Dostu Ad       | LDAP Nitelik Adı           | Syntax | Çok Değerli | Örnek              |
|--------------------------|----------------------------|--------|-------------|--------------------|
| Name (RDN)               | cn                         | String | Hayır       | John Smith         |
| First Name               | givenName                  | String | Hayır       | John               |
| Initials                 | initials                   | String | Hayır       | JS                 |
| Last Name                | sn                         | String | Hayır       | Smith              |
| Display Name             | displayName                | String | Hayır       | John Smith         |
| Description              | description                | String | Hayır       | Sales Manager      |
| Office                   | physicalDeliveryOfficeName | String | Hayır       | London Office      |
| Telephone Number         | telephoneNumber            | String | Hayır       | 949-555-1234       |
| Telephone Number (Other) | otherTelephone             | String | Evet        | 949-555-1234       |
| Email                    | mail                       | String | Hayır       | jsmith@company.com |
| Web Page                 | wWWHomePage                | String | Hayır       | www.company.com    |
| Web Page (Other)         | url                        | String | Evet        | www.company.com/ekip |


![active directory general](/images/active-directory-attribute/ldap-mapping-1a.webp)

---

### Address (Adres) Sekmesi

| Kullanıcı Dostu Ad   | LDAP Nitelik Adı    | Syntax  | Çok Değerli | Örnek           |
|----------------------|---------------------|---------|-------------|-----------------|
| Street               | streetAddress       | String  | Hayır       | 123 Main Street |
| P.O. Box             | postOfficeBox       | String  | Evet        | PO Box 456      |
| City                 | l                   | String  | Hayır       | Los Angeles     |
| State/Province       | st                  | String  | Hayır       | California      |
| Zip/Postal Code      | postalCode          | String  | Hayır       | 90210           |
| Country              | co                  | String  | Hayır       | United States   |
| Country Abbreviation | c                   | String  | Hayır       | US              |
| Country Code         | countryCode         | Integer | Hayır       | 840             |

![active directory adres](/images/active-directory-attribute/ldap-mapping-2.jpg)


---

### Account (Hesap) Sekmesi

| Kullanıcı Dostu Ad                          | LDAP Nitelik Adı    | Syntax   | Çok Değerli | Örnek              |
|---------------------------------------------|---------------------|----------|-------------|--------------------|
| User Logon Name                             | userPrincipalName   | String   | Hayır       | jsmith@company.com |
| User Logon Name (Pre-Windows 2000)          | sAMAccountName      | String   | Hayır       | jsmith             |
| Account Expires                             | accountExpires      | Integer8 | Hayır       | 12/31/2026         |
| Logon Hours                                 | logonHours          | Binary   | Hayır       | —                  |
| Log On To (Workstations)                    | userWorkstations    | String   | Evet        | PC01, PC02         |
| Account Is Disabled                         | userAccountControl  | Integer  | Hayır       | 514                |
| Account Is Locked                           | lockoutTime         | Integer8 | Hayır       | —                  |
| User Must Change Password at Next Logon     | pwdLastSet          | Integer8 | Hayır       | 0                  |
| Password Never Expires                      | userAccountControl  | Integer  | Hayır       | 66048              |
| User Cannot Change Password                 | userAccountControl  | Integer  | Hayır       | 68                 |
| Store Password Using Reversible Encryption  | userAccountControl  | Integer  | Hayır       | 128                |

![active directory account](/images/active-directory-attribute/ldap-mapping-3.jpg)


---

### Profile (Profil) Sekmesi

| Kullanıcı Dostu Ad          | LDAP Nitelik Adı | Syntax | Çok Değerli | Örnek                    |
|-----------------------------|------------------|--------|-------------|--------------------------|
| Profile Path                | profilePath      | String | Hayır       | \\server\profiles\jsmith |
| Logon Script                | scriptPath       | String | Hayır       | logon.bat                |
| Home Folder (Local Path)    | homeDirectory    | String | Hayır       | C:\Users\jsmith          |
| Home Folder (Connect Drive) | homeDrive        | String | Hayır       | H:                       |
| Home Folder (To Path)       | homeDirectory    | String | Hayır       | \\server\home\jsmith     |

![active directory profile](/images/active-directory-attribute/ldap-mapping-4.jpg)

---

### Telephones (Telefonlar) Sekmesi

| Kullanıcı Dostu Ad      | LDAP Nitelik Adı              | Syntax | Çok Değerli | Örnek        |
|-------------------------|-------------------------------|--------|-------------|--------------|
| Home Phone              | homePhone                     | String | Hayır       | 949-555-5678 |
| Home Phone (Other)      | otherHomePhone                | String | Evet        | 949-555-5678 |
| Mobile                  | mobile                        | String | Hayır       | 949-555-9999 |
| Mobile (Other)          | otherMobile                   | String | Evet        | 949-555-9999 |
| Pager                   | pager                         | String | Hayır       | 949-555-0000 |
| Pager (Other)           | otherPager                    | String | Evet        | 949-555-0000 |
| Fax                     | facsimileTelephoneNumber      | String | Hayır       | 949-555-1111 |
| Fax (Other)             | otherFacsimileTelephoneNumber | String | Evet        | 949-555-1111 |
| IP Phone                | ipPhone                       | String | Hayır       | 5001         |
| IP Phone (Other)        | otherIpPhone                  | String | Evet        | 5002         |
| Notes                   | info                          | String | Hayır       | Serbest metin not |

![active directory phone](/images/active-directory-attribute/ldap-mapping-5.jpg)
---

### Organization (Organizasyon) Sekmesi

| Kullanıcı Dostu Ad | LDAP Nitelik Adı    | Syntax | Çok Değerli | Örnek                               |
|--------------------|---------------------|--------|-------------|-------------------------------------|
| Title              | title               | String | Hayır       | IT Manager                          |
| Department         | department          | String | Hayır       | Information Technology              |
| Company            | company             | String | Hayır       | Contoso Ltd                         |
| Manager            | manager             | DN     | Hayır       | CN=Jane Doe,OU=IT,DC=company,DC=com |
| Direct Reports     | directReports       | DN     | Evet        | —                                   |
| Employee ID        | employeeID          | String | Hayır       | EMP001                              |
| Employee Number    | employeeNumber      | String | Hayır       | 12345                               |
| Employee Type      | employeeType        | String | Hayır       | Full-Time                           |
| Division           | division            | String | Hayır       | North America                       |

![active directory organization](/images/active-directory-attribute/ldap-mapping-6.jpg)
---

### Exchange / E-posta

| Kullanıcı Dostu Ad      | LDAP Nitelik Adı           | Syntax  | Çok Değerli | Örnek                                          |
|-------------------------|----------------------------|---------|-------------|------------------------------------------------|
| Email Addresses (Proxy) | proxyAddresses             | String  | Evet        | SMTP:jsmith@company.com                        |
| Alias                   | mailNickname               | String  | Hayır       | jsmith                                         |
| Hide from Address List  | msExchHideFromAddressLists | Boolean | Hayır       | TRUE                                           |
| Target Address          | targetAddress              | String  | Hayır       | SMTP:jsmith@company.mail.onmicrosoft.com       |
| Legacy Exchange DN      | legacyExchangeDN           | String  | Hayır       | /o=Company/ou=Exchange/cn=Recipients/cn=jsmith |

---

### Password / Security (Parola / Güvenlik)

| Kullanıcı Dostu Ad        | LDAP Nitelik Adı    | Syntax          | Çok Değerli | Örnek              |
|---------------------------|---------------------|-----------------|-------------|--------------------|
| Password Last Set         | pwdLastSet          | Integer8        | Hayır       | 133500000000000000 |
| Last Bad Password Attempt | badPasswordTime     | Integer8        | Hayır       | 133500000000000000 |
| Bad Password Count        | badPwdCount         | Integer         | Hayır       | 3                  |
| Last Logon                | lastLogon           | Integer8        | Hayır       | 133500000000000000 |
| Last Logon (Replicated)   | lastLogonTimestamp  | Integer8        | Hayır       | 133500000000000000 |
| Logon Count               | logonCount          | Integer         | Hayır       | 487                |
| When Created              | whenCreated         | GeneralizedTime | Hayır       | 1/15/2024          |
| When Changed              | whenChanged         | GeneralizedTime | Hayır       | 4/10/2026          |
| SID                       | objectSid           | Octet String    | Hayır       | S-1-5-21-…         |
| SID History               | sidHistory          | Octet String    | Evet        | —                  |

---

### Extension Attributes (Uzantı Nitelikleri)

| Kullanıcı Dostu Ad     | LDAP Nitelik Adı     | Syntax | Çok Değerli | Örnek        |
|------------------------|----------------------|--------|-------------|--------------|
| Extension Attribute 1  | extensionAttribute1  | String | Hayır       | Custom Value |
| Extension Attribute 2  | extensionAttribute2  | String | Hayır       | Custom Value |
| Extension Attribute 3  | extensionAttribute3  | String | Hayır       | Custom Value |
| Extension Attribute 4  | extensionAttribute4  | String | Hayır       | Custom Value |
| Extension Attribute 5  | extensionAttribute5  | String | Hayır       | Custom Value |
| Extension Attribute 6  | extensionAttribute6  | String | Hayır       | Custom Value |
| Extension Attribute 7  | extensionAttribute7  | String | Hayır       | Custom Value |
| Extension Attribute 8  | extensionAttribute8  | String | Hayır       | Custom Value |
| Extension Attribute 9  | extensionAttribute9  | String | Hayır       | Custom Value |
| Extension Attribute 10 | extensionAttribute10 | String | Hayır       | Custom Value |
| Extension Attribute 11 | extensionAttribute11 | String | Hayır       | Custom Value |
| Extension Attribute 12 | extensionAttribute12 | String | Hayır       | Custom Value |
| Extension Attribute 13 | extensionAttribute13 | String | Hayır       | Custom Value |
| Extension Attribute 14 | extensionAttribute14 | String | Hayır       | Custom Value |
| Extension Attribute 15 | extensionAttribute15 | String | Hayır       | Custom Value |

---

## İndirilebilir Kaynak

Yukarıdaki niteliklerin ADUC sekmelerine, LDAP sağlayıcı adlarına, WinNT sağlayıcı adlarına, Syntax ve çok-değerli bilgisine göre düzenlenmiş Excel tablosunu indirebilirsiniz:

📥 **[ADUCProperties.xls — Active Directory Kullanıcı Nitelikleri Tablosu](/files/ADUCProperties.xls)**

> Kaynak: Richard L. Mueller (Hilltop Lab) tarafından hazırlanan klasik "ADUC Properties" referans tablosu.

---
