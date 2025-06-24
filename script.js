// DOM Elementleri
const startScreen = document.getElementById('startScreen');
const gamePlayScreen = document.getElementById('gamePlayScreen');
const infoBankMenu = document.getElementById('infoBankMenu'); // Yeni eklendi
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
const backToHomeButton = document.getElementById('backToHomeButton');
const highScoreNameStartDisplay = document.getElementById('highScoreNameStart');
const highScoreValueStartDisplay = document.getElementById('highScoreValueStart');
const progressBar = document.getElementById('progressBar');
const imageDescriptionDisplay = document.getElementById('imageDescription');
const categoryHighScoresList = document.getElementById('categoryHighScoresList');

// Kategori Butonları
const denimCategoryButton = document.getElementById('denimCategoryButton');
const shortCategoryButton = document.getElementById('shortCategoryButton');
const collectionsCategoryButton = document.getElementById('collectionsCategoryButton');
const allQuestionsCategoryButton = document.getElementById('allQuestionsCategoryButton');

// Bilgi Bankası Butonları (Yeni Eklendi)
const infoBankButton = document.getElementById('infoBankButton');
const denimCatalogButton = document.getElementById('denimCatalogButton');
const ss25CatalogButton = document.getElementById('ss25CatalogButton');
const backToStartFromInfoBankButton = document.getElementById('backToStartFromInfoBankButton');

// Oyun Ayarları
const TIME_LIMIT = 8; // Saniye cinsinden yanıt süresi
const ANSWER_FEEDBACK_DELAY = 2000; // Cevap sonrası bekleme süresi (2 saniye)
let currentQuestions = []; // Seçilen kategoriye göre güncel soru dizisi
let currentQuestionIndex = 0;
let score = 0;
let timer;
let progressBarInterval;
let timeRemaining = TIME_LIMIT;
let activeCategoryQuestions = []; // Oyuncunun en son seçtiği kategori sorularını tutar
let activeCategoryName = ''; // En son oynanan kategorinin adını tutar

// Rekor Skor Yönetimi
// Her kategori için ayrı rekorları tutacak obje
let allHighScores = JSON.parse(localStorage.getItem('maviFitGameAllHighScores')) || {
    "Denim": { name: 'Yok', score: 0 },
    "Şort": { name: 'Yok', score: 0 },
    "Koleksiyonlar": { name: 'Yok', score: 0 },
    "Tüm Sorular": { name: 'Yok', score: 0 }
};

function updateHighScoreDisplays() {
    // Genel rekoru (tüm sorular kategorisinin rekoru) başlangıç ekranında göster
    highScoreNameStartDisplay.textContent = allHighScores["Tüm Sorular"].name;
    highScoreValueStartDisplay.textContent = allHighScores["Tüm Sorular"].score;
}

function saveHighScoreForCategory(category, name, newScore) {
    if (allHighScores[category].score < newScore) {
        allHighScores[category] = { name, score: newScore };
        localStorage.setItem('maviFitGameAllHighScores', JSON.stringify(allHighScores));
    }
    updateHighScoreDisplays(); // Ana ekran rekorunu güncelle
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer() {
    timeRemaining = TIME_LIMIT;
    progressBar.style.width = '100%';
    progressBar.style.backgroundColor = '#4CAF50'; // Yeşil
    clearInterval(progressBarInterval); // Önceki interval'ı temizle
    clearTimeout(timer); // Önceki timer'ı temizle (setTimeout için clearTimeout kullanılır)

    progressBarInterval = setInterval(() => {
        timeRemaining -= 0.1;
        const progressPercentage = (timeRemaining / TIME_LIMIT) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        if (timeRemaining <= TIME_LIMIT / 2 && timeRemaining > TIME_LIMIT / 4) {
            progressBar.style.backgroundColor = '#FFC107'; // Sarı
        } else if (timeRemaining <= TIME_LIMIT / 4) {
            progressBar.style.backgroundColor = '#F44336'; // Kırmızı
        }

        if (timeRemaining <= 0) {
            clearInterval(progressBarInterval);
            clearTimeout(timer); // Süre bittiğinde zamanlayıcıyı da temizle
            checkAnswer(null); // Süre bittiğinde otomatik yanlış say
        }
    }, 100); // Her 100ms'de bir güncelle
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame(); // Tüm sorular bittiğinde oyunu bitir
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionImage.src = question.image;
    imageDescriptionDisplay.textContent = question.description;

    const shuffledOptions = shuffleArray([...question.options]);

    optionButtons.forEach((button, index) => {
        button.textContent = shuffledOptions[index];
        button.onclick = () => checkAnswer(button.textContent);
        button.classList.remove('correct', 'incorrect'); // Önceki durumları temizle
        button.disabled = false; // Butonları aktif et
    });

    startTimer();
}

function checkAnswer(selectedAnswer) {
    clearInterval(progressBarInterval); // ProgressBar interval'ını durdur
    clearTimeout(timer); // Zamanlayıcıyı durdur

    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = (selectedAnswer === question.correctAnswer);

    optionButtons.forEach(button => {
        button.disabled = true; // Tüm butonları pasif yap
        if (button.textContent === question.correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedAnswer) {
            button.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        score++;
        currentScoreDisplay.textContent = score;
        // Doğru cevap ise bir sonraki soruya geç veya oyunu bitir
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) {
                displayQuestion(); // Daha fazla soru varsa bir sonraki soruyu göster
            } else {
                endGame(); // Tüm sorular bittiğinde oyunu bitir
            }
        }, ANSWER_FEEDBACK_DELAY); // Cevap sonrası bekleme süresi
    } else {
        // Yanlış cevap ise oyunu doğrudan bitir
        setTimeout(() => { // Kullanıcının cevabı görmesi için kısa bir gecikme
            endGame();
        }, ANSWER_FEEDBACK_DELAY); // Cevap sonrası bekleme süresi
    }
}

