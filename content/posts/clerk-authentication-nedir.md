+++
title = 'Clerk Authentication Nedir?'
date = 2024-03-30T16:57:45+03:00
draft = false
tags = ['authentication']
+++


Clerk Authencation Servisi ile kimlik doğrulama hizmetlerini çok hızlı yönetebiliriz. Clerk kullanarak web ve mobil cihazlara uyumlu giriş yapma yöntemi sağlayabiliriz.
Giriş yapmak için normalde kurmamız gereken efordan bu servisi kullanarak kurtulabiliriz. 

En güzel özelliklerinden birisi çok geniş giriş yapma yelpazesi sunuyor olmasıdır. Örneğin google, linkedin, apple, facebook, github ve microsoft vb. hesaplarınız ile oturum açmanızı sağlar. Örnek olarak aşağıdaki giriş ekranını baz alabiliriz.

![Clerk Authentication](/images/clerk-authentication-nedir/clerk-authentication.png)

## Clerk'i birlikte deneyelim

#### 1) Üye olma ve giriş uygulamasını oluşturma

https://dashboard.clerk.com/sign-up adresinden üye oluyorum. Sonrasında aslında geniş bir dökümantasyon yelpazisi ile bizi karşılıyor.
Ben öğretici rehberi javascript seçerek takip ediyorum. Giriş yaptıktan sonra ilk uygulama için isim belirliyor ve giriş yöntemlerini yönetiyoruz.


![Clerk Authentication](/images/clerk-authentication-nedir/Build%20SignIn.png)


#### 2) Javascript ile hızlıca bir uygulama yapalım


Bu aşamada Clerk'in kendi sağlamış olduğu repostory bize hızlıca deneme imkanı sunuyor.
https://github.com/clerk/clerk-javascript-quickstart adresine giderek repoyu download edebiliriz.


Bu aşamada repoyu indirdikten sonra nodejs npm'in bilgisayarınız yüklü olması gerekiyor.
Eğer yüklü değil ise https://nodejs.org/en/download buradan indirebilirsiniz.


Github'tan indirdiğimiz clerk reposunun dosyasını açıyoruz.

![Clerk Dosya Dizini](/images/clerk-authentication-nedir/dosyaDizini.png)

Bu dosya dizininde yer alan .env dosyasınde keyimizi düzenlememiz gerekiyor.
Clerk'in web sayfasından kopyaladığımız key'i aşağıdaki formatta düzenleyip kayıt ediyoruz.


![Clerk Key Düzenleme](/images/clerk-authentication-nedir/Key.png)

Kayıt işleminden sonra repomumuz npm gereksinimlerini yükleyelim.

```
npm install
npm run dev
```

Komutlarını çalıştırarak uygulamayı ayağa kaldırabiliriz. Localhost'ta çalışan uygulamamızı tarayıcıda açıyoruz.

![Clerk Local Login Ekranı](/images/clerk-authentication-nedir/LocalLoginEkranı.png)

Uygulamayı kullanarak artık authentication işlemini gerçekleştirebiliriz. Ben gmail hesabım ile giriş yapmayı seçtikten sonra login oluyorum.

![Clerk Giriş Yapılan Ekran](/images/clerk-authentication-nedir/GirisYapilanEkran.png)


Clerk bununla birlikte kendi yönetim panelinde bize açıklayıcı bir dashboard ile authenticationları takip etmemizi ve yönetmemizi sağlıyor.

ClerkDashboard

![Clerk Key Dashboard](/images/clerk-authentication-nedir/ClerkDashboard.png)