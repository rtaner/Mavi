// DOM Elementleri
const startScreen = document.getElementById('startScreen');
const gamePlayScreen = document.getElementById('gamePlayScreen');
const startButton = document.getElementById('startButton');
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
const highScoreNameStartDisplay = document.getElementById('highScoreNameStart');
const highScoreValueStartDisplay = document.getElementById('highScoreValueStart');
const highScoreNameEndDisplay = document.getElementById('highScoreNameEnd');
const highScoreValueEndDisplay = document.getElementById('highScoreValueEnd');
const progressBar = document.getElementById('progressBar');
// const feedbackMessage = document.getElementById('feedbackMessage'); // Bu satır kaldırıldı
const imageDescriptionDisplay = document.getElementById('imageDescription');

// Oyun Ayarları
const TIME_LIMIT = 10; // Saniye cinsinden yanıt süresi
const IMAGE_FOLDER = 'img/'; // Resimlerin bulunduğu klasör (örneğin: img/resim1.jpg)

// Oyun Verileri (Örnek resimler ve şıklar)
// Kendi resimlerinizi ve şıklarınızı buraya eklemelisiniz.
// Resimlerinizi 'img/' klasörüne koyduğunuzdan emin olun.
const allQuestions = [ // 'questions' yerine 'allQuestions' olarak değiştirildi
   {
        image: "serenay.webp",
        description: "Yüksek bel, süper skinny, dar paça",
        correctAnswer: "Serenay",
        options: ["Sandy Extra Wide", "Serenay", "Tess"]
    },
    {
        image: "tess.webp",
        description: "Normal bel, skinny, dar paça",
        correctAnswer: "Tess",
        options: ["Tess", "Mona", "Ibiza"]
    },
    {
        image: "cindy.webp",
        description: "Yüksek bel, mom jean, dar paça",
        correctAnswer: "Cindy",
        options: ["Margot", "Cindy", "Tess"]
    },
    {
        image: "star.webp",
        description: "Süper yüksek bel, mom jean, dar paça",
        correctAnswer: "Star",
        options: ["Star", "Victoria", "Siena"]
    },
    {
        image: "ada.webp",
        description: "Normal bel, boyfriend, yarı dar paça",
        correctAnswer: "Ada",
        options: ["Ada", "Sky", "Wavy Extra Baggy"]
    },
    {
        image: "rockstar.webp",
        description: "Normal bel, düz kesim, düz paça",
        correctAnswer: "Rockstar",
        options: ["Rockstar", "Barcelona", "Remy"]
    },
    {
        image: "barcelona.webp",
        description: "Yüksek bel, düz rahat kesim, düz paça",
        correctAnswer: "Barcelona",
        options: ["Barcelona", "Taylor", "Lisa"]
    },
    {
        image: "new_york.webp",
        description: "Yüksek bel, düz kesim, düz paça",
        correctAnswer: "New York",
        options: ["New York", "Kimberly", "Viola"]
    },
    {
        image: "sky.webp",
        description: "Yüksek bel, mom kesim, düz paça",
        correctAnswer: "Sky",
        options: ["Sky", "Karen", "Jane"]
    },
    {
        image: "ibiza.webp",
        description: "Düşük bel, düz rahat kesim, düz paça",
        correctAnswer: "Ibiza",
        options: ["Ibiza", "Miami", "Maria"]
    },
    {
        image: "jane.webp",
        description: "Normal bel, düz kesim, düz paça",
        correctAnswer: "Jane",
        options: ["Jane", "Lisa", "Mimi"]
    },
    {
        image: "taylor.webp",
        description: "Yüksek bel, düz kesim, düz paça",
        correctAnswer: "Taylor",
        options: ["Taylor", "Sandy Extra Wide", "Joy"]
    },
    {
        image: "margot.webp",
        description: "Yüksek bel, düz rahat kesim, düz paça",
        correctAnswer: "Margot",
        options: ["Margot", "California", "Ella"]
    },
    {
        image: "lisette.webp",
        description: "Normal bel, düz rahat kesim, düz paça",
        correctAnswer: "Lisette",
        options: ["Lisette", "Florida", "Malibu"]
    },
    {
        image: "windyex.webp",
        description: "Normal bel, düz rahat kesim, düz paça",
        correctAnswer: "Windy Extra Loose",
        options: ["Windy Extra Loose", "Paloma", "Maribel"]
    },
    {
        image: "viola.webp",
        description: "Normal bel, düz kesim, düz paça",
        correctAnswer: "Viola",
        options: ["Viola", "Victoria", "Karen"]
    },
    {
        image: "kendra.webp",
        description: "Normal bel, düz kesim, düz paça",
        correctAnswer: "Kendra",
        options: ["Kendra", "California", "Sky"]
    },
    {
        image: "mona.webp",
        description: "Normal bel, klasik kesim, düz paça",
        correctAnswer: "Mona",
        options: ["Mona", "Lisa", "Remy"]
    },
    {
        image: "maria.webp",
        description: "Normal bel, İspanyol paça",
        correctAnswer: "Maria",
        options: ["Maria", "Tilda", "Leila"]
    },
    {
        image: "bliss.webp",
        description: "Yüksek bel, İspanyol paça",
        correctAnswer: "Bliss",
        options: ["Bliss", "Miav", "Sierra"]
    },
    {
        image: "losangeles.webp",
        description: "Yüksek bel, 70'ler İspanyol paça",
        correctAnswer: "Los Angeles",
        options: ["Los Angeles", "Molly", "Serenay"]
    },
    {
        image: "miav.webp",
        description: "Yüksek bel, İspanyol paça",
        correctAnswer: "Miav",
        options: ["Miav", "Florida", "Kimberly"]
    },
    {
        image: "sierra.webp",
        description: "Yüksek bel, önden düğmeli İspanyol paça",
        correctAnswer: "Sierra",
        options: ["Sierra", "Joy", "Lisette"]
    },
    {
        image: "molly.webp",
        description: "Normal bel, klasik kesim, çizme paça",
        correctAnswer: "Molly",
        options: ["Molly", "Wavy Extra Baggy", "Mimi"]
    },
    {
        image: "tilda.webp",
        description: "Yüksek bel, İspanyol paça",
        correctAnswer: "Tilda",
        options: ["Tilda", "Siena", "Sunny Extra Chino"]
    },
    {
        image: "siena.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Siena",
        options: ["Siena", "California", "Karen"]
    },
    {
        image: "malibu.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Malibu",
        options: ["Malibu", "Victoria", "Joy"]
    },
    {
        image: "victoria.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Victoria",
        options: ["Victoria", "Kimberly", "Lisa"]
    },
    {
        image: "california.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "California",
        options: ["California", "Karen", "Miami"]
    },
    {
        image: "florida.webp",
        description: "Normal bel, geniş paça",
        correctAnswer: "Florida",
        options: ["Florida", "Liny", "Sandy Extra Wide"]
    },
    {
        image: "paloma.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Paloma",
        options: ["Paloma", "Mimi", "Ella"]
    },
    {
        image: "karen.webp",
        description: "Normal bel, geniş paça",
        correctAnswer: "Karen",
        options: ["Karen", "Remy", "Leila"]
    },
    {
        image: "kimberly.webp",
        description: "Yüksek bel, geniş paça",
        correctAnswer: "Kimberly",
        options: ["Kimberly", "Wavy Extra Baggy", "Lisa"]
    },
    {
        image: "miami.webp",
        description: "Normal bel, baggy, geniş paça",
        correctAnswer: "Miami",
        options: ["Miami", "Joy", "Malibu"]
    },
    {
        image: "joy.webp",
        description: "Normal bel, baggy, geniş paça",
        correctAnswer: "Joy",
        options: ["Joy", "Lisa", "Mimi"]
    },
    {
        image: "liny.webp",
        description: "Düşük bel, rahat kesim, geniş paça",
        correctAnswer: "Liny",
        options: ["Liny", "Sandy Extra Wide", "Karen"]
    },
    {
        image: "mimi.webp",
        description: "Yüksek bel, süper geniş paça",
        correctAnswer: "Mimi",
        options: ["Mimi", "Sunny Extra Chino", "Florida"]
    },
    {
        image: "remy.webp",
        description: "Normal bel, rahat kesim, geniş paça",
        correctAnswer: "Remy",
        options: ["Remy", "Karen", "Lisa"]
    },
    {
        image: "maribel.webp",
        description: "Normal bel, rahat kesim, geniş paça",
        correctAnswer: "Maribel",
        options: ["Maribel", "Paloma", "Siena"]
    },
    {
        image: "sunnyex.webp",
        description: "Düşük bel, geniş paça",
        correctAnswer: "Sunny Extra Chino",
        options: ["Sunny Extra Chino", "Liny", "Tilda"]
    },
    {
        image: "sandyex.webp",
        description: "Düşük bel, geniş paça",
        correctAnswer: "Sandy Extra Wide",
        options: ["Sandy Extra Wide", "Sky", "Bliss"]
    },
    {
        image: "leila.webp",
        description: "Yüksek bel, baggy, daralan paça",
        correctAnswer: "Leila",
        options: ["Leila", "Ella", "Lisa"]
    },
    {
        image: "ella.webp",
        description: "Normal bel, baggy, daralan paça",
        correctAnswer: "Ella",
        options: ["Ella", "Wavy Extra Baggy", "Paloma"]
    },
    {
        image: "lisa.webp",
        description: "Normal bel, arka kemer tokalı, baggy",
        correctAnswer: "Lisa",
        options: ["Lisa", "Remy", "Joy"]
    },
    {
        image: "wavyex.webp",
        description: "Normal bel, baggy, daralan paça",
        correctAnswer: "Wavy Extra Baggy",
        options: ["Wavy Extra Baggy", "Lisette", "Florida"]
    },
    {
        image: "james.webp",
        description: "Skinny, dar paça",
        correctAnswer: "James",
        options: ["James", "London", "Bern"]
    },
    {
        image: "jake.webp",
        description: "Skinny, düz kesim, dar paça",
        correctAnswer: "Jake",
        options: ["Milan", "Jake", "177"]
    },
    {
        image: "kvnc.webp",
        description: "Skinny, dar paça",
        correctAnswer: "KVNÇ",
        options: ["KVNÇ", "Billie", "Atlanta"]
    },
    {
        image: "marcus.webp",
        description: "Düz kesim, daralan paça",
        correctAnswer: "Marcus",
        options: ["Milan", "Carlos", "Marcus"]
    },
    {
        image: "hunter.webp",
        description: "Rahat kesim, düz paça",
        correctAnswer: "Hunter",
        options: ["Dawson", "177", "Hunter"]
    },
    {
        image: "177.webp",
        description: "Klasik kesim, düz paça",
        correctAnswer: "177",
        options: ["Bern", "177", "KVNÇ"]
    },
    {
        image: "martin.webp",
        description: "Düz rahat kesim, düz paça",
        correctAnswer: "Martin",
        options: ["Marcus", "Martin", "Lisbon"]
    },
    {
        image: "dawson.webp",
        description: "Düz kesim, düz paça chino",
        correctAnswer: "Dawson",
        options: ["Dawson", "Bern", "KVNÇ"]
    },
    {
        image: "milan.webp",
        description: "Tapered fit, dar kesim, daralan paça",
        correctAnswer: "Milan",
        options: ["Bern", "Hasan", "Milan"]
    },
    {
        image: "london.webp",
        description: "Tapered fit, düz kesim, daralan paça",
        correctAnswer: "London",
        options: ["Toronto", "London", "177"]
    },
    {
        image: "lisbon.webp",
        description: "Loose fit, rahat kesim, düz paça",
        correctAnswer: "Lisbon",
        options: ["Lisbon", "Marcus", "Hasan"]
    },
    {
        image: "mitte.webp",
        description: "Loose fit, rahat kesim, geniş paça",
        correctAnswer: "Mitte",
        options: ["Billie", "Mitte", "Lisbon"]
    },
    {
        image: "oxford.webp",
        description: "Loose fit, rahat kesim, geniş paça",
        correctAnswer: "Oxford",
        options: ["Hunter", "Carlos", "Oxford"]
    },
    {
        image: "carlos.webp",
        description: "Loose fit, rahat kesim, geniş paça kargo",
        correctAnswer: "Carlos",
        options: ["Carlos", "177", "Martin"]
    },
    {
        image: "toronto.webp",
        description: "Baggy fit, rahat kesim, düz paça",
        correctAnswer: "Toronto",
        options: ["London", "Toronto", "Bern"]
    },
    {
        image: "bern.webp",
        description: "Baggy fit, bol kesim, daralan paça",
        correctAnswer: "Bern",
        options: ["Detroit", "Bern", "Mitte"]
    },
    {
        image: "atlanta.webp",
        description: "Baggy fit, rahat kesim, geniş paça",
        correctAnswer: "Atlanta",
        options: ["Atlanta", "Dawson", "KVNÇ"]
    },
    {
        image: "austin.webp",
        description: "Baggy fit, bol kesim, daralan paça kargo",
        correctAnswer: "Austin",
        options: ["James", "Austin", "Bern"]
    },
    {
        image: "detroit.webp",
        description: "Baggy fit, bol kesim, geniş paça",
        correctAnswer: "Detroit",
        options: ["Mitte", "Detroit", "KVNÇ"]
    },
    {
        image: "billie.webp",
        description: "Baggy fit, rahat kesim, daralan paça",
        correctAnswer: "Billie",
        options: ["Billie", "Lisbon", "Toronto"]
    },
    {
        image: "hasan.webp",
        description: "Klasik rahat kesim, büyük beden, düz paça",
        correctAnswer: "Hasan",
        options: ["Hasan", "Oxford", "Martin"]
    }
];

