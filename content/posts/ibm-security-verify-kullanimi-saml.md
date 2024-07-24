+++
title = 'IBM Security Verify SAML Authentication'
date = 2024-07-24T15:45:08+03:00
draft = false
tags = ['ibm','security verify cloud','saml','ibm security verify sso']
+++

Selamlar,

Bu yazımda, cloud tabanlı IBM Security Verify'in deneme sürümü ile SAML giriş yapma senaryosunu çalışacağız.

IBM Security Verify ürününü kısaca kimlik doğrulama, erişim kontrolü, risk tabanlı erişim kontrolü, API güvenliği ve benzeri alanlarda kullanabiliriz. SSO ile tekli oturum açma fonksiyonlarını destekleyen çok geniş bir protokol yelpazesini bizlere sunuyor.

IBM Security Verify, Cloud üzerinde çalıştırarak denemeniz için 90 günlük bir paket sunuyor.
https://www.ibm.com/account/reg/us-en/signup?formid=urx-30041 adresine giriş yaparak kendi hesabımızı oluşturuyoruz. Deneme sürümü için kredi kartı vb. herhangi bir şey istemeden ilerleyebiliyoruz.

Hesap oluşturma adımından sonra tenant alanımızı oluşturuyoruz.

<img src="/images/ibm-securty-verify-saml/tenant-olusturma.png" alt="Tenant Adı Oluşturma" style="max-width:1024px">

Hesap oluşturma adımından sonra IBM'in sunmuş olduğu GitHub reposunu test sürecimizde kullanacağız. Repoya ulaşmak için https://github.com/IBM-Security/CI-SAML-Sample adresine gidiyoruz.

Repoyu bilgisayarımıza klonluyoruz. Reponun çalışması için node.js'in sisteminizde kurulu olması gerekiyor.

```
git clone https://github.com/ajcase/CI-SAML-Sample
cd CI-SAML-Sample
npm install
npm start
```

NPM Start komutuyla https://localhost:3006/ adresinde node.js uygulamamızı başlattık. Uygulamayı başlattıktan sonra bizi aşağıdaki ekran görüntüsünde yer alan sayfamız karşılıyor.

<img src="/images/ibm-securty-verify-saml/nodejs-sitesi.png" alt="Nodejs Sitesi Service Provider" style="max-width:1024px">

Uygulamayı IBM rehber olarak paylaştığı için çok hızlı bir şekilde kurulum aşamasını yapabileceğiz.

https://[tenantadresi].verify.ibm.com/ui/admin?walkme=19-601875 adresine giriş yaparak IBM Security Verify Cloud Admin Dashboard'ımıza erişiyoruz. Tenant Adresi bölümünde [] işaretlerini kaldırarak kendi adresinizi yazmayı unutmayın. Kullanıcı e-postanız ve şifreniz ile giriş yapabilirsiniz.

Giriş yaptıktan sonra uygulama oluşturma adımına geçiyoruz. Sol menüde yer alan Applications altındaki Applications sekmesine tıklıyoruz.

<img src="/images/ibm-securty-verify-saml/application-olusturma.png" alt="Uygulama Oluşturma" style="max-width:1024px">

Daha sonra Add Application'u seçiyoruz. Bu aşamada custom application ile ilerliyoruz.

<img src="/images/ibm-securty-verify-saml/custom-application.png" alt="Custom App Oluşturma" style="max-width:1024px">

Uygulamamızı oluşturmak için ekran görüntüsündeki kırmızı alanları dolduruyoruz. Description ve companyname alanlarını dolduruyoruz.

<img src="/images/ibm-securty-verify-saml/custom-application-create1.png" alt="custom-application-create1" style="max-width:1024px">

Sonrasında Sign-On tabına geçiyoruz. Bu tabda kırmızı ile işaretlediğim alandaki bilgileri alacağız.

<img src="/images/ibm-securty-verify-saml/custom-app-settings.png" alt="custom-app-settings" style="max-width:1024px">

Kendi localhost adresimizde setup alanındaki yerleri bu bilgileri kullanarak dolduracağız. Adresimize giriş yaptıktan sonra setup bölümüne tıklıyoruz.

<img src="/images/ibm-securty-verify-saml/localhost-setup.png" alt="localhost-setup" style="max-width:1024px">

