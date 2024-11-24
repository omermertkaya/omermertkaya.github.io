+++
title = 'Güçlü Şifre Saklama Politikaları'
date = 2024-11-24T12:30:36+03:00
draft = false
+++

Şifreleri saldırganlardan korumanın birçok yöntemi var. Yazımızda bu yöntemlerden bahsedeceğiz.


### Şifreleri Neden Saklarken Korumalıyız?

Şifreleri saklarken yetkisiz kişilerin erişiminden korumalı, potansiyel saldırılara karşı güvenle tutmalı ve veri ihlallerine karşı doğru şekilde veri ambarlarında tutmalıyız. Şifreleri veritabanlarında saklarken kullanıcının yazmış olduğu şifrenin bire bir aynısı olarak tutmamalıyız. Yani örneğin kullanıcı şifresini Deneme123 şeklinde yaptıysa biz bunu veritabanında Deneme123 şeklinde tutarsak saldırganlar veritabanına eriştiklerinde tüm şifrelere erişebilir, kullanıcın hesap bilgilerinden farklı uygulamalardaki hesaplarında aynı şifreyi deneyerek bir sızıntından tüm hesapları ele geçirebilirler. Bunları önemlemek için şifreleri veritabanında saklarken çeşitli yöntemler kullanmalıyız.



#### 1. Encrypting

Şifrelenmiş formatta şifrelere sadece giriş yapmış yetkili sistemler veya kullanıcılar, şifre çözme yöntemini kullanarak erişebilirler. Şifreleme(Encryption) algoritmaları AES (Advanced Encryption Standard) veya RSA (Rivest-Shamir-Adleman) gibi kompleks matematiksel algoritmalarla kullanıcı şifrelerinin güvenliğinin sağlanmasıdır.

Aşağıdaki örnekte AES (Advanced Encryption Standard) kullanılarak bir şifre şifrelenir ve ardından deşifre edilerek orijinal hali geri alınır.

<img src="/images/guclu-sifre-saklama-politikalari/AESOrnek.png" alt="AES ile şifrelenin örneği" style="width:100%;">

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Şifreleme Örneği</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
</head>
<body>
    <h2>Şifreleme ve Deşifreleme Örneği</h2>
    <label for="password">Şifrenizi Girin:</label>
    <input type="text" id="password" placeholder="Şifre" />
    <button onclick="encryptPassword()">Şifrele</button>
    <p id="encrypted"></p>
    <button onclick="decryptPassword()">Deşifre Et</button>
    <p id="decrypted"></p>

    <script>
        let encryptedPassword;

        // Şifreleme işlemi
        function encryptPassword() {
            const password = document.getElementById("password").value;
            const secretKey = "gizliAnahtar"; // Şifreleme için kullanılan anahtar
            encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
            document.getElementById("encrypted").innerText = "Şifrelenmiş: " + encryptedPassword;
        }

        // Deşifreleme işlemi
        function decryptPassword() {
            const secretKey = "gizliAnahtar"; // Deşifre için aynı anahtar kullanılmalı
            const decrypted = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
            const originalPassword = decrypted.toString(CryptoJS.enc.Utf8);
            document.getElementById("decrypted").innerText = "Orijinal Şifre: " + originalPassword;
        }
    </script>