// Oyun Durumu Değişkenleri
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = TIME_LIMIT;
let questions = []; // Her turda kullanılacak sorular
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
    updateHighScoreDisplays(); // Her iki rekor alanını da güncelle
}

// Local Storage'a rekoru kaydet
function saveHighScore(name, newScore) {
    highScores = { name: name, score: newScore };
    localStorage.setItem('highScore', JSON.stringify(highScores));
    updateHighScoreDisplays(); // Her iki rekor alanını da güncelle
}

// Rekor skorlarını göster (başlangıç ve bitiş ekranları için)
function updateHighScoreDisplays() {
    highScoreNameStartDisplay.textContent = highScores.name;
    highScoreValueStartDisplay.textContent = highScores.score;
    highScoreNameEndDisplay.textContent = highScores.name;
    highScoreValueEndDisplay.textContent = highScores.score;
}

// --- Oyun Fonksiyonları ---

function showStartScreen() {
    startScreen.classList.remove('hidden');
    gamePlayScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    loadHighScore(); // Başlangıç ekranında rekoru göster
}

function startGame() {
    startScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden'); // Oyun bitti ekranını gizle
    gamePlayScreen.classList.remove('hidden'); // Oyun ekranını göster

    score = 0;
    currentScoreDisplay.textContent = score;

    // Soruları karıştır ve oyun için hazırla
    shuffleArray(allQuestions); // Tüm soruları karıştır
    questions = allQuestions.slice(0, 60); // Her oyunda ilk 5 soruyu seç (veya istediğiniz sayıda)
    currentQuestionIndex = 0;

    loadQuestion();
    updateHighScoreDisplays(); // Oyuna başlarken de rekoru güncelle
}

