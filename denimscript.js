
document.addEventListener('DOMContentLoaded', () => {

    const denimData = {
        kadın: [
            // SUPER SKINNY
            { category: "SUPER SKINNY", name: "Serenay", image: "serenay.webp", description: "Yüksek bel, süper skinny, dar paça" },

            // SKINNY
            { category: "SKINNY", name: "Tess", image: "tess.webp", description: "Normal bel, skinny, dar paça" },

            // MOM
            { category: "MOM", name: "Cindy", image: "cindy.webp", description: "Yüksek bel, mom jean, dar paça" },
            { category: "MOM", name: "Star", image: "star.webp", description: "Süper yüksek bel, mom jean, dar paça" },

            // BOYFRIEND
            { category: "BOYFRIEND", name: "Ada", image: "ada.webp", description: "Normal bel, boyfriend, yarı dar paça" },

            // STRAIGHT
            { category: "STRAIGHT", name: "Rockstar", image: "rockstar.webp", description: "Normal bel, düz kesim, düz paça" },
            { category: "STRAIGHT", name: "Barcelona", image: "barcelona.webp", description: "Yüksek bel, düz rahat kesim, düz paça" },
            { category: "STRAIGHT", name: "New York", image: "new_york.webp", description: "Yüksek bel, düz kesim, düz paça" },
            { category: "STRAIGHT", name: "Sky", image: "sky.webp", description: "Yüksek bel, mom kesim, düz paça" },
            { category: "STRAIGHT", name: "Ibiza", image: "ibiza.webp", description: "Düşük bel, düz rahat kesim, düz paça" },
            { category: "STRAIGHT", name: "Jane", image: "jane.webp", description: "Normal bel, düz kesim, düz paça" },
            { category: "STRAIGHT", name: "Taylor", image: "taylor.webp", description: "Yüksek bel, düz kesim, düz paça" },
            { category: "STRAIGHT", name: "Margot", image: "margot.webp", description: "Yüksek bel, düz rahat kesim, düz paça" },
            { category: "STRAIGHT", name: "Lisette", image: "lisette.webp", description: "Normal bel, düz rahat kesim, düz paça" },
            { category: "STRAIGHT", name: "Windy Extra Loose", image: "windyex.webp", description: "Normal bel, düz rahat kesim, düz paça" },

            // SLIM STRAIGHT
            { category: "SLIM STRAIGHT", name: "Viola", image: "viola.webp", description: "Normal bel, düz kesim, düz paça" },
            { category: "SLIM STRAIGHT", name: "Kendra", image: "kendra.webp", description: "Normal bel, düz kesim, düz paça" },
            { category: "SLIM STRAIGHT", name: "Mona", image: "mona.webp", "description": "Normal bel, klasik kesim, düz paça" },

            // FLARE
            { category: "FLARE", name: "Maria", image: "maria.webp", description: "Normal bel, İspanyol paça" },
            { category: "FLARE", name: "Bliss", image: "bliss.webp", description: "Yüksek bel, İspanyol paça" },
            { category: "FLARE", name: "Los Angeles", image: "losangeles.webp", description: "Yüksek bel, 70'ler İspanyol paça" },
            { category: "FLARE", "name": "Miav", image: "miav.webp", description: "Yüksek bel, İspanyol paça" },
            { category: "FLARE", name: "Sierra", image: "sierra.webp", description: "Yüksek bel, önden düğmeli İspanyol paça" },
            { category: "FLARE", name: "Molly", image: "molly.webp", description: "Normal bel, klasik kesim, çizme paça" },
            { category: "FLARE", name: "Tilda", image: "tilda.webp", description: "Yüksek bel, İspanyol paça" },

            // WIDE LEG
            { category: "WIDE LEG", name: "Siena", image: "siena.webp", description: "Yüksek bel, geniş paça" },
            { category: "WIDE LEG", name: "Malibu", image: "malibu.webp", description: "Yüksek bel, geniş paça" },
            { category: "WIDE LEG", name: "Victoria", image: "victoria.webp", description: "Yüksek bel, geniş paça" },
            { category: "WIDE LEG", name: "California", image: "california.webp", description: "Yüksek bel, geniş paça" },
            { category: "WIDE LEG", name: "Florida", image: "florida.webp", description: "Normal bel, geniş paça" },
            { category: "WIDE LEG", name: "Paloma", image: "paloma.webp", description: "Yüksek bel, geniş paça" },
            { category: "WIDE LEG", name: "Karen", image: "karen.webp", description: "Normal bel, geniş paça" },
            { category: "WIDE LEG", "name": "Kimberly", image: "kimberly.webp", description: "Yüksek bel, geniş paça" },
            { category: "WIDE LEG", name: "Miami", image: "miami.webp", description: "Normal bel, baggy, geniş paça" },
            { category: "WIDE LEG", name: "Joy", image: "joy.webp", description: "Normal bel, baggy, geniş paça" },
            { category: "WIDE LEG", name: "Liny", image: "liny.webp", description: "Düşük bel, rahat kesim, geniş paça" },
            { category: "WIDE LEG", name: "Mimi", image: "mimi.webp", description: "Yüksek bel, süper geniş paça" },
            { category: "WIDE LEG", name: "Remy", image: "remy.webp", description: "Normal bel, rahat kesim, geniş paça" },
            { category: "WIDE LEG", name: "Maribel", image: "maribel.webp", description: "Normal bel, rahat kesim, geniş paça" },
            { category: "WIDE LEG", name: "Sunny Extra Chino", image: "sunnyex.webp", description: "Düşük bel, geniş paça" },
            { category: "WIDE LEG", name: "Sandy Extra Wide", image: "sandyex.webp", description: "Düşük bel, geniş paça" },

            // BAGGY
            { category: "BAGGY", name: "Leila", image: "leila.webp", description: "Yüksek bel, baggy, daralan paça" },
            { category: "BAGGY", name: "Ella", image: "ella.webp", description: "Normal bel, baggy, daralan paça" },
            { category: "BAGGY", name: "Lisa", image: "lisa.webp", description: "Normal bel, arka kemer tokalı, baggy" },
            { category: "BAGGY", name: "Wavy Extra Baggy", image: "wavyex.webp", description: "Normal bel, baggy, daralan paça" },

            // KADIN ŞORT KOLEKSİYONU
            { category: "ŞORT-KADIN", name: "Cherry", image: "cherry.webp", description: "Boyfriend, Yüksek Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "rosie", image: "Rosie.webp", description: "Mini Mom Şort, Yüksek Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "tyra", image: "Tyra.webp", description: "Mom Şort, Yüksek Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "vivia Cuffed", image: "Vivia_Cuffed.webp", description: "Straight, Normal Bel, Cuffed" },
            { category: "ŞORT-KADIN", name: "novella", image: "Novella.webp", description: "Straight, Normal Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "Fiora", image: "fiora.webp", description: "Rahat Kesim Şort, Normal Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "verna", image: "Verna.webp", description: "Bermuda Şort, Normal Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "millie", image: "Millie.webp", description: "Midi Mom Şort, Yüksek Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "Heidi", image: "Heidi.webp", description: "Rahat Kesim Şort, Yüksek Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "lidia", image: "Lidia.webp", description: "Boyfriend, Normal Bel, Geniş Paça" },
            { category: "ŞORT-KADIN", name: "Clara", image: "Clara.webp", description: "Mom Şort, Yüksek Bel, Düz / Cuffed Paça" },
            { category: "ŞORT-KADIN", name: "melina", image: "Melina.webp", description: "Boyfriend, Normal Bel, Geniş Paça" },
            { category: "ŞORT-KADIN", name: "sasha", image: "Sasha.webp", description: "Boyfriend, Normal Bel, Geniş Paça" },
            { category: "ŞORT-KADIN", name: "Eliana", image: "eliana.webp", description: "Straight, Normal Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "pixie", image: "Pixie.webp", description: "Boyfriend, Normal Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "Alexis", image: "Alexis.webp", description: "Bermuda Şort, Normal Bel, Düz Paça" },
            { category: "ŞORT-KADIN", name: "penny", image: "Penny.webp", description: "Pilili Midi Şort, Yüksek Bel, Düz Paça" },
        ],
        erkek: [
            // SKINNY
            { category: "SKINNY", name: "James", image: "james.webp", description: "Skinny, dar paça" },
            { category: "SKINNY", name: "Jake", image: "jake.webp", description: "Skinny, düz kesim, dar paça" },
            { category: "SKINNY", name: "KVNÇ", image: "kvnc.webp", description: "Skinny, dar paça" },

            // SLIM STRAIGHT
            { category: "SLIM STRAIGHT", name: "Marcus", image: "marcus.webp", description: "Düz kesim, daralan paça" },

            // REGULAR STRAIGHT
            { category: "REGULAR STRAIGHT", name: "Hunter", image: "hunter.webp", description: "Rahat kesim, düz paça" },
            { category: "REGULAR STRAIGHT", name: "177", image: "177.webp", description: "Klasik kesim, düz paça" },
            { category: "REGULAR STRAIGHT", name: "Martin", image: "martin.webp", description: "Düz rahat kesim, düz paça" },
            { category: "REGULAR STRAIGHT", name: "Dawson", image: "dawson.webp", description: "Düz kesim, düz paça chino" },

            // TAPERED
            { category: "TAPERED", name: "Milan", image: "milan.webp", description: "Tapered fit, dar kesim, daralan paça" },
            { category: "TAPERED", name: "London", image: "london.webp", description: "Tapered fit, düz kesim, daralan paça" },

            // LOOSE
            { category: "LOOSE", name: "Lisbon", image: "lisbon.webp", description: "Loose fit, rahat kesim, düz paça" },
            { category: "LOOSE", name: "Mitte", image: "mitte.webp", description: "Loose fit, rahat kesim, geniş paça" },
            { category: "LOOSE", name: "Oxford", image: "oxford.webp", description: "Loose fit, rahat kesim, geniş paça" },
            { category: "LOOSE", name: "Carlos", image: "carlos.webp", description: "Loose fit, rahat kesim, geniş paça kargo" },

            // BAGGY
            { category: "BAGGY", name: "Toronto", image: "toronto.webp", description: "Baggy fit, rahat kesim, düz paça" },
            { category: "BAGGY", name: "Bern", image: "bern.webp", description: "Baggy fit, bol kesim, daralan paça" },
            { category: "BAGGY", name: "Atlanta", image: "atlanta.webp", description: "Baggy fit, rahat kesim, geniş paça" },
            { category: "BAGGY", name: "Austin", image: "austin.webp", description: "Baggy fit, bol kesim, daralan paça kargo" },
            { category: "BAGGY", name: "Detroit", image: "detroit.webp", description: "Baggy fit, bol kesim, geniş paça" },
            { category: "BAGGY", name: "Billie", image: "billie.webp", description: "Baggy fit, rahat kesim, daralan paça" },

            // COMFORT
            { category: "COMFORT", name: "Hasan", image: "hasan.webp", description: "Klasik rahat kesim, büyük beden, düz paça" },

            // ERKEK ŞORT KOLEKSİYONU
            { category: "ŞORT-ERKEK", name: "Hamburg", image: "hamburg.webp", description: "Loose, Normal Bel" },
            { category: "ŞORT-ERKEK", name: "Rotterdam", image: "rotterdam.webp", description: "Loose, Normal Bel" },
            { category: "ŞORT-ERKEK", name: "Houston", image: "houston.webp", description: "Loose, Normal Bel" },
            { category: "ŞORT-ERKEK", name: "Dayton", image: "dayton.webp", description: "Slim Straight, Normal Bel" },
            { category: "ŞORT-ERKEK", name: "Bremen", image: "bremen.webp", description: "Loose, Normal Bel" },
            { category: "ŞORT-ERKEK", name: "Nicholas", image: "nicholas.webp", description: "Regular Straight, Normal Bel" },
            { category: "ŞORT-ERKEK", name: "Brian", image: "brian.webp", description: "Slim Straight, Normal Bel" },
            { category: "ŞORT-ERKEK", name: "Tim", image: "tim.webp", description: "Skinny, Normal Bel" },
            { category: "ŞORT-ERKEK", name: "Lucas", image: "lucas.webp", description: "Slim Straight, Normal Bel" },
        ]
    };

    const kadınListesi = document.getElementById('kadın-denim-listesi');
    const erkekListesi = document.getElementById('erkek-denim-listesi');
    const filterButtons = document.querySelectorAll('.filter-button');
    const kadınSection = document.getElementById('kadın-denimler');
    const erkekSection = document.getElementById('erkek-denimler');
    const searchInput = document.getElementById('search-input');

    let currentGenderFilter = 'all'; // Başlangıçta tüm modelleri göster
    let currentCategoryFilter = null; // Kategori filtresi başlangıçta yok

    // Denim kartını oluşturan fonksiyon
    function createDenimCard(denim) {
        const card = document.createElement('div');
        card.classList.add('denim-card');

        const imageUrl = `img/${denim.image}`; // Resim dosyaları 'img/' klasöründe varsayılıyor

        card.innerHTML = `
            <img src="${imageUrl}" alt="${denim.name} denim" onerror="this.onerror=null;this.src='img/placeholder.webp';">
            <div class="denim-card-content">
                <h3>${denim.name}</h3>
                <p>${denim.description}</p>
            </div>
        `;
        return card;
    }

    // Modelleri kategori bazında, arama terimine ve filtrelere göre yükleyen fonksiyon
    function loadDenimModelsByCategory(searchTerm = '') {
        // İçerikleri temizle
        kadınListesi.innerHTML = '';
        erkekListesi.innerHTML = '';

        // Arama terimini Türkçe yerel ayarlarına göre küçük harfe dönüştür
        const lowerCaseSearchTerm = searchTerm.toLocaleLowerCase('tr');

        // Kadın modelleri
        const kadınCategories = {};
        denimData.kadın.forEach(denim => {
            // Cinsiyet filtresi
            const passesGenderFilter = (currentGenderFilter === 'all' || currentGenderFilter === 'kadın');
            
            // Kategori filtresi
            // Eğer "ŞORT-KADIN" butonu seçiliyse, sadece denim.category "ŞORT-KADIN" ise geçer.
            // Diğer durumlarda, genel kategori filtresi (null veya başka bir kategori) kontrol edilir.
            const passesCategoryFilter = (
                currentCategoryFilter === null || 
                (currentCategoryFilter === 'ŞORT-KADIN' && denim.category === 'ŞORT-KADIN') ||
                (currentCategoryFilter !== 'ŞORT-KADIN' && denim.category === currentCategoryFilter)
            );

            // Arama terimi filtresi
            const passesSearchFilter = (searchTerm === '' || 
                denim.name.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm) || 
                denim.description.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm) || 
                denim.category.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm));
            
            // Tüm filtreler geçilirse modeli ekle
            if (passesGenderFilter && passesCategoryFilter && passesSearchFilter) {
                if (!kadınCategories[denim.category]) {
                    kadınCategories[denim.category] = [];
                }
                kadınCategories[denim.category].push(denim);
            }
        });

        // Kadın kategorilerini alfabetik sıraya göre sırala
        const sortedKadınCategories = Object.keys(kadınCategories).sort();

        sortedKadınCategories.forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.classList.add('category-section');
            categorySection.innerHTML = `<h4>${category}</h4>`;

            const gridContainer = document.createElement('div');
            gridContainer.classList.add('denim-grid');

            // Kategori içindeki denimleri ada göre sırala
            kadınCategories[category].sort((a, b) => a.name.localeCompare(b.name, 'tr', { sensitivity: 'base' })).forEach(denim => {
                gridContainer.appendChild(createDenimCard(denim));
            });
            categorySection.appendChild(gridContainer);
            kadınListesi.appendChild(categorySection);
        });

        // Erkek modelleri
        const erkekCategories = {};
        denimData.erkek.forEach(denim => {
            // Cinsiyet filtresi
            const passesGenderFilter = (currentGenderFilter === 'all' || currentGenderFilter === 'erkek');

            // Kategori filtresi
            // Eğer "ŞORT-ERKEK" butonu seçiliyse, sadece denim.category "ŞORT-ERKEK" ise geçer.
            // Diğer durumlarda, genel kategori filtresi (null veya başka bir kategori) kontrol edilir.
            const passesCategoryFilter = (
                currentCategoryFilter === null || 
                (currentCategoryFilter === 'ŞORT-ERKEK' && denim.category === 'ŞORT-ERKEK') ||
                (currentCategoryFilter !== 'ŞORT-ERKEK' && denim.category === currentCategoryFilter)
            );

            // Arama terimi filtresi
            const passesSearchFilter = (searchTerm === '' || 
                denim.name.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm) || 
                denim.description.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm) || 
                denim.category.toLocaleLowerCase('tr').includes(lowerCaseSearchTerm));
            
            // Tüm filtreler geçilirse modeli ekle
            if (passesGenderFilter && passesCategoryFilter && passesSearchFilter) {
                if (!erkekCategories[denim.category]) {
                    erkekCategories[denim.category] = [];
                }
                erkekCategories[denim.category].push(denim);
            }
        });

        // Erkek kategorilerini alfabetik sıraya göre sırala
        const sortedErkekCategories = Object.keys(erkekCategories).sort();

        sortedErkekCategories.forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.classList.add('category-section');
            categorySection.innerHTML = `<h4>${category}</h4>`;

            const gridContainer = document.createElement('div');
            gridContainer.classList.add('denim-grid');

            // Kategori içindeki denimleri ada göre sırala
            erkekCategories[category].sort((a, b) => a.name.localeCompare(b.name, 'tr', { sensitivity: 'base' })).forEach(denim => {
                gridContainer.appendChild(createDenimCard(denim));
            });
            categorySection.appendChild(gridContainer);
            erkekListesi.appendChild(categorySection);
        });

        // Filtrelenen içerik yoksa ilgili bölümleri gizle
        // Bu bölüm, filtrelere ve arama sonucuna göre display'i ayarlar.
        const showKadınSection = (currentGenderFilter === 'all' || currentGenderFilter === 'kadın' || currentCategoryFilter === 'ŞORT-KADIN') && Object.keys(kadınCategories).length > 0;
        const showErkekSection = (currentGenderFilter === 'all' || currentGenderFilter === 'erkek' || currentCategoryFilter === 'ŞORT-ERKEK') && Object.keys(erkekCategories).length > 0;

        if (searchTerm !== '') { // Arama yapılıyorsa her ikisini de göster, boşsa filtreye göre
            kadınSection.classList.remove('hidden');
            erkekSection.classList.remove('hidden');
        } else {
            if (showKadınSection) {
                kadınSection.classList.remove('hidden');
            } else {
                kadınSection.classList.add('hidden');
            }

            if (showErkekSection) {
                erkekSection.classList.remove('hidden');
            } else {
                erkekSection.classList.add('hidden');
            }
        }
    }

    // Cinsiyet ve Kategori filtreleme fonksiyonu
    function applyFilters(gender, category = null) {
        currentGenderFilter = gender;
        currentCategoryFilter = category;

        // Tüm filtre butonlarının 'active' sınıfını kaldır
        filterButtons.forEach(button => button.classList.remove('active'));

        // Sadece seçili olan butona 'active' sınıfını ekle
        let selectedButton;
        if (category) { // Kategori filtresi varsa
            selectedButton = document.querySelector(`.filter-button[data-gender="${gender}"][data-category="${category}"]`);
        } else { // Sadece cinsiyet filtresi varsa (örn: Tümü, Kadın, Erkek)
            selectedButton = document.querySelector(`.filter-button[data-gender="${gender}"]:not([data-category])`);
        }
        if (selectedButton) {
            selectedButton.classList.add('active');
        }

        // Arama inputunu temizle ve modelleri yeniden yükle
        searchInput.value = ''; 
        loadDenimModelsByCategory(); 
    }

    // Sayfa yüklendiğinde modelleri yükle ve varsayılan filtreyi ayarla
    loadDenimModelsByCategory();
    applyFilters('all'); // Başlangıçta "Tümü" filtresi aktif olsun ve tüm ürünler yüklensin

    // Filtreleme butonları için olay dinleyiciler
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const gender = event.target.dataset.gender;
            const category = event.target.dataset.category || null; // Kategori yoksa null ata
            applyFilters(gender, category);
        });
    });

    // Arama inputu için olay dinleyici
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.trim();
        
        // Arama yapıldığında mevcut filtreleri sıfırla (eğer arama kutusu boşsa eski filtreye dön)
        if (searchTerm === '') {
            applyFilters(currentGenderFilter, currentCategoryFilter); // Mevcut filtreleri koru
        } else {
            // Arama yapıldığında tüm filtre butonlarının active sınıfını kaldır
            filterButtons.forEach(button => button.classList.remove('active'));
            // Geçici olarak tüm kategorileri gösterip arama yap
            currentGenderFilter = 'all';
            currentCategoryFilter = null;
            loadDenimModelsByCategory(searchTerm);
        }
    });
});
