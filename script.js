// DOM Elementleri
const questionImage = document.getElementById('questionImage');
const optionsContainer = document.getElementById('optionsContainer');
const optionButtons = [
    document.getElementById('option1'),
    document.getElementById('option2'),
    document.getElementById('option3')
];
const currentScoreDisplay = document.getElementById('currentScore');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScoreDisplay = document.getElementById('finalScore');
const recordBreakingMessage = document.getElementById('recordBreakingMessage');
const restartButton = document.getElementById('restartButton');
const highScoreNameDisplay = document.getElementById('highScoreName');
const highScoreValueDisplay = document.getElementById('highScoreValue');
const progressBar = document.getElementById('progressBar');
const feedbackMessage = document.getElementById('feedbackMessage');
const imageDescriptionDisplay = document.getElementById('imageDescription'); // Yeni eklenen açıklama elementi

// Oyun Ayarları
const TIME_LIMIT = 8; // Saniye cinsinden yanıt süresi
const IMAGE_FOLDER = 'img/'; // Resimlerin bulunduğu klasör (örneğin: img/resim1.jpg)

// Oyun Verileri (Örnek resimler ve şıklar)
// Kendi resimlerinizi ve şıklarınızı buraya eklemelisiniz.
// Resimlerinizi 'img/' klasörüne koyduğunuzdan emin olun.
const questions = [
    // Kadın Denim Fitleri - SUPER SKINNY
    {
        image: "acap.webp", // AKTİF KALACAK (img klasörünüzde yok, ancak aktif kalması istendi. Bu durumda görsel yüklenemeyecektir!)
        description: "Yüksek bel, süper skinny, dar paça",
        correctAnswer: "A.C.A.İ.P",
        options: ["A.C.A.İ.P", "Serenay", "Alissa"]
    },
    {
        image: "serenay.webp",
        description: "Yüksek bel, süper skinny, dar paça",
        correctAnswer: "Serenay",
        options: ["Serenay", "A.C.A.İ.P", "Tess"]
    },

    // Kadın Denim Fitleri - SKINNY
    {
        image: "alissa.webp",
        description: "Yüksek bel, skinny, dar paça",
        correctAnswer: "Alissa",
        options: ["Alissa", "Tess", "Serenay"]
    },
    {
        image: "tess.webp",
        description: "Yüksek bel, skinny, dar paça",
        correctAnswer: "Tess",
        options: ["Tess", "Alissa", "A.C.A.İ.P"]
    },

    // Kadın Denim Fitleri - MOM
    {
        image: "cindy.webp",
        description: "Yüksek bel, mom jeans, dar paça",
        correctAnswer: "Cindy",
        options: ["Cindy", "Star", "Soho"]
    },
    {
        image: "star.webp",
        description: "Süper yüksek bel, mom jeans, dar paça",
        correctAnswer: "Star",
        options: ["Star", "Sky", "Happy"]
    },
    {
        image: "soho.webp",
        description: "Yüksek bel, mom jeans, yarı dar paça",
        correctAnswer: "Soho",
        options: ["Soho", "Cindy", "Star"]
    },
    {
        image: "sky.webp",
        description: "Yüksek bel, mom, düz paça",
        correctAnswer: "Sky",
        options: ["Sky", "Happy", "Martha"]
    },
    {
        image: "happy.webp",
        description: "Yüksek bel, mom düz paça",
        correctAnswer: "Happy",
        options: ["Happy", "Sky", "Lila"]
    },
    {
        image: "martha.webp",
        description: "Yüksek bel, rahat kesim, mom jeans",
        correctAnswer: "Martha",
        options: ["Martha", "Lila", "Cindy"]
    },
    {
        image: "lila.webp",
        description: "Yüksek bel, rahat mom jeans, dar paça (Online only)",
        correctAnswer: "Lila",
        options: ["Lila", "Martha", "Sky"]
    },

    // Kadın Denim Fitleri - BOYFRIEND
    {
        image: "ada.webp",
        description: "Normal bel, boyfriend, yara dar paça",
        correctAnswer: "Ada",
        options: ["Ada", "Cindy", "Rockstar"]
    },

    // Kadın Denim Fitleri - STRAIGHT
    {
        image: "rockstar.webp",
        description: "Normal bel, düz paça",
        correctAnswer: "Rockstar",
        options: ["Rockstar", "Barcelona", "New York"]
    },
    {
        image: "barcelona.webp",
        description: "Yüksek bel, düz rahat kesim, düz paça",
        correctAnswer: "Barcelona",
        options: ["Barcelona", "Savannah", "Rockstar"]
    },
    {
        image: "new_york.webp",
        description: "Yüksek bel, düz kesim, düz paça",
        correctAnswer: "New York",
        options: ["New York", "Savannah Cuffed", "Ibiza"]
    },
    {
        image: "savannah.webp",
        description: "Yüksek bel, düz paça",
        correctAnswer: "Savannah",
        options: ["Savannah", "Carina", "Breda"]
    },
    {
        image: "savannah_cuffed.webp",
        description: "Yüksek bel, düz kesim, katlamalı paça",
        correctAnswer: "Savannah Cuffed",
        options: ["Savannah Cuffed", "New York", "Ibiza"]
    },
    {
        image: "ibiza.webp",
        description: "Düşük bel, loose straight",
        correctAnswer: "Ibiza",
        options: ["Ibiza", "Carina", "Breda"]
    },
    {
        image: "carina.webp",
        description: "Normal bel, rahat kesim",
        correctAnswer: "Carina",
        options: ["Carina", "Breda", "Jane"]
    },
    {
        image: "breda.webp",
        description: "Yüksek bel, düz paça",
        correctAnswer: "Breda",
        options: ["Breda", "Jane", "Taylor"]
    },
    {
        image: "jane.webp",
        description: "Normal bel, düz paça",
        correctAnswer: "Jane",
        options: ["Jane", "Taylor", "Rockstar"]
    },
    {
        image: "taylor.webp",
        description: "Yüksek bel, düz kesim, düz paça",
        correctAnswer: "Taylor",
        options: ["Taylor", "Jane", "Breda"]
    },

    // Kadın Denim Fitleri - SLIM STRAIGHT
    {
        image: "viola.webp",
        description: "Yüksek bel, düz paça",
        correctAnswer: "Viola",
        options: ["Viola", "Kendra", "Mona"]
    },
    {
        image: "kendra.webp",
        description: "Yüksek bel, modern düz paça",
        correctAnswer: "Kendra",
        options: ["Kendra", "Viola", "Mona"]
    },
    {
        image: "mona.webp",
        description: "Normal bel, normal kesim, düz paça",
        correctAnswer: "Mona",
        options: ["Mona", "Viola", "Kendra"]
    },

    // Kadın Denim Fitleri - FLARE
    {
        image: "maria.webp",
        description: "Yüksek bel, İspanyol paça, flare",
        correctAnswer: "Maria",
        options: ["Maria", "Bliss", "Los Angeles"]
    },
    {
        image: "bliss.webp",
        description: "Yüksek bel, İspanyol paça",
        correctAnswer: "Bliss",
        options: ["Bliss", "Miav", "Sierra"]
    },
    {
        image: "los_angeles.webp",
        description: "Yüksek bel, 70’ler İspanyol paça, flare",
        correctAnswer: "Los Angeles",
        options: ["Los Angeles", "Valenta", "Molly"]
    },
    {
        image: "miav.webp",
        description: "Yüksek bel, İspanyol paça",
        correctAnswer: "Miav",
        options: ["Miav", "Sierra", "Valenta"]
    },
    {
        image: "sierra.webp",
        description: "Yüksek bel, patı düğmeli İspanyol paça",
        correctAnswer: "Sierra",
        options: ["Sierra", "Molly", "Elena"]
    },
    {
        image: "molly.webp",
        description: "Normal bel, klasik kesim, çizme paça",
        correctAnswer: "Molly",
        options: ["Molly", "Elena", "Isabella"]
    },
    {
        image: "elena.webp",
        description: "Yüksek bel, flare",
        correctAnswer: "Elena",
        options: ["Elena", "Penelope", "Molly"]
    },
    {
        image: "isabella.webp",
        description: "Normal bel, flare",
        correctAnswer: "Isabella",
        options: ["Isabella", "Elena", "Penelope"]
    },
    {
        image: "penelope.webp",
        description: "Normal bel, çizme paça",
        correctAnswer: "Penelope",
        options: ["Penelope", "Isabella", "Molly"]
    },

    // Kadın Denim Fitleri - WIDE LEG
    {
        image: "victoria.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Victoria",
        options: ["Victoria", "Delidolu", "California"]
    },
    {
        image: "delidolu.webp",
        description: "Normal bel, rahat kesim, geniş paça (Online only)",
        correctAnswer: "Delidolu",
        options: ["Delidolu", "Florida", "Paloma"]
    },
    {
        image: "california.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "California",
        options: ["California", "Victoria", "Delidolu"]
    },
    {
        image: "florida.webp",
        description: "Normal bel, rahat kesim, geniş paça (Online only)",
        correctAnswer: "Florida",
        options: ["Florida", "Malibu", "Pera"]
    },
    {
        image: "paloma.webp",
        description: "Yüksek bel, geniş paça (Online only)",
        correctAnswer: "Paloma",
        options: ["Paloma", "Malibu", "Pera"]
    },
    {
        image: "malibu.webp",
        description: "Yüksek bel, rahat kesim, geniş paça",
        correctAnswer: "Malibu",
        options: ["Malibu", "Pera", "Erica"]
    },
    {
        image: "pera.webp",
        description: "Yüksek bel, pileli, geniş paça",
        correctAnswer: "Pera",
        options: ["Pera", "Erica", "Narita"]
    },
    {
        image: "erica.webp",
        description: "Yüksek bel, twisted geniş paça",
        correctAnswer: "Erica",
        options: ["Erica", "Narita", "Karen"]
    },
    {
        image: "karen.webp",
        description: "Normal bel, geniş paça",
        correctAnswer: "Karen",
        options: ["Karen", "Sandra", "Cathy"]
    },
    {
        image: "cathy.webp",
        description: "Normal bel, katlamalı geniş paça",
        correctAnswer: "Cathy",
        options: ["Cathy", "Linda", "Rebecca"]
    },
    {
        image: "linda.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Linda",
        options: ["Linda", "Rebecca", "Kimberly"]
    },
    {
        image: "rebecca.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Rebecca",
        options: ["Rebecca", "Kimberly", "Victoria"]
    },
    {
        image: "kimberly.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Kimberly",
        options: ["Kimberly", "Linda", "Rebecca"]
    },

    // Kadın Denim Fitleri - BAGGY
    {
        image: "leila.webp",
        description: "Yüksek bel, baggy, daralan paça",
        correctAnswer: "Leila",
        options: ["Leila", "Tokyo", "Siena"]
    },
    {
        image: "tokyo.webp",
        description: "Yüksek bel, baggy, daralan paça",
        correctAnswer: "Tokyo",
        options: ["Tokyo", "Siena", "Miami"]
    },
    {
        image: "siena.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Siena",
        options: ["Siena", "Miami", "Siena Button Up"]
    },
    {
        image: "miami.webp",
        description: "Normal bel, süper geniş paça",
        correctAnswer: "Miami",
        options: ["Miami", "Siena Button Up", "Sandra"]
    },
    {
        image: "sienab.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Siena Button Up",
        options: ["Siena Button Up", "Rosalie", "Marilla"]
    },
    {
        image: "rosalie.webp",
        description: "Yüksek bel, tapered baggy",
        correctAnswer: "Rosalie",
        options: ["Rosalie", "Marilla", "Ella"]
    },
    {
        image: "marilla.webp",
        description: "Normal bel, baggy, kargo",
        correctAnswer: "Marilla",
        options: ["Marilla", "Ella", "Lisa"]
    },
    {
        image: "ella.webp",
        description: "Normal bel, baggy",
        correctAnswer: "Ella",
        options: ["Ella", "Lisa", "Liya"]
    },
    {
        image: "lisa.webp",
        description: "Normal bel, baggy",
        correctAnswer: "Lisa",
        options: ["Lisa", "Liya", "Lola"]
    },
    {
        image: "liya.webp",
        description: "Yüksek bel, baggy",
        correctAnswer: "Liya",
        options: ["Liya", "Lola", "Lisa"]
    },
    {
        image: "lola.webp",
        description: "Yüksek bel, baggy",
        correctAnswer: "Lola",
        options: ["Lola", "Liya", "Lisa"]
    },

    // Erkek Denim Fitleri - SKINNY
    {
        image: "james.webp",
        description: "Skinny, dar paça",
        correctAnswer: "James",
        options: ["James", "Jake", "KVNC"]
    },
    {
        image: "jake.webp",
        description: "Skinny, düz kesim, dar paça",
        correctAnswer: "Jake",
        options: ["Jake", "KVNC", "Leo"]
    },
    {
        image: "kvnc.webp",
        description: "Skinny, dar paça",
        correctAnswer: "KVNC",
        options: ["KVNC", "Leo", "James"]
    },
    {
        image: "leo.webp",
        description: "Süper skinny, süper dar paça",
        correctAnswer: "Leo",
        options: ["Leo", "James", "Jake"]
    },

    // Erkek Denim Fitleri - SLIM STRAIGHT
    {
        image: "marcus.webp",
        description: "Düz kesim, daralan paça",
        correctAnswer: "Marcus",
        options: ["Marcus", "Pierre", "James"]
    },
    {
        image: "pierre.webp",
        description: "Düz kesim, düz paça",
        correctAnswer: "Pierre",
        options: ["Pierre", "Marcus", "Jake"]
    },

    // Erkek Denim Fitleri - REGULAR STRAIGHT
    {
        image: "hunter.webp",
        description: "Rahat kesim, düz paça",
        correctAnswer: "Hunter",
        options: ["Hunter", "177", "Martin"]
    },
    {
        image: "177.webp",
        description: "Klasik kesim, düz paça (Sadece online)",
        correctAnswer: "177",
        options: ["177", "Martin", "Dylan"]
    },
    {
        image: "martin.webp",
        description: "Düz rahat kesim, düz paça",
        correctAnswer: "Martin",
        options: ["Martin", "Dylan", "Hunter"]
    },
    {
        image: "dylan.webp",
        description: "Modern düz kesim, düz paça",
        correctAnswer: "Dylan",
        options: ["Dylan", "Martin", "177"]
    },

    // Erkek Denim Fitleri - TAPERED
    {
        image: "milan.webp",
        description: "Tapered fit, dar kesim, daralan paça",
        correctAnswer: "Milan",
        options: ["Milan", "london.webp", "Lisbon"]
    },
    {
        image: "london.webp",
        description: "Tapered fit, düz kesim, daralan paça",
        correctAnswer: "London",
        options: ["London", "Milan", "Lisbon"]
    },

    // Erkek Denim Fitleri - LOOSE
    {
        image: "lisbon.webp",
        description: "Loose fit, rahat kesim, düz paça",
        correctAnswer: "Lisbon",
        options: ["Lisbon", "mitte.webp", "Oxford"]
    },
    {
        image: "mitte.webp",
        description: "Loose fit, rahat kesim, geniş paça",
        correctAnswer: "Mitte",
        options: ["Mitte", "Oxford", "Carlos"]
    },
    {
        image: "oxford.webp",
        description: "Loose fit, rahat kesim, geniş paça",
        correctAnswer: "Oxford",
        options: ["Oxford", "Carlos", "Lisbon"]
    },
    {
        image: "carlos.webp",
        description: "Loose fit, rahat kesim, geniş paça, kargo",
        correctAnswer: "Carlos",
        options: ["Carlos", "Lisbon", "Oxford"]
    },

    // Erkek Denim Fitleri - BAGGY
    {
        image: "bern.webp",
        description: "Baggy fit, bol kesim, daralan paça",
        correctAnswer: "Bern",
        options: ["Bern", "toronto.webp", "Atlanta"]
    },
    {
        image: "toronto.webp",
        description: "Baggy fit, rahat kesim, düz paça",
        correctAnswer: "Toronto",
        options: ["Toronto", "Atlanta", "Detroit"]
    },
    {
        image: "atlanta.webp",
        description: "Baggy fit, rahat kesim, geniş paça",
        correctAnswer: "Atlanta",
        options: ["Atlanta", "Austin", "Detroit"]
    },
    {
        image: "austin.webp",
        description: "Baggy fit, bol kesim, daralan paça, kargo",
        correctAnswer: "Austin",
        options: ["Austin", "Detroit", "Billie"]
    },
    {
        image: "detroit.webp",
        description: "Baggy fit, bol kesim, geniş paça",
        correctAnswer: "Detroit",
        options: ["Detroit", "Billie", "Bern"]
    },
    {
        image: "billie.webp",
        description: "Baggy fit, rahat kesim, daralan paça",
        correctAnswer: "Billie",
        options: ["Billie", "Detroit", "Austin"]
    },

    // Erkek Denim Fitleri - COMFORT
    {
        image: "hasan.webp",
        description: "Klasik rahat kesim, büyük beden, düz paça",
        correctAnswer: "Hasan",
        options: ["Hasan", "Bern", "Detroit"]
    }
];
// Oyun Durumu Değişkenleri
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = TIME_LIMIT;
let availableQuestions = []; // Karıştırılmış soru dizisi
let highScores = { name: "Yok", score: 0 }; // Local Storage'dan yüklenecek