</body>
</html>
```


#### 2. Hashing (Karma)

Hashing yöntemi şifrelerimizi veritabanlarında saklamak için güvenli yöntem olarak tercih edilen yöntemlerden birisidir.
SHA-256 gibi algoritmalar kullanılarak şifreyi veritabanında saklayabiliriz. Encrypting yönteminin aksine, hashing geri döndürülemez veya çözülemez, bu da düz metin olarak saklanması gerekmeyen şifreler için ideal bir yöntemdir.

SHA-256 yöntemiyle ilgili güzel ve basit bir örnek aşağıda bulabilirsiniz.
Ekran görüntüsünde mert kullanıcı adlı bir kullanıcı 123456 şifresi belirler ve şifresini aşağıda benzer şekilde doğrular.
SHA-256 ile şifrenin en altta veritabanında saklanma yöntemini görebilrisiniz.


<img src="/images/guclu-sifre-saklama-politikalari/SHA256.png" alt="sha256 şifreleme örneği" style="width:100%;">


``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kullanıcı Login Mekanizması</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 50px;
            background-color: #f4f4f9;
            color: #333;
        }
        .container {
            max-width: 400px;
            margin: auto;
            padding: 20px;
            background: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-bottom: 20px;
        }
        h2, h3 {
            text-align: center;
        }
        input[type="text"], input[type="password"], button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .message {
            margin-top: 10px;
            font-weight: bold;
        }
        .success {
            color: green;
        }
        .error {
            color: red;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f4f4f9;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Kayıt Ol</h2>
        <label for="registerUsername">Kullanıcı Adı:</label>
        <input type="text" id="registerUsername" placeholder="Kullanıcı adı girin...">
        <label for="registerPassword">Şifre:</label>
        <input type="password" id="registerPassword" placeholder="Şifre girin...">
        <button id="registerButton">Kayıt Ol</button>
        <div id="registerMessage" class="message"></div>
    </div>

    <div class="container">
        <h2>Giriş Yap</h2>
        <label for="loginUsername">Kullanıcı Adı:</label>
        <input type="text" id="loginUsername" placeholder="Kullanıcı adı girin...">
        <label for="loginPassword">Şifre:</label>
        <input type="password" id="loginPassword" placeholder="Şifre girin...">
        <button id="loginButton">Giriş Yap</button>
        <div id="loginMessage" class="message"></div>
    </div>

    <div class="container">
        <h3>Veritabanındaki Kullanıcılar</h3>
        <table>
            <thead>
                <tr>
                    <th>Kullanıcı Adı</th>
                    <th>Hashlenmiş Şifre</th>
                </tr>
            </thead>
            <tbody id="userTable">
                <!-- Kullanıcı verileri buraya eklenecek -->
            </tbody>
        </table>
    </div>

    <script>
        // Sanal bir veritabanı
        const database = {};

        // SHA-256 Hash Fonksiyonu
        async function hashPassword(password) {
            const encoder = new TextEncoder();
            const data = encoder.encode(password);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        }

        // Veritabanını güncelle ve tabloyu yeniden çiz
        function updateUserTable() {
            const userTable = document.getElementById('userTable');
            userTable.innerHTML = ''; // Mevcut tabloyu temizle

            for (const [username, hash] of Object.entries(database)) {
                const row = document.createElement('tr');
                const usernameCell = document.createElement('td');
                const hashCell = document.createElement('td');

                usernameCell.textContent = username;
                hashCell.textContent = hash;

                row.appendChild(usernameCell);
                row.appendChild(hashCell);
                userTable.appendChild(row);
            }
        }

        // Kayıt İşlemi
        document.getElementById('registerButton').addEventListener('click', async () => {
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;

            if (!username || !password) {
                document.getElementById('registerMessage').textContent = 'Lütfen tüm alanları doldurun!';
                document.getElementById('registerMessage').className = 'message error';
                return;
            }

            const hashedPassword = await hashPassword(password);
            database[username] = hashedPassword; // Kullanıcıyı sanal veritabanına kaydet

            document.getElementById('registerMessage').textContent = 'Kayıt başarılı!';
            document.getElementById('registerMessage').className = 'message success';

            // Alanları temizle
            document.getElementById('registerUsername').value = '';
            document.getElementById('registerPassword').value = '';

            updateUserTable(); // Veritabanı tablosunu güncelle
        });

        // Giriş İşlemi
        document.getElementById('loginButton').addEventListener('click', async () => {
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            if (!username || !password) {
                document.getElementById('loginMessage').textContent = 'Lütfen tüm alanları doldurun!';
                document.getElementById('loginMessage').className = 'message error';
                return;
            }

            const hashedPassword = await hashPassword(password);

            // Kullanıcı adı ve hash eşleşmesini kontrol et
            if (database[username] && database[username] === hashedPassword) {
                document.getElementById('loginMessage').textContent = 'Giriş başarılı!';
                document.getElementById('loginMessage').className = 'message success';
            } else {
                document.getElementById('loginMessage').textContent = 'Kullanıcı adı veya şifre hatalı!';
                document.getElementById('loginMessage').className = 'message error';
            }

            // Alanları temizle
            document.getElementById('loginUsername').value = '';
            document.getElementById('loginPassword').value = '';
        });
    </script>
</body>
</html>
    </script>
</body>
</html>
```

