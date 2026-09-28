# **TODYL UNIFIED SECURITY PLATFORM – MODÜLER MİMARİ VE KATMAN KULLANIM REHBERİ** 

Todyl, geleneksel karmaşık güvenlik ürünlerinin aksine **tüm çözümleri tek bir hafif ajan (SGN Agent)** ve **tek bir bulut yönetim konsolu** üzerinden modüler olarak devreye almanızı sağlar. 

Aşağıda platformun ana modülleri, alt parametreleri ve teknik kırılımları yer almaktadır: 

## **1. Secure Global Network™ (SGN) – Bulut Ağ & SASE Mimarısı** 

Tüm uzak çalışanları, şubeleri, bulut kaynaklarını (AWS/Azure) ve veri merkezlerini tek bir şifreli bulut ağına bağlayan temel altyapıdır. 

- **1.1. Ağ Bağlantı ve Tünel Parametreleri:** 

   - **User-to-Cloud Tüneli:** SGN Ajanı ile doğrudan cihaz bazlı güvenli bağlantı. 

   - **Site-to-Cloud Tüneli:** IPSec / WireGuard tabanlı şube/ofis tünelleri (fiziksel firewall değiştirmeden buluta bağlama). 

   - **Cloud-to-Cloud Tüneli:** AWS, Azure, Google Cloud ve özel VDC altyapılarıyla yüksek hızlı BGP / Peering entegrasyonu. 

- **1.2. Performans ve Mimarisi:** 

   - **Smart Routing:** En yakın PoP (Point of Presence) noktasına düşük gecikmeli (latency) yönlendirme. 

   - **Bant Genişliği Yönetimi:** Trafik önceliklendirme (QoS) ve şubeler arası hat yedekleme. 

## **2. Zero Trust Network Access (ZTNA) – Mikro-Segmentasyon & Erişim Yönetimi** 

Geleneksel VPN'lerin "ağa giren her yere erişir" mantığını ortadan kaldırarak tam kontrol sağlar. 

- **2.1. Koşullu Erişim Politikaları (Conditional Access):** 

   - **Identity-Aware Access:** Azure AD / Okta / Google Workspace entegrasyonu ile kullanıcı/grup bazlı yetkilendirme. 

   - **Device Posture Check:** Bağlanan cihazın EDR aktifliği, işletim sistemi güncelliği ve güvenlik durumuna göre erişim izni verme/kesme. 

- **2.2. Mikro-Segmentasyon Kuralları:** 

   - **IP / Port / Protokol Seviyesinde Kısıtlama:** Kullanıcıyı tüm subnet yerine sadece yetkili olduğu sunucunun belirli portuna (192.168.1.50:3389 gibi) yönlendirme. 

   - **Yanal Hareket (Lateral Movement) Engelleme:** İstemcilerin (endpoint) ağ içinde birbiriyle izinsiz konuşmasını tam izolasyonla engelleme. 

## **3. Secure Web Gateway (SWG) & DNS Security – Web Güvenliği** 

Kullanıcılar nereden bağlanırsa bağlansın internet trafiğini bulut seviyesinde denetler. 

- **3.1. Web & İçerik Filtreleme:** 

   - **Kategori Bazlı Engelleme:** Kumar, yetişkin, yasadışı veya verimlilik düşüren sitelerin engellenmesi. 

   - **SafeSearch ve Youtube Kısıtlaması:** Kurumsal kullanım politikalarına uyum. 

- **3.2. Derin Trafik ve Tehdit Denetimi:** 

   - **SSL/TLS Decryption (SSL İncelemesi):** HTTPS trafiğini performans kaybı olmadan açıp zararlı içerik taraması yapma. 

   - **Phishing & Malicious URL Protection:** Anlık itibar (reputation) kontrolü ile oltalama sitelerini durdurma. 

   - **DNS Sinkholing:** Zayıf veya zararlı alan adlarına giden DNS isteklerini doğrudan güvenli IP'ye yönlendirip kesme. 

## **4. Cloud Next-Gen Firewall (NGFW) & CASB – Katman 7 Uygulama Kontrolü** 

Ağ üzerindeki tüm trafiğin uygulama seviyesinde görünürlüğünü ve denetimini sağlar. 

