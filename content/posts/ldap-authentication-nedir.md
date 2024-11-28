+++
title = 'Active Directory Ldap Authentication Nedir? LDAP ile Giriş Yapma Nasıl Yapılır?'
date = 2024-11-28T15:00:00+03:00
draft = false
tags = ['IAM', 'kimlik yönetimi', 'access management','security', 'kullanıcı erişimi',  'kimlik doğrulama', 'LDAP', 'Active Directory', 'authentication', 'SSO', 'LDAP Authentication', 'directory services', 'AD DS', 'AD LDS', 'enterprise security']
+++

Günümüzde uygulama güvenliği açısından giriş ekranları kritik bir öneme sahiptir. Eski uygulamalarda genellikle kullanıcı bilgileri ve şifreler, uygulamanın kendi veritabanında saklanırdı. Kullanıcılar uygulamaya giriş yaparken kayıt olduktan sonra belirledikleri kullanıcı adı ve şifreyi kullanırlardı. Ancak, bu yöntem günümüzde pek çok zorluk yaratmaktadır.

## Geleneksel Yöntemlerin Zorlukları

- **Hesap Yönetimi Karmaşası:** Günümüzde birçok uygulamaya üye olmamız nedeniyle hangi hesap bilgilerini kullandığımızı hatırlamak zorlaşıyor.
- **Güvenlik Sorunları:** Kullanıcıların aynı şifreyi birden fazla platformda kullanması, güvenlik açıklarına yol açıyor.
- **Merkezi Yönetim Eksikliği:** Her bir uygulama için ayrı bir kullanıcı adı ve şifre belirlemek, kullanıcılar ve yöneticiler için yönetim zorluğu yaratıyor.

## Güncel Çözümler: LDAP ve SSO

Modern yazılımlar, kendi kullanıcı kimlik doğrulama sistemlerinin yanı sıra **Google**, **Facebook**, veya **Microsoft** hesaplarıyla oturum açma seçenekleri sunuyor. Bu yaklaşım, kullanıcıların tek bir hesapla birden fazla uygulamada oturum açmasını sağlıyor. Aynı şekilde, şirketlerde **LDAP Authentication** ve **SSO (Single Sign-On)** gibi çözümler tercih ediliyor. Bu yöntemler, hem kullanıcıların yönetimini kolaylaştırıyor hem de sürdürülebilir bir altyapı sağlıyor.

---

## Şirket Ortamlarında LDAP ve Active Directory

Çoğu şirket, çalışanlarının bilgisayar sistemlerini merkezi olarak yönetmek için **Active Directory** kullanır. Yeni bir çalışan işe başladığında, şirketteki bilgisayarına giriş yapması için bir Active Directory hesabı oluşturulur. Ancak, bu hesabın diğer uygulamalarda da kullanılabilmesi için LDAP protokolü veya SSO gibi teknolojiler devreye girer.

Active Directory'nin bir özelliği olan **LDAP (Lightweight Directory Access Protocol)**, dizin bilgilerine erişim sağlar ve bu bilgileri kimlik doğrulama için kullanır. Biz de **Node.js** ile LDAP üzerinden çalışan bir giriş uygulaması oluşturacağız.

---

## Örnek Senaryo: Kullanıcı Girişi

Aşağıdaki Active Directory yapısını örnek olarak kullandık. Test için birkaç kullanıcı oluşturduk:

- Kullanıcı adları, benzersiz sicil numaralarından oluşur (örneğin: **TT100**, **TT101**).
- Kullanıcıların giriş bilgileri, domain adresi ile birleştirilir (örneğin: **TT100@mertidm.com**).

**Kullanıcı Şeması:**

<img src="/images/ldap-authentication-nedir/aktif_dizin_semasi.png" alt="Aktif Dizin Şeması" style="width:100%;">

Kullanıcılarımız Aktif Dizinde aşağıdaki gibi görüntüleniyor. 

<img src="/images/ldap-authentication-nedir/kullanci_semasi.png" alt="Kullanıcı Şeması Aktif Dizin " style="width:100%;">

Kullanıcı özelinde incelemek daha faydalı olabilir. Örneğin aşağıdaki kullanıcı için ekran görüntüsü faydalı olacaktır.

- **Kullanıcı Adı (sAMAccountName):** TT100
- **Giriş Formatı:** TT100@mertidm.com




### Lab Ortamı İçin Gereklilikler

- Windows Server'a Active Directory kurulumu
- Nodejs kurulumu

### Nodejs ile Active Directory Authentication Basit Uygulamasının Oluşturulması

Öncelikle masaüstüne authapp isimli klasör oluşturuyorum. Konsoldan bu dizine giderek ihtiyacım olan kütüphanelerin kurulumunu gerçekleştiriyorum.


``` cmd

npm install express body-parser express-session activedirectory

```

