// collectionsQuestions.js

const collectionsQuestions = [
    // Kadın Koleksiyonları
    {
        image: "kimg/CasualModernilk0.png",
        description: "Denim total look, PU ceket ve layering vurgusu. Sportif ve grafik detaylar. Yumuşak tonlar ve kontrast dikişli crop parçalar.",
        correctAnswer: "Casual Modern",
        options: ["Casual Modern", "City Chic", "Casual Pretty"]
    },
    {
        image: "kimg/CasualModernilk1.png",
        description: "Denim total look, PU ceket ve layering vurgusu. Sportif ve grafik detaylar. Yumuşak tonlar ve kontrast dikişli crop parçalar.",
        correctAnswer: "Casual Modern",
        options: ["Casual Modern", "Casual Pretty", "Young Pretty"]
    },
    {
        image: "kimg/CasualModernilk2.png",
        description: "Denim total look, PU ceket ve layering vurgusu. Sportif ve grafik detaylar. Yumuşak tonlar ve kontrast dikişli crop parçalar.",
        correctAnswer: "Casual Modern",
        options: ["Casual Modern", "Young Casual", "Mavi Edition"]
    },
    {
        image: "kimg/casualmodernyaz0.png",
        description: "Total look ve 'white on white' trendi. Lime ve lila gibi sezon renkleri. Dokuma tulum, denim friendly kombinler.",
        correctAnswer: "Casual Modern",
        options: ["Casual Modern", "City Chic", "Casual Pretty"]
    },
    {
        image: "kimg/casualmodernyaz1.png",
        description: "Total look ve 'white on white' trendi. Lime ve lila gibi sezon renkleri. Dokuma tulum, denim friendly kombinler.",
        correctAnswer: "Casual Modern",
        options: ["Casual Modern", "MaviTerrenean", "Young Pretty"]
    },
    {
        image: "kimg/citychicilk2.png",
        description: "Zamansız, doğal renklerde, feminen koleksiyon. Lux touch gömlekler, smart pantolonlar.",
        correctAnswer: "City Chic",
        options: ["City Chic", "Casual Modern", "Casual Pretty"]
    },
    {
        image: "kimg/citychicyaz1.png",
        description: "Şehirli yaz kadını için transparan üstler, şort tulumlar. Indigo gömlek, linen detaylar.",
        correctAnswer: "City Chic",
        options: ["City Chic", "Casual Modern", "Mavi Edition"]
    },
    {
        image: "kimg/casualprettyilk0.png",
        description: "Doğal renkli, çiçekli ve brodeli ürünler. Feminen, layering etkisi ve ada çayı rengi detayı.",
        correctAnswer: "Casual Pretty",
        options: ["Casual Pretty", "Casual Modern", "Young Pretty"]
    },
    {
        image: "kimg/casualprettyilk2.png",
        description: "Doğal renkli, çiçekli ve brodeli ürünler. Feminen, layering etkisi ve ada çayı rengi detayı.",
        correctAnswer: "Casual Pretty",
        options: ["Casual Pretty", "City Chic", "Young Casual"]
    },
    {
        image: "kimg/casualprettyyaz0.png",
        description: "Akdeniz havası, white-on-white görünüm. Marin teması, palmiyeli ve ketenli kombinler.",
        correctAnswer: "Casual Pretty",
        options: ["Casual Pretty", "MaviTerrenean", "Casual Modern"]
    },
    {
        image: "kimg/casualprettyyaz2.png",
        description: "Akdeniz havası, white-on-white görünüm. Marin teması, palmiyeli ve ketenli kombinler.",
        correctAnswer: "Casual Pretty",
        options: ["Casual Pretty", "Young Pretty", "City Chic"]
    },
    {
        image: "kimg/youngprettyilk1.png",
        description: "“Trendy Kız” teması, kırmızı ve gri kontrastı. Hırkalar, şort etek ve yelek detayları.",
        correctAnswer: "Young Pretty",
        options: ["Young Pretty", "Young Casual", "Casual Pretty"]
    },
    {
        image: "kimg/youngprettyaz2.png",
        description: "Kroşe üstler, leopar desenler, çizgili parçalar. Fiyonk detaylı tişörtler, genç şıklık.",
        correctAnswer: "Young Pretty",
        options: ["Young Pretty", "Casual Pretty", "MaviTerrenean"]
    },
    {
        image: "kimg/youngprettyyaz0.png",
        description: "Kroşe üstler, leopar desenler, çizgili parçalar. Fiyonk detaylı tişörtler, genç şıklık.",
        correctAnswer: "Young Pretty",
        options: ["Young Pretty", "Casual Modern", "City Chic"]
    },
    {
        image: "kimg/youngcasualilk1.png",
        description: "Monokrom tonlar, kolej hikayesi. Grafik baskılar ve oxford gömlekler.",
        correctAnswer: "Young Casual",
        options: ["Young Casual", "Casual Modern", "Urban"]
    },
    {
        image: "kimg/mavieditionyaz0.png",
        description: "Denim odaklı, şıklık ön planda. Tencel, keten karışımlı doğal tonlu parçalar. Asimetrik bluzlar, JOY wide leg pantolon.",
        correctAnswer: "Mavi Edition",
        options: ["Mavi Edition", "MaviTerrenean", "Casual Modern"]
    },
    {
        image: "kimg/mavieditionyaz01.png",
        description: "Denim odaklı, şıklık ön planda. Tencel, keten karışımlı doğal tonlu parçalar. Asimetrik bluzlar, JOY wide leg pantolon.",
        correctAnswer: "Mavi Edition",
        options: ["Mavi Edition", "Mavi Pro", "Mavi Black"]
    },
    {
        image: "kimg/mavieditionyaz1.png",
        description: "Denim odaklı, şıklık ön planda. Tencel, keten karışımlı doğal tonlu parçalar. Asimetrik bluzlar, JOY wide leg pantolon.",
        correctAnswer: "Mavi Edition",
        options: ["Mavi Edition", "Casual Weekend", "Urban"]
    },
    {
        image: "kimg/maviterrenaenyaz2.png",
        description: "Genç Akdeniz kadını, keten ve dantelli detaylar. Denizkızı gömlek, çizgili pantolon.",
        correctAnswer: "MaviTerrenean",
        options: ["MaviTerrenean", "Casual Pretty", "Mavi Edition"]
    },
    {
        image: "kimg/maviterrenaenyaz20.png",
        description: "Genç Akdeniz kadını, keten ve dantelli detaylar. Denizkızı gömlek, çizgili pantolon.",
        correctAnswer: "MaviTerrenean",
        options: ["MaviTerrenean", "Young Pretty", "City Chic"]
    },
    {
        image: "kimg/grafik.png",
        description: "Şehir isimli tişörtler, ikonik baskılar (Mickey, Snoopy). E-com özel grafik paketler, best-seller tasarımlar.",
        correctAnswer: "Şehir Tişörtü",
        options: ["Şehir Tişörtü", "Urban", "Mavi Pro"]
    },

    // Erkek Koleksiyonları
    {
        image: "kimg/mavieditionerkekilk1.png",
        description: "Total look, tensel denim ve pastel renkli ürünler. PU bomber, trençkot kombinleri.",
        correctAnswer: "Mavi Edition",
        options: ["Mavi Edition", "Mavi Black", "Casual Weekend"]
    },
    {
        image: "kimg/mavieditionerkekyaz0.png",
        description: "Marin temalı, %100 keten takımlar. Sedef düğmeler, ribana atlet ve muscle tee'ler.",
        correctAnswer: "Mavi Edition",
        options: ["Mavi Edition", "Casual Weekend", "Mavi Pro"]
    },
    {
        image: "kimg/maviblackilk0.png",
        description: "Premium kumaş ve monokrom görünüm. Modal karışımlı eşofmanlar, tencel gömlekler.",
        correctAnswer: "Mavi Black",
        options: ["Mavi Black", "Urban", "Young Casual"]
    },
    {
        image: "kimg/maviblackyaz0.png",
        description: "Siyah-beyaz, bej ve gri tonları. PU baskı detaylı tişörtler ve resort collar gömlekler.",
        correctAnswer: "Mavi Black",
        options: ["Mavi Black", "Casual Weekend", "Urban"]
    },
    {
        image: "kimg/casualweekendilk0.png",
        description: "Hafta sonu rahatlığı, keten gömlekler ve denim overshirt.",
        correctAnswer: "Casual Weekend",
        options: ["Casual Weekend", "Casual Young", "Urban"]
    },
    {
        image: "kimg/casualweekendeyaz0.png",
        description: "Müslin gömlekler, resort collar ve parça boya ürünler. Mint ve gri tonlar.",
        correctAnswer: "Casual Weekend",
        options: ["Casual Weekend", "Mavi Pro", "Mavi Black"]
    },
    {
        image: "kimg/casualweekendyaz2.png",
        description: "Müslin gömlekler, resort collar ve parça boya ürünler. Mint ve gri tonlar.",
        correctAnswer: "Casual Weekend",
        options: ["Casual Weekend", "Urban", "MaviTerrenean"]
    },
    {
        image: "kimg/casualyoungilk0.png",
        description: "Kolej tarzı, arma ve melanj detayları. Sweatpant ve kısa kollu sweatshirt’ler.",
        correctAnswer: "Casual Young",
        options: ["Casual Young", "Urban", "Mavi Black"]
    },
    {
        image: "kimg/casualyoungyaz2.png",
        description: "Temiz görünüm, denim friendly kombinler. Crack print’ler ve çizgili şort takımlar.",
        correctAnswer: "Casual Young",
        options: ["Casual Young", "Mavi Pro", "Casual Weekend"]
    },
    {
        image: "kimg/urbanilk1.png",
        description: "Asi genç erkeği anlatan, boxy ve overshirt ürünler.",
        correctAnswer: "Urban",
        options: ["Urban", "Mavi Black", "Casual Young"]
    },
    {
        image: "kimg/urbanyaz1.png",
        description: "Fuşya tişört ve grafik baskılar. Renkli basic parçalar.",
        correctAnswer: "Urban",
        options: ["Urban", "Mavi Pro", "Casual Weekend"]
    },
    {
        image: "kimg/maviproyaz1.png",
        description: "Teknik baskılar ve 90’lar fit eşofmanlar. Muscle fit tişörtler ve yeni logo.",
        correctAnswer: "Mavi Pro",
        options: ["Mavi Pro", "Urban", "Casual Young"]
    },
    {
        image: "kimg/maviterrenaenerkekyaz2.png",
        description: "Deniz kenarı hikayesi, keten blazer ve pantolon. Jakarlı gömlekler, tatile çıkan 'edition erkeği'.",
        correctAnswer: "MaviTerrenean",
        options: ["MaviTerrenean", "Mavi Edition", "Casual Weekend"]
    },
    // Yeni eklenen koleksiyon görselleri (önceden açıklama gelmemişti, şimdi eklendi)
    {
        image: "kimg/edition1.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/edition2.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/edition3.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/edition4.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/edition5.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/edition6.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/edition7.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/edition8.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/edition9.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/edition10.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Edition",
        options: ["Edition", "Akdeniz", "Kein"]
    },
    {
        image: "kimg/kein1.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Kein",
        options: ["Kein", "Edition", "Linen Touch"]
    },
    {
        image: "kimg/kein2.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Kein",
        options: ["Kein", "Edition", "Linen Touch"]
    },
    {
        image: "kimg/kein3.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Kein",
        options: ["Kein", "Edition", "Linen Touch"]
    },
    {
        image: "kimg/linentouch.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Linen Touch",
        options: ["Linen Touch", "Lux Touch", "Akdeniz"]
    },
    {
        image: "kimg/linentouch1.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Linen Touch",
        options: ["Linen Touch", "Lux Touch", "Akdeniz"]
    },
    {
        image: "kimg/luxtouch.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Lux Touch",
        options: ["Lux Touch", "Linen Touch", "Edition"]
    },
    {
        image: "kimg/luxtouch1.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Lux Touch",
        options: ["Lux Touch", "Linen Touch", "Edition"]
    },
    {
        image: "kimg/luxtouch2.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Lux Touch",
        options: ["Lux Touch", "Linen Touch", "Edition"]
    },

    // Akdeniz Koleksiyonu soruları
    {
        image: "kimg/akdeniz1.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Akdeniz",
        options: ["Akdeniz", "Edition", "MaviTerrenean"]
    },
    {
        image: "kimg/akdeniz2.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Akdeniz",
        options: ["Akdeniz", "Casual Pretty", "City Chic"]
    },
    {
        image: "kimg/akdeniz3.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Akdeniz",
        options: ["Akdeniz", "Young Pretty", "Mavi Black"]
    },
    {
        image: "kimg/akdeniz4.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Akdeniz",
        options: ["Akdeniz", "Casual Modern", "Urban"]
    },
    {
        image: "kimg/akdeniz5.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Akdeniz",
        options: ["Akdeniz", "Linen Touch", "Lux Touch"]
    },
    {
        image: "kimg/akdeniz6.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Akdeniz",
        options: ["Akdeniz", "Kein", "Mavi Pro"]
    },
    {
        image: "kimg/akdeniz7.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Akdeniz",
        options: ["Akdeniz", "Casual Weekend", "Şehir Tişörtü"]
    },
    {
        image: "kimg/akdeniz8.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Akdeniz",
        options: ["Akdeniz", "Mavi Edition", "Young Casual"]
    },

    // Mv91 Koleksiyonu soruları
    {
        image: "kimg/mv91.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Mv91",
        options: ["Mv91", "Akdeniz", "Edition"]
    },
    {
        image: "kimg/mv912.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Mv91",
        options: ["Mv91", "Kein", "Linen Touch"]
    },

    // Allblue Koleksiyonu soruları
    {
        image: "kimg/allblue-akdeniz.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Allblue",
        options: ["Allblue", "Akdeniz", "Black"]
    },
    {
        image: "kimg/allblue.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Allblue",
        options: ["Allblue", "Edition", "Mv91"]
    },
    {
        image: "kimg/allblue1.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Allblue",
        options: ["Allblue", "Linen Touch", "Lux Touch"]
    },

    // Black Koleksiyonu soruları
    {
        image: "kimg/black.webp",
        description: "Hangi Koleksiyona aittir?",
        correctAnswer: "Black",
        options: ["Black", "Allblue", "Mavi Pro"]
    }
];