- **4.1. Katman 7 Uygulama Tespiti:** 

   - **Port-Agnostic App Control:** Standart dışı portlardan geçen uygulamaları (Tor, Bittorrent, UltraSurf vb.) tespit edip engelleme. 

- **4.2. Gölge IT (Shadow IT) ve CASB:** 

   - **SaaS Uygulama Denetimi:** Google Drive, Wetransfer, Dropbox gibi bulut depolama servislerine yetkisiz dosya yüklenmesini engelleme. 

- **4.3. IPS (Intrusion Prevention System):** 

   - **Ağ Seviyesinde Exploit Engelleme:** Bilinen zafiyet taramalarını ve atak imzalarını tünel seviyesinde durdurma. 

## **5. Endpoint Protection (EDR & NGAV) – Uç Nokta Güvenliği** 

Uç noktalarda (Windows, macOS, Linux) çalışan gelişmiş davranışsal yapay zeka ajanıdır. 

- 

### **5.1. Yeni Nesil Antivirüs (NGAV):** 

   - **Behavioral Engine:** İmzası olmayan sıfırıncı gün (Zero-Day) tehditlerini ve fidye yazılımlarını davranışından yakalama. 

   - **Fileless Malware Defense:** PowerShell veya WMI üzerinden bellek içinde (RAM) çalışan dosyasız saldırıları engelleme. 

- **5.2. EDR ve Olay Müdahalesi (Response):** 

   - **Otomatik Ağ İzolasyonu:** Tehdit saptanan cihazı anında ağdan koparma (yalnızca Todyl yönetim tüneli açık kalır). 

   - **Process Tree & Telemetri:** Saldırının hangi dosyadan, hangi komutla başladığını gösteren kök neden analizi (Root Cause Analysis). 

## **6. Managed eXtended Detection & Response (MXDR) – 7/24 SOC Servisi** 

Todyl'ın kendi uzman SOC analistleri ile Bulutforce mühendislerinin birlikte sunduğu yönetilen hizmet katmanıdır. 

- **6.1. Tehdit Avcılığı & Korelasyon:** 

   - **Cross-Layer Telemetry:** SGN Ağ verisi + ZTNA Erişim verisi + EDR Uç nokta verisini tek bir potada birleştirip (XDR) karmaşık APT saldırılarını tespit etme. 

- **6.2. 7/24 Aktif Müdahale (Active Incident Response):** 

   - **Analist Müdahalesi:** Şüpheli bir durumda Todyl SOC uzmanlarının doğrudan kural uygulayıp tehdidi durdurması. 

   - **Bulutforce L2/L3 Desteği:** Türkçe olay bildirimi, kriz yönetimi ve kök neden raporlaması. 

## **7. SIEM & Log Management – Merkezi Analitik & Uyum** 

Tüm altyapı loglarının mevzuatlara uygun şekilde saklanmasını ve analiz edilmesini sağlar. 

- **7.1. Log Toplama ve Depolama:** 

   - **Sınırsız/Esnek Log Saklama:** Tüm SGN, EDR ve ZTNA loglarının bulutta güvenli depolanması. 

- **7.2. Uyum ve Raporlama (Compliance):** 

   - **KVKK / ISO 27001 / BDDK Şablonları:** Denetimlerde sunulmak üzere tek tıkla hazır güvenlik ve erişim raporları alma. 

# 📊 **ÖZET LİSANSLAMA VE PAKETLEME MİMARİSİ (Matris)** 

|**Hizmet**<br>**Modülü**|**Temel İşlevi**|**Lisanslama / Birim Metriği**|
|---|---|---|
|**SGN / SASE**|Bulut Ağ & Sanal Firewall|Kullanıcı / Cihaz Başı|
|**ZTNA**|Kimlik Tabanlı Güvenli<br>Erişim|Kullanıcı Başı|
|**SWG & DNS**|Web & SSL Filtreleme|Kullanıcı / Cihaz Başı|
|**NGFW &**<br>**CASB**|Katman 7 & Gölge IT<br>Kontrolü|Ağ / Tünel Başı|
|**EDR / NGAV**|Davranışsal Uç Nokta<br>Koruması|Cihaz Başı (Agent)|
|**MXDR**|7/24 SOC & Tehdit Avcılığı|Kullanıcı / Cihaz Başı|
|**SIEM & Log**|Log Depolama & Analitik|Veri Hacmi (GB) veya Cihaz<br>Başı|



