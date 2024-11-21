+++
title = 'Rol ve Yetki Sahiplerinin Gözden Geçirme Süreci'
date = 2024-11-21T21:30:49+03:00
draft = false
tags = ['Kimlik ve Erişim Yönetimi (IAM)', 'Yetki Gözden Geçirme', 'Erişim Yönetimi', 'Rol ve Yetki Yönetimi', 'Yetkilendirme', 'Siber Güvenlik', 'Self Servis', 'Güvenlik Sıkılaştırması', 'Erişim Kontrolü']
+++


Kimlik ve Erişim Yönetimi (IAM) sistemlerinin en önemli bileşenlerinden biri, kullanıcı yetkilerinin düzenli olarak gözden geçirilmesidir. Bu süreç, organizasyonun güvenlik ve işlevsellik standartlarını sürdürebilmesi açısından kritik öneme sahiptir. Yıllık olarak gerçekleştirilebilecek bu süreci iki temel adımda ele alabiliriz:  

1. **Yöneticilerin ekiplerindeki çalışanların rol ve yetkilerini gözden geçirmesi.**  
2. **Rol ve yetki sahiplerinin, sorumluluğunda olan rol ve yetkileri değerlendirerek bu rollerdeki kullanıcıları gözden geçirmesi.**  

Bu yazıda, ikinci adımı detaylandıracağız: **"Rol ve Yetki Sahiplerinin Yetki Gözden Geçirme Süreci."**  

## Sürecin Amacı  
Organizasyondaki tüm rol ve yetki sahiplerinin aktif katılımını gerektirir. Amacı, sorumluluğunda bulunan rollerdeki çalışanların yetki ve sorumluluklarını yeniden değerlendirerek organizasyonun işleyişine uygun hale getirmektir.  

Yöneticiler tarafından onaylanmış olsa dahi, yetki sahibi kişinin sorumluluğunda bulunmaması gereken durumlar bu süreçte tespit edilerek gerekli aksiyonlar alınır. Bu adım, güvenlik sıkılaştırma önlemlerine somut bir katkı sağlar.  

## Sürecin İşleyişi  
Rol ve yetki sahipleri, gözden geçirme sürecinde aşağıdaki aksiyonları alabilir:  

- **Rol veya yetkiden kullanıcı çıkarma veya kullanıcı onaylama**
  İlk adım olarak sahibi olduğu rol ve yetkilerdeki kullanıcıları(çalışanları) gözden geçirir. Bu süreçte rol veya yetki sahibi olarak ilgili rolün veya yetkinin ne işe yaradığını şirkette en iyi değerlendirebeilcek kişi bu rol veya yetkinin sahibidir. Gözden geçirmesinin temel amacı bu değerlendirmeyi yaparak güvenlik sıkılaştırması sağlamaktır.

- **Kullanılmayan yetkilerin tespiti ve kaldırılması:**  
  Eğer bir yetki artık kullanılmıyorsa, bu durum Kimlik ve Erişim Yönetimi ekibine bildirilir ve yetkinin silinmesi talep edilebilir veya bu süreci yapabileceği bir ekran sürecinden bildirim gerçekleştirebilir.  
- **Rollerdeki güncellemelerin bildirilmesi:**  
  Eğer bir rol içeriğinde değişiklik olmuşsa, bu değişiklikler Kimlik ve Erişim Yönetimi ekibine iletilir veya bir self servis ekranı üzerinden güncellemeler yapılır. Örneğin role ihtiyaç kalmamış ise tamamen silinmesi veya içeriğindeki yetkilerin güncellenmesi

<img src="/images/rol-yetki-sahibi-gozden-gecirme-sureci/rol-yetki-gozden-gecirme.png" alt="Yetki_Gozden_gecirme" style="width:100%;">



## Self Servis ve İletişim Kanalları  
Rol ve yetki sahiplerinin bu süreci kolaylıkla yönetebilmeleri için bir **self servis ekranı** kullanılır. Bu ekran üzerinden yetki veya rol değişiklik talepleri hızlı ve verimli bir şekilde iletilmesini sağlar. IAM ürünlerinin sunmuş olduğu yetki gözden geçirme kampanya ekranlarının özelliklerine göre yukarıdaki süreçler kurgulanabilir. Bazı süreçler desteklenmediği durumlarda servis masası uygulamalarından da süreç kurgusunda destek alınabilir.

## Sonuç  
Yetki gözden geçirme süreçleri, organizasyonel verimliliği artırırken güvenlik risklerini minimize eden önemli bir adımdır. Rol ve yetki sahiplerinin sorumluluklarının bilincinde hareket ederek bu süreçlere aktif katılım göstermesi, Kimlik ve Erişim Yönetimi uygulamalarının başarısını doğrudan etkiler.  