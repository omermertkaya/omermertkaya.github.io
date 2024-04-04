+++
title = 'IBM Security Verify Kullanımı'
date = 2024-04-02T20:11:04+03:00
draft = true
tags = ['authentication','ibm','security verify']
+++

Selamlar,

Bu yazımda cloud tabanlı IBM Security Verify'in deneme sürümü ile postman api kullanarak giriş yapma senaryosunu çalışacağız.

IBM Security Verify ürününü kısaca kimlik doğrulama, erişim kontrolü, risk tabanlı erişim kontrolü, API güvenliği ve benzeri alanlarda kullanabiliriz. SSO ile tekli oturum açma fonksiyonlarını destekleyen çok geniş bir protokol yelpazesini bizlere sunuyor.

IBM Security Verify Cloud üzerinde çalıştırarak denemeniz için 90 günlük bir paketi bizlere sunuyor. 
https://www.ibm.com/account/reg/us-en/signup?formid=urx-30041 adresine giriş yaparak kendi hesabımızı oluşturuyoruz. Deneme sürümü için kredi kartı vb herhangi birşey istemeden ilerleyebiliyoruz.

Özetle aslında kuracağımız mimariyi IBM'in kendi dökümanından aldığım diyagram ile ifade etmek istiyorum.
Bu öğretiyi şu [linkten](https://learn.ibm.com/pluginfile.php/2271988/mod_resource/content/1/Developer%20cookbook%20-%20Policy-based%20Authentication.pdf
) de takip edebilirsiniz. 

![IBM Security Verify](/images/ibm-security-verify-kullanimi/diyagram.png)


Hesap oluşturma işleminden sonra öncelikle github'da bulunan repomuzu sistemimize yükleyelim.
https://github.com/IBM-Security/verify-postman adresinden repoyu indirebilir veya git kullanarak localinize alabilirsiniz.

Locale indirdiğimiz repoyu postman yardımıyla klasör bazında açalım.

![Postman Görüntüsü](/images/ibm-security-verify-kullanimi/postman-goruntusu.png)

Postman yükleme işleminden sonra IBM Security Cloud'da oluşturmuş olduğumuz hesabımıza dönüş yapalım.
hesap oluşturduktan sonra aslında bize özel olarak https://<yourtenantid>.verify.ibm.com/ui/admin buna benzer bir link oluşturuldu. Tenantid bölümü aslında bizim belirlediğimiz isim oldu. Örneğin benim için https://merttest.verify.ibm.com/ui/admin şeklinde oluşturuldu.

Admin panelinde yeni bir kullanıcı oluşturalım. Sol hamburger buton menüsüne tıklayarak Directory altında yer alan Users and Groups'u açalım.

![Postman Görüntüsü](/images/ibm-security-verify-kullanimi/user-olusturma.png)

Burada new diyerek mevcutta üye olduğumuz e-postadan farklı bir e-posta kullanarak bir test hesabı oluşturalım.
Bu test hesabını sonrasında postman'de kullanacağız.


Test hesabı oluşturma işleminin sonrasında yeni bir uygulama oluşturma adımına geçelim. Uygulama oluşturmadan önce uygulama için bir kural seti oluşturmamız gerekiyor. Öncelikle sol menüden Security tabının altında bulunan Access Policies bölümüne geçelim.

![Access Policies](/images/ibm-security-verify-kullanimi/security-access.png)

