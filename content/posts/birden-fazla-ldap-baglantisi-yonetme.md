+++
title = 'Birden Fazla Ldap Bağlantısını Tek Uygulamadan Yönetmek'
date = 2024-11-13T20:55:50+03:00
draft = false
tags = ['IAM','identity access management','LDAP','Apache Directory Studio','Oracle LDAP']
+++

Kimlik ve Erişim Yönetimi(IAM) sistemlerinde birçok uç uygulama ile bağlantı halinde çalışıyoruz.
Bunlardan en önemli olanlardan diyebileceğimiz Aktif Dizin(Acitve Directory) bir LDAP dizin yönetim sistemidir.
Oracle LDAP yine aktif dizine benzer bir sistemdir ve kullanıcıları, grupları yönetebilirsiniz.

Peki, aynı anda 4-5 LDAP bağlantısını yönetmeniz gerektiğinde bu bağlantıları nasıl kolaylıkla sağlayabilirsiniz? Birden fazla LDAP bağlantısını tek bir uygulamadan yönetmek, IAM yöneticilerinin günlük akışında oldukça işlevsel ve zaman kazandıran bir çözümdür.

Bu ihtiyaç için en sık kullanılan araçlardan biri olan Apache Directory Studio, günlük işlemlerimde benim de sıklıkla kullandığım bir program.

### Apache Directory Studio'ya Hızlı Bakış

Apache Directory Studio, birden fazla LDAP dizinini tek ekrandan yönetmek için kullanılan popüler bir uygulamadır. Örneğin Active Directory, Oracle LDAP, ve Open LDAP gibi sistemlere tek bir uygulama üzerinden bağlanarak sorgulama ve düzenleme işlemleri yapabilirsiniz.

![Apache Directory Studio](/images/birden-fazla-ldap-baglantisi-yonetme/apachedirectory.png)

LDAP bağlantısı kurabilmek için, bağlantı yapacağınız LDAP dizinine ait bilgilere ihtiyacınız var. LDAP hostname, port, kullanıcı adı ve şifrenizle giriş yaparak bağlantı sağlayabilirsiniz. LDAP dizini içindeki yetkilendirmelere göre, kendi yetkiniz dahilinde işlemler gerçekleştirebilirsiniz. Örneğin, LDAP yönetiminden sorumlu değilseniz, yalnızca IAM yöneticisi olarak yetkilendirildiyseniz, LDAP dizininde yalnızca görüntüleme yapma yetkisine sahip olabilirsiniz. Bu şekilde IAM ve LDAP’ın sağlıklı çalışıp çalışmadığını kontrol edebilirsiniz.

Peki, ne tür kontroller yapılır? Örneğin, bir kullanıcıyı LDAP dizininde bulunan bir gruba ekleme işlemi gerçekleştirdiğinizi düşünelim. IAM sisteminde, bir kullanıcıya bir yetki ekleme işlemi başarılı olarak görüntüleniyorsa ancak kesinliğini kontrol etme ihtiyacınız varsa — özellikle sistemi yeni entegre ettiyseniz veya işlemi doğrulamanız gerekiyorsa — Apache Directory Studio’da ilgili LDAP bağlantısını açarak IAM’den yetki eklediğiniz grupta kullanıcının gerçekten yer alıp almadığını anlık olarak sorgulayabilirsiniz. Bu sayede, LDAP dizininde gruba eklenme işleminin başarılı bir şekilde gerçekleşip gerçekleşmediğini kontrol edebilirsiniz.