function startGame(categoryQuestions, categoryName) {
    activeCategoryQuestions = categoryQuestions; // Seçilen kategori sorularını kaydet
    activeCategoryName = categoryName; // Kategorinin adını kaydet
    currentQuestions = shuffleArray([...activeCategoryQuestions]); // Her oyuna başlarken soruları karıştır
    currentQuestionIndex = 0;
    score = 0;
    currentScoreDisplay.textContent = score;

    startScreen.classList.add('hidden');
    gamePlayScreen.classList.remove('hidden');
    gameOverScreen.classList.add('hidden'); // Oyun bitti ekranının gizli olduğundan emin ol
    infoBankMenu.classList.add('hidden'); // Bilgi bankası menüsünü gizle

    displayQuestion();
}

function endGame() {
    gamePlayScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
    recordBreakingMessage.innerHTML = ''; // Önceki mesajı temizle

    // Mevcut kategori için rekor kırıldı mı kontrolü
    if (score > allHighScores[activeCategoryName].score) {
        recordBreakingMessage.innerHTML = `
            <p>Tebrikler! <span class="category-name">${activeCategoryName}</span> kategorisinde yeni bir rekor kırdınız!</p>
            <p>Adınızı girin:</p>
            <input type="text" id="playerNameInput" placeholder="Adınız" maxlength="20">
            <button id="saveRecordButton">Rekoru Kaydet</button>
        `;
        document.getElementById('saveRecordButton').onclick = () => {
            const playerName = document.getElementById('playerNameInput').value.trim();
            if (playerName) {
                saveHighScoreForCategory(activeCategoryName, playerName, score);
                recordBreakingMessage.innerHTML = `<p>Rekorunuz kaydedildi: ${playerName} - ${score}</p>`;
                displayCategoryHighScores(); // Rekor kaydedildikten sonra listeyi güncelle
            } else {
                alert("Lütfen adınızı girin!");
            }
        };
    } else {
        recordBreakingMessage.innerHTML = `<p><span class="category-name">${activeCategoryName}</span> kategorisi için rekor kırılamadı. Mevcut Rekor: ${allHighScores[activeCategoryName].name} - ${allHighScores[activeCategoryName].score}</p>`;
    }
    displayCategoryHighScores(); // Oyun bittiğinde kategori rekorlarını göster
}

function displayCategoryHighScores() {
    categoryHighScoresList.innerHTML = ''; // Listeyi temizle
    // Kategorileri belirli bir sıralamada göstermek için
    const categories = ["Denim", "Şort", "Koleksiyonlar", "Tüm Sorular"]; 

    categories.forEach(category => {
        const highScore = allHighScores[category];
        const listItem = document.createElement('li');
        // İsim ve skor için ayrı span'ler kullan
        listItem.innerHTML = `
            <span class="category-name-display">${category}:</span>
            <span class="player-info">
                <span class="player-name">${highScore.name}</span> - 
                <span class="score-value">${highScore.score}</span>
            </span>
        `;
        categoryHighScoresList.appendChild(listItem);
    });
}

function showStartScreen() {
    startScreen.classList.remove('hidden');
    gamePlayScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    infoBankMenu.classList.add('hidden'); // Bilgi bankası menüsünü gizle
    updateHighScoreDisplays(); // Başlangıç ekranındaki genel rekoru güncelle
    // Oyun bitti ekranında olası input ve butonları temizle
    recordBreakingMessage.innerHTML = '';
}

function showInfoBankMenu() {
    startScreen.classList.add('hidden');
    gamePlayScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    infoBankMenu.classList.remove('hidden');
}

// Olay Dinleyicileri
denimCategoryButton.addEventListener('click', () => startGame(denimQuestions, "Denim"));
shortCategoryButton.addEventListener('click', () => startGame(shortQuestions, "Şort"));
collectionsCategoryButton.addEventListener('click', () => startGame(collectionsQuestions, "Koleksiyonlar"));
allQuestionsCategoryButton.addEventListener('click', () => {
    const allCombinedQuestions = [...denimQuestions, ...shortQuestions, ...collectionsQuestions];
    startGame(allCombinedQuestions, "Tüm Sorular");
});

// Bilgi Bankası Olay Dinleyicileri (Yeni Eklendi)
infoBankButton.addEventListener('click', showInfoBankMenu);
denimCatalogButton.addEventListener('click', () => window.open('denim.html', '_blank'));
ss25CatalogButton.addEventListener('click', () => window.open('ss25.html', '_blank'));
backToStartFromInfoBankButton.addEventListener('click', showStartScreen);

restartButton.addEventListener('click', () => {
    // Restart butonu basıldığında en son seçilen kategori ile yeniden başlat
    if (activeCategoryQuestions.length === 0) { // Bu durum, sayfa yeniden yüklendiğinde restart'a basılırsa olabilir.
        const allCombinedQuestions = [...denimQuestions, ...shortQuestions, ...collectionsQuestions];
        startGame(allCombinedQuestions, "Tüm Sorular");
    } else {
        startGame(activeCategoryQuestions, activeCategoryName);
    }
});

backToHomeButton.addEventListener('click', showStartScreen);

document.addEventListener('DOMContentLoaded', () => {
    updateHighScoreDisplays(); // Sayfa yüklendiğinde başlangıç ekranındaki genel rekoru göster
    showStartScreen(); // Sayfa yüklendiğinde başlangıç ekranını göster
});