+++
title = 'Aktif Dizindeki Tüm Cihazlara Mesaj Gönderme'
date = 2024-11-24T22:45:02+03:00
draft = false
tags = ['authentication', 'authorization', 'kimlik ve erişim yönetimi', 'aktif dizin', 'powershell mesaj gönderme', 'domaindeki cihazlara mesaj', 'windows mesaj gönderimi', 'şifre süresi bildirimleri', 'kullanıcı bilgilendirme', 'it güvenlik bildirimleri']
+++


Şirketlerimizde genellikle kullanıcı cihazlarımızı merkezi olarak yönetmek için aktif dizin kullanıyoruz. Aktif dizin, merkezi olarak cihazları, kullanıcıları ve güvenlik politikalarını yönetmenin yanı sıra birçok özelliği de içeriğinde barındırıyor. Basit bir örnek ile aktif dizinde domainde bulunan windows makinelerimize nasıl mesaj gönderebileiceğimizi aktarmak istedim.

Örneğin gün içinde saat 10:00'da bilgisayarı açık olan tüm cihazlara "Günaydın, güzel ve sağlıklı bir gün olsun!" şeklinde bir mesaj göndermek istiyorsunuz. Bunu powershell ile uygulamak gerçekten çok kullanışlı ve kolay bir yöntem olarak karşımıza çıkıyor.


### Peki tüm cihazlara mesaj göndermek Kimlik ve Erişim Yönetiminde Ne Tür İşlevlerde Kullanılabilir?

Detaylara geçmeden önce Kimlik ve Erişim Yönetimi(IAM,IDM) sistemlerinde mesaj gönderimlerini ne için kullanabiliriz?

- Şifre süresi dolan kullanıcılara şifre yenilemeleri için bildirim gönderme
- Güvenlik hatırlatmalarının yapılması
- Kullanıcı bilgilendirmeleri(örneğin yetki gözden geçirme süresinin 5 gün içinde dolacağı)
- Acil duyurular 

şeklinde sıralayabiliriz.

---

Öncelikle örnek olarak kurduğum sistemden kısaca bahsetmek istiyorum. Test ortamları için faydalı olabilir.

Mertidm.com adında bir windows server sunucu kurdum. Bu sunucuya aktif dizin yönetim araçlarını kurdum.

<img src="/images/aktif-dizinde-tum-cihazlara-mesaj-gonderme/sunucum.png" alt="sunucu goruntusu" style="width:100%;">

Sonrasında windows 10 pro bir cihazı sanal makinede kurarak aktif dizinde cihazı domain'e alıyorum.

<img src="/images/aktif-dizinde-tum-cihazlara-mesaj-gonderme/kullaniciBilgisayari.png" alt="kullanici bilgisayari" style="width:100%;">

Aktif dizin server cihazımdan domain kontrolüne almış olduğum bilgisayarın adını buluyorum. 
Bunun için active directory users and computers aracını kullanabiliriz. Benim örneğinde tek cihaza göndereceğim için spesifik bir hedef bilgisayar adı belirleyerek mesaj gönderim işlemini gerçekleştiriyorum. Domaindeki aktif tüm bilgisayarda göndermek için olan kod adımını bir sonraki kodda yer veriyor olacağım.

Bu kodla bilgisayar adını bulduğum windows 10 pro cihazıma bir test mesajı gönderiyorum.

``` POWERSHELL

$targetComputer = "DESKTOP-JGRD62J"

# Mesajı gönder ve hata olup olmadığını kontrol et
try {
    Invoke-Command -ComputerName $targetComputer -ScriptBlock {
        msg * "Bu bir test mesajıdır."
    }
    Write-Host "Mesaj başarıyla gönderildi: $targetComputer"
} catch {
    # Hata varsa, detaylı bilgi yazdır
    Write-Host "Hata oluştu: $targetComputer" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Yellow
}

```

<img src="/images/aktif-dizinde-tum-cihazlara-mesaj-gonderme/testmesaji.png" alt="test mesaji görüntüsü" style="width:100%;">


Tüm cihazlara göndermek için ise aşağıdaki kodu test ederek kullanabiliriz.


``` POWERSHELL

$targetComputer = "DESKTOP-JGRD62J"

# Mesajı gönder ve hata olup olmadığını kontrol et
try {
    Invoke-Command -ComputerName $targetComputer -ScriptBlock {
        msg * "Bu bir test mesajıdır."
    }
    Write-Host "Mesaj başarıyla gönderildi: $targetComputer"
} catch {
    # Hata varsa, detaylı bilgi yazdır
    Write-Host "Hata oluştu: $targetComputer" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Yellow
}


```

<img src="/images/aktif-dizinde-tum-cihazlara-mesaj-gonderme/tumcihazlar.png" alt="tüm cihazlara gönderilen test mesaji" style="width:70%;">