#### 3. Salting (Tuzlama)

Salting yöntemi kullanıcıdan aldımız şifrenin önüne arkasına veya bizim belirlediğimiz kural doğrultusunda rasgele bir sabit bir değer ekleyerek şifreyi daha güvenli bir yöntem ile saklamaya gitmektir. Tuzlama yöntemi hashing işlemi ile birleştirildiğinde daha güvenli bir saklama yöntemi sunar.

Hashing yönteminde örneğin 123456 şifresi sha256 ile şifrelenerek veritabanında saklansa bile çok basit şifrelerin sha256 algoritmasında çözülmesi çok kolayldır. Hatta online toollar üzerinden en çok kullanılan 100 bin şifrenin yer aldığı ve bunların sha256 hashleri girildiğinde doğrudan size şifreyi verdiği platformlat mevcuttur.

İşte bu tarz sorunların önüne geçmek için şifreleme yöntemi çok etkili olacaktır. Çok basit bir şifreyi bile özellikle sadece bizim bildğimiz biz tuzlama yöntemi ile saklayıp, şifreyi doğrularken de bu yöntemi kullanarak doğruladığımız taktirde daha güvenli olarak şifrelerimizi depolamış oluruz.

Aşağıdaki tuzlama yönteminde de kullanıcı adı mert şifre ise 123456 kullandım. Benzer şekilde yukarıdaki hashing yönteminde de aynı şifreyi ve kullanıcı adını kullandım.
İki yöntemin veritabanı verisine baktığımız şifreyi farklı şekillerde sakladığını görüntülüyoruz. İşte Salting yöntemi şifreyi bizim bildiğimiz bir şifre daha ekleyerek veritabanında o şekilde saklıyor. Böylece şifrelerin saklanması çok daha güvenli hale geliyor.

