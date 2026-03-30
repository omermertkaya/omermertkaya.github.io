+++
title = 'Hypervisor Tip1 ve Tip2'
date = 2026-03-30T18:00:13+03:00
draft = false
+++


Bilgisayar sistemleriyle çalışırken çoğu zaman birden fazla ortamı yönetmek zorunda kalıyoruz. Bu noktada sanallaştırma araçları hayatımızı ciddi anlamda kolaylaştırıyor.

Birçoğumuz VMware veya Oracle VM VirtualBox gibi araçları aktif olarak kendi bilgisayarlarımızı kuruyoruz. Bunları ubuntu, debian veya Kali linux gibi sistemeleri deneyimlemek için birçoğumuz kullanıyor. Ancak bu araçların aslında belirli bir sınıflandırmaya tabi olduğunu çoğu zaman gözden kaçırabiliyoruz.

Toplantılarda ya da teknik dokümanlarda geçen “Type 1”, “Type 2”, “Bare-Metal” gibi kavramlar ilk bakışta karmaşık gelebiliyor. Aslında bu terimler farklı anlamlar taşıyor.

---

## Tip 1 (Bare-Metal Hypervisor)

“Bare-Metal” terimi ilk duyulduğunda oldukça teknik ve karmaşık gelebilir. Ancak mantığı oldukça basittir.

Günlük kullanımda genellikle şu senaryoyu uygularız:

- Bilgisayarımızda bir işletim sistemi (örneğin Windows) çalışır  
- Üzerine bir sanallaştırma aracı kurarız  
- Sanal makinelerimizi bu araç üzerinden çalıştırırız  

Ancak kurumsal dünyada işler biraz farklı ilerler.

**Tip 1 (Bare-Metal) Hypervisor**, işletim sistemi katmanı olmadan **doğrudan donanım üzerinde çalışan** sanallaştırma yapısını ifade eder.

### Özellikleri

- Doğrudan fiziksel donanım üzerinde çalışır  
- Daha yüksek performans sunar  
- Güvenlik açısından daha güçlüdür  
- Veri merkezleri ve kurumsal ortamlarda yaygın olarak kullanılır  

### Örnekler

- VMware ESXi  
- Microsoft Hyper-V  
- KVM  
- Xen  

---

<img src="/images/hypervisor/hypervisor.jpg" alt="Hypervisor nedir" style="width:100%;">

## Tip 2 (Hosted Hypervisor)

“Hosted Hypervisor” ise adından da anlaşılacağı gibi bir **host işletim sistemi üzerinde çalışan** sanallaştırma modelidir.

Buradaki “host” kavramı genellikle:

- Kendi bilgisayarımız  
- Ya da sanallaştırma yazılımının çalıştığı ana işletim sistemi  

olarak düşünülebilir.

Örneğin:

- Bilgisayarımızda Windows 10 çalışır  
- Üzerine bir sanallaştırma uygulaması kurarız  
- Sanal makineleri bu uygulama üzerinden yönetiriz  

Bu yapı, özellikle geliştiriciler ve bireysel kullanıcılar için oldukça pratiktir.

### Özellikleri

- İşletim sistemi üzerine kurulur  
- Kurulumu ve kullanımı kolaydır  
- Geliştirme ve test ortamları için idealdir  
- Performans, Tip 1’e göre biraz daha düşüktür  

### Örnekler

- Oracle VM VirtualBox  
- VMware Workstation  
- Parallels Desktop  

---

## Kısa Özet

- **Tip 1 (Bare-Metal):** Donanım üzerinde çalışır → Daha performanslı ve kurumsal  
- **Tip 2 (Hosted):** İşletim sistemi üzerinde çalışır → Daha pratik ve bireysel kullanım için uygun  
