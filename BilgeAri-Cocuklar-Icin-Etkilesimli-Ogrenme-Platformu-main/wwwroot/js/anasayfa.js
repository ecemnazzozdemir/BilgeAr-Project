

        // SMOOTH SCROLL FONKSİYONU
        function scrollToContent() {
            const section = document.getElementById('icerik');
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // 1. KART VERİLERİ

        const allCards = [

            {

                id: 1, category: "Doğa Dedektifliği", categoryLink: "dogadedektifleri.html",

                question: "Gökyüzü Neden Mavidir?",

                answer: "Gökyüzü aslında renksizdir! Atmosferdeki moleküller, Güneş ışığındaki mavi ışığı diğer renklere göre daha fazla dağıtır. Bu dağılma, gökyüzünün mavi görünmesini sağlar.",

                image: "images/gokyuzuyatay.jpeg" // Dosya yollarını kontrol edin!

            },

            {

                id: 2, category: "Kodlama Uzmanı", categoryLink: "kodlamauzmani.html",

                question: "Bilgisayarlar Nasıl Sayar?",

                answer: "Bilgisayarlar sadece 0 ve 1'leri, yani ikili (Binary) sistemi kullanır. Her şey, elektrik sinyalinin 'açık' (1) veya 'kapalı' (0) olmasına dayanır. Milyonlarca sıfır ve bir tüm dijital dünyayı oluşturur.",

                image: "images/bilgisayar.jpeg"

            },

            {

                id: 3, category: "Felsefi Bilgin", categoryLink: "felsefibilgin.html",

                question: "Rüya Görmek Ne Anlama Gelir?",

                answer: "Rüyalar, beynimizin uykudayken gün içinde yaşananları düzenleme ve duygusal süreçleri işleme yöntemidir. Antik çağlardan beri rüyaların anlamı üzerine felsefi tartışmalar devam etmektedir.",

                image: "images/rüya.jpg"

            },

             {

                id: 4, category: "Zaman Yolculuğu", categoryLink: "#tarih",

                question: "İlk İnsanlar Ateşi Nasıl Keşfetti?",

                answer: "Doğadaki yıldırım düşmeleriyle çıkan ateşi fark ettiler. Zamanla taşları birbirine vurarak kıvılcım çıkarıp ateş yakmayı öğrendiler.",

                image: "images/ateskesfi.jpeg"

            },

                         {

                id: 5, category: "Doğa Dedektifleri", categoryLink: "dogadedektifleri",

                question: "Bulutlar neden bazen karanlık görünür? ☁",

                answer: "Çünkü çok su damlası taşırlar.Bu damlalar ışığı geçirmez, bu yüzden gri veya siyah görünürler.",

                image: "images/bulut.jpeg"

            },

                         {

                id: 6, category: "Felsefi Bilgin", categoryLink: "felsefibilgin.html",

                question: "Aynı olaya bakan iki kişi neden farklı düşünebilir?",

                answer: "Çünkü herkesin geçmişi, duyguları ve deneyimleri farklıdır.Bu yüzden dünyayı kendi gözlerinden görür.",

                image: "images/9or6.jpg"

            },

                         {

                id: 7, category: "Matematik Çılgını", categoryLink: "#matematik",

                question: "Sıfır sayısını kim buldu?",

                answer: "Sıfır, ilk kez Hindistan’da kullanılmaya başlandı.Sonra Arap matematikçiler dünyaya yaydı.",

                image: "images/zeroson.jpeg"

            },

                         {

                id: 8, category: "Kodlama Uzmanı", categoryLink: "kodlamauzmani.html",

                question: "Bilgisayarlar “düşünebilir” mi? ",

                answer: " Hayır, bilgisayarlar düşündükleri için değil, talimatları izledikleri için işler yapar.Kod, o talimatları anlatan dildir.",

                image: "images/dusunencomp.jpeg"

            },

                         {

                id: 9, category: "İngilizce Dehası", categoryLink: "#yabancıdil",

                question: "Which word in English has the most meanings?",

                answer: "The word “set”!It has over 400 meanings, like “a TV set”, “to set the table”, “a set of rules”… ",

                image: "images/english.jpeg"

            },



        ];

       

        // 2. RASTGELE KART SEÇME VE HTML OLUŞTURMA FONKSİYONU

        function selectRandomCards(cardsArray, count = 3) {

            const numCards = Math.min(count, cardsArray.length);

            const selectedCards = [...cardsArray]

                .sort(() => 0.5 - Math.random())

                .slice(0, numCards);

           

            const container = document.getElementById('randomCardsContainer');

            container.innerHTML = '';



            selectedCards.forEach(card => {

                const cardHTML = `

                    <div class="card-flip-container">

                        <div class="flip-card">

                           

                            <div class="card-face card-front">

                                <h3>${card.category}</h3>

                                <img src="${card.image}" alt="${card.question}" class="card-img">

                                <p class="hook-question">${card.question}</p>

                                <button class="flip-btn">Cevabı Gör <span class="arrow-icon">↻</span></button>

                            </div>

                           

                            <div class="card-face card-back">

                                <p class="info-text">${card.answer}</p>

                                <p class="category-info">

                                    <a href="${card.categoryLink}" class="category-link">${card.category} <span class="play-icon">▶</span></a>

                                </p>

                                <button class="flip-btn">Geri Dön <span class="arrow-icon">↺</span></button>

                            </div>

                        </div>

                    </div>

                `;

                container.innerHTML += cardHTML;

            });

           

            initFlipFunctionality();

        }

       

        // 3. FLIP CARD İŞLEVSELLİĞİNİ BAŞLATAN FONKSİYON

        function initFlipFunctionality() {

            const flipButtons = document.querySelectorAll('.flip-btn');

           

            flipButtons.forEach(button => {

                button.removeEventListener('click', handleFlipClick);

                button.addEventListener('click', handleFlipClick);

            });

        }



        function handleFlipClick(event) {

            event.preventDefault();

            const container = this.closest('.card-flip-container');

            if (container) {

                container.classList.toggle('is-flipped');

            }

        }



        // SAYFA YÜKLENDİĞİNDE ÇALIŞTıRMA

        document.addEventListener('DOMContentLoaded', () => {

            selectRandomCards(allCards, 3);

        });



// --- VIZVIZ TAVSIYE BÖLÜMÜ ENTEGRASYONU (NİHAİ) ---



// VızVız Tavsiye Menüsü Seçenekleri (FOR DÖNGÜSÜ İÇİN GEREKLİ DİZİ)

const tavsiyeSecenekleri = [

    // Renkleri CSS değişkenleriyle güncelledik (Bunlar li arka plan rengi olacak)

    { id: 'izle', etiket: '👁️ İzle', renk: 'var(--accent-green)' },

    { id: 'dinle', etiket: '👂 Dinle', renk: 'var(--info-turkuaz)' },

    { id: 'oku', 'etiket': '📚 Oku', renk: 'var(--warning)' },

    { id: 'sosyalles', etiket: '🥳 Sosyalleş', renk: '#FF8A65' },

    { id: 'test', etiket: 'Gizli Madde (Atlandı)', renk: 'var(--dark-blue)' } // Break/Continue için

];





// Maskot ve Baloncuk Elementlerini Seçme

const maskot = document.getElementById('maskotGorseli');

const baloncuk = document.getElementById('tavsiyeBaloncuk');

const menu = document.getElementById('tavsiyeMenu');

const tavsiyeListesi = document.getElementById('tavsiyeListesi');





// Function Ekle + MouseOver/MouseOut

function tavsiyeKutusuGoster() {

    // Menü açık değilse baloncuk görünsün

    if (menu.style.display !== 'block') {

        baloncuk.style.display = 'block';

    }

}



function tavsiyeKutusuGizle() {

    baloncuk.style.display = 'none';

}





//Function Ekle + Click Event + For/Break/Continue

function tavsiyeMenusuAc() {

   

    // Direkt Menüyü Açıyoruz

    menu.style.display = 'block';

    baloncuk.style.display = 'none';

   

    // For Döngüsü Başlangıcı

    tavsiyeListesi.innerHTML = ''; // Önce listeyi temizle

    let count = 0;

   

    // For Döngüsü Başlangıcı

    for (let i = 0; i < tavsiyeSecenekleri.length; i++) {

        const secenek = tavsiyeSecenekleri[i];

       

        // Continue break (Gizli test maddesini atla)

        if (secenek.id === 'test') {

            continue;

        }

       

        // Sadece ilk 4 maddeyi göster

        if (count >= 4) {

            break;

        }

       

        // Listeyi dinamik olarak oluştur

        const listItem = document.createElement('li');

        listItem.innerText = secenek.etiket;

        listItem.setAttribute('data-action', secenek.id);

       

        // Renk ataması

        listItem.style.backgroundColor = secenek.renk;

        listItem.style.opacity = 0.8;

       

        //Click Event'i listeye bağlama ve Switch Case'i tetikleme

        listItem.onclick = function() {

            tavsiyeSeciminiKontrolEt(secenek.id);

        };

       

        // MouseOver (Change Event simülasyonu için)

        listItem.onmouseover = function(e) { e.target.style.opacity = 1; };

        listItem.onmouseout = function(e) { e.target.style.opacity = 0.8; };

       

        tavsiyeListesi.appendChild(listItem);

        count++;

    }

}





//Switch case kullanımı

function tavsiyeSeciminiKontrolEt(secim) {

    let mesaj = "Bilge Arı'nın Tavsiyesi: ";

   

    switch (secim) {

        case 'izle':

            mesaj += "Harika bir belgesel izleyerek yeni bilgiler öğren! 🎬";

            break;

        case 'dinle':

            mesaj += "Bir podcast veya sesli kitap ile kulağına bal damlat! 🎧";

            break;

        case 'oku':

            mesaj += "Yeni bir makale veya kitabın ilk sayfasını aç! 📖";

            break;

        case 'sosyalles':

            mesaj += "Bir arkadaşına bu projeyi göstererek sosyalleş! 💬";

            break;

        default:

            mesaj += "Bu tavsiye şu an aktif değil. Başka bir şey dene!";

            break;

    }

   

    alert(mesaj);

    menu.style.display = 'none'; // Seçim sonrası menüyü gizle

}



// Menü dışına tıklanınca gizleme

document.addEventListener('click', function(event) {

    // Maskot veya menü dışına tıklandıysa menüyü gizle

    if (maskot && menu && !maskot.contains(event.target) && !menu.contains(event.target)) {

        menu.style.display = 'none';

        baloncuk.style.display = 'none';

    }

});