function loadQuestion() {
    clearInterval(timer); // Önceki sayacı temizle (önemli)

    if (currentQuestionIndex >= questions.length) {
        // Tüm sorular bittiğinde oyunu bitir
        endGame();
        return;
    }

    const question = questions[currentQuestionIndex];

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
            // feedbackMessage.textContent = 'Süre bitti!'; // Bu satır kaldırıldı
            // Süre bitince yanlış cevap gibi kabul et ve oyunu bitir
            // Doğru cevabı göster (isteğe bağlı)
            optionButtons.forEach(button => {
                if (button.textContent === questions[currentQuestionIndex].correctAnswer) {
                    button.classList.add('correct');
                }
            });
            setTimeout(() => {
                endGame(); // Süre bitince oyunu sonlandır
            }, 1000);
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
        // feedbackMessage.textContent = 'Doğru!'; // Bu satır kaldırıldı
        setTimeout(() => {
            currentQuestionIndex++;
            // feedbackMessage.textContent = ''; // Bu satır kaldırıldı
            loadQuestion();
        }, 1000); // 1 saniye sonra yeni soruya geç
    } else {
        selectedButton.classList.add('incorrect');
        // feedbackMessage.textContent = 'Yanlış cevap!'; // Bu satır kaldırıldı
        // Doğru cevabı göster (isteğe bağlı)
        optionButtons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });
        setTimeout(() => {
            endGame(); // Yanlış cevapta oyunu bitir
        }, 2000);
    }
}

function endGame() {
    clearInterval(timer); // Zamanlayıcıyı durdur
    gamePlayScreen.classList.add('hidden'); // Oyun ekranını gizle
    gameOverScreen.classList.remove('hidden'); // Oyun bitti ekranını göster
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
    updateHighScoreDisplays(); // Oyun bittiğinde de rekoru güncelle
}

// Olay Dinleyicileri
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

document.addEventListener('DOMContentLoaded', () => {
    showStartScreen(); // Sayfa yüklendiğinde başlangıç ekranını göster
});
