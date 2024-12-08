+++
title = 'Aktif Dizin Domainde RDP 3389 Portu Yasaklama'
date = 2024-12-07T22:41:01+03:00
draft = false
tags = ['Active Directory', 'RDP', 'Windows FireWall', 'security','enterprise security','rdp','remote destop protocol','3389']
+++

Günümüzde orta ve büyük ölçekleri firmaların birçoğu aktif dizin ile kullanıcılarını ve bilgisayarlarını merkezi olarak yönetiyor. Bunun yanı sıra özellikle kullanıcı bilgisayarlarımızda birçok güvenlik önemlini barındırıyoruz. 

Bu güvenlik önemlerlerinden en önemlilerinden birisi de **Remote Desktop Protocol(RDP)**, 3389 portu olarakta adlandırabilriiz.
Burada önemli olan TCP'de artık bir standart haline gelmiş 3389 portunu yasaklamanın yanı sıra RDP bağlantılarını farklı yöntemlerle de engeliyor olmak olduğunu unutmayalım.

Bu yazı ve videoda sadece kısa bir gösterim ile domaindeki cihazımızın 3389 portuna bağlantı kurmasını engellediğimiz senarya üzerinden ilerliyor olacağız.

Öncelikle Active Directory yönetim konsoluna sahip olduğumuz bir cihazda Administrator olarak oturum açıyoruz.

### Grup İlkesi Yönetim Konsolunu Açıyoruz

- Başlat menüsüne girerek ve Group Policy Management (GPMC) bölümünü açıyoruz.
- RDP port bağlantılarını engellemek için ana dizinde "Create a GPO in this domain, and Link it here" seçerek ilerliyoruz.
- GPO’ya anlamlı bir ad verebiliriz (ör. "Restrict Outbound RDP to Internal IPs").

### Güvenlik Duvarı Kuralı Oluşturuyoruz
#### GPO’yu Düzenliyoruz
- Oluşturduğumuz GPO’ya sağ tıklayarak ve Edit seçeneğini seçiyoruz.
- Computer Configuration > Windows Settings > Security Settings > Windows Firewall with Advanced Security > Outbound Rules yolunu izliyoruz.
- Sağ tıklayarak ve New Rule seçeneğini seçiyoruz.
####  Kural Türünü Seçiyoruz
- Port seçeneğini seçerek ve Next butonuna tıklıyoruz.
- TCP protokolünü seçerek ve Specific local ports kutusuna 3389 yazıyoruz.
- Next butonuna tıklıyoruz.
####  Bağlantıyı Kısıtlama
- Block the connection seçeneğini seçerek ve Next butonuna tıklıyoruz.
#### İstisnaları Tanmlarız
- Profil ayarlarında Domain, Private ve Public seçeneklerinin tümünü seçiyoruz.
- Next butonuna tıklayın.

#### Kuralı İsimlendirme
- Kural için bir isim belirliyoruz.
- Finish butonuna basarak işlemi tamamlyıoruz.

<img src="/images/rdp-3389-yasaklama\ActiveDirectory.PNG" alt="Aktif Dizin Şeması" style="width:100%;">


### GPO’yu Hedef Bilgisayarlara Uygulama İşlemi

Aktif dizindeki örnek bir cihazda oturum açarak aşağıdaki komutu cmd ekranına yazıyorum.
Bu sayede tüm güncellemeleri test cihazıma alıyorum.

```bash
gpupdate /force
```

<img src="/images/rdp-3389-yasaklama\baglanti goruntusu.PNG" alt="Aktif Dizin Şeması" style="width:100%;">

Sonuç olarak domaindeki cihazlarımızda 3389 portundan gidecek olan bağlantıları engellemiş oluyoruz.
Bunu sadece yazının bahsettiğim gibi güvenlik önemlerinin en basit halkasından bir tanesi olarak düşünebiliriz.

