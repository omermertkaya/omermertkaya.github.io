+++
title = 'Active Directory Ldap Authorization Nedir? LDAP ile Web Uygulamasında Yetkilendirme Nasıl Yapılır?'
date = 2024-11-30T20:41:05+03:00
draft = false
+++


Ülkemizde ve dünyada birçok kuruluş, kullanıcı doğrulama ve yetkilendirme işlemleri için Active Directory (AD) gibi merkezi kimlik yönetimi sistemlerini kullanıyor. Bu sistemler, organizasyon içinde kullanıcıların ve grupların yönetimini kolaylaştırıyor. LDAP (Lightweight Directory Access Protocol) ise Active Directory gibi dizin hizmetlerine erişim sağlamak için kullanılan bir protokoldür. Bu protokol sayesinde Active Directory'deki nesnelerle iletişime geçebiliyoruz. Bizim üzerinde duracağımız kullanıcılar ve güvenlik gruplarını LDAP protokolü ile Nodejs ile yaptığımız web uygulamamızda kullanacağız.

### Active Directory LDAP Authorization Nedir?

- Kullanıcı, kimlik doğrulama işleminden geçer ve Active Directory giriş yapmış olur.
- LDAP sorguları ile kullanıcının Active Directory'deki grup üyelikleri ve rol bilgileri alınır.
- Bu bilgiler, kullanıcının belirli kaynaklara erişimini veya işlemleri gerçekleştirme yetkisini belirlemek için kullanılır.

### Kendi Web Uygulamamızı ve Active Directory Labmızı Oluşturulam

Active Directory'de TestAPP isimli bir organizasyon unit oluşturuyoruz. 
Sonrasında TestAPP_Ekle, TestAPP_Guncelleme, TestAPP_Yazdirma, TestAPP_Silme güvenlik gruplarını oluşturuyoruz.

<img src="/images/ldap-authorization/testAPP.png" alt="Aktif Dizin Şeması" style="width:100%;">

Github'dan hazırlamış olduğum proje dosyasını bilgisayarımıza indirelim. [Projeyi indir](https://github.com/omermertkaya/active-directory-auth)

Proje dizinine giderek consolda aşağıdaki kodu çalıştırarak tüm gereklilikleri yüklüyoruz.

``` CLI

npm install

```

Sonrasında bazı düzenlemeler yapmamız gerekiyor.

routes/auth.js dizininde düzenleme yapıyoruz. Burada benim Active Directory'de oluşturduğum dizin adım mertidm.com olarak görüntüleniyor.
baseDN, username ve password'u kendimize göre düzenliyoruz.


``` Javascript

const config = {
  url: 'ldap://localhost',
  baseDN: 'dc=mertidm,dc=com',
  username: 'CN=Administrator,CN=Users,DC=mertidm,DC=com',
  password: 'Mert123!'
};

```

Düzenleme işleminden sonra uygulamamızı çalıştıralım.

``` CLI

node index

```

Yazarak uygulammızı çalıştırıyoruz.

<img src="/images/ldap-authorization/uygulamaCalistirma.png" alt="Uygulama Calistirma" style="width:100%;">

Active directory'de oluşturmuş olduğumuz kullanıcımız ile giriş işlemi gerçekleştiiyoruz.

<img src="/images/ldap-authorization/girisyapma.png" alt="Uygulamaya giris yapma" style="width:75%;">

Giriş işlemi sonrasında kullanıcımızın yetkilerine göre uygulamada yapabileceğimiz işlemler ekranda görüntüleniyor.

<img src="/images/ldap-authorization/webyetkili.png" alt="Web Yetkili" style="width:75%;">

Active Directory'deki yetkilerimize göre uygulama içerisinde işlemler gerçekleştirebiliriz.


### Tüm süreci video olarak aşağıdan izleyebilirsiniz.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z-lM5L3jVqk" title="Active Directory Altyapısı ile Web Uygulamasında Yetkilendirme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
