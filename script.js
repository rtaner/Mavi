// DOM Elementleri
const startScreen = document.getElementById('startScreen');
const gamePlayScreen = document.getElementById('gamePlayScreen');
const infoBankMenu = document.getElementById('infoBankMenu');
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
const progressBar = document.getElementById('progressBar');
const imageDescriptionDisplay = document.getElementById('imageDescription');
const categoryHighScoresList = document.getElementById('categoryHighScoresList');
const categoryHighScoresListStart = document.getElementById('categoryHighScoresListStart'); // Yeni eklendi

// Kategori Butonları
const denimCategoryButton = document.getElementById('denimCategoryButton');
const shortCategoryButton = document.getElementById('shortCategoryButton');
const collectionsCategoryButton = document.getElementById('collectionsCategoryButton');
const allQuestionsCategoryButton = document.getElementById('allQuestionsCategoryButton');

// Bilgi Bankası Butonları
const infoBankButton = document.getElementById('infoBankButton');
const denimCatalogButton = document.getElementById('denimCatalogButton');
const ss25CatalogButton = document.getElementById('ss25CatalogButton');
const backToStartFromInfoBankButton = document.getElementById('backToStartFromInfoBankButton');

// Oyun Ayarları
const TIME_LIMIT = 8; // Saniye cinsinden yanıt süresi
const ANSWER_FEEDBACK_DELAY = 2000; // Cevap sonrası bekleme süresi (2 saniye)
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let progressBarInterval;
let timeRemaining = TIME_LIMIT;
let activeCategoryQuestions = [];
let activeCategoryName = '';

// Rekor Skor Yönetimi
let allHighScores = JSON.parse(localStorage.getItem('maviFitGameAllHighScores')) || {
    "Denim": { name: 'Yok', score: 0 },
    "Şort": { name: 'Yok', score: 0 },
    "Koleksiyonlar": { name: 'Yok', score: 0 },
    "Tüm Sorular": { name: 'Yok', score: 0 }
};

// Mobil adres çubuğu yüksekliğine karşı çözüm
function setVhUnit() {
  document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
}
setVhUnit();
window.addEventListener('resize', setVhUnit);
window.addEventListener('orientationchange', setVhUnit);


function updateHighScoreDisplays() {
    // Başlangıç ekranındaki kategori rekorlarını güncelle
    displayCategoryHighScores(categoryHighScoresListStart);
}

function saveHighScoreForCategory(category, name, newScore) {
    if (allHighScores[category].score < newScore) {
        allHighScores[category] = { name, score: newScore };
        localStorage.setItem('maviFitGameAllHighScores', JSON.stringify(allHighScores));
    }
    updateHighScoreDisplays();
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
    progressBar.style.backgroundColor = '#4CAF50';
    clearInterval(progressBarInterval);
    clearTimeout(timer);

    progressBarInterval = setInterval(() => {
        timeRemaining -= 0.1;
        const progressPercentage = (timeRemaining / TIME_LIMIT) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        if (timeRemaining <= TIME_LIMIT / 2 && timeRemaining > TIME_LIMIT / 4) {
            progressBar.style.backgroundColor = '#FFC107';
        } else if (timeRemaining <= TIME_LIMIT / 4) {
            progressBar.style.backgroundColor = '#F44336';
        }

        if (timeRemaining <= 0) {
            clearInterval(progressBarInterval);
            clearTimeout(timer);
            checkAnswer(null);
        }
    }, 100);
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionImage.src = question.image;
    imageDescriptionDisplay.textContent = question.description;

    const shuffledOptions = shuffleArray([...question.options]);

    optionButtons.forEach((button, index) => {
        button.textContent = shuffledOptions[index];
        button.onclick = () => checkAnswer(button.textContent);
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
        button.innerHTML = `<span>${shuffledOptions[index]}</span>`; // Metni span içine al
    });

    startTimer();
}

