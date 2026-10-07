+++
title = 'Active Directory Grup Nitelikleri (Group Attributes) Listesi'
date = 2026-10-07T11:00:00+03:00
draft = false
translationKey = 'active-directory-group-attributes'
tags = ['Active Directory', 'LDAP', 'Attributes']
+++

Bu sayfa, Active Directory **grup nesnelerinin** (group objects) niteliklerini (attributes) Windows Server 2008 "Active Directory Users and Computers" (ADUC) arayüzündeki sekmelere göre eşleştiren bir referanstır. Her bölümde önce ilgili sekmenin ekran görüntüsü, ardından o sekmedeki alanların hangi LDAP niteliğine karşılık geldiği tablo halinde yer alır. PowerShell betikleri yazarken, LDAP sorguları hazırlarken veya IAM/provizyon entegrasyonlarında grup eşlemesi yaparken kullanabilirsiniz.

Kullanıcı nesneleri için aynı çalışmayı [Active Directory Attributes List](/posts/active-directory-attribute-list/) yazısında bulabilirsiniz.

> Kaynak ve görseller: [SelfADSI – Attributes for AD Groups (Windows 2008)](http://www.selfadsi.org/group-attributes-w2k8.htm)

---

## İçindekiler

- [General (Genel) Sekmesi](#general-genel-sekmesi)
- [Members (Üyeler) Sekmesi](#members-üyeler-sekmesi)
- [Member Of (Üye Olduğu Gruplar) Sekmesi](#member-of-üye-olduğu-gruplar-sekmesi)
- [Managed By (Yöneten) Sekmesi](#managed-by-yöneten-sekmesi)
- [Object (Nesne) Sekmesi](#object-nesne-sekmesi)
- [Security (Güvenlik) Sekmesi](#security-güvenlik-sekmesi)
- [Attribute Editor (Nitelik Düzenleyici) Sekmesi](#attribute-editor-nitelik-düzenleyici-sekmesi)

---

### General (Genel) Sekmesi

| Arayüzdeki Alan                  | LDAP Nitelik Adı    | Açıklama                                                                 |
|----------------------------------|---------------------|--------------------------------------------------------------------------|
| Grup simgesi (nesne sınıfı)      | objectClass         | Nesnenin sınıfı (`group`)                                                |
| Grup simgesi (nesne kategorisi)  | objectCategory      | Nesnenin kategorisi (şemadaki `Group` sınıfına işaret eder)              |
| Grup adı (başlık)                | distinguishedName   | Nesnenin dizindeki tam yolu (ör. `CN=LEXDev,CN=Users,DC=...`)            |
| Grup adı (başlık)                | cn                  | Common Name                                                              |
| Grup adı (başlık)                | name                | RDN (Relative Distinguished Name) değeri                                 |
| Group name (pre-Windows 2000)    | sAMAccountName      | Windows 2000 öncesi (NetBIOS) grup adı                                   |
| Description                      | description         | Grubun açıklaması                                                        |
| E-mail                           | mail                | Grubun e-posta adresi                                                    |
| Group scope / Group type         | groupType           | Kapsam (Domain local, Global, Universal) ve tür (Security, Distribution) tek bir bit alanında tutulur |
| Notes                            | info                | Grupla ilgili serbest metin notlar                                       |

![active directory grup general sekmesi](/images/active-directory-group-attributes/group-general.png)

---

### Members (Üyeler) Sekmesi

| Arayüzdeki Alan | LDAP Nitelik Adı | Açıklama                                                                                          |
|-----------------|------------------|---------------------------------------------------------------------------------------------------|
| Members         | member           | Gruba üye olan kullanıcı/grup/bilgisayar nesnelerinin DN listesi                                  |
| (Geri bağlantı) | memberOf         | Kullanıcı nesnesi üzerindeki **backlink**; `member` niteliğinden otomatik hesaplanır, doğrudan yazılmaz |

![active directory grup members sekmesi](/images/active-directory-group-attributes/group-members.png)

---

### Member Of (Üye Olduğu Gruplar) Sekmesi

| Arayüzdeki Alan | LDAP Nitelik Adı | Açıklama                                                                                         |
|-----------------|------------------|--------------------------------------------------------------------------------------------------|
| Member of       | memberOf         | Bu grubun üyesi olduğu üst grupların DN listesi                                                  |
| (Geri bağlantı) | member           | Diğer grup nesnesi üzerindeki ilgili üyelik kaydı (bu grup, üst grubun `member` listesinde yer alır) |

Sekmenin altındaki not önemlidir: liste yalnızca **mevcut domain'deki gruplar** ile Global Catalog'da tutulan gruplardan (ör. universal gruplar) oluşur.

![active directory grup member of sekmesi](/images/active-directory-group-attributes/group-memberof.png)

---

### Managed By (Yöneten) Sekmesi

Bu sekmede grubu yöneten kullanıcının kendi nitelikleri gösterilir; yani aşağıdaki alanların çoğu **grubun değil, yönetici kullanıcı nesnesinin** niteliğidir.

| Arayüzdeki Alan                      | LDAP Nitelik Adı           | Açıklama                                                                                   |
|--------------------------------------|----------------------------|--------------------------------------------------------------------------------------------|
| Name                                 | managedBy                  | Grubu yöneten kullanıcının/grubun DN değeri (grup üzerindeki nitelik)                      |
| Manager can update membership list   | nTSecurityDescriptor       | İşaretlendiğinde yönetici kullanıcıya `member` niteliği üzerinde **write** izni verilir    |
| Office                               | physicalDeliveryOfficeName | Yönetici kullanıcının ofisi                                                                |
| Street                               | streetAddress              | Yönetici kullanıcının sokak adresi                                                         |
| City                                 | l                          | Şehir                                                                                      |
| State/province                       | st                         | Eyalet/il                                                                                  |
| Country/region                       | co                         | Ülke adı                                                                                   |
| Country/region                       | c                          | İki harfli ülke kodu (ISO 3166)                                                            |
| Country/region                       | countryCode                | Sayısal ülke kodu                                                                          |
| Telephone number                     | telephoneNumber            | Telefon numarası                                                                           |
| Fax number                           | facsimileTelephoneNumber   | Faks numarası                                                                              |

![active directory grup managed by sekmesi](/images/active-directory-group-attributes/group-managedby.png)

---

### Object (Nesne) Sekmesi

| Arayüzdeki Alan                       | LDAP Nitelik Adı    | Açıklama                                                                 |
|---------------------------------------|---------------------|--------------------------------------------------------------------------|
| Canonical name of object              | canonicalName       | Nesnenin `domain/OU/ad` biçimindeki yolu (hesaplanan, yapılandırılmış nitelik) |
| Object class                          | objectClass         | Nesne sınıfı (`group`)                                                   |
| Object class                          | objectCategory      | Nesne kategorisi                                                         |
| Created                               | whenCreated         | Nesnenin oluşturulma zamanı                                              |
| Created                               | createTimeStamp     | Oluşturulma zamanı (operasyonel nitelik, `whenCreated` ile aynı bilgi)   |
| Modified                              | whenChanged         | Nesnenin son değiştirilme zamanı                                         |
| Modified                              | modifyTimeStamp     | Son değiştirilme zamanı (operasyonel nitelik)                            |
| Update Sequence Numbers – Current     | uSNCreated          | Nesnenin oluşturulduğu andaki güncelleme sıra numarası (USN)             |
| Update Sequence Numbers – Original    | uSNChanged          | Nesnenin en son değiştirildiği andaki USN (replikasyonda kullanılır)     |

Ekran görüntüsünde ayrıca **Protect object from accidental deletion** kutusu görülür; bu seçenek nesnenin ACL'ine silmeyi engelleyen bir *Deny* girdisi ekler.

![active directory grup object sekmesi](/images/active-directory-group-attributes/group-object.png)

---

### Security (Güvenlik) Sekmesi

| Arayüzdeki Alan                          | LDAP Nitelik Adı     | Açıklama                                                                                         |
|------------------------------------------|----------------------|--------------------------------------------------------------------------------------------------|
| Group or user names / Permissions        | nTSecurityDescriptor | Nesnenin güvenlik tanımlayıcısı: sahip, DACL (kimin ne yapabileceği) ve SACL (denetim) bilgisini içerir |

Bu sekmedeki tüm kullanıcı/grup listesi ve izin kutucukları tek bir niteliğin, yani `nTSecurityDescriptor` değerinin görsel karşılığıdır.

![active directory grup security sekmesi](/images/active-directory-group-attributes/group-security.png)

---

### Attribute Editor (Nitelik Düzenleyici) Sekmesi

Bu sekme, grup nesnesinin **tüm niteliklerine** düşük seviyede erişim sağlar. Eski Windows/AD sürümlerinde ADSI Edit aracının sunduğu işlevin ADUC içine taşınmış halidir (sekmeyi görmek için ADUC'ta **View > Advanced Features** açık olmalıdır). Düşük seviyeli dizin verisini görmek ve düzenlemek için kullanışlı ama sınırlı bir yöntemdir; daha rahat bir kullanım için LDAP Explorer gibi özel bir LDAP tarayıcısı tercih edilebilir.

Ekran görüntüsünde listenin başında şu nitelikler görülür:

| LDAP Nitelik Adı        | Örnek Değer                                  |
|-------------------------|----------------------------------------------|
| accountNameHistory      | `<not set>`                                  |
| adminCount              | `<not set>`                                  |
| adminDescription        | `<not set>`                                  |
| adminDisplayName        | `<not set>`                                  |
| altSecurityIdentities   | `<not set>`                                  |
| cn                      | LEXDev                                       |
| controlAccessRights     | `<not set>`                                  |
| description             | `<not set>`                                  |
| desktopProfile          | `<not set>`                                  |
| displayName             | `<not set>`                                  |
| displayNamePrintable    | `<not set>`                                  |
| distinguishedName       | CN=LEXDev,CN=Users,DC=cerrotorre,DC=de       |
| dSASignature            | `<not set>`                                  |
| dSCorePropagationData   | 5/8/2009 7:33:27 AM Pacific Daylight Time    |

![active directory grup attribute editor sekmesi](/images/active-directory-group-attributes/group-attribute-editor.png)

---

## Kaynak

Bu yazıdaki ekran görüntüleri ve nitelik eşlemeleri [SelfADSI](http://www.selfadsi.org/group-attributes-w2k8.htm) sitesindeki "Attributes for AD Groups (Windows 2008)" sayfasından alınmış, Türkçe açıklamalarla genişletilmiştir. Görsellerin hakları SelfADSI / CerroTorre Networking'e aittir.