<img src="/images/guclu-sifre-saklama-politikalari/salting.png" alt="salting şifreleme örneği" style="width:100%;">

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salting ve Doğrulama</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
            color: #333;
        }
        .container {
            max-width: 500px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            margin-bottom: 20px;
        }
        h2, h3 {
            text-align: center;
        }
        input[type="text"], input[type="password"], button {
            width: calc(100% - 20px);
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        .error {
            color: red;
            text-align: center;
        }
        .success {
            color: green;
            text-align: center;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Kayıt Ol</h2>
    <label for="username">Kullanıcı Adı:</label>
    <input type="text" id="registerUsername" placeholder="Kullanıcı adınızı girin...">
    <label for="password">Şifre:</label>
    <input type="password" id="registerPassword" placeholder="Şifrenizi girin...">
    <button id="registerButton">Kayıt Ol</button>
    <div id="registerMessage"></div>
</div>

<div class="container">
    <h2>Giriş Yap</h2>
    <label for="username">Kullanıcı Adı:</label>
    <input type="text" id="loginUsername" placeholder="Kullanıcı adınızı girin...">
    <label for="password">Şifre:</label>
    <input type="password" id="loginPassword" placeholder="Şifrenizi girin...">
    <button id="loginButton">Giriş Yap</button>
    <div id="loginMessage"></div>
</div>

<div class="container">
    <h3>Kayıtlı Kullanıcılar</h3>
    <table>
        <thead>
            <tr>
                <th>Kullanıcı Adı</th>
                <th>Salt</th>
                <th>Hashlenmiş Şifre</th>
            </tr>
        </thead>
        <tbody id="userTable"></tbody>
    </table>
</div>

<script>
    const database = []; // Kullanıcıları saklamak için bir dizi (sanal veritabanı)

    // Rastgele bir salt oluşturma fonksiyonu
    function generateSalt(length = 16) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let salt = '';
        for (let i = 0; i < length; i++) {
            salt += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return salt;
    }

    // SHA-256 ile hashleme fonksiyonu
    async function hashPassword(data) {
        const encoder = new TextEncoder();
        const encodedData = encoder.encode(data);
        const hashBuffer = await crypto.subtle.digest('SHA-256', encodedData);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    }

    // Kayıt işlemi
    document.getElementById('registerButton').addEventListener('click', async () => {
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        if (!username || !password) {
            document.getElementById('registerMessage').textContent = 'Lütfen tüm alanları doldurun!';
            document.getElementById('registerMessage').className = 'error';
            return;
        }

        const salt = generateSalt(); // Yeni bir salt oluştur
        const saltedPassword = password + salt; // Şifreye salt ekle
        const hashedPassword = await hashPassword(saltedPassword); // Salted şifreyi hashle

        // Veritabanına kaydet
        database.push({ username, salt, hashedPassword });

        // Mesaj göster
        document.getElementById('registerMessage').textContent = 'Kullanıcı başarıyla kaydedildi!';
        document.getElementById('registerMessage').className = 'success';

        // Tabloyu güncelle
        updateUserTable();

        // Alanları temizle
        document.getElementById('registerUsername').value = '';
        document.getElementById('registerPassword').value = '';
    });

    // Giriş işlemi
    document.getElementById('loginButton').addEventListener('click', async () => {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (!username || !password) {
            document.getElementById('loginMessage').textContent = 'Lütfen tüm alanları doldurun!';
            document.getElementById('loginMessage').className = 'error';
            return;
        }

        // Kullanıcıyı veritabanında ara
        const user = database.find(user => user.username === username);

        if (!user) {
            document.getElementById('loginMessage').textContent = 'Kullanıcı adı veya şifre hatalı!';
            document.getElementById('loginMessage').className = 'error';
            return;
        }

        // Salted şifreyi hashle ve karşılaştır
        const saltedPassword = password + user.salt;
        const hashedPassword = await hashPassword(saltedPassword);

        if (hashedPassword === user.hashedPassword) {
            document.getElementById('loginMessage').textContent = 'Giriş başarılı!';
            document.getElementById('loginMessage').className = 'success';
        } else {
            document.getElementById('loginMessage').textContent = 'Kullanıcı adı veya şifre hatalı!';
            document.getElementById('loginMessage').className = 'error';
        }
    });

    // Kullanıcı tablosunu güncelleme
    function updateUserTable() {
        const tableBody = document.getElementById('userTable');
        tableBody.innerHTML = ''; // Mevcut tabloyu temizle

        database.forEach(user => {
            const row = document.createElement('tr');
            const usernameCell = document.createElement('td');
            const saltCell = document.createElement('td');
            const hashCell = document.createElement('td');

            usernameCell.textContent = user.username;
            saltCell.textContent = user.salt;
            hashCell.textContent = user.hashedPassword;

            row.appendChild(usernameCell);
            row.appendChild(saltCell);
            row.appendChild(hashCell);
            tableBody.appendChild(row);
        });
    }
</script>

</body>
</html>
```


#### 4. Slow Hashing 

Yavaş hashleme, brute-force saldırılarının maliyetli ve zaman alıcı hale gelmesi amacıyla, hashleme işlemini kasıtlı olarak yavaşlatan hashing algoritmalarını kullanmayı içerir. bcrypt, Argon2 ve PBKDF2 gibi algoritmalar bu amaçla yaygın olarak kullanılır. Standart hashleme algoritmalarının aksine, bu yavaş hashler bir "işlem faktörü" veya maliyet parametresi içerir. Bu parametre, her hash'in hesaplanması için gereken işlem miktarını belirler. İşlem faktörü ne kadar yüksekse, hash hesaplamak o kadar uzun sürer ve bu da saldırganların büyük ölçekli brute-force saldırılarını gerçekleştirmelerini imkansız hale getirir.

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slow Hashing (bcrypt) ve Doğrulama</title>
    <!-- bcryptjs kütüphanesini doğru şekilde dahil et -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/3.0.6/bcrypt.min.js"></script> <!-- Doğru bcryptjs kütüphanesini dahil ettik -->
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
            color: #333;
        }
        .container {
            max-width: 500px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            margin-bottom: 20px;
        }
        h2, h3 {
            text-align: center;
        }
        input[type="text"], input[type="password"], button {
            width: calc(100% - 20px);
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        button {
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        .error {
            color: red;
            text-align: center;
        }
        .success {
            color: green;
            text-align: center;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Kayıt Ol</h2>
    <label for="username">Kullanıcı Adı:</label>
    <input type="text" id="registerUsername" placeholder="Kullanıcı adınızı girin...">
    <label for="password">Şifre:</label>
    <input type="password" id="registerPassword" placeholder="Şifrenizi girin...">
    <button id="registerButton">Kayıt Ol</button>
    <div id="registerMessage"></div>
</div>

<div class="container">
    <h2>Giriş Yap</h2>
    <label for="username">Kullanıcı Adı:</label>
    <input type="text" id="loginUsername" placeholder="Kullanıcı adınızı girin...">
    <label for="password">Şifre:</label>
    <input type="password" id="loginPassword" placeholder="Şifrenizi girin...">
    <button id="loginButton">Giriş Yap</button>
    <div id="loginMessage"></div>
</div>

<div class="container">
    <h3>Kayıtlı Kullanıcılar</h3>
    <table>
        <thead>
            <tr>
                <th>Kullanıcı Adı</th>
                <th>Salt</th>
                <th>Hashlenmiş Şifre</th>
            </tr>
        </thead>
        <tbody id="userTable"></tbody>
    </table>
</div>

<script>
    const database = []; // Kullanıcıları saklamak için bir dizi (sanal veritabanı)

    // Kayıt işlemi
    document.getElementById('registerButton').addEventListener('click', async () => {
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        if (!username || !password) {
            document.getElementById('registerMessage').textContent = 'Lütfen tüm alanları doldurun!';
            document.getElementById('registerMessage').className = 'error';
            return;
        }

        // bcrypt ile salt ve hashleme işlemi
        const saltRounds = 12; // Yavaş hashleme için salt sayısı
        const salt = await bcrypt.genSalt(saltRounds); // Salt oluştur
        const hashedPassword = await bcrypt.hash(password, salt); // Şifreyi salt ile hashle

        // Veritabanına kaydet
        database.push({ username, salt, hashedPassword });

        // Mesaj göster
        document.getElementById('registerMessage').textContent = 'Kullanıcı başarıyla kaydedildi!';
        document.getElementById('registerMessage').className = 'success';

        // Tabloyu güncelle
        updateUserTable();

        // Alanları temizle
        document.getElementById('registerUsername').value = '';
        document.getElementById('registerPassword').value = '';
    });

    // Giriş işlemi
    document.getElementById('loginButton').addEventListener('click', async () => {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (!username || !password) {
            document.getElementById('loginMessage').textContent = 'Lütfen tüm alanları doldurun!';
            document.getElementById('loginMessage').className = 'error';
            return;
        }

        // Kullanıcıyı veritabanında ara
        const user = database.find(user => user.username === username);

        if (!user) {
            document.getElementById('loginMessage').textContent = 'Kullanıcı adı veya şifre hatalı!';
            document.getElementById('loginMessage').className = 'error';
            return;
        }

        // bcrypt ile hashlenmiş şifreyi karşılaştır
        const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);

        if (isPasswordCorrect) {
            document.getElementById('loginMessage').textContent = 'Giriş başarılı!';
            document.getElementById('loginMessage').className = 'success';
        } else {
            document.getElementById('loginMessage').textContent = 'Kullanıcı adı veya şifre hatalı!';
            document.getElementById('loginMessage').className = 'error';
        }
    });

    // Kullanıcı tablosunu güncelleme
    function updateUserTable() {
        const tableBody = document.getElementById('userTable');
        tableBody.innerHTML = ''; // Mevcut tabloyu temizle

        database.forEach(user => {
            const row = document.createElement('tr');
            const usernameCell = document.createElement('td');
            const saltCell = document.createElement('td');
            const hashCell = document.createElement('td');

            usernameCell.textContent = user.username;
            saltCell.textContent = user.salt;
            hashCell.textContent = user.hashedPassword;

            row.appendChild(usernameCell);
            row.appendChild(saltCell);
            row.appendChild(hashCell);
            tableBody.appendChild(row);
        });
    }
</script>

</body>
</html>

```