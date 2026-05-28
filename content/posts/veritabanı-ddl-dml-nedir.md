+++
title = 'Active Directory Attributes List'
date = 2026-05-27T16:36:30+03:00
draft = true
+++


> **Kaynak:** [activedirectorypro.com](https://activedirectorypro.com/how-to-view-user-attributes-in-active-directory/)  
> **Son Güncelleme:** 16 Nisan 2026 — Matt Roberts

Bu sayfa, Active Directory kullanıcı niteliklerinin (attributes) eksiksiz bir referansıdır. Tablolar, Active Directory Users and Computers (ADUC) arayüzündeki sekmelere göre düzenlenmiştir. Her tablo; kullanıcı dostu adı, LDAP nitelik adını ve örnek bir değeri içerir. PowerShell betikleri yazarken, CSV içe aktarmaları oluştururken veya LDAP sorguları yapılandırırken bu sayfayı referans olarak kullanabilirsiniz.

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
- [ADUC ile Kullanıcı Niteliklerini Görüntüleme](#aduc-ile-kullanıcı-niteliklerini-görüntüleme)

---

## Nitelik Listesi

### General (Genel) Sekmesi

| Kullanıcı Dostu Ad       | LDAP Nitelik Adı           | Örnek              |
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

---

### Address (Adres) Sekmesi

| Kullanıcı Dostu Ad   | LDAP Nitelik Adı    | Örnek           |
|----------------------|---------------------|-----------------|
| Street               | streetAddress       | 123 Main Street |
| P.O. Box             | postOfficeBox       | PO Box 456      |
| City                 | l                   | Los Angeles     |
| State/Province       | st                  | California      |
| Zip/Postal Code      | postalCode          | 90210           |
| Country              | co                  | United States   |
| Country Abbreviation | c                   | US              |
| Country Code         | countryCode         | 840             |

---

### Account (Hesap) Sekmesi

| Kullanıcı Dostu Ad                      | LDAP Nitelik Adı    | Örnek              |
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

---

### Profile (Profil) Sekmesi

| Kullanıcı Dostu Ad          | LDAP Nitelik Adı | Örnek                    |
|-----------------------------|------------------|--------------------------|
| Profile Path                | profilePath      | \\server\profiles\jsmith |
| Logon Script                | scriptPath       | logon.bat                |
| Home Folder (Local Path)    | homeDirectory    | C:\Users\jsmith          |
| Home Folder (Connect Drive) | homeDrive        | H:                       |
| Home Folder (To Path)       | homeDirectory    | \\server\home\jsmith     |

---

### Telephones (Telefonlar) Sekmesi

| Kullanıcı Dostu Ad | LDAP Nitelik Adı         | Örnek        |
|--------------------|--------------------------|--------------|
| Home Phone         | homePhone                | 949-555-5678 |
| Mobile             | mobile                   | 949-555-9999 |
| Pager              | pager                    | 949-555-0000 |
| Fax                | facsimileTelephoneNumber | 949-555-1111 |
| IP Phone           | ipPhone                  | 5001         |

---

### Organization (Organizasyon) Sekmesi

| Kullanıcı Dostu Ad | LDAP Nitelik Adı    | Örnek                               |
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

---

### Exchange / E-posta

| Kullanıcı Dostu Ad      | LDAP Nitelik Adı           | Örnek                                          |
|-------------------------|----------------------------|------------------------------------------------|
| Email Addresses (Proxy) | proxyAddresses             | SMTP:jsmith@company.com                        |
| Alias                   | mailNickname               | jsmith                                         |
| Hide from Address List  | msExchHideFromAddressLists | TRUE                                           |
| Target Address          | targetAddress              | SMTP:jsmith@company.mail.onmicrosoft.com       |
| Legacy Exchange DN      | legacyExchangeDN           | /o=Company/ou=Exchange/cn=Recipients/cn=jsmith |

---

### Password / Security (Parola / Güvenlik)

| Kullanıcı Dostu Ad        | LDAP Nitelik Adı    | Örnek              |
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

### Extension Attributes (Uzantı Nitelikleri)

| Kullanıcı Dostu Ad     | LDAP Nitelik Adı     | Örnek        |
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

## ADUC ile Kullanıcı Niteliklerini Görüntüleme

Active Directory Users and Computers (ADUC) üzerinden kullanıcı niteliklerini görüntülemek için aşağıdaki adımları izleyin.

### Adım 1 — ADUC'u Açın

`dsa.msc` komutunu çalıştırarak veya Başlat menüsünden **Active Directory Users and Computers** uygulamasını açın.

### Adım 2 — Advanced Features (Gelişmiş Özellikler) Seçeneğini Etkinleştirin

Menü çubuğundan **View > Advanced Features** seçeneğine tıklayın.

> Bu ayar kalıcıdır; ADUC'u her açtığınızda yeniden etkinleştirmenize gerek yoktur.

### Adım 3 — Attribute Editor (Nitelik Düzenleyici) Sekmesini Açın

Gelişmiş özellikler etkinleştirildikten sonra herhangi bir kullanıcı hesabını açın ve **Attribute Editor** sekmesine tıklayın. Bu sekme, söz konusu kullanıcı hesabına ait tüm nitelikleri listeler.

> Boş niteliklerin görünmesini istemiyorsanız **Filter > Show only attributes that have values** seçeneğini kullanın. Bu seçenek, listelenen nitelik sayısını önemli ölçüde azaltır.

---

*Kaynak: [Active Directory Pro](https://activedirectorypro.com/how-to-view-user-attributes-in-active-directory/)*