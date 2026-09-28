# Walkthrough - Todyl Detay Sayfası Tasarım ve İngilizce Metin Entegrasyonu

Bu çalışmada, `/markalarimiz/todyl/page.js` detay sayfasını **`Todyl web döküman 1.md`** belgesinde yer alan tüm modüller ve lisanslama matrisi ile güncelledik.

Google Translate eklentisiyle (`pageLanguage: "en"`) tam uyumluluk sağlamak adına, Türkçe metinler profesyonel olarak kurumsal İngilizce diline tercüme edilip entegre edildi.

## Yapılan Yapısal ve Tasarımsal Değişiklikler

### 1. Dinamik Sağ Menü (Scroll-Tracking Sidebar)
- Sayfanın sağ tarafına Todyl platformunun 7 ana modülü ve Lisanslama Matrisini içeren yapışkan (sticky) bir dikey gezinme menüsü yerleştirildi.
- Kullanıcı sayfayı aşağı kaydırdıkça, o anda ekranda olan bölüm menüde otomatik olarak aktif olup mavi renkte yanmaktadır.
- Menü öğelerine tıklandığında ilgili bölüme pürüzsüz bir kaydırma (smooth scroll) hareketiyle geçiş yapılmaktadır.
- Mobil cihazlarda menü gizlenerek içeriğin tam ekran genişliğinde rahatça akması sağlandı.

### 2. Entegre Edilen Ürün Katmanları (İngilizce Tercümeli)
Sayfada sırasıyla listelenen 7 modül ve özet tablosu:
1. **Secure Global Network™ (SGN) – Cloud Network & SASE Architecture** (Ağ bağlantı tünelleri ve performans yönetimi)
2. **Zero Trust Network Access (ZTNA) – Micro-Segmentation & Access Management** (Koşullu erişim politikaları ve mikro-segmentasyon kuralları)
3. **Secure Web Gateway (SWG) & DNS Security – Web Security** (Web filtreleme, derin trafik ve tehdit denetimi, SSL incelemesi)
4. **Cloud Next-Gen Firewall (NGFW) & CASB – Layer 7 Application Control** (Uygulama kontrolü, SaaS denetimi ve IPS)
5. **Endpoint Protection (EDR & NGAV) – Endpoint Security** (Davranışsal NGAV, dosyasız saldırı savunması ve EDR)
6. **Managed eXtended Detection & Response (MXDR) – 24/7 SOC Service** (7/24 SOC, tehdit avcılığı ve L2/L3 desteği)
7. **SIEM & Log Management – Central Analytics & Compliance** (Log toplama, depolama ve uyum şablonları)
8. **Summary Licensing and Packaging Architecture (Matrix)** (Modüllerin birim metriğine göre paketleme tablosu)

---

## Doğrulama Sonuçları

### Derleme Kontrolü
- `npm run build` komutu yerelde başarıyla çalıştırıldı ve herhangi bir Next.js derleme hatası olmadığı doğrulandı.
- `/markalarimiz/todyl` rotası statik olarak başarıyla oluşturuldu (`6.09 kB`).
