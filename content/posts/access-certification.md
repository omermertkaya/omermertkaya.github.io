+++
title = 'Access Certification Nedir?'
date = 2024-12-16T20:33:05+03:00
draft = false
tags = ['Kimlik Yönetimi', 'Erişim Yönetimi', 'Kimlik ve Erişim Yönetimi', 'Abstraction Soyutlama', 'Dijital Güvenlik', 'Rol Tabanlı Erişim Kontrolü RBAC', 'Zero-Trust Güvenlik Modeli', 'IAM Stratejileri', 'Erişim Gözden Geçirme', 'Entitlement Management']

+++

Kimlik ve Erişim Yönetimi (IAM), organizasyonlarda bilgi teknolojisi altyapısının ve hassas verilerin güvenliğini sağlamak için kritik bir role sahiptir. IAM'in önemli bir bileşeni olan Access Certification (Erişim Sertifikasyonu), kullanıcıların sahip oldukları yetki ve rollerin düzenli olarak kontrol edilmesi sürecini ifade eder. Bu yazıda, Access Certification'ın ne olduğunu, şirketinizde nasıl uygulayabileceğinizi inceleyeceğz.

### Access Certification Nedir?

Access Certification, **erişim haklarının doğruluğunun onaylanması ve gereksiz yetkilerin kaldırılması için düzenlenen bir gözden geçirme sürecidir.** Bu sürecin temel amacı:

- Yetkisiz veya gereksiz erişimlerin önünü kesmek,
- Uyumluluk gerekliliklerini yerine getirmek,
- Güvenlik risklerini azaltmaktır.

Access Certification, şirket içerisinde hem yöneticiler hem de ilgili yetki sahipleri tarafından yürütülerek, kullanıcıların gerçekte hangi yetki ve rollere ihtiyacı olduğunun belirlenmesini sağlar.

### Erişim Gözden Geçirme Nasıl Yapılır?

Bir Access Certification sürecini daha iyi anlamak için şu senaryoyu ele alalım:

- Şirketinizde 3.000 çalışan var.
- Çalışanlarınız, farklı bilgi teknolojisi sistemlerinde çok çeşitli erişimlere sahip.
- IAM sisteminiz aracılığıyla 10 ana uygulamanın erişimlerini yönetiyorsunuz.

Bu çalışanların birçoğu, kariyerleri boyunca farklı organizasyonel değişikliklere uğramış olabilir. Dolayısıyla, bazı yetkileri artık kullanmıyor ya da bu yetkilere sahip olmamalıdır gibi durumlar kesinlikle olur. Erişim gözden geçirme süreci bu soruna çözüm sunar.

Süreçte izlenecek temel adımlar:

1. **Kullanıcı ve Yetki Bilgilerinin Toplanması:** IAM sistemi, kullanıcıların mevcut yetkilerini ve rollerini şirketti tüm yöneticilere bir dashboard vasıtası raporlar.

2. **Yöneticilerin Gözden Geçirmesi:** Her yönetici, ekibindeki çalışanların yetkilerini analiz ederek hangi yetkilerin gerekli olup olmadığına karar verir. Yetkileri onaylar veya kaldırılmasını işaretler.

3. Süreç sonunda IAM ekibinin kurgusuna göre yetki veya roller çalışanlardan direkt kalkabilir veya kurguya göre IAm ekibi, Bilgi Güvenliği ekiplerinin gözden geçirmesi sonrasında otomatik olarak işaretlenen yetki matrisi güncellenir.

4. **Güncellemelerin Yapılması:** Gerekli olmayan yetkiler IAM sistemi aracılığıyla kaldırılır ya da düzenlenir.

### Zero-Trust Modeli ile Uyum

Access Certification, Zero-Trust güvenlik modelinin mantığıyla birebir uyumludur. Zero-Trust, “Asla güvenme, daima doğrula” prensibini temel alır. Bu model, çalışanların sahip olduğu tüm erişimlerin sürekli olarak doğrulanmasını ve yalnızca ihtiyaç duyulan yetkilerin verilmesini gerektirir.

Access Certification süreci:

- Kullanıcıların sahip olduğu yetki ve rollerin gerekliliğini sorgular.
- Yetkilerin işlevselliğini ve güvenliğini koruyarak şirket genelinde daha şeffaf bir yetki yapısı oluşturur.

### Entitlement Owner: İkinci Bir Kontrol Katmanı

Access Certification'ı daha etkin hale getirmek için şirketinizde bir **Entitlement Owner (Yetki/Rol Sahibi)** kavramı oluşturabilirsiniz.

- Her yetki veya rolün bir sahibinin olması, gözden geçirme sürecinde ek bir denetim sağlar.

Ye- tki sahibi, bu rolün şirket içindeki amacını ve kritikliğini daha iyi anlayarak, ilgili yetkinin gerçekte kime verilmesi gerektiğine karar verir.

Bu model, yetkilerin yönetici tarafından gözden geçirilmesine ek bir çift katmanlı kontrol sistemi ekler.


Kullanıcı yaşam döngüsü boyunca birçok yetki, rol veya erişim talep edilir. Access Certification sayesinde, bu erişimlerin düzenli olarak incelenmesi, **need-to-know** ve **need-to-access** prensiplerine uygun bir yapı oluşturur. Yılda bir kez gerçekleştirilecek kapsamılı bir gözden geçirme:

- Yetkisiz erişimlerin önüne geçer,
- Organizasyonun genel güvenlik yapısını güçlendirir,
- Daha verimli ve güvenli bir iş ortamı yaratır.

Şirketinizde bu süreci uygulamaya koyarak, IAM stratejinizi bir adım ileri taşıyabilir ve Zero-Trust modeline uygun bir güvenlik altyapısı oluşturabilirsiniz.

Ayrıca konuyla ilgili daha öncesinde yazmış olduğum şu yazılar konuyu detaylandırmak için faydalı olacaktır.

[Yetki ve Rol Sahiplerinin Gözden Geçirme Süreci](https://omermertkaya.github.io/posts/rol-yetki-sahibi-gozden-gecirme-sureci/)

[Kimlik ve Erişim Yönetiminde Yetki Gözden Geçirme Çalışmaları](https://omermertkaya.github.io/posts/rol-yetki-gozden-gecirme/)

[Kullanıcı Yetki Gözden Geçirme Süreci Raporlama(Dashboard)](https://omermertkaya.github.io/posts/kullanici-yetki-gozden-gecirme-rapor/)


<img src="/images/access-certification/access-certification.png" alt="sunucu goruntusu" style="width:75%;">