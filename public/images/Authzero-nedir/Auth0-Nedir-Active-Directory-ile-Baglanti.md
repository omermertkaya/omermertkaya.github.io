+++
title = 'Auth0 Nedir? Active Directory ile Auth0 Bağlantısı ve Web Uygulamasında Giriş Yapma'
date = 2024-12-03T20:53:07+03:00
draft = false
tags = ['authentication','authorization','kimlik ve erisim yonetimi','Auth0','Active Directory Connection']
+++



## Auth0 Nedir?

Okta firmasının Auth0 uygulaması, **Kimlik Ve Erişim Yönetimi** çözümleri sunan platformudur.
Auth0, kimlik doğrulama, kullanıcı yönetimi ve güvenli erişim gibi yöntemler sunar. Auth0 özellikle kurumsalların yanı sıra geliştiriciler için hızlı entegrasyon sunarak kimlik yönetimi ihtiyaçlarını karşılayan hızlı, kolay ve güvenli çözümler sunar.

### Auth0 Başlıca Özelliklerine Göz Atalım

- Standart protokoller: OAuth 2.0, OpenID Connect, SAML gibi endüstri standartlarını destekler.
- Sosyal girişler: Google, Facebook, Twitter gibi sosyal medya hesaplarıyla giriş yapılmasını sağlar.
- Çift adımlı Doğrulama: Two Factor Authentication yöntemlerini destekler. E-posta'dan doğrulama, SMS yöntemi ile doğrulama vb.
- Giriş ekranlarını ücretli sürümlerinde istediğimiz gibi özelleştirme imkanı
- Güvenlik standartlarına hızlı çözümler sağlayarak güncel çözümleri takip etme

### Auth0 ile Vue.jS Uygulaması Oluşturma

#### Gereklilikler

- Active Directory ortamında kurulmuş bir AD Lab sunucusu
- Temel nodejs bilgisi
- Temel network bilgisi

#### Auth0 hesap oluşturma Adımı

[Auth0.com](https://auth0.com/) adresine giriş yapıyoruz. Sign Up diyerek ücretsiz hesap oluşturuyoruz.

<img src="/images/Authzero-nedir/Auth0Login.png" alt="Auth0 Login Ekranı" style="width:100%;">

Hesap oluşturma adımından sonrasında ilk uygulamamızı oluşturuyoruz. Create Application adımını takip ediyoruz.

<img src="/images/Authzero-nedir/create-application.png" alt="Create Application" >

Açılan sayfada Single Page Application seçiyoruz. En üstten uygulama adımızı belirliyoruz.

<img src="/images/Authzero-nedir/create-single-page-application.png" alt="Create Single Page Application">

Quick Start adımını seçerek hızlıca bir Vue uygulamasını ayağa kaldırabilir duruma geleceğiz.

<img src="/images/Authzero-nedir/quickstart.png" alt="Create Single Page Application">

Auth0, Vue.js uygulamasını seçtğimizde bize çok hoş hazırlanmış bir dökümantasyon sağlıyor.
Download sample adımını takip ederek uygulamayı doğrudan indrebiliyoruz.
Sonrasında bilgisayarımızda Node.JS'in yüklü olması lazım ki Vue.js uygulamasını çalıştırabilelim.

<img src="/images/Authzero-nedir/calisanVue.png" alt="CalisanVue CMD Ekranı">

``` CommandLine
npm install && npm run serve

```

İndirdiğimiz örnek Vue proje dosyamızı yukarıdaki komutu yazarak çalıştırabiliriz.

<img src="/images/Authzero-nedir/loginVue0.png" alt="Uygulama Çalıştırdıktan sonra" style="width:100%;">


### Auth0 ile Active Directory Bağlantısı Kurma

Auth0 admin konsolundan sol menüde yer alan Authentication sekmesini kullanarak, Active Directory bağlantımızı kuruyor olacağız.
Authentication -> Enterprise sekmesine geçiyoruz.








