
        // *************************************************************
        // ********* ANA SAYFADAN KOPYALANAN ORTAK BİLEŞENLER *********
        // *************************************************************
        
        // 1. NAVBAR HTML KODU (ANA SAYFADAN ALINDI)
        const navbarHTML = `
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="anasayfa.html">
                        <img src="images/navbariconlast.png" alt="Bilge Arı" width="40" height="40" class="d-inline-block align-text-top me-2">
                        <span class="fw-bold">Bilge Arı</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bilgeAriNavbar" aria-controls="bilgeAriNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="bilgeAriNavbar">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#zaman">⏳ Zaman Yolculuğu</a></li>
                            <li class="nav-item"><a class="nav-link" href="dogadedektifleri.html">🌳 Doğa Dedektifliği</a></li>
                            <li class="nav-item"><a class="nav-link" href="kodlamauzmani.html">💻 Kodlama Uzmanı</a></li>
                            <li class="nav-item"><a class="nav-link" href="felsefibilgin.html">🤔 Felsefi Bilgin</a></li>
                            <li class="nav-item"><a class="nav-link" href="bilim.html">🧪 Bilim Bahçesi</a></li>
                            <li class="nav-item"><a class="nav-link" href="ingilizce.html">🗣 İngilizce Dehası</a></li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="hesabimDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hesabım
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="hesabimDropdown">
                                    <li><a class="dropdown-item" href="#profil">Profilim</a></li>
                                    <li><a class="dropdown-item" href="#İlerlemelerim">İlerlemelerim</a></li>
                                    <li><a class="dropdown-item" href="#ayarlar">Ayarlar</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#cikis">Çıkış Yap</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;

        // 2. FOOTER HTML KODU (ANA SAYFADAN ALINDI)
        const footerHTML = `
    <footer class="bg-dark text-white mt-5">
        <div class="container py-4">
            <div class="row"> 
                
                <div class="col-md-4 mb-4">
                    <h3 class="fw-bold mb-3">Hızlı Erişim</h3>
                    <ul class="list-unstyled">
                        <li><a href="anasayfa.html" class="text-secondary text-decoration-none">Ana Sayfa</a></li>
                        <li><a href="#soruAccordion" class="text-secondary text-decoration-none">Büyük Sorular</a></li>
                        <li><a href="#filozoflar" class="text-secondary text-decoration-none">Filozoflar</a></li>
                    </ul>
                </div>

                <div class="col-md-4 mb-4">
                    <h3 class="fw-bold mb-3">İletişim</h3>
                    <p class="text-sm text-secondary">E-posta: <a href="mailto:info@bilgeari.com" class="text-secondary text-decoration-none">info@bilgeari.com</a></p>
                    <p class="text-sm text-secondary">Telefon: +90 555 123 45 67</p>
                </div>

                <div class="col-md-4 mb-4">
                    <h3 class="fw-bold mb-3">Bizi Takip Edin</h3>
                    <div class="d-flex" style="font-size: 1.5rem;">
                        <span class="me-3" style="color: var(--secondary-gold);">F</span> 
                        <span class="me-3" style="color: var(--secondary-gold);">X</span> 
                        <span style="color: var(--secondary-gold);">I</span> 
                    </div>
                </div>

            </div> 
        </div>
        <div class="border-top border-secondary-subtle pt-2 pb-1 text-center small text-secondary">
            <p>&copy; 2025 Kâşif Vız Okulu. Tüm Hakları Saklıdır.</p>
        </div>
    </footer>
