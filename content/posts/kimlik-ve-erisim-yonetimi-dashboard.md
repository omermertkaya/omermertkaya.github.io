
+++
title = 'Kimlik ve Erişim Yönetimi(IAM) Dashboard Örneği - Metrikler'
date = 2024-06-30T12:00:00+03:00
draft = false
tags = ['kimlik ve erişim yönetimi','identity and access management','iam metrics','iam dashboard']
+++


Kimlik ve Erişim Yönetimi (IAM) ile yaptığımız entegrasyonlarla birçok işlem ve süreci otomatikleştiriyoruz. Peki, otomatikleştirdiğimiz bu süreçlerin metriklerini ve yaptığımız işin kalitesini doğru gösterebiliyor muyuz?

Bu sorudan yola çıkarak bazı araştırmalar yaptım ve bir dashboard tasarlamaya karar verdim. Sizlerle paylaşacağım bu dashboard ile IAM'in her zaman yaptığı, sıradanlaşmış olan işlerin ne kadar değerli olduğunu vurgulamayı amaçlıyorum. Ayrıca bu vurguyu yaparken daha anlaşılabilir ve takip edilebilir bir yapı sunacağını düşünüyorum. Örneğin, onboarding ve offboarding süreçlerinde hesapların açılması-kapatılması işlemlerinin hepsini otomatik olarak IAM'ın yaptığını biliyoruz. Peki kaç adet bu şekilde işlem yaptığını bar grafikte ay bazlı görüyor olmak nasıl olurdu?

IAM ekibi ile onlarla dirsek temasında olan diğer ekipler Kimlik ve Erişim Yönetimi'nin faydaları konusunda bilgi sahibi olsa da IAM'i daha iyi ifade etmemiz gerektiğinde bu dashboard'ın çok katkı sağlayacağını düşünüyorum. Dashboard'un genel hatlarıyla tasarımını oluştururken, istatistikleri yetkilendirme (authorization) süreçlerinin yönetimi üzerinden değerlendirdim. Giriş yapma (authentication) tarafında ihtiyaçlar doğrultusunda farklı grafikler de ekleyebilirsiniz. Kodları GitHub hesabımda paylaşacağım ve siz de bu metrikleri kolayca düzenleyebilirsiniz. Dashboard tasarımını yaparken Chart.js ve Bootstrap'ten yararlandım.

Dashboard tasarımının resim olarak örneğini aşağıda yer verdim. Chart.js sayesinde html olarak paylaştığınızda grafiklerin daha dinamik bir yapıya sahip olduğunu belirtmek isterim.

HTML Live Dashboard olarak görüntülemek isterseniz [buraya tıklayın](/pdf/kimlik-ve-erisim-yonetimi-dashboard/dashboard_TR.html).

PDF olarak indirmek isterseniz [buraya tıklayın](/pdf/kimlik-ve-erisim-yonetimi-dashboard/dashboard_TRPDF.pdf).

<img src="/images/kimlik-ve-erisim-yonetimi-dashboard/Dashboard.png" alt="AltText">

Bu dashboard ile IAM’in değerini ve katkısını görselleştirerek anlatmak yaptığımız işin daha anlaşılır olmasını sağlayacaktır. Dashboard'un tasarımında kullanılan Chart.js ve Bootstrap, hem esneklik hem de görsel zenginlik sağlar.

GitHub hesabımdan kodları indirerek siz de kendi ihtiyaçlarınıza göre uyarlayabilirsiniz: https://github.com/omermertkaya/iam-dashboard