// --- Yardımcı Fonksiyonlar ---

// Diziyi karıştırma (Fisher-Yates algoritması)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Local Storage'dan rekoru yükle
function loadHighScore() {
    const storedHighScore = localStorage.getItem('highScore');
    if (storedHighScore) {
        highScores = JSON.parse(storedHighScore);
    }
    updateHighScoreDisplay();
}

// Local Storage'a rekoru kaydet
function saveHighScore(name, newScore) {
    highScores = { name: name, score: newScore };
    localStorage.setItem('highScore', JSON.stringify(highScores));
    updateHighScoreDisplay();
}

// Rekor skorunu göster
function updateHighScoreDisplay() {
    highScoreNameDisplay.textContent = highScores.name;
    highScoreValueDisplay.textContent = highScores.score;
}

// --- Oyun Fonksiyonları ---

function startGame() {
    gameOverScreen.classList.add('hidden'); // Oyun bitti ekranını gizle

    score = 0;
    currentScoreDisplay.textContent = score;
    feedbackMessage.textContent = ''; // Geri bildirim mesajını temizle

    // Soruları karıştır ve oyun için hazırla
    availableQuestions = shuffleArray([...questions]);
    currentQuestionIndex = 0;

    loadQuestion();
    loadHighScore(); // Oyunu her başlattığında rekoru yeniden yükle
}