Daha öncesinde kopyalamış olduğumuz bilgileri setup bölümünde ilgili yerlere yapıştırıyoruz. -----BEGIN CERTIFICATE----- alanı yine üstteki kopyaladığımız ekran görüntüsünün biraz altında yer alıyor. Onu da ilgili yere yapıştırıyoruz.

<img src="/images/ibm-securty-verify-saml/config1.png" alt="config1" style="max-width:1024px">

Sağ üstten next dedikten sonra ayarlamalarımıza devam ediyoruz. Ekran görüntüsünde yer alan Download metadata'yı kullanarak bilgilerimizi indiriyoruz. Single Sign-On (SSO) URL bölümündeki adresimizi de bir sonraki ekranda kullanacağız.

<img src="/images/ibm-securty-verify-saml/config2.png" alt="config2" style="max-width:1024px">

IBM Security Verify Admin ekranına dönüyoruz ve Sign-On tabında dosyamızı ilgili yere yapıştırdıktan sonra kopyaladığımız Service provider SSO URL adresini de yapıştırıyoruz.

<img src="/images/ibm-securty-verify-saml/config3.png" alt="config3" style="max-width:1024px">

Son adımda uygulamaya kimlerin erişebileceğini düzenleyebiliriz. Şimdilik sistemde kayıtlı olan tüm kullanıcılar erişebilsin.

<img src="/images/ibm-securty-verify-saml/config4.png" alt="config4" style="max-width:1024px">

İşlemler sonunda localhost tarafında save diyerek kayıt işlemini gerçekleştirelim. Artık her şeyimiz hazır durumda ve tek bir oturumu kullanarak farklı uygulamalarda oturum açabilir durumdayız. IBM Security Verify hesabımızda oturumumuz açık olduğu için localhost sitemizde anasayfaya dönerek login butonuna basıyoruz.

<img src="/images/ibm-securty-verify-saml/login.png" alt="Login" style="max-width:1024px">

Service Provider'ımız yani uygulamamız, Identity Provider olarak kimliğimizi doğrulayıp doğrulamadığımızı kontrol ediyor ve IBM Security Verify Admin paneline önceden giriş yapıp kimliğimizi doğruladığımız için tekrardan oturum açmamıza gerek kalmadan uygulamamızda oturum açmış oluyoruz.

<img src="/images/ibm-securty-verify-saml/giris-yapili-sayfa.png" alt="Giris-Yapili-Sayfa" style="max-width:1024px">

View profile diyerek kullanıcıya ait detaylı bilgilere erişebiliriz.

<img src="/images/ibm-securty-verify-saml/profile-detayi.png" alt="Profile-Detayı" style="max-width:1024px">

Bir diğer güzel özelliğimiz ise ana sayfa dashboardumuzu kullanarak oluşturduğumuz tüm uygulamalara SSO ile erişebiliriz. Oluşturmuş olduğumuz tenant adresi ile https://[tenantadresi].verify.ibm.com/usc şeklinde yazarak sayfaya giriş yapalım.

<img src="/images/ibm-securty-verify-saml/dashboard.png" alt="Dashboard" style="max-width:1024px">


Dashboard'a giriş yaptıktan sonra oluşturmuş olduğumuz Custom Application'a tıkladığımız zaman SSO ile doğrudan oturum açık şekilde ilgili uygulamaya yönlendirilmiş oluruz.

Bu adımları izleyerek IBM Security Verify ile SAML entegrasyonunu başarıyla tamamladınız. Artık tekli oturum açma (SSO) fonksiyonunu kullanarak kullanıcılarınızın kimlik doğrulama süreçlerini daha güvenli ve verimli hale getirebilirsiniz.

IBM Security Verify’in sunduğu diğer özellikleri keşfetmek ve kimlik yönetimi çözümlerini derinlemesine öğrenmek için aşağıdaki kaynaklara göz atabilirsiniz:

IBM Security Verify Documentation
IBM Developer – Identity and Access Management
IBM Security Verify Community
IBM Security Verify’i deneyimlediğiniz ve SAML entegrasyonu hakkında bilgi edindiğiniz için teşekkür ederim. Sorularınız veya yorumlarınız varsa, lütfen aşağıya yazın.