`;

        // Entegrasyon Fonksiyonu
        function integrateComponents() {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            const footerPlaceholder = document.getElementById('footer-placeholder');

            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = navbarHTML;
            }

            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = footerHTML;
            }
        }

        // *************************************************************
        // ********* MEVCUT FELSEFİ BİLGİN JS KODU (DEĞİŞMEDİ) *********
        // *************************************************************

        // Felsefi İkilemler Dizisi
        const dilemmas = [
            {
                dilemma: "Arkadaşın yanlışlıkla değerli bir vazoyu kırdı ve suçu sana atıyor. Ne yaparsın?",
                optionA: "Gerçeği söylerim: Vazoyu ben kırmadım. (Doğruluk yolu)",
                optionB: "Sessiz kalırım: Arkadaşıma destek olurum. (Sadakat yolu)",
                resultA: "Dürüstlük (Kant Etik'i): Gerçeği söylemek her zaman doğru eylemdir. Ancak arkadaşınla arandaki ilişki zarar görebilir.",
                resultB: "Sadakat (Sonuçsalcılık): Arkadaşınla aranı korudun. Fakat yalan üzerine kurulu bir dostluk ne kadar sağlam olur? Bu eylemin uzun vadede daha kötü sonuçları olabilir.",
            },
            {
                dilemma: "Yolda acıkmış bir kedi gördün. Yanında sadece bir tane sandviçin var. Sandviçin yarısını kediye mi verirsin, yoksa çok aç olduğun için hepsini yer misin?",
                optionA: "Sandviçin yarısını kediyle paylaşırım. (Paylaşım yolu)",
                optionB: "Çok açım, sandviçin hepsini yerim. (Öz İhtiyaç yolu)",
                resultA: "Faydacılık: Bir başkasının (bu durumda kedinin) acısını azaltarak toplam mutluluğu artırdın. Küçük bir fedakarlıkla büyük bir erdem gösterdin.",
                resultB: "Egoizm: Kendi ihtiyaçlarını önceliklendirdin, ki bu doğaldır. Ancak felsefeciler, insanı insan yapanın, kendi temel ihtiyaçlarını karşıladıktan sonra başkalarına yardım etmek olduğunu söyler.",
            },
            {
                dilemma: "Oyun alanında bulduğun harika bir topu eve götürdün. Sonra topu unutan birinin üzüldüğünü gördün. Topu geri verir misin, yoksa 'Bulduğum benimdir' mi dersin?",
                optionA: "Topu geri veririm, çünkü o başkasının. (Adalet yolu)",
                optionB: "Topu saklarım, oynamak hakkım. (Sahiplenme yolu)",
                resultA: "Mülkiyet ve Adalet: Topun asıl sahibine dönmesi, adaleti sağlar. Başkasının üzüntüsünü gidermek, ahlaki açıdan en değerli eylemdir.",
                resultB: "Mutluluk: Topa sahip olarak mutlu oldun. Ancak bu mutluluk, topun sahibinin üzüntüsü üzerine kuruludur. Platon ve diğer filozoflar, gerçek mutluluğun doğru olandan geldiğini söyler.",
            }
        ];

        let currentDilemmaIndex = 0;
        let isProcessing = false;

        const qElement = document.getElementById('dilemma-question');
        const choiceAButton = document.getElementById('choiceA');
        const choiceBButton = document.getElementById('choiceB');
        const resultArea = document.getElementById('dilemma-result-area');
        const resultText = document.getElementById('dilemma-result');
        const gameEndScreen = document.getElementById('game-end-screen');
        const choiceButtonsContainer = document.getElementById('choice-buttons');
        const gameContainer = document.getElementById('game-container');


        function startGame() {
            currentDilemmaIndex = 0;
            gameEndScreen.classList.add('d-none');
            choiceButtonsContainer.classList.remove('d-none');
            resultArea.classList.add('d-none');
            loadDilemma(currentDilemmaIndex);
        }

        function loadDilemma(index) {
            isProcessing = false;
            // Düğmeleri aktif hale getir
            choiceAButton.disabled = false;
            choiceBButton.disabled = false;
            choiceAButton.style.opacity = 1;
            choiceBButton.style.opacity = 1;


            if (index >= dilemmas.length) {
                // Oyun bitti
                choiceButtonsContainer.classList.add('d-none');
                resultArea.classList.add('d-none');
                gameEndScreen.classList.remove('d-none');
                return;
            }

            const dilemma = dilemmas[index];
            qElement.textContent = dilemma.dilemma;
            choiceAButton.textContent = dilemma.optionA;
            choiceBButton.textContent = dilemma.optionB;
            
            // Sonuç alanını gizle
            resultArea.classList.add('d-none');
        }

        function makeChoice(choice) {
            if (isProcessing) return;
            isProcessing = true;

            // Düğmeleri devre dışı bırak
            choiceAButton.disabled = true;
            choiceBButton.disabled = true;

            const dilemma = dilemmas[currentDilemmaIndex];
            let explanation = '';
            
            // Seçilen butonu vurgula, diğerini soluklaştır
            if (choice === 'A') {
                explanation = dilemma.resultA;
                choiceBButton.style.opacity = 0.5;
            } else {
                explanation = dilemma.resultB;
                choiceAButton.style.opacity = 0.5;
            }

            // Sonucu göster
            resultText.textContent = explanation;
            resultArea.classList.remove('d-none');
        }

        function loadNextDilemma() {
            currentDilemmaIndex++;
            loadDilemma(currentDilemmaIndex);
        }

        // Sayfa yüklendiğinde hem bileşenleri yükle hem de oyunu başlat
        document.addEventListener('DOMContentLoaded', () => {
            // Önce Navbar ve Footer'ı yükle
            integrateComponents(); 
            
            // Sonra sayfanın asıl işlevini başlat
            startGame(); 
        });
 