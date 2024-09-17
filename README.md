### construction-crane-app

Bu proje, Docker, Node.js ve React kullanılarak inşa edilmiş bir yapı tasarım örneğidir. Özellikle inşaat firmaları için tasarlanmış bu uygulama, firmaların projelerini yönetmelerine olanak tanır. Uygulama, frontend ve backend servisleri ile MongoDB veritabanını Docker konteynerleri içerisinde barındırır.

### Başlamadan Önce

Projeyi başarıyla çalıştırabilmek için aşağıdaki araçların sisteminizde kurulu olması gerekmektedir:

- Docker
- Docker Compose

### Yerel Ortamda Kurulum

1. **Proje Dosyalarını İndirin:**
   GitHub repositörüsünden projeyi klonlayarak başlayın:
   ```bash
   git clone https://github.com/batuberque/construction-crane-app.git
   cd construction-crane-app
   ```

2. **Ortam Değişkenlerini Ayarlayın:**
   `frontend` ve `backend` klasörlerindeki `.env` dosyalarını doldurarak ortam değişkenlerinizi tanımlayın.

3. **Docker İmajlarını Oluşturup Konteynerleri Başlatın:**
   ```bash
   docker-compose up --build
   ```

### Uygulamaya Erişim

- **Frontend:** http://localhost:8080 adresinden erişilebilir.
- **Backend:** http://localhost:3005 adresinde API isteklerini kabul eder.

### Dosya Yapısı

- **Frontend:** React ile geliştirilmiş kullanıcı arayüzü kodları.
- **Backend:** Node.js ve Express.js kullanılarak oluşturulmuş API servisi.
- **MongoDB:** Uygulamanın veritabanını yönetir.

### Sorun Giderme

Herhangi bir sorunla karşılaşmanız durumunda, Docker loglarından yararlanarak sorunun kaynağını belirleyebilirsiniz:
```bash
docker-compose logs
```

Değişiklikler sonrası konteynerleri yeniden başlatmayı unutmayın:
```bash
docker-compose down
docker-compose up --build
```

docker-compose.yml dosyası içerisinde,
- ./backend/gloud.json:/app/gloud.json
Kod satırının silinmesi gerekmektedir.

### Katkıda Bulunma

Projeye katkıda bulunmak isteyenler, pull request göndererek veya sorunlarını GitHub üzerinde belirterek projeye katkıda bulunabilirler.

### Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır. Detaylar için projenin lisans dosyasına göz atabilirsiniz.