function loadQuestion() {
    clearInterval(timer); // Önceki sayacı temizle (önemli)

    if (currentQuestionIndex >= availableQuestions.length) {
        // Tüm sorular bittiğinde oyunu bitir
        endGame();
        return;
    }

    const question = availableQuestions[currentQuestionIndex];

    // Resim yükle
    questionImage.src = IMAGE_FOLDER + question.image;
    questionImage.alt = question.correctAnswer; // Erişilebilirlik için alt metin

    // Açıklama metnini göster
    imageDescriptionDisplay.textContent = question.description;

    // Şıkları karıştır ve butonlara yerleştir
    const shuffledOptions = shuffleArray([...question.options]); // Kopyasını karıştır
    optionButtons.forEach((button, index) => {
        button.textContent = shuffledOptions[index];
        button.classList.remove('correct', 'incorrect'); // Önceki durumları temizle
        button.disabled = false; // Butonları aktif et
        button.onclick = () => checkAnswer(button, question.correctAnswer);
    });

    startTimer();
}

function startTimer() {
    clearInterval(timer); // Her zamanlayıcı başlatıldığında eskisini temizle
    timeRemaining = TIME_LIMIT;
    progressBar.style.width = '100%'; // İlerleme çubuğunu sıfırla
    progressBar.style.backgroundColor = '#4CAF50'; // Yeşil renk

    timer = setInterval(() => {
        timeRemaining--;
        // İlerleme çubuğunu güncelle
        const percentage = (timeRemaining / TIME_LIMIT) * 100;
        progressBar.style.width = percentage + '%';

        // Renk değişimi (isteğe bağlı)
        if (percentage < 30) {
            progressBar.style.backgroundColor = '#dc3545'; // Kırmızı
        } else if (percentage < 60) {
            progressBar.style.backgroundColor = '#ffc107'; // Sarı
        } else {
            progressBar.style.backgroundColor = '#4CAF50'; // Yeşil
        }


        if (timeRemaining <= 0) {
            clearInterval(timer);
            feedbackMessage.textContent = 'Süre bitti!';
            endGame(); // Süre bitince oyunu sonlandır
        }
    }, 1000);
}