Bu aşamadan sonra index.js isimli bir dosya oluşturarak projemin kodlarını içine atıyorum.
BaseDN'deki Active Directory config bilginizi altında yer alan kullanıcı adı şifresini örnekteki gibi kendi Active Directory ortamınıza göre düzenleyebilirsiniz.


``` javascript

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const ActiveDirectory = require('activedirectory');

// Uygulama başlatılıyor
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Active Directory Konfigürasyonu
const config = {
  url: 'ldap://localhost',  // LDAP sunucusu
  baseDN: 'dc=mertidm,dc=com',  // Base DN
  username: 'CN=Administrator,CN=Users,DC=mertidm,DC=com',  // Admin kullanıcı adı
  password: 'Mert123!'  // Admin şifresi
};

// Active Directory Client oluşturuluyor
const ad = new ActiveDirectory(config);

// Giriş Sayfası
app.get('/', (req, res) => {
  if (req.session.user) {
    return res.send(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hoşgeldiniz</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body>
        <div class="container text-center mt-5">
          <h1 class="display-4">Hoşgeldiniz, ${req.session.user}!</h1>
          <div class="card mt-4">
            <div class="card-body">
              <h4>Hesabınızla ilgili bazı işlemleri buradan yapabilirsiniz:</h4>
              <div class="list-group mt-3">
                <a href="#" class="list-group-item list-group-item-action">Hesap Ayarları</a>
                <a href="#" class="list-group-item list-group-item-action">Mesajlar</a>
                <a href="#" class="list-group-item list-group-item-action">Bildirimler</a>
              </div>
              <a href="/logout" class="btn btn-danger mt-4">Çıkış Yap</a>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
      </html>
    `);
  }

  // Giriş sayfası
  res.send(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Giriş Yap</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-center mb-4">Giriş Yap</h3>
                <form method="POST" action="/login">
                  <div class="mb-3">
                    <label for="username" class="form-label">Kullanıcı Adı</label>
                    <input type="text" id="username" name="username" class="form-control" placeholder="Kullanıcı Adı" required>
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Şifre</label>
                    <input type="password" id="password" name="password" class="form-control" placeholder="Şifre" required>
                  </div>
                  <button type="submit" class="btn btn-primary w-100">Giriş Yap</button>
                </form>
                <div class="mt-3 text-center">
                  <a href="#" class="text-muted">Şifremi unuttum?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
  `);
});

// Giriş İşlemi
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Active Directory'ye kimlik doğrulama işlemi yapılacak
  ad.authenticate(username, password, (err, auth) => {
    if (err) {
      console.log('Hata:', err);
      return res.send(`
        <div class="container text-center mt-5">
          <h1>Giriş Başarısız. Kullanıcı adı veya şifre yanlış.</h1>
          <a href="/" class="btn btn-primary">Tekrar Dene</a>
        </div>
      `);
    }

    if (auth) {
      req.session.user = username;  // Kullanıcıyı session'a kaydediyoruz
      res.redirect('/');
    } else {
      res.send(`
        <div class="container text-center mt-5">
          <h1>Giriş Başarısız. Kullanıcı adı veya şifre yanlış.</h1>
          <a href="/" class="btn btn-primary">Tekrar Dene</a>
        </div>
      `);
    }
  });
});

// Çıkış İşlemi
app.get('/logout', (req, res) => {
  req.session.destroy();  // Session'ı yok ediyoruz
  res.redirect('/');
});

// Sunucuyu Başlat
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

```

Consol'dan çalıştırarak uygulamamızı test edelim.

``` cmd
node index.js
```

komutunu uygulamanın bulunduğu dizinde consola yazarak uygulamayı çalıştırıyorum.

<img src="/images/ldap-authentication-nedir/uygulama.png" alt="Aktif Dizin Şeması" style="width:100%;">

Yazının başında bahsetmiş olduğum "TT100@mertidm.com" kullanıcı adı ve şifresi ile giriş yapmayı deniyorum.

<img src="/images/ldap-authentication-nedir/girisyapma1.png" alt="Aktif Dizin Şeması">

Giriş işleminde sonrasında kullanıcıyı basit bir tasarım ile karşılan ekrana geçiş yapıyor.

<img src="/images/ldap-authentication-nedir/giris_basarili.png" alt="Aktif Dizin Şeması" style="width:100%;">

Temel olarak Active Directory LDAP protokolü sayesinde kullanıcı bilgilerimizi Active Directory üzerinden doğrulayarak Authentication giriş yapma işlemini gerçekleştirmiş olduk.
Nodejs yerine farklı yazılım geliştirme dillerinde de Active Directory authentication yönetimi ile geliştirme yaparak uygulamalarımıza dahil edebilriz.

Bu yöntemin kullanılmasındaki en büyük avantajlardan birisi kullanıcının tek bir sicil numarası yani kullanıcı adı ve şifre ile hem bilgisayar oturumunu açması hem de diğer uygulamalara giriş yapabiliyor olmasıdır.

