+++
title = 'Rol Madenciliği (Role Mining): IAM Sistemlerinde Etkin Rol Yapılarının Oluşturulması'
date = 2024-08-05T21:00:41+03:00
draft = false
tags = ['RolMadenciliği','RoleMining','IAM','KimlikveErişimYönetimi','IdentityAndAccessManagement','SiberGüvenlik','BilgiGüvenliği','ErişimYönetimi','RolYönetimi','YetkiYönetimi']
+++

Rol Madenciliği, Identity and Access Management (IAM) sistemlerinde yer alan bir süreçtir. Bu süreç, mevcut yetki matrisini kullanarak çalışanların alabileceği rollerin analiz edilmesini içerir. IAM ürünlerinde genellikle özel bir modül olarak sunulan Rol Madenciliği'nin temel hedefi, mantıklı ve etkili rol yapıları oluşturmaktır. Bu sayede karmaşık olan rol yönetimi yapısı daha anlaşılır, yönetilebilir ve güvenli hale gelir.



<img src="/images/rol-madenciligi/role-mining.jpg" alt="Entitlement-İnsan_Kaynaklari" style="width:100%;">




### Rol Madenciliği Örnek Süreci
Rol Madenciliği sürecinde genellikle kullanıcıların mevcut yetkileri üzerinden oluşturulabilecek roller analiz edilir. Örneğin:

Bir rolde en az 3 yetki olsun
Bir rolde en az 5 kişi bulunsun

gibi filtreler kullanılarak, bu tanıma uygun roller sistem tarafından otomatik olarak analiz edilir.
### Örnek Analiz Sonuçları
Analiz sonucunda iki temel matris elde edilir:

Yetkilendirme Matrisi:

> Rol 1 = Yetki 1 - Yetki 2 - Yetki 3 - Yetki 4

> Rol 2 = Yetki 1 - Yetki 3 - Yetki 4 - Yetki 5 - Yetki 6


Kullanıcı-Rol İlişki Matrisi:

> Rol 1 = Kullanıcı 1 - Kullanıcı 2 - Kullanıcı 3 - Kullanıcı 4 - Kullanıcı 5

> Rol 2 = Kullanıcı 1 - Kullanıcı 2 - Kullanıcı 3 - Kullanıcı 4 - Kullanıcı 5 - Kullanıcı 6 - Kullanıcı 7

### Faydaları
Bu analizler sonucunda:

- İhtiyaca uygun roller oluşturulabilir
- Kullanıcı-rol ilişkileri daha etkin bir şekilde kurulabilir
- Otomatik yetkilendirme süreçleri iyileştirilebilir
- Rol yönetimi için sağlam bir altyapı oluşturulabilir

Rol Madenciliği, özellikle büyük ve karmaşık organizasyonlarda, erişim yönetimini optimize etmek ve güvenliği artırmak için güçlü bir araç olarak öne çıkmaktadır.


