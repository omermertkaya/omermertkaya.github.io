+++
title = 'Kimlik ve Erişim Yönetiminde Abstraction Kavramını İnceleyelim'
date = 2024-12-15T14:49:06+03:00
draft = false
tags = ['Kimlik Yönetimi', 'Erişim Yönetimi', 'kimlik ve erişim yönetimi', 'Abstraction Soyutlama', 'Dijital Güvenlik', 'Rol Tabanlı Erişim Kontrolü RBAC']

+++

Kimlik ve Erişim Yönetiminde kavramlar serisinde **Abstraction (Soyutlama)** kavramını hep birlikte inceleyelim.

**Abstraction (Soyutlama)**, işlemlerin veya yetkilerin tekrarlayan yönlerini tanımlayıp izole etme pratiğidir. Bu sayede, bu yönler tek bir yerde yönetilebilir ve birçok yerde referans alınabilir. Bu yaklaşım, karmaşık yapıları sadeleştirir ve daha yönetilebilir bir sistem oluşturur.

### Aşağıdaki gibi bir Örnek Uygulama Düşünelim

- Sayfa1 Görme
- Sayfa2 Görme
- Sayfa3 Görme
- Sayfa4 Görme
- Sayfa1Buton1 Tıklayabilme
- Sayfa1Buton2 Tıklayabilme
- Sayfa1Buton3 Tıklayabilme
- Sayfa1Buton4 Tıklayabilme
- Sayfa2Buton1 Tıklayabilme
- Sayfa2Buton2 Tıklayabilme
- ...
- ...
- ...
- Sayfa50ButonX Tıklayabilme
- Sayfa50TextBox Düzenleyebilme

<img src="/images/abstraction-kavramini-inceleyelim/iam-abstraction.jpg" alt="iam abstraction(soyutlama)" style="width:100%;">




TToplamda işlemler için **permission (izin)** bazında 150 tane yetki olduğunu varsayalım.

Bu tarz bir senaryoda **Abstraction (Soyutlama)** uygulanmadığı durumda, “X kullanıcısının yetkilerini kontrol eder misiniz?” gibi bir soru yöneticiler veya kullanıcılar için karmaşık ve yönetilemez bir hale gelir.


### Soyutlama ile Çözüm: Roller

Bu karmaşıklığı gidermek için, bu yetkilerin bütününü **rol** mantığına taşıyabiliriz.

**Örneğin:**
“Finans Çalışanı Örnek Uygulama Rolü” adıyla bir rol oluşturabiliriz ve bu rolü şu şekilde tanımlayabiliriz:

>  Finans çalışanlarının, Örnek Uygulama içerisinde finans bölümü için görüntüleme, yazma ve butonlara basarak işlem atayabilme yetkilerine sahip olduğu roldür.

Bu tanımla birlikte, şirketimizdeki tüm paydaşlar bu role baktığında rolün amacını ve kapsamını kolayca anlayabilir. Ayrıca, bu rol üzerinden yetkiler daha hızlı atanabilir ve yönetilebilir hale gelir.

### Avantajları

- Kolay Anlaşılırlık: Rollerin anlamı ve kapsamı, bireysel yetki listelerine göre daha rahat anlaşılır.
- Verimlilik: Yetkilerin toplu yönetimi sayesinde zaman kazandırır.
- Güvenlik: Yetki dağılımı daha kontrollü ve düzenli olur. Yanlış izin atama riski azalır.

Sorulara Hızlı Yanıt: Bu rol yapısı sayesinde, bir kullanıcının yetkileri hakkındaki sorular daha kolay cevaplanabilir.

### Sonuç

Kimlik ve Erişim Yönetimi alanında Abstraction (Soyutlama), karmaşık ve tekrarlayan izin yönetimi işlemlerini sadeleştirerek şirketlere büyük bir kolaylık sağlar. Bu yöntemi uygulayarak, ekibinizin ve yöneticilerinizin süreçleri daha etkin bir şekilde yönetmesine olanak tanırsınız.


