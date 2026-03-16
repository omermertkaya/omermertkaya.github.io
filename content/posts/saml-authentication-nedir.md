+++
title = 'Saml Authentication Nedir?'
date = 2026-03-16T20:00:34+03:00
draft = false
tags = ['SAML','SAMLAuthentication','SSO','SingleSignOn','IAM','KimlikveErişimYönetimi','IdentityAndAccessManagement','FederatedIdentity','KimlikDoğrulama','SiberGüvenlik','BilgiGüvenliği','AccessManagement','Authentication','IdentityFederation']
+++


**SAML (Security Assertion Markup Language)**, sistemler arasında kimlik doğrulama bilgilerinin güvenli bir şekilde aktarılmasını sağlayan bir protokoldür.

SAML protokolü birçok sistemde **authentication (kimlik doğrulama)** sürecinde kullanılır. Authentication kavramını basitçe **kullanıcının sisteme giriş yapması ve kimliğinin doğrulanması** olarak düşünebiliriz.

SAML'in açılımı **Security Assertion Markup Language**’dir. Türkçeye kabaca **Güvenlik Doğrulama İşaretleme Dili** olarak çevrilebilir.

Bu protokol sayesinde kullanıcıya ait kimlik bilgileri **bir sistemden başka bir sisteme güvenli bir şekilde aktarılabilir**.

---

## SAML Nasıl Çalışır?

SAML sayesinde bir kullanıcı:

1. **A sisteminde giriş yapar**
2. Kimliği doğrulanır
3. Daha sonra **B sistemine geçtiğinde tekrar giriş yapmasına gerek kalmaz**

Bu mekanizma genellikle **Single Sign-On (SSO)** olarak adlandırılır.

Bu sayede:

- Kullanıcı deneyimi iyileşir
- Kullanıcı tekrar tekrar giriş yapmak zorunda kalmaz
- Sistemler arasında güvenli kimlik paylaşımı sağlanır

SAML ile genellikle şu bilgiler sistemler arasında taşınır:

- Kullanıcı adı
- E-posta adresi
- Ad
- Soyad
- Kullanıcıya ait diğer kimlik bilgileri

---

## SAML'in Teknik Yapısı

SAML **XML tabanlı bir protokoldür**.  

Kimlik doğrulama bilgileri **XML formatında oluşturulan SAML Assertion** yapısı ile sistemler arasında iletilir.

SAML standardı, **OASIS (Organization for the Advancement of Structured Information Standards)** tarafından geliştirilmiş ve yayınlanmıştır.

---

# SAML Bileşenleri

SAML mimarisinde iki temel bileşen bulunur.

## Service Provider (SP)

**Service Provider**, kullanıcının erişmek istediği uygulamadır.

Örneğin:

- Bir web uygulaması
- Bir SaaS platformu
- Kurumsal bir panel

Kullanıcı aslında bu sisteme giriş yapmak ister.

---

## Identity Provider (IdP)

**Identity Provider**, kullanıcıların kimlik doğrulamasını yapan sistemdir.

Bu servis:

- Kullanıcıyı doğrular
- Kimlik bilgilerini üretir
- Bu bilgileri **SAML Assertion** olarak Service Provider'a gönderir

Identity Provider örnekleri:

- Okta
- Azure AD
- Keycloak
- Auth0

---

## SAML Service Provider Örneği Repom (SP)

SAML ile geliştirmiş olduğum basit bir **Service Provider (SP)** örneğinin ekran görüntüsünü ve GitHub repo linkini aşağıda paylaşıyorum.

Bu uygulama sayesinde çeşitli **Identity Provider (IdP)** servisleri ile hızlı bir şekilde **SAML entegrasyonunu test edebilirsiniz**.

Uygulamayı **Node.js** kullanarak geliştirdim. Kurulum sürecini kolaylaştırmak için uygulamayı **Docker container mimarisine** taşıdım ve GitHub üzerinde yayınladım.

Bu sayede projeyi indirip çok kısa sürede çalıştırarak kendi SAML entegrasyon testlerinizi yapabilirsiniz.

[GitHub Repom](https://github.com/omermertkaya/easy-saml)

[Demo Adresi](https://easy-samli.onrender.com/)

<img src="/images/saml-authentication-nedir/saml-auth.png" alt="Entitlement-İnsan_Kaynaklari" style="width:100%;">

### Özellikler

- Basit bir **SAML Service Provider** implementasyonu
- Farklı **Identity Provider** servisleri ile test edebilme
- **Node.js** ile geliştirilmiş yapı
- **Docker** ile hızlı kurulum
- Kolay test ortamı


