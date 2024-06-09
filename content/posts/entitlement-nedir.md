+++
title = 'Entitlement Nedir?'
date = 2024-06-04T21:45:54+03:00
draft = false
tags = ['entitlement','identity access management','kimlik ve erişim yönetimi']
+++

Entitlement kavramı, kimlik erişimi yönetimi(Identity Access Management) ürünlerinde en fazla kullandığımız kavramlardan biridir. Yetki verme veya hak verme anlamına gelen Entitlement, aslında bir kimliğin erişim haklarının bütünüdür.

- Rol Tanımlamaları bir entitlement türüdür. Örneğin, IT Rolleri veya İş rolleri olarak tanımlayabiliriz.
- İzinler (permission) yetkinin en küçük yapı taşı olarak düşünülebilir. Örneğin, dosya okuma yetkisi, yazma veya silme yetkisi vb.
- Erişim Politikaları (Access Policies) koşullu erişimleri işaret eder. Örneğin, IP adresine erişim izinleri vb.
- Kaynaklar (Resources) kullanıcıların erişebileceği dosyalar, uygulamalar veya veritabanları vb.

Entitlement'ları yönetirken genellikle roller üzerinden yönetim yapıları kurmayı tercih edebiliriz. Örneğin, İnsan Kaynaklarında bulunan Çalışma İlişkileri organizasyonun yönetici ve çalışan görev tanımlarını düşünelim. Ekibin çalışanları tüm çalışanların izinleri görebilir ve sadece kendi bordrolarını görebilirler, yani bunu Çalışma İlişkileri Çalışan İş Rolü olarak tanımlayıp ilişkilendirebiliriz. Çalışma İlişkileri Yönetici İş Rolü ise tüm çalışanların izinlerini görebilir, düzenleyebilir ve tüm çalışanların bordrolarını görüntüleyebilir.

Burada iş rollerini tanımlarken, aslında bir iş rolü içinde kaynaklara erişim izinlerini, erişim politikalarını ve izinlerini düzenlediğimiz bütüne ise bir kullanıcının entitlements'leri diyebiliriz. 

Kimlik ve Erişim Yönetiminde (Identity and Access Management)'de kullanıcı entitlements'ları neler diye sorulduğunda kullanıcıya ait bütün uygulamalardaki tüm yetkileri, izinleri ve erişimlerini düşünebiliriz. Genellikle authorization tablolarında hangi kullanıcıya ait hangi yetkilerin olduğunun tutulduğunu küçük bir dipnot yer verelim.