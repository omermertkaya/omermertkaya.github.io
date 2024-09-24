+++
title = 'Kimlik ve Erişim Yönetimi Tedbirleri: Cumhurbaşkanlığı Bilgi Güvenliği Rehberi Perspektifine Göz Atalım'
date = 2024-09-24T21:31:21+03:00
draft = false
tags = ['kimlik ve erişim yönetimi', 'identity and access management','bilgi ve iletişim güvenliği', 'siber tedbirler',]
+++


Kimlik ve erişim yönetimi(IDM/IAM) artık standartlamış olan doğru kişilerin, doğru kaynaklara, doğru zamanda ve doğru nedenlerle erişebilmelerinin alt yapısını oluşturur.
Cumhurbaşkanlığı Dijital Dönüşüm Ofisi öncülüğünde yayınlamış olan ["Bilgi ve İletişim Güvenliği Rehberi"](https://cbddo.gov.tr/SharedFolderServer/Genel/File/bg_rehber.pdf)
bizlere "Kimlik Doğrulama ve Erişim Yönetimi" alanında yol gösterici bir kaynak niteliği taşımaktadır. Bu rehberi detaylı bir şekilde incelemek, Bilgi ve İletişim Güvenliği'nin genel hatlarını daha iyi anlamamıza olanak tanır. Her bir başlık farklı uzmanlık alanlarını temsil etse de, bu alanlar hakkında genel bir bilgi sahibi olmak birçok noktada değer katacaktır.

Rehberin "3.1.12 Kimlik Doğrulama ve Erişim Yönetimi" başlığı altında yer alan tedbirler ve denetimler bölümü, IAM ekibinde çalışanlar için oldukça faydalıdır. Denetimler bölümünde, şirket içinden veya dışından denetimcilerin "Kimlik ve Erişim Yönetimi" alanında sorabilecekleri başlıkları görmek, bu tarz denetim süreçlerini daha etkili yönetmek açısından önemlidir.

Ayrıca, bu denetim başlıkları sadece birer kontrol aracı olarak değil, aynı zamanda daha katma değerli bir "Kimlik ve Erişim Yönetimi" süreci oluşturmak için de yıllık olarak IAM ekibinin kendisine sorması gereken önemli soru setlerini oluşturur. Bu tarz bir gözden geçirme ile hangi başlıklarda ne tür iyileştirmeler yapıldığını belirlemek mümkün olacaktır.


## Tedbirler

| **Tedbir No** | **Tedbir Seviyesi** | **Tedbir Adı**                          | **Tedbir Tanımı**                                                                                                                                                          |
|--------------|-------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.1.12.1     | 1                 | Erişim Kontrol Politikasının Oluşturulması ve Uygulanması | Erişim kontrol politikaları oluşturulmalı, uygulanmalı ve periyodik olarak güncelliği kontrol edilmelidir. Kullanıcı hesap işlemleri ve erişim talepleri süreçlerle takip edilmeli ve kayıt altına alınmalıdır. |
| 3.1.12.2     | 1                 | Kullanıcı Hesaplarının Yönetimi         | Her kullanıcı için benzersiz bir hesap tanımlanmalı, parolalar güvenlik standartlarına uygun olmalıdır.                                                                     |
| 3.1.12.3     | 1                 | Başarısız Oturum Açma Denemelerinin Yönetimi | Oturum açma saldırılarını engellemek için uygun güvenlik önlemleri (istek sınırlandırma, IP bloklama, CAPTCHA vb.) alınmalı ve başarısız denemeler kayıt altına alınmalıdır. |
| 3.1.12.4     | 1                 | Varsayılan Kullanıcıların ve Parolaların Değiştirilmesi | Varsayılan kullanıcı adı ve parolalar kullanılmamalıdır. Test ortamlarındaki varsayılan kullanıcılar ve parolalar canlıya alınmadan önce silinmeli veya değiştirilmelidir.  |
| 3.1.12.5     | 1                 | Yönetici Hesaplarının Kullanımı         | Sistem yöneticilerinin yüksek haklar gerektiren işlemleri için ayrı hesapları olmalı ve bu hesaplarla yapılan işlemler denetim kayıtlarıyla izlenmelidir.                   |
| 3.1.12.6     | 1                 | İşlem Yapılmayan Oturumların Sonlandırılması | İşlem yapılmayan oturumlar belirli bir süre sonra sonlandırılmalıdır.                                                                                                      |
| 3.1.12.7     | 1                 | Kimlik Doğrulama                       | Kurum kaynaklarına erişimlerde kimlik doğrulama mekanizmaları kullanılmalıdır.                                                                                              |
| 3.1.12.8     | 1                 | Kullanıcı Yetkilerinin Güncellenmesi    | Sistem yöneticilerinin ve kullanıcıların yetkileri düzenli gözden geçirilmeli, görev değişikliklerinde yetkiler güncellenmeli ve gereksiz yetkiler iptal edilmelidir.       |
| 3.1.12.9     | 1                 | Kurum Dışı Paydaşların Uzaktan Erişimi  | Kurum dışı paydaşların uzaktan erişimi kurum personelinin onayı olmadan yapılmamalı ve çok faktörlü kimlik doğrulama, erişim iz kayıtları gibi güvenlik önlemleri alınmalıdır. |
| 3.1.12.10    | 2                 | Kullanılmayan Hesapların Devre Dışı Bırakılması | Kullanılmayan veya ilişkilendirilemeyen tüm hesaplar belirli bir süre kullanılmadığında otomatik olarak devre dışı bırakılmalıdır.                                           |
| 3.1.12.11    | 2                 | Yönetici Hesaplarının İşletimi          | Tüm yönetici hesapları otomatik araçlarla yönetilmeli ve çok faktörlü kimlik doğrulama kullanılmalıdır. Yönetici giriş denemeleri kayıt altına alınmalıdır.                |
| 3.1.12.12    | 2                 | Betik Dillerinin Kullanımına Yönelik Erişimin Sınırlandırılması | Betik dosyası oluşturma araçlarına (PowerShell, Python vb.) erişim, yalnızca iş amaçları doğrultusunda yetkili hesaplarla sınırlandırılmalıdır.                             |
| 3.1.12.13    | 2                 | Kimlik Yönetim ve Doğrulama Sistemlerinin Envanterinin Tutulması | Kurumun tüm kimlik doğrulama sistemlerinin ve entegre uygulamalarının envanteri tutulmalıdır.                                                                                |
| 3.1.12.14    | 2                 | Merkezi Kimlik Doğrulama               | Kimlik doğrulama merkezi olarak yapılmalı, merkezi sistemin olmadığı durumlarda risk analizi doğrultusunda telafi edici önlemler alınmalıdır.                              |
| 3.1.12.15    | 2                 | Çok Faktörlü Kimlik Doğrulama Yapılması | Kurum ağına dışarıdan yapılan erişimlerde çok faktörlü kimlik doğrulaması kullanılmalıdır.                                                                                  |
| 3.1.12.16    | 2                 | Kimlik Doğrulama Bilgilerinin Güvenli Olarak Saklanması | Tüm kimlik doğrulama bilgileri güçlü kriptografik algoritmalar kullanılarak saklanmalı ve şifreli kanallar üzerinden iletilmelidir.                                         |
| 3.1.12.17    | 2                 | Servis Hesaplarının Yönetimi            | Servis hesapları en az yetki prensibiyle oluşturulmalı ve düzenli olarak gözden geçirilmelidir. Kullanıcı hesapları servis hesabı olarak kullanılmamalıdır.                |
| 3.1.12.18    | 3                 | Hesap Giriş Davranışlarında Değişikliklerin Saptanması | Kullanıcı davranışları güvenlik ihlal durumlarına karşı izlenmeli ve alarm mekanizmaları devreye alınmalıdır.                                                              |
| 3.1.12.19    | 3                 | Oturum Kayıtlarının Tutulması           | Gizlilik dereceli verilerin işlendiği sistemlerde oturumlar kayıt altına alınmalı ve doğrulaması yapılmalıdır.                                                              |
| 3.1.12.20    | 3                 | Sistem Yöneticisi Görevlerinin Güvenliği | Sistem yöneticileri yalnızca yönetimsel haklar gerektiren işleri yapmalı, bu yetkiler yılda en az bir kez gözden geçirilmelidir.                                            |
| 3.1.12.21    | 3                 | Veri ve Parola Güvenliğinin Sağlanması  | Veri ve parola güvenliği için otomatik parola yönetim aracı (password vault) kullanılmalıdır.                                                                               |


## Denetimler


| **Tedbir No**  | **Tedbir Adı**                            | **Denetim Yöntem Önerileri**   | **Denetim Soru Önerileri**                                                                                                                                                           |
|----------------|-------------------------------------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.1.12.1       | Erişim Kontrol Politikasının Oluşturulması ve Uygulanması | Mülakat, Gözden Geçirme        | Erişim kontrol politikaları oluşturulmakta mıdır? Politika kapsamında kullanıcı hesap işlemleri ve erişim taleplerinin yönetilmesine ilişkin nasıl bir süreç tanımlanmaktadır?         |
| 3.1.12.2       | Kullanıcı Hesaplarının Yönetimi           | Mülakat, Güvenlik Denetimi     | Kullanıcı hesaplarının yönetimine ilişkin hangi bilgi güvenliği kontrolleri uygulanmaktadır?                                                                                           |
| 3.1.12.3       | Başarısız Oturum Açma Denemelerinin Yönetimi | Mülakat, Sızma Testi           | Oturum açma mekanizmasına yapılacak saldırıları engellemek amacıyla hangi güvenlik önlemleri alınmaktadır? Başarısız oturum açma denemeleri kayıt altına alınmakta mıdır?             |
| 3.1.12.4       | Varsayılan Kullanıcıların ve Parolaların Değiştirilmesi | Mülakat, Sızma Testi           | Kurum bilgi sistemlerinde yer alan varlıkların varsayılan parolaları değiştirilmekte midir? Test çalışmalarında varsayılan parolalar değiştirilmekte midir? Kullanılmayan varsayılan hesaplar silinmekte midir? |
| 3.1.12.5       | Yönetici Hesaplarının Kullanımı           | Mülakat, Sızma Testi           | Kurumda sistem yöneticileri, yönetimsel işlemler için ayrı bir hesap kullanmakta mıdır? Yöneticiler hedef cihazlara nasıl erişim sağlamaktadırlar?                                      |
| 3.1.12.6       | İşlem Yapılmayan Oturumların Sonlandırılması | Mülakat, Sızma Testi           | İşlem yapılmayan oturumlar belirli bir süre sonra sonlandırılmakta mıdır?                                                                                                             |
| 3.1.12.7       | Kimlik Doğrulama                         | Mülakat, Sızma Testi           | Kurum kaynaklarına erişimlerde hangi kimlik doğrulama mekanizmaları kullanılmaktadır?                                                                                                 |
| 3.1.12.8       | Kullanıcı Yetkilerinin Güncellenmesi      | Mülakat, Gözden Geçirme        | Sistem yöneticilerinin ve kullanıcılarının hakları düzenli aralıklarla gözden geçirilmekte midir? Kimlik doğrulama sistemi tarafından düzenlenen tüm hesapların envanteri tutulmakta mıdır? Görevi sona eren hesaplar devre dışı bırakılmakta mıdır? Bu işlem için otomatik bir süreç oluşturulmuş mudur? Devre dışı bırakılan hesaplara yapılan erişim denemeleri izlenip, kayıt altına alınmakta mıdır? |
| 3.1.12.9       | Kurum Dışı Paydaşların Uzaktan Erişimi    | Mülakat, Güvenlik Denetimi     | Kurum dışı paydaşların kurum sistemlerine uzaktan erişimi kapsamında hangi güvenlik kontrolleri uygulanmaktadır?                                                                       |
| 3.1.12.10      | Kullanılmayan Hesapların Devre Dışı Bırakılması | Mülakat, Güvenlik Denetimi     | Bir iş süreci veya kurum çalışanı ile ilişkilendirilemeyen tüm hesaplar devre dışı bırakılmakta mıdır?                                                                                 |
| 3.1.12.11      | Yönetici Hesaplarının İşletimi            | Mülakat                       | Kurumda yönetim hesaplarının envanteri tutulmakta mıdır? Bu işlem otomatik araçlarla mı yapılmaktadır? Yönetici hesap erişimleri nasıl yapılmaktadır?                                  |
| 3.1.12.12      | Betik Dillerinin Kullanımına Yönelik Erişimin Sınırlandırılması | Mülakat, Güvenlik Denetimi     | Kurum bilgisayarlarında betik çalıştırma yetkisi hangi kullanıcılara verilmektedir?                                                                                                   |
| 3.1.12.13      | Kimlik Yönetim ve Doğrulama Sistemlerinin Envanterinin Tutulması | Mülakat, Gözden Geçirme        | Yerel veya uzak servis sağlayıcılarında bulunanlar da dahil olmak üzere, kurumun tüm kimlik sağlayıcılarının envanteri tutulmakta mıdır?                                               |
| 3.1.12.14      | Merkezi Kimlik Doğrulama                 | Mülakat, Güvenlik Denetimi, Sızma Testi | Kurum mümkün olan tüm durumlarda kimlik denetimini merkezi olarak yapmakta mıdır?                                                                                                     |
| 3.1.12.15      | Çok Faktörlü Kimlik Doğrulama Yapılması   | Mülakat, Güvenlik Denetimi     | Kurum tarafından yapılan kimlik denetimlerinde çok faktörlü kimlik doğrulama mekanizmasının uygulanmadığı yerler var mıdır?                                                           |
| 3.1.12.16      | Kimlik Doğrulama Bilgilerinin Güvenli Olarak Saklanması | Mülakat, Güvenlik Denetimi     | Kimlik doğrulama bilgilerinin saklanmasına yönelik hangi güvenlik önlemleri alınmaktadır? Kurumun tüm kimlik doğrulama bilgileri şifreli kanallar üzerinden iletilmekte midir? Alınan önlemler yetkili kurumlarca test edilmiş midir? |
| 3.1.12.17      | Servis Hesaplarının Yönetimi              | Mülakat, Güvenlik Denetimi     | Servis hesapları erişim yetkileri nasıl tanımlanmaktadır? Servis hesaplarına yönelik gözden geçirme süreci nasıl işletilmektedir? Kullanıcı veya yetkili hesaplar servis hesabı olarak kullanılmakta mıdır? |
| 3.1.12.18      | Hesap Giriş Davranışlarında Değişikliklerin Saptanması | Mülakat                       | Kullanıcı hesap giriş davranışları düzenli olarak izlenmekte midir? Kullanıcı rolü ve yetki seviyesi değişiklikleri gibi durumlarda alarm oluşturulmakta mıdır?                        |
| 3.1.12.19      | Oturum Kayıtlarının Tutulması             | Mülakat, Güvenlik Denetimi     | Gizlilik dereceli verilerin saklandığı/işlendiği sistemler üzerinde açılan oturumlar sırasında gerçekleştirilen faaliyetler kayıt altına alınmakta mıdır? Alınan kayıtların doğrulaması nasıl yapılmaktadır? |
| 3.1.12.20      | Sistem Yöneticisi Görevlerinin Güvenliği  | Mülakat, Güvenlik Denetimi     | Tüm yönetimsel görevler yönetim dışı faaliyetler için kullanılmayan belirli bilgisayarlar üzerinden mi yapılmaktadır? Yetkilendirmeler periyodik olarak gözden geçirilmekte midir?       |
| 3.1.12.21      | Veri ve Parola Güvenliğinin Sağlanması    | Mülakat, Sızma Testi           | Veri ve parolaların güvenliği için otomatik parola yönetim aracı (password vault) kullanılmakta mıdır?                                                                                 |


<br>

<img src="/images/kimlik-ve-erisim-yonetimi-bilgi-ve-iletisim-guvenligi-rehberinden/bgrehbermavi1.png" alt="AltText">




# 3.2.3. Yetkilendirme

Yetkilendirme bölümünde "Kimlik ve Erişim Yönetimi" faaliyetlerinin temelini oluşturan başlılarından oluştuğunu görüyoruz.
Bu bölümde özellikle rehberinde en az yetki prensibini uygulamaya atıf yapması, bu kurgunun ne kadar değerli olduğunu göstermektedir.


### Tedbirler

| Tedbir No. | Tedbir Seviyesi | Tedbir Adı                                            | Tedbir Tanımı                                                                                      |
|------------|------------------|------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| 3.2.3.1    | 1                | Yetki Denetimi                                       | Kullanıcıların uygulamaya erişimlerini tanımlayan yetki matrisi oluşturulmalı ve belirli aralıklarla güncellenmelidir. Kullanıcı sadece yetkilendirildiği uygulama bileşenlerine ve kaynaklara erişebilmeli ve bunları kullanabilmelidir. Uygulamaya yapılan her istek için yetki denetimi kontrolü uygulanmalıdır. |
| 3.2.3.2    | 1                | Kritik Veriye ve Kaynaklara Erişimlerin Kayıt Altına Alınması | Uygulama, yönettiği veriye ve kaynaklara erişimleri kayıt altına alabilmek için denetim kayıtları üretebilmelidir. Bk. Tedbir No: 3.1.8.1                                       |
| 3.2.3.3    | 1                | En Az Yetki Prensibinin Uygulanması                  | Kullanıcılara verilecek yetkiler, yürütülen görevler ve ihtiyaçlar doğrultusunda belirlenmelidir. En az yetki prensibine göre kullanıcının gerçekleştirebileceği ilgili işlemler için gereken asgari yetkilerin haricinde bir ayrıcalık tanımlanmamalıdır. |
| 3.2.3.4    | 3                | İçerik Duyarlı ve Gelişmiş Erişim Denetimi          | Uygulama içerik duyarlı (zaman, konum, IP adresi gibi öznitelikler) erişim denetimi yapabilmelidir. Uygulama; fonksiyonlara, kaynaklara, veriye erişim sürelerini, kullanım oranlarını veya kullanım sıklığını sınırlandırabilmelidir. |

### Denetim Maddeleri

| Tedbir No. | Tedbir Adı                                                | Denetim Yöntem Önerileri                     | Denetim Soru Önerileri                                                                                                                                       |
|------------|----------------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.2.3.1    | Yetki Denetimi                                           | Mülakat, Gözden Geçirme, Sızma Testi      | Uygulamalara erişimi tanımlayan yetki matrisi oluşturulmuş ve belirli aralıklara güncellenmekte midir? <br> Uygulamada kullanıcının yalnızca ilgili olduğu uygulama bileşenlerine ve kaynaklara erişebilmesini sağlayacak bir yetkilendirme mekanizması tanımlanmış mı? <br> Uygulamada kullanıcıların diğer kullanıcılara ait kritik bilgilere erişmesini engellemek için nasıl bir yetkilendirme mekanizması tanımlanmıştır? <br> Uygulamaya gelen her istek için yetki denetimi kontrolü yapılmakta mıdır? |
| 3.2.3.2    | Kritik Veriye ve Kaynaklara Erişimlerin Kayıt Altına Alınması | Mülakat, Gözden Geçirme, Sızma Testi      | Veri akışı ve kaynaklara erişim için iz ve denetim kayıtları oluşturuluyor mu? Kayıtlar hangi bilgileri içeriyor? <br> Kayıtlar kullanıcı arayüzünden sorgulanabiliyor mu? <br> Kayıtlar silinebiliyor veya değiştirilebiliyor mu? <br> Kayıtlar ne kadar süre ile saklanıyor? |
| 3.2.3.3    | En Az Yetki Prensibinin Uygulanması                      | Mülakat, Güvenlik Denetimi                | Kullanıcılara verilen yetkiler, yürütülen görevler ve ihtiyaçlar doğrultusunda mı belirlenmektedir?                                                                         |
| 3.2.3.4    | İçerik Duyarlı ve Gelişmiş Erişim Denetimi              | Mülakat, Güvenlik Denetimi, Sızma Testi   | Uygulamada yetkilendirmeler zaman, konum, kullanılan ağ, IP adresi gibi özelliklere göre sınırlandırılabiliyor mu? <br> Uygulama yetkilendirme ile erişimleri erişim süresi, kullanım sıklığı gibi parametrelere göre sınırlandırabiliyor mu? <br> Uygulama erişim denetleme mekanizmasında içeriğe duyarlı kontroller ve yetkilendirmeler tanımlanabiliyor mu? |