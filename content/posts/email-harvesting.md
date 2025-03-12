+++
title = 'Email Harvesting: Siber Güvenlik Perspektifinden İnceleme ve Python ile Bir Örnek'
date = 2025-03-12T10:41:21+03:00
draft = false
tags: ['Bug Bounty', 'Cybersecurity', 'Email Security', 'Red Team', 'Phishing']
+++

Email harvesting, siber güvenlikte **keşif (reconnaissance)** aşamasında **Red Team** üyelerinin sıkça kullandığı bir tekniktir. Şirket içi veya kişisel güvenlik önlemlerinde, e-posta adreslerimizin forumlarda, web sitelerinde, dokümanlarda vb. ortamlarda bulunması, kötü niyetli kişilerin bu adresleri toplayarak siber saldırılar gerçekleştirmesine yol açabilir.  

Ancak, bu yöntemi yalnızca kötü niyetli kişilerin kullandığı düşünülmemelidir. Tam tersine, güvenlik ekipleri bu tür bilgileri **önceden tespit ederek** olası **spam saldırılarına ve oltalama (phishing) girişimlerine karşı korunma** sağlayabilir.  

---

## Python ile Basit Bir Email Harvesting Uygulaması

Geliştirdiğim basit email harvesting uygulamasını [buraya tıklayarak](https://github.com/omermertkaya/email-harvesting) GitHub üzerinden indirebilirsiniz.  

### Nasıl Çalışıyor?
- Kullanıcının belirlediği **arama parametresine** göre Google veya Bing arama motorları üzerinden sorgulama yapar.  
- Çıkan sonuçları tarayarak **e-posta adreslerini tespit eder**.  
- Elde edilen e-posta adreslerini **Excel, CSV veya TXT** formatında dışa aktarır.  
- **Kaynak bilgisini** log dosyasına kaydederek, hangi e-posta adresinin hangi sitede bulunduğunu gösterir.  

### API Keyleri Nasıl Alabiliriz?

- Google arama motoru için Serapi kullandım. Serapi keyi almak için [buraya](https://serpapi.com/) tıklayabilirsiniz.
- Bing arama motorundan api key almak için [buraya](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api) klayabilirsiniz.

![Email Harvesting Uygulaması](/images/email-harvesting/email1.png)  

Bu tarz araçlar, güvenlik ekipleri için **önleyici bir adım** olup, şirket veya bireysel e-posta adreslerinin internette nasıl göründüğünü analiz etmeye yardımcı olabilir. Eğer bu tür bilgiler dış dünyada yayılmışsa, gerekli **gizlilik ve koruma önlemleri** alınmalıdır.  