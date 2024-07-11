+++
title = 'Authentication Authorization Kavramları'
date = 2024-07-11T22:30:46+03:00
draft = false
tags = ['authentication','authorization','kimlik ve erisim yonetimi']
+++

Authentication ve Authorization, birbirinden farklı iki önemli kavramdır.

## Authentication (AuthN) - Kimlik Doğrulama

Authentication, "Kimsin Sen?" sorusunu yanıtlar.

Ben Ömer Mert diyebilirim. Fakat bilgisayar kim olduğumuzu nasıl anlar?

Kullanıcı Adım: omermertkaya
Şifre: xxxxxx


Örneğin, bilgisayarımızı açarken Windows bize kullanıcı adı ve şifremizi sorarak bilgisayarı kimin açtığını doğrularız. Aynı şekilde, farklı web sitelerine giriş yaparken de hesabımızın bize ait olduğunu doğrularız.

Otel örneğinden devam edersek, otele giriş yaptığımızda görevli bize kimlik doğrulamak için kimliğimizi (kullanıcı adı ve şifremizi) ister. Görevli, kimlik bilgilerimizi doğruladıktan sonra bize oda kartımızı verir. Oda kartı, kimliğimizin (Authentication) doğrulandığını ve bize ait olduğunu gösterir.

<img src="/images/authentication-authorization/authenticationvsauthorization.png" alt="Entitlement-İnsan_Kaynaklari" style="width:100%;">


## Authorization (AuthZ) - Yetkilendirme

Authorization, "Hangi izinlerin var senin?" sorusunu yanıtlar.

Okuma, yazma ve silme izinlerim var.

Kimlik doğrulandıktan sonra, kimliğimizin sahip olduğu izinlerin (permissions) bütünüdür. Örneğin, web sitesinde yazı okuma, yazı yazma veya silme izinlerine sahip olabiliriz. Otel örneğine geri dönersek, görevli bize otele girişte oda kartımızın hangi kapıları açabileceğini (örneğin, spor salonu veya yüzme havuzu gibi) ve hangi olanaklardan yararlanabileceğimizi anlatır. Bu, Authorization sürecinin bir parçasıdır.