function checkAnswer(selectedButton, correctAnswer) {
    clearInterval(timer); // Zamanlayıcıyı durdur
    optionButtons.forEach(button => button.disabled = true); // Tüm butonları devre dışı bırak

    if (selectedButton.textContent === correctAnswer) {
        score++;
        currentScoreDisplay.textContent = score;
        selectedButton.classList.add('correct');
        feedbackMessage.textContent = 'Doğru!';
        setTimeout(() => {
            currentQuestionIndex++;
            feedbackMessage.textContent = ''; // Mesajı temizle
            loadQuestion();
        }, 1000); // 1 saniye sonra yeni soruya geç
    } else {
        selectedButton.classList.add('incorrect');
        feedbackMessage.textContent = 'Yanlış cevap!';
        // Doğru cevabı göster (isteğe bağlı)
        optionButtons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });
        setTimeout(() => {
            endGame(); // Yanlış cevapta oyunu bitir
        }, 1000);
    }
}

function endGame() {
    clearInterval(timer); // Zamanlayıcıyı durdur
    gameOverScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
    recordBreakingMessage.innerHTML = ''; // Önceki mesajı temizle

    if (score > highScores.score) {
        recordBreakingMessage.innerHTML = `
            <p>Tebrikler! Yeni bir rekor kırdınız!</p>
            <p>Adınızı girin:</p>
            <input type="text" id="playerNameInput" placeholder="Adınız" maxlength="20">
            <button id="saveRecordButton">Rekoru Kaydet</button>
        `;
        document.getElementById('saveRecordButton').onclick = () => {
            const playerName = document.getElementById('playerNameInput').value.trim();
            if (playerName) {
                saveHighScore(playerName, score);
                recordBreakingMessage.innerHTML = `<p>Rekorunuz kaydedildi: ${playerName} - ${score}</p>`;
            } else {
                alert("Lütfen adınızı girin!");
            }
        };
    } else {
        recordBreakingMessage.innerHTML = `<p>Rekor kırılamadı. Mevcut Rekor: ${highScores.name} - ${highScores.score}</p>`;
    }
}

// Olay Dinleyicileri
restartButton.addEventListener('click', startGame);

document.addEventListener('DOMContentLoaded', () => {
    gameOverScreen.classList.add('hidden'); // Oyun bitti ekranını başlangıçta gizle
    loadHighScore();
    startGame(); // Sayfa yüklendiğinde oyunu direkt başlat
});