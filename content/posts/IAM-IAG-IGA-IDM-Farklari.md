
+++
title = 'IAM & IAG & IGA & IDM Kavramları ve Farkları'
date = 2025-02-16T22:00:00+03:00
draft = false
tags = ['IAM','IAG','IGA','IDM','Kavramları']
+++

Günümüzde Kimlik ve Erişim Yönetimi ürünleri çok çeşitli konularda yardımcımız olmaya devam ediyor.
Genellikle kısaltma olarak söylemesi kolay olduğu için IDM'in kullandığını düşünüyorum.

Kimlik ve Erişim Yönetimi alanında çalışanlarla yaptığım sohbetlerde genel olarak IDM diyoruz.
Fakat IAM, IGA; IAG, IDM aslında kendilerine has özellikler barından aynı amaca yönelik farklı özellikleri barından ürünler diyebiliriz.

Öncelikle IAM'dan başlamak istiyorum.

### IAM Nedir?

IAM açılımı Identiy and Access Management, kimlik ve erişim yönetimi olarak dilimizde ifade edebiliriz.
IAM kimlik doğrulama(authentication), yetkilendirme(authorization) süreçlerinin yürütülmesini sağlayan genel bir ifadedir.
Temelde hep bahsettiğimiz doğru kaynaklara, doğru zamanda, doğru kişilerin, doğru yetkilerle erişmesini güvence altına alır.

### IAG Nedir?

IAG açılımı Identity and Access Governance, kimlik ve erişim yönetişimi olarak dilimizde ifade edebiliriz.
Yönetişim dediğimizde çok sık kullandığımız bir kelime olmadığı için yönetiminden ne farkı var ki diye düşünebiliriz.

IAM'ın daha çok yönetimsel ve denetleyici bileşeğini olarak düşünebiliriz.

- Yetki gözden geçirme (Access Review)
- Uyumluluk raporlaması (SOX, GDPR vb.)

konu başlıkları bize yönetişimden doğan uyumlanmayı hatırlatabilir.

### IGA Nedir?

IGA açılımı Identiy Governance and Administration, kimlik yönetişimi ve yönetimi olarak dilimizde ifade edebiliriz.

IGA, IAM ve IAG'ın bileşenidir. Yani kimliklerin yönetimi, yönetişimi ve erişim gibi tüm süreçleri kapsar.

- Kullanıcı yaşam döngüsü yönetimi
- Otomatik yetkilendirme ve yetki kaldırma
- Uyumluluk ve denetim süreçleri
- Raporlama ve analitik


<img src="/images/IAM-IAG-IGA-IDM-Farklari/iga-idm-iam.png" alt="IAM IGA IDM Farkları" style="width:100%;">



### IDM Nedir?

IDM açılımı Identity Management , kimlik yönetimi olarak dilimizde ifade edebiliriz.
Kullanıcı yaşam döngüsüne (onboarding, role change, offboarding) odaklanır. Kimliklerin açılması yani kullanıcıların oluşturması ve yönetimi, kimliklerin uygun dizinlerde saklanması ve self servis şifre yönetimi gibi süreçleri yönetir.



| Kavram  | Açıklama  | Öne Çıkan Özellikler  |
|---------|----------|----------------------|
| **IAM** | Kimlik ve erişimi yöneten genel sistem | Kullanıcı yönetimi, kimlik doğrulama, yetkilendirme |
| **IAG** | IAM süreçlerinin yönetişimi ve uyumluluk yönetimi | Denetim, yetki gözden geçirme, uyumluluk politikaları |
| **IGA** | Kimlik yönetimi ve yönetişim süreçlerinin birleşimi | IAM ve IAG birleşimi, otomasyon, denetim ve yönetim |
| **IDM** | Kimlik bilgilerini ve kullanıcı yaşam döngüsünü yöneten süreç | Kullanıcı yönetimi, hesap oluşturma, şifre politikaları |