function checkAnswer(selectedAnswer) {
    clearInterval(progressBarInterval);
    clearTimeout(timer);

    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = (selectedAnswer === question.correctAnswer);

    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent.includes(question.correctAnswer)) { // İçerik kontrolü
            button.classList.add('correct');
            // İkon ekle
            button.innerHTML = `<i class="fas fa-check-circle icon-left"></i><span>${question.correctAnswer}</span>`;
        } else if (button.textContent.includes(selectedAnswer) && !isCorrect) { // Yanlış cevabı işaretle
            button.classList.add('incorrect');
            button.innerHTML = `<i class="fas fa-times-circle icon-left"></i><span>${selectedAnswer}</span>`;
        }
    });

    if (isCorrect) {
        score++;
        currentScoreDisplay.textContent = score;
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) {
                displayQuestion();
            } else {
                endGame();
            }
        }, ANSWER_FEEDBACK_DELAY);
    } else {
        setTimeout(() => {
            endGame();
        }, ANSWER_FEEDBACK_DELAY);
    }
}

function startGame(categoryQuestions, categoryName) {
    activeCategoryQuestions = categoryQuestions;
    activeCategoryName = categoryName;
    currentQuestions = shuffleArray([...activeCategoryQuestions]);
    currentQuestionIndex = 0;
    score = 0;
    currentScoreDisplay.textContent = score;

    startScreen.classList.add('hidden');
    gamePlayScreen.classList.remove('hidden');
    gameOverScreen.classList.add('hidden');
    infoBankMenu.classList.add('hidden');

    displayQuestion();
}

function endGame() {
    gamePlayScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
    recordBreakingMessage.innerHTML = '';

    if (score > allHighScores[activeCategoryName].score) {
        recordBreakingMessage.innerHTML = `
            <p>Tebrikler! Yeni bir rekor kırdınız!</p>
            <div class="name-input-section">
                <input type="text" id="playerNameInput" class="player-name-input" placeholder="İsminizi yazınız..." maxlength="20">
                <button id="saveRecordButton" class="save-record-button accent-button">Rekoru Kaydet</button>
            </div>
        `;
        document.getElementById('saveRecordButton').onclick = () => {
            const playerName = document.getElementById('playerNameInput').value.trim();
            if (playerName) {
                saveHighScoreForCategory(activeCategoryName, playerName, score);
                recordBreakingMessage.innerHTML = `<p>Rekorunuz kaydedildi: ${playerName} - ${score}</p>`;
                displayCategoryHighScores(categoryHighScoresList);
            } else {
                alert("Lütfen adınızı girin!");
            }
        };
    } else {
        recordBreakingMessage.innerHTML = `
            <p class="record-info-message">
                ${activeCategoryName} kategorisi için rekor kırılamadı. Mevcut rekor: 
                <span class="current-record">${allHighScores[activeCategoryName].name} - ${allHighScores[activeCategoryName].score}</span>
            </p>
        `;
    }
    displayCategoryHighScores(categoryHighScoresList);
}

function displayCategoryHighScores(listElement) {
    listElement.innerHTML = '';
    const categories = ["Denim", "Şort", "Koleksiyonlar", "Tüm Sorular"]; 

    categories.forEach(category => {
        const highScore = allHighScores[category];
        const listItem = document.createElement('li');
        listItem.classList.add('record-item');
        listItem.innerHTML = `
            <span class="record-category">${category}</span>
            <span class="record-score">${highScore.name} - ${highScore.score}</span>
        `;
        listElement.appendChild(listItem);
    });
}

function showStartScreen() {
    startScreen.classList.remove('hidden');
    gamePlayScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    infoBankMenu.classList.add('hidden');
    updateHighScoreDisplays();
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

infoBankButton.addEventListener('click', showInfoBankMenu);
denimCatalogButton.addEventListener('click', () => window.open('denim.html', '_blank'));
ss25CatalogButton.addEventListener('click', () => window.open('ss25.html', '_blank'));
backToStartFromInfoBankButton.addEventListener('click', showStartScreen);

restartButton.addEventListener('click', () => {
    if (activeCategoryQuestions.length === 0) {
        const allCombinedQuestions = [...denimQuestions, ...shortQuestions, ...collectionsQuestions];
        startGame(allCombinedQuestions, "Tüm Sorular");
    } else {
        startGame(activeCategoryQuestions, activeCategoryName);
    }
});

backToHomeButton.addEventListener('click', showStartScreen);

document.addEventListener('DOMContentLoaded', () => {
    updateHighScoreDisplays();
    showStartScreen();
});