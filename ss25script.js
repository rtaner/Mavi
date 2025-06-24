document.addEventListener('DOMContentLoaded', () => {
    // denimData objesi: Kadın ve Erkek şortları tamamen kaldırıldı
    const denimData = {
        kadın: [
            // KADIN KOLEKSİYONLARI - Casual Modern
            { category: "Casual Modern", season: "İlkbahar", name: "Casual Modern İlkbahar 1", image: "CasualModernilk0.png", description: "Denim total look, PU ceket ve layering vurgusu. Sportif ve grafik detaylar. Yumuşak tonlar ve kontrast dikişli crop parçalar." },
            { category: "Casual Modern", season: "İlkbahar", name: "Casual Modern İlkbahar 2", image: "CasualModernilk1.png", description: "Denim total look, PU ceket ve layering vurgusu. Sportif ve grafik detaylar. Yumuşak tonlar ve kontrast dikişli crop parçalar." },
            { category: "Casual Modern", season: "İlkbahar", name: "Casual Modern İlkbahar 3", image: "CasualModernilk2.png", description: "Denim total look, PU ceket ve layering vurgusu. Sportif ve grafik detaylar. Yumuşak tonlar ve kontrast dikişli crop parçalar." },
            { category: "Casual Modern", season: "Yaz", name: "Casual Modern Yaz 1", image: "casualmodernyaz0.png", description: "Total look ve 'white on white' trendi. Lime ve lila gibi sezon renkleri. Dokuma tulum, denim friendly kombinler." },
            { category: "Casual Modern", season: "Yaz", name: "Casual Modern Yaz 2", image: "casualmodernyaz1.png", description: "Total look ve 'white on white' trendi. Lime ve lila gibi sezon renkleri. Dokuma tulum, denim friendly kombinler." },

            // KADIN KOLEKSİYONLARI - City Chic
            { category: "City Chic", season: "İlkbahar", name: "City Chic İlkbahar 1", image: "citychicilk2.png", description: "Zamansız, doğal renklerde, feminen koleksiyon. Lux touch gömlekler, smart pantolonlar." },
            { category: "City Chic", season: "Yaz", name: "City Chic Yaz 1", image: "citychicyaz1.png", description: "Şehirli yaz kadını için transparan üstler, şort tulumlar. Indigo gömlek, linen detaylar." },

            // KADIN KOLEKSİYONLARI - Casual Pretty
            { category: "Casual Pretty", season: "İlkbahar", name: "Casual Pretty İlkbahar 1", image: "casualprettyilk0.png", description: "Doğal renkli, çiçekli ve brodeli ürünler. Feminen, layering etkisi ve ada çayı rengi detayı." },
            { category: "Casual Pretty", season: "İlkbahar", name: "Casual Pretty İlkbahar 2", image: "casualprettyilk2.png", description: "Doğal renkli, çiçekli ve brodeli ürünler. Feminen, layering etkisi ve ada çayı rengi detayı." },
            { category: "Casual Pretty", season: "Yaz", name: "Casual Pretty Yaz 1", image: "casualprettyyaz0.png", description: "Akdeniz havası, white-on-white görünüm. Marin teması, palmiyeli ve ketenli kombinler." },
            { category: "Casual Pretty", season: "Yaz", name: "Casual Pretty Yaz 2", image: "casualprettyyaz2.png", description: "Akdeniz havası, white-on-white görünüm. Marin teması, palmiyeli ve ketenli kombinler." },

            // KADIN KOLEKSİYONLARI - Young Pretty
            { category: "Young Pretty", season: "İlkbahar", name: "Young Pretty İlkbahar 1", image: "youngprettyilk1.png", description: "“Trendy Kız” teması, kırmızı ve gri kontrastı. Hırkalar, şort etek ve yelek detayları." },
            { category: "Young Pretty", season: "Yaz", name: "Young Pretty Yaz 1", image: "youngprettyaz2.png", description: "Kroşe üstler, leopar desenler, çizgili parçalar. Fiyonk detaylı tişörtler, genç şıklık." },
            { category: "Young Pretty", season: "Yaz", name: "Young Pretty Yaz 2", image: "youngprettyyaz0.png", description: "Kroşe üstler, leopar desenler, çizgili parçalar. Fiyonk detaylı tişörtler, genç şıklık." },

            // KADIN KOLEKSİYONLARI - Young Casual
            { category: "Young Casual", season: "İlkbahar", name: "Young Casual İlkbahar 1", image: "youngcasualilk1.png", description: "Monokrom tonlar, kolej hikayesi. Grafik baskılar ve oxford gömlekler." },

            // KADIN KOLEKSİYONLARI - Mavi Edition
            { category: "Mavi Edition", season: "Yaz", name: "Mavi Edition Yaz 1", image: "mavieditionyaz0.png", description: "Denim odaklı, şıklık ön planda. Tencel, keten karışımlı doğal tonlu parçalar. Asimetrik bluzlar, JOY wide leg pantolon." },
            { category: "Mavi Edition", season: "Yaz", name: "Mavi Edition Yaz 2", image: "mavieditionyaz01.png", description: "Denim odaklı, şıklık ön planda. Tencel, keten karışımlı doğal tonlu parçalar. Asimetrik bluzlar, JOY wide leg pantolon." },
            { category: "Mavi Edition", season: "Yaz", name: "Mavi Edition Yaz 3", image: "mavieditionyaz1.png", description: "Denim odaklı, şıklık ön planda. Tencel, keten karışımlı doğal tonlu parçalar. Asimetrik bluzlar, JOY wide leg pantolon." },

            // KADIN KOLEKSİYONLARI - MaviTerrenean
            { category: "MaviTerrenean", season: "Yaz", name: "MaviTerrenean Yaz 1", image: "maviterrenaenyaz2.png", description: "Genç Akdeniz kadını, keten ve dantelli detaylar. Denizkızı gömlek, çizgili pantolon." },
            { category: "MaviTerrenean", season: "Yaz", name: "MaviTerrenean Yaz 2", image: "maviterrenaenyaz20.png", description: "Genç Akdeniz kadını, keten ve dantelli detaylar. Denizkızı gömlek, çizgili pantolon." },

            // KADIN KOLEKSİYONLARI - Mavi Logo / Graphic / Licence (Örnek Data)
            { category: "Mavi Logo / Graphic / Licence", season: "Yaz", name: "Şehir Tişörtü", image: "grafik.png", description: "Şehir isimli tişörtler, ikonik baskılar (Mickey, Snoopy). E-com özel grafik paketler, best-seller tasarımlar." },
        ],
        erkek: [
            // ERKEK KOLEKSİYONLARI - Mavi Edition
            { category: "Mavi Edition", season: "İlkbahar", name: "Mavi Edition İlkbahar 1", image: "mavieditionerkekilk1.png", description: "Total look, tensel denim ve pastel renkli ürünler. PU bomber, trençkot kombinleri." },
            { category: "Mavi Edition", season: "Yaz", name: "Mavi Edition Yaz 1", image: "mavieditionerkekyaz0.png", description: "Marin temalı, %100 keten takımlar. Sedef düğmeler, ribana atlet ve muscle tee'ler." },

            // ERKEK KOLEKSİYONLARI - Mavi Black
            { category: "Mavi Black", season: "İlkbahar", name: "Mavi Black İlkbahar 1", image: "maviblackilk0.png", description: "Premium kumaş ve monokrom görünüm. Modal karışımlı eşofmanlar, tencel gömlekler." },
            { category: "Mavi Black", season: "Yaz", name: "Mavi Black Yaz 1", image: "maviblackyaz0.png", description: "Siyah-beyaz, bej ve gri tonları. PU baskı detaylı tişörtler ve resort collar gömlekler." },

            // ERKEK KOLEKSİYONLARI - Casual Weekend
            { category: "Casual Weekend", season: "İlkbahar", name: "Casual Weekend İlkbahar 1", image: "casualweekendilk0.png", description: "Hafta sonu rahatlığı, keten gömlekler ve denim overshirt." },
            { category: "Casual Weekend", season: "Yaz", name: "Casual Weekend Yaz 1", image: "casualweekendeyaz0.png", description: "Müslin gömlekler, resort collar ve parça boya ürünler. Mint ve gri tonlar." },
            { category: "Casual Weekend", season: "Yaz", name: "Casual Weekend Yaz 2", image: "casualweekendyaz2.png", description: "Müslin gömlekler, resort collar ve parça boya ürünler. Mint ve gri tonlar." },

            // ERKEK KOLEKSİYONLARI - Casual Young
            { category: "Casual Young", season: "İlkbahar", name: "Casual Young İlkbahar 1", image: "casualyoungilk0.png", description: "Kolej tarzı, arma ve melanj detayları. Sweatpant ve kısa kollu sweatshirt’ler." },
            { category: "Casual Young", season: "Yaz", name: "Casual Young Yaz 1", image: "casualyoungyaz2.png", description: "Temiz görünüm, denim friendly kombinler. Crack print’ler ve çizgili şort takımlar." },

            // ERKEK KOLEKSİYONLARI - Urban
            { category: "Urban", season: "İlkbahar", name: "Urban İlkbahar 1", image: "urbanilk1.png", description: "Asi genç erkeği anlatan, boxy ve overshirt ürünler." },
            { category: "Urban", season: "Yaz", name: "Urban Yaz 1", image: "urbanyaz1.png", description: "Fuşya tişört ve grafik baskılar. Renkli basic parçalar." },

            // ERKEK KOLEKSİYONLARI - Mavi Pro
            { category: "Mavi Pro", season: "Yaz", name: "Mavi Pro Yaz 1", image: "maviproyaz1.png", description: "Teknik baskılar ve 90’lar fit eşofmanlar. Muscle fit tişörtler ve yeni logo." },

            // ERKEK KOLEKSİYONLARI - MaviTerrenean
            { category: "MaviTerrenean", season: "Yaz", name: "MaviTerrenean Yaz 1", image: "maviterrenaenerkekyaz2.png", description: "Deniz kenarı hikayesi, keten blazer ve pantolon. Jakarlı gömlekler, tatile çıkan 'edition erkeği'." },
        ]
    };

    const kadınListesi = document.getElementById('kadın-denim-listesi');
    const erkekListesi = document.getElementById('erkek-denim-listesi');
    const kadınSection = document.getElementById('kadın-denimler');
    const erkekSection = document.getElementById('erkek-denimler');
    
    // HTML'deki yeni id'leri kullanarak filtre div'lerini seçiyoruz
    const kadınCategoryFiltersDiv = document.getElementById('kadın-category-filters');
    const erkekCategoryFiltersDiv = document.getElementById('erkek-category-filters');
    
    const mainFilterButtons = document.querySelectorAll('.main-filters .filter-button'); // Ana filtre butonları
    const searchInput = document.getElementById('search-input');

    // Lightbox elemanları
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeButton = document.querySelector('.close-button');


    let currentGenderFilter = 'all'; // 'all', 'kadın', 'erkek'
    let currentThemeFilter = 'all'; // 'all' veya belirli bir kategori adı

    // Dinamik filtre butonlarını oluşturma
    function populateFilterButtons() {
        kadınCategoryFiltersDiv.innerHTML = ''; // Öncekileri temizle
        erkekCategoryFiltersDiv.innerHTML = ''; // Öncekileri temizle

        const allKadınThemes = Array.from(new Set(denimData.kadın.map(d => d.category)));
        const allErkekThemes = Array.from(new Set(denimData.erkek.map(d => d.category)));

        allKadınThemes.sort((a, b) => a.localeCompare(b, 'tr', { sensitivity: 'base' }));
        allErkekThemes.sort((a, b) => a.localeCompare(b, 'tr', { sensitivity: 'base' }));

        const createButton = (gender, theme, text) => {
            const button = document.createElement('button');
            button.classList.add('filter-button');
            button.dataset.gender = gender;
            button.dataset.theme = theme;
            button.textContent = text;
            button.addEventListener('click', () => {
                applyFilters(gender, theme);
            });
            return button;
        };

        allKadınThemes.forEach(theme => {
            kadınCategoryFiltersDiv.appendChild(createButton('kadın', theme, `${theme} (Kadın)`));
        });

        allErkekThemes.forEach(theme => {
            erkekCategoryFiltersDiv.appendChild(createButton('erkek', theme, `${theme} (Erkek)`));
        });
    }

    populateFilterButtons();

    // Resim galerisi öğesi oluşturma fonksiyonu
    function createGalleryItem(denim) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const imgElement = document.createElement('img');
        imgElement.src = `kimg/${denim.image}`;
        imgElement.alt = denim.name;
        imgElement.addEventListener('click', () => {
            openLightbox(imgElement.src, denim.name);
        });

        const nameElement = document.createElement('p');
        nameElement.classList.add('image-name');
        nameElement.textContent = denim.name;

        galleryItem.appendChild(imgElement);
        galleryItem.appendChild(nameElement);

        return galleryItem;
    }

    function loadDenimModelsByCategory(searchTerm = '') {
        kadınListesi.innerHTML = '';
        erkekListesi.innerHTML = '';

        const lowerCaseSearchTerm = searchTerm.toLocaleLowerCase('tr');

        // Kadın modelleri
        const kadınGroupedData = {};
        denimData.kadın.forEach(denim => {
            const passesGenderFilter = (currentGenderFilter === 'all' || currentGenderFilter === 'kadın');
            const passesCategoryFilter = (currentThemeFilter === 'all' || denim.category === currentThemeFilter);
            const passesSearchFilter = (searchTerm === '' ||
                denim.name.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm) ||
                (denim.description && denim.description.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm)) ||
                denim.category.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm) ||
                (denim.season && denim.season.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm)));

            if (passesGenderFilter && passesCategoryFilter && passesSearchFilter) {
                if (!kadınGroupedData[denim.category]) {
                    kadınGroupedData[denim.category] = {};
                }
                if (!kadınGroupedData[denim.category][denim.season]) {
                    kadınGroupedData[denim.category][denim.season] = {
                        description: denim.description, // İlk bulunan description'ı kullan
                        images: []
                    };
                }
                kadınGroupedData[denim.category][denim.season].images.push(denim);
            }
        });

        const sortedKadınCategories = Object.keys(kadınGroupedData).sort((a, b) => a.localeCompare(b, 'tr', { sensitivity: 'base' }));
        sortedKadınCategories.forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.classList.add('category-section');
            categorySection.innerHTML = `<h4>${category}</h4>`;

            const sortedSeasons = Object.keys(kadınGroupedData[category]).sort((a, b) => {
                const order = { "İlkbahar": 1, "Yaz": 2, "Sonbahar": 3, "Kış": 4 };
                return (order[a] || 99) - (order[b] || 99);
            });

            sortedSeasons.forEach(season => {
                const seasonData = kadınGroupedData[category][season];
                const seasonSubSection = document.createElement('div');
                seasonSubSection.classList.add('season-sub-section');
                seasonSubSection.innerHTML = `
                    <h5>${season}</h5>
                    <p class="description-text">${seasonData.description}</p>
                `;

                const imageGallery = document.createElement('div');
                imageGallery.classList.add('image-gallery');

                seasonData.images.sort((a, b) => a.name.localeCompare(b.name, 'tr', { sensitivity: 'base' })).forEach(denim => {
                    imageGallery.appendChild(createGalleryItem(denim));
                });
                seasonSubSection.appendChild(imageGallery);
                categorySection.appendChild(seasonSubSection);
            });
            kadınListesi.appendChild(categorySection);
        });

        // Erkek modelleri
        const erkekGroupedData = {};
        denimData.erkek.forEach(denim => {
            const passesGenderFilter = (currentGenderFilter === 'all' || currentGenderFilter === 'erkek');
            const passesCategoryFilter = (currentThemeFilter === 'all' || denim.category === currentThemeFilter);
            const passesSearchFilter = (searchTerm === '' ||
                denim.name.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm) ||
                (denim.description && denim.description.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm)) ||
                denim.category.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm) ||
                (denim.season && denim.season.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm)));

            if (passesGenderFilter && passesCategoryFilter && passesSearchFilter) {
                if (!erkekGroupedData[denim.category]) {
                    erkekGroupedData[denim.category] = {};
                }
                if (!erkekGroupedData[denim.category][denim.season]) {
                    erkekGroupedData[denim.category][denim.season] = {
                        description: denim.description, // İlk bulunan description'ı kullan
                        images: []
                    };
                }
                erkekGroupedData[denim.category][denim.season].images.push(denim);
            }
        });

        const sortedErkekCategories = Object.keys(erkekGroupedData).sort((a, b) => a.localeCompare(b, 'tr', { sensitivity: 'base' }));
        sortedErkekCategories.forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.classList.add('category-section');
            categorySection.innerHTML = `<h4>${category}</h4>`;

            const sortedSeasons = Object.keys(erkekGroupedData[category]).sort((a, b) => {
                const order = { "İlkbahar": 1, "Yaz": 2, "Sonbahar": 3, "Kış": 4 };
                return (order[a] || 99) - (order[b] || 99);
            });

            sortedSeasons.forEach(season => {
                const seasonData = erkekGroupedData[category][season];
                const seasonSubSection = document.createElement('div');
                seasonSubSection.classList.add('season-sub-section');
                seasonSubSection.innerHTML = `
                    <h5>${season}</h5>
                    <p class="description-text">${seasonData.description}</p>
                `;

                const imageGallery = document.createElement('div');
                imageGallery.classList.add('image-gallery');

                seasonData.images.sort((a, b) => a.name.localeCompare(b.name, 'tr', { sensitivity: 'base' })).forEach(denim => {
                    imageGallery.appendChild(createGalleryItem(denim));
                });
                seasonSubSection.appendChild(imageGallery);
                categorySection.appendChild(seasonSubSection);
            });
            erkekListesi.appendChild(categorySection);
        });

        // Bölümlerin görünürlüğünü ayarlama
        // Eğer bir cinsiyet filtresi aktifse ve o cinsiyette ürün yoksa veya arama terimiyle eşleşmiyorsa gizle
        const showKadın = (currentGenderFilter === 'all' || currentGenderFilter === 'kadın') && Object.keys(kadınGroupedData).length > 0;
        const showErkek = (currentGenderFilter === 'all' || currentGenderFilter === 'erkek') && Object.keys(erkekGroupedData).length > 0;

        kadınSection.classList.toggle('hidden', !showKadın);
        erkekSection.classList.toggle('hidden', !showErkek);
    }


    // Filtreleme butonları için olay dinleyiciler
    // Ana cinsiyet filtreleri (Tümü, Kadın, Erkek)
    mainFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gender = button.dataset.gender;
            applyFilters(gender, 'all'); // Ana filtreye basıldığında kategori filtresini sıfırla
        });
    });

    // Kategori filtreleri (JavaScript tarafından dinamik olarak eklendiği için parent div'e event delegation yapıyoruz)
    document.querySelector('nav').addEventListener('click', (event) => {
        if (event.target.classList.contains('filter-button') && event.target.closest('.category-filters')) {
            const gender = event.target.dataset.gender;
            const theme = event.target.dataset.theme;
            applyFilters(gender, theme);
        }
    });


    function applyFilters(gender, theme) {
        currentGenderFilter = gender;
        currentThemeFilter = theme;

        // Tüm aktif sınıfları kaldır
        document.querySelectorAll('.filter-button').forEach(button => button.classList.remove('active'));

        // Doğru butonları aktif hale getir
        // Önce ana filtreleri kontrol et
        const mainButton = document.querySelector(`.main-filters .filter-button[data-gender="${gender}"][data-theme="all"]`);
        if (mainButton) {
            mainButton.classList.add('active');
        }
        // Sonra kategori filtrelerini kontrol et (eğer bir kategori filtresi seçildiyse)
        if (theme !== 'all') {
            const categoryButton = document.querySelector(`.category-filters .filter-button[data-gender="${gender}"][data-theme="${theme}"]`);
            if (categoryButton) {
                categoryButton.classList.add('active');
            }
        }
        
        searchInput.value = ''; // Filtre uygulandığında arama kutusunu temizle
        loadDenimModelsByCategory();
    }


    // Arama inputu için olay dinleyici
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim();
        
        // Arama yapıldığında tüm aktif filtre butonlarının aktif sınıfını kaldır
        document.querySelectorAll('.filter-button').forEach(button => button.classList.remove('active'));

        if (searchTerm === '') {
            // Arama kutusu boşsa, mevcut filtrelere dön veya varsayılanı yükle
            applyFilters(currentGenderFilter, currentThemeFilter);
        } else {
            // Arama yapıldığında cinsiyet ve tema filtrelerini 'all' olarak ayarla
            // Sadece arama sonucunu göster
            currentGenderFilter = 'all';
            currentThemeFilter = 'all';
            loadDenimModelsByCategory(searchTerm);
        }
    });

    // Lightbox fonksiyonları
    function openLightbox(imageSrc, captionText) {
        lightbox.style.display = 'block';
        lightboxImg.src = imageSrc;
        lightboxCaption.textContent = captionText;
    }

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Lightbox dışına tıklandığında kapat
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Sayfa yüklendiğinde varsayılan filtreyi ayarla ve modelleri yükle
    applyFilters('all', 'all');
});