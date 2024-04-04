+++
title = 'Şifrelerin Ötesinde FIDO Çözümü'
date = 2024-03-30T22:17:41+03:00
draft = false
tags = ['FIDO','UAF','2FA']
+++

## FIDO'nun sırlarını Çözmeye Ne dersin?

FIDO'nun açılımı Fast Identity Online Authentication(Çevrimiçi Hızlı Kimlik Doğrulama) olarak tanımlanmıştır.

FIDO'yu online dünya ve gerçek dünya arasındaki bir el sıkışma olarak düşünebiliriz. Bu sayade doğru kişi olduğumuzu online dünyaya tanıtırız. FIDO Authentication yöntemiyle teknoloji ve güvenlik arasında sağlam bir denge kurarız.

Çeşitli kullanım yöntemleri olsa da hayalinizde şöyle canlandırmanızı isteyeceğim. Kullandığınız tüm bankacılık uygulamaları için ayrı ayrı şifreleri sürekli değiştirmek ve hatırlamak durumunda kalmadığınızı düşünün. Bunun yerine parmak izi, yüz, ses ve göz irisi seçenellerinden birisiyle giriş yaptığınızı hayal edin.

Aslında düşündüğümüzde Türkiye'de bankacılık alt yapısı ile birlikte birçok banka uygulaması yüz tanıma ile girişleri doğrulama yönetimini kullanmaya başladı ve çok kolay bir şekilde uygulamaya hızlıca giriş yapabiliyoruz.

Tabi bankalar FIDO'nun yanında uygulamaya giriş yaptıktan sonra para göndermek istediğinizde genellikle yine 6 hanali şifrenizi doğrulamanızı isteyebiliyor. Burada finansal uygulamalar için daha zorlayıcı ve çift doğrulamalı yapıların kurulması finansal güvenlik açısından önem ifade ediyor.

## FIDO'nun Protokolünü Anlayalım

#### UAF(User Authentication Framework):

User Authentication Framework ile geleneksel şifreleme yöntemlerinden farklı olarak biyometrik veya security key(usb şifre cihazı ile doğrulama) yaparak giriş yapmayı sağlar.

![IBM Security Verify](/images/sifrelerin-otesinde-fido/fido-uat.png)


### U2F(Universal 2nd Factor) (Evrensel İkinci Faktör):

Yöntemi aslında 2FA olarak düşünebiliriz fakat ikisinin birbirinden farklı özellikleri bulunuyor.
U2F'de standart olarak giriş yaparken kullandığımız kullanıcı adı ve şifrenin yanında aslında yukarıda bahsetmiş olduğum sadece bize özel oluşturulmuş benzersiz bir usb cihazı bulunuyor ve bu cihaz ile doğrulama yapılmadığı taktirde oturum açılmasına izin verilmiyor. Böylece doğrudan fiziksel bir yöntem ile 2FA sağlanması hedefleniyor.


![IBM Security Verify](/images/sifrelerin-otesinde-fido/fido-cihaz.png)


FIDO doğrulama prokollerinin kullanımları git gide yaygınlaşmasına rağmen web güvenliği noktasında henüz çok ileri boyutlarda bir doğrulama söz konusu değil. Web için daha çok 2FA ile mobil bildirim ile doğrulama, e-postaya güvenlik kodu göndererek doğrulama veya authenticator süreli doğrulama kodları yöntemleri tercih ediliyor.







