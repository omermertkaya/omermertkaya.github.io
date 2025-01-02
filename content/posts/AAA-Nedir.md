+++

title = 'Authentication, Authorization, Accounting (AAA) Nedir?'

date = 2025-01-02T18:57:49+03:00

draft = false

tags = ['Kimlik Yönetimi', 'Erişim Yönetimi', 'kimlik ve erişim yönetimi', 'AAA Nedir', 'Dijital Güvenlik', 'Siber Güvenlik','IDM Kavramları','IAM Kavramları','Kimlik Doğrulama','Authorization','Accounting']

+++

Siber güvenlikte sorunların tespitinde ve yapılandırılmasında birçok kavram kullanıyoruz. Bunlardan belki en çok bilinen ve temel olanlardan biri CIA'dir.

**CIA**: Confidentiality (Gizlilik), Integrity (Bütünlük) ve Availability (Erişilebilirlik) kavramlarından oluşur.

Bu yazımızda ise buna benzer bir kavram ama daha az duyulan, kimlik ve erişim yönetiminin temellerinden biri olan **AAA** kavramını inceleyeceğiz. **AAA**, Authentication (Kimlik Doğrulama), Authorization (Yetkilendirme) ve Accounting (Kullanıcı Kayıtlarını Tutma) ifadelerinin kısaltmasıdır.

### Authentication (Kimlik Doğrulama)

- Authentication, kullanıcının gerçekten iddia ettiği kişi olduğunu doğrulama sürecidir. 
- Genellikle bilgisayar sistemlerinde kullanıcı adı, e-posta ve şifre ile doğrulama yapılır. Gerçek hayatta düşündüğümüzde, bu süreci kimlik kartımızı göstermek gibi düşünebiliriz.
- Kullanıcı bilgileri doğrulandıktan sonra kimlik doğrulama işlemi tamamlanır.
- İlginç bir örnek olarak, yazıcıdan çıktı almak için TC kimlik kartınızı okutarak size ait çıktıların yazıcıdan alınmasını sağlayabilirsiniz.

### Authorization (Yetkilendirme)

- Authorization, kullanıcının sistemde neler yapabileceğini belirler. Örneğin, hangi web sayfalarına erişebileceği (VPN Yetkilendirmesi), ortak alanda okuma-yazma-silme işlemlerini hangi klasörlerde gerçekleştirebileceği veya bir web sayfasında hangi işlemleri yapabileceği gibi hakları tanımlar.
- Yetkilendirme, kullanıcının özelliklerine göre rol tabanlı olarak verilebilir veya belirli ilke ve koşullara göre şekillendirilebilir.

### Accounting (Kayıt Tutma)

- Accounting, kullanıcının aktivitelerinin detaylı bir şekilde kaydedilmesidir.
- Kullanıcının sisteme giriş saatinin, yaptığı işlemlerin ve giriş yaptığı IP adresinin kayıt altına alınması gibi detayları içerir.
- Ayrıca, kullanıcının hangi yetkilerle hangi işlemleri gerçekleştirdiği, işlemi yaparken hata alıp almadığı gibi bilgiler de detaylı bir şekilde loglanır.


<img src="/images/aaa-nedir/aaa-nedir.png" alt="AAA Nedir" style="width:65%;">



