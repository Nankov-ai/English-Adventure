// Global State
let score = 0;
let selectedCard = null;
let correctAnswers = 0;
let wrongAnswers = 0;
let highScore = parseInt(localStorage.getItem('ea_highScore') || '0');

// Match Game State
let currentQuestion = 0;

// Complete Sentence State
let currentSentence = 0;
let selectedWord = null;
let currentBlanks = {};

// ===========================================
// MATCH GAME
// ===========================================

function initMatchGame() {
    const grid = document.getElementById('match-grid');
    grid.innerHTML = '';
    
    const emojis = Object.entries(faceWords);
    const words = emojis.map(([word]) => word);
    
    // Shuffle arrays
    const shuffledEmojis = [...emojis].sort(() => Math.random() - 0.5);
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    
    // Create emoji cards
    shuffledEmojis.forEach(([word, emoji]) => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = emoji;
        card.dataset.type = 'emoji';
        card.dataset.word = word;
        card.onclick = () => selectCard(card);
        grid.appendChild(card);
    });
    
    // Create word cards
    shuffledWords.forEach(word => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = word.toUpperCase();
        card.dataset.type = 'word';
        card.dataset.word = word;
        card.onclick = () => selectCard(card);
        grid.appendChild(card);
    });
    
    updateMatchProgress();
}

function updateMatchProgress() {
    const total = Object.keys(faceWords).length;
    const matched = document.querySelectorAll('.match-card.correct').length / 2;
    document.getElementById('match-progress').textContent = `Matched: ${matched}/${total}`;
}

function resetMatchGame() {
    selectedCard = null;
    initMatchGame();
}

function selectCard(card) {
    if (card.classList.contains('correct')) return;
    
    if (!selectedCard) {
        selectedCard = card;
        card.classList.add('selected');
    } else {
        if (selectedCard === card) {
            selectedCard.classList.remove('selected');
            selectedCard = null;
            return;
        }
        
        // Check if match
        if (selectedCard.dataset.word === card.dataset.word && 
            selectedCard.dataset.type !== card.dataset.type) {
            // Correct match!
            selectedCard.classList.add('correct');
            card.classList.add('correct');
            selectedCard.classList.remove('selected');
            addScore(10);
            showFeedback('🎉', 'Perfect Match!', true);
            selectedCard = null;
            
            updateMatchProgress();
            
            // Check if all matched
            setTimeout(() => {
                const allCards = document.querySelectorAll('.match-card');
                const correctCards = document.querySelectorAll('.match-card.correct');
                if (allCards.length === correctCards.length) {
                    showFeedback('🏆', 'Amazing! All Matched!', true);
                }
            }, 500);
        } else {
            // Wrong match
            addWrongAnswer();
            showFeedback('😅', 'Try Again!', false);
            selectedCard.classList.remove('selected');
            selectedCard = null;
        }
    }
}

// ===========================================
// QUIZ GAME
// ===========================================

function initQuizGame() {
    currentQuestion = 0;
    quizQuestions.sort(() => Math.random() - 0.5);
    showQuestion();
}

function showQuestion() {
    const container = document.getElementById('quiz-container');
    if (currentQuestion >= quizQuestions.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <div style="font-size: 5em;">🏆</div>
                <h2>Quiz Complete!</h2>
                <p style="font-size: 1.3em; margin: 20px 0;">You answered all ${quizQuestions.length} questions!</p>
                <p style="font-size: 1.5em; font-weight: bold; color: #667eea; margin-bottom: 25px;">🌟 Score: ${score} points</p>
                <button class="btn" onclick="initQuizGame()">🔄 Play Again</button>
            </div>
        `;
        return;
    }

    const pct = Math.round((currentQuestion / quizQuestions.length) * 100);
    const q = quizQuestions[currentQuestion];
    container.innerHTML = `
        <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${pct}%"></div>
        </div>
        <div class="progress-label">Question ${currentQuestion + 1} / ${quizQuestions.length}</div>
        <div class="quiz-question">
            ${q.emoji} "${q.question}"
        </div>
        <div style="text-align: center; margin: 15px 0;">
            <button class="btn" onclick="showHint()" style="background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%); font-size: 1em; padding: 10px 25px;">
                💡 Need a hint?
            </button>
            <div id="hint-box" style="display: none; margin-top: 15px; padding: 15px; background: #fff3cd; border-radius: 10px; font-size: 1.2em; color: #856404;">
                💡 ${q.hint}
            </div>
        </div>
        <div class="quiz-options" id="quiz-options"></div>
    `;
    
    const optionsContainer = document.getElementById('quiz-options');
    q.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.innerHTML = option;
        btn.onclick = () => checkAnswer(index, q.correct);
        optionsContainer.appendChild(btn);
    });
}

function showHint() {
    const hintBox = document.getElementById('hint-box');
    hintBox.style.display = 'block';
}

function checkAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    if (selected === correct) {
        options[selected].classList.add('correct');
        addScore(15);
        showFeedback('🌟', 'Correct!', true);
        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 1500);
    } else {
        options[selected].classList.add('wrong');
        options[correct].classList.add('correct');
        addWrongAnswer();
        showFeedback('😊', 'Nice Try!', false);
        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 2000);
    }
}

// ===========================================
// UNSCRAMBLE GAME
// ===========================================

function initUnscrambleGame() {
    const grid = document.getElementById('unscramble-grid');
    grid.innerHTML = '';

    unscrambleWords.sort(() => Math.random() - 0.5);

    unscrambleWords.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'unscramble-item';
        div.innerHTML = `
            <div style="font-size: 3em; margin-bottom: 10px;">${item.emoji}</div>
            <div class="scrambled-word">${item.scrambled.toUpperCase()}</div>
            <input type="text" class="unscramble-input" id="unscramble-${index}" 
                   placeholder="Type the answer..." 
                   autocomplete="off" 
                   autocorrect="off" 
                   autocapitalize="off"
                   spellcheck="false"
                   onkeyup="checkUnscramble(${index}, '${item.answer}')">
            <button class="btn" onclick="showUnscrambleHint(${index}, '${item.hint}')" 
                    style="margin-top: 10px; font-size: 0.9em; padding: 8px 20px; background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%);">
                💡 Hint
            </button>
            <div id="hint-unscramble-${index}" style="display: none; margin-top: 10px; padding: 10px; background: #fff3cd; border-radius: 8px; font-size: 0.95em; color: #856404;"></div>
        `;
        grid.appendChild(div);
    });
}

function showUnscrambleHint(index, hint) {
    const hintBox = document.getElementById(`hint-unscramble-${index}`);
    hintBox.textContent = `💡 ${hint}`;
    hintBox.style.display = 'block';
}

function checkUnscramble(index, answer) {
    const input = document.getElementById(`unscramble-${index}`);
    const value = input.value.toLowerCase().trim();
    
    // Check if this input was already marked correct (to avoid duplicate counting)
    if (input.classList.contains('correct')) return;
    
    if (value === answer) {
        input.classList.remove('wrong');
        input.classList.add('correct');
        input.disabled = true;
        
        // Only count if not previously marked wrong
        if (!input.dataset.countedWrong) {
            addScore(10);
        }
        
        showFeedback('✅', 'Perfect!', true);
        
        // Check if all completed
        setTimeout(() => {
            const allInputs = document.querySelectorAll('.unscramble-input');
            const correctInputs = document.querySelectorAll('.unscramble-input.correct');
            if (allInputs.length === correctInputs.length) {
                showFeedback('🏆', 'All Words Unscrambled!', true);
            }
        }, 300);
    } else if (value.length >= answer.length && !input.dataset.countedWrong) {
        // Only count as wrong once when they've typed enough letters and it's wrong
        input.classList.add('wrong');
        input.classList.remove('correct');
        input.dataset.countedWrong = 'true';
        addWrongAnswer();
    } else if (value.length > 0) {
        input.classList.add('wrong');
        input.classList.remove('correct');
    } else {
        input.classList.remove('wrong');
        input.classList.remove('correct');
    }
}

// ===========================================
// COMPLETE SENTENCE GAME
// ===========================================

function initCompleteGame() {
    currentSentence = 0;
    selectedWord = null;
    currentBlanks = {};
    showSentence();
}

function showSentence() {
    const container = document.getElementById('complete-container');
    
    if (currentSentence >= completeSentences.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <div style="font-size: 5em;">🏆</div>
                <h2>All Sentences Complete!</h2>
                <p style="font-size: 1.3em; margin: 20px 0;">You completed all ${completeSentences.length} sentences!</p>
                <p style="font-size: 1.5em; font-weight: bold; color: #667eea; margin-bottom: 25px;">🌟 Score: ${score} points</p>
                <button class="btn" onclick="initCompleteGame()">🔄 Play Again</button>
            </div>
        `;
        return;
    }

    const pct = Math.round((currentSentence / completeSentences.length) * 100);
    const exercise = completeSentences[currentSentence];
    selectedWord = null;
    currentBlanks = {};

    // Create sentence with blanks
    let sentenceHTML = exercise.sentence;
    let blankCounter = 0;
    
    // Replace blanks with interactive elements
    sentenceHTML = sentenceHTML.replace(/_+/g, () => {
        blankCounter++;
        return `<span class="complete-blank" id="blank-${blankCounter}" onclick="selectBlank(${blankCounter})">[____]</span>`;
    });

    container.innerHTML = `
        <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${pct}%"></div>
        </div>
        <div class="progress-label">Sentence ${currentSentence + 1} / ${completeSentences.length}</div>
        <div class="complete-exercise">
            <div style="text-align: center; margin-bottom: 20px;">
                <span style="font-size: 3em;">${exercise.emoji}</span>
            </div>
            <div class="complete-sentence">${sentenceHTML}</div>
            
            <div style="text-align: center; margin: 15px 0;">
                <button class="btn" onclick="showCompletionHint()" style="background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%); font-size: 1em; padding: 10px 25px;">
                    💡 Need a hint?
                </button>
                <div id="hint-complete" style="display: none; margin-top: 15px; padding: 15px; background: #fff3cd; border-radius: 10px; font-size: 1.2em; color: #856404;">
                    💡 ${exercise.hint}
                </div>
            </div>

            <div class="word-bank" id="word-bank">
                ${exercise.options.map((word, idx) => 
                    `<div class="word-option" id="word-${idx}" onclick="selectWord('${word}', ${idx})">${word.toUpperCase()}</div>`
                ).join('')}
            </div>

            <button class="check-answer-btn" onclick="checkCompleteSentence()" id="check-btn" disabled>
                ✓ Check Answer
            </button>
        </div>
    `;
}

function showCompletionHint() {
    document.getElementById('hint-complete').style.display = 'block';
}

function selectWord(word, index) {
    // Deselect previous
    document.querySelectorAll('.word-option').forEach(opt => opt.classList.remove('selected'));
    
    // Select new word
    selectedWord = word;
    document.getElementById(`word-${index}`).classList.add('selected');
}

function selectBlank(blankNum) {
    if (!selectedWord) {
        showFeedback('👆', 'Pick a word first!', false);
        return;
    }

    // Fill the blank
    const blank = document.getElementById(`blank-${blankNum}`);
    blank.textContent = selectedWord;
    blank.classList.add('filled');
    currentBlanks[blankNum] = selectedWord;

    // Mark word as used
    const wordOptions = document.querySelectorAll('.word-option.selected');
    wordOptions.forEach(opt => {
        opt.classList.remove('selected');
        opt.classList.add('used');
    });

    selectedWord = null;

    // Enable check button if all blanks filled
    const totalBlanks = document.querySelectorAll('.complete-blank').length;
    const filledBlanks = Object.keys(currentBlanks).length;
    
    if (filledBlanks === totalBlanks) {
        document.getElementById('check-btn').disabled = false;
    }
}

function checkCompleteSentence() {
    const exercise = completeSentences[currentSentence];
    const blanks = document.querySelectorAll('.complete-blank');
    let allCorrect = true;

    blanks.forEach((blank, index) => {
        const blankNum = index + 1;
        const userAnswer = currentBlanks[blankNum];
        
        // Determine correct answer for this blank
        let correctAnswer;
        if (exercise.doubleBlank) {
            // For double blank sentences with different answers
            correctAnswer = index === 0 ? exercise.blank : exercise.blank2;
        } else if (exercise.sameWord) {
            // For sentences where both blanks are the same word
            correctAnswer = exercise.blank;
        } else {
            // Single blank
            correctAnswer = exercise.blank;
        }

        if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            blank.classList.add('correct');
            blank.classList.remove('wrong', 'filled');
        } else {
            blank.classList.add('wrong');
            blank.classList.remove('correct', 'filled');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        addScore(20);
        showFeedback('🌟', 'Perfect Sentence!', true);
        setTimeout(() => {
            currentSentence++;
            showSentence();
        }, 2000);
    } else {
        addWrongAnswer();
        showFeedback('😊', 'Try again! Check the red words.', false);
        
        // Reset after wrong answer
        setTimeout(() => {
            blanks.forEach(blank => {
                blank.classList.remove('wrong', 'correct', 'filled');
                blank.textContent = '[____]';
            });
            
            document.querySelectorAll('.word-option').forEach(opt => {
                opt.classList.remove('used', 'selected');
            });
            
            currentBlanks = {};
            selectedWord = null;
            document.getElementById('check-btn').disabled = true;
        }, 2000);
    }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

function showGame(game) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.game-section').forEach(section => section.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`${game}-game`).classList.add('active');
    
    if (game === 'match') initMatchGame();
    if (game === 'quiz') initQuizGame();
    if (game === 'unscramble') initUnscrambleGame();
    if (game === 'complete') initCompleteGame();
}

function addScore(points) {
    score += points;
    correctAnswers++;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('ea_highScore', highScore);
        document.getElementById('high-score').textContent = highScore;
    }
    updateStats();
}

function addWrongAnswer() {
    wrongAnswers++;
    updateStats();
}

function updateStats() {
    document.getElementById('score').textContent = score;
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent = wrongAnswers;
    
    const total = correctAnswers + wrongAnswers;
    const accuracy = total > 0 ? Math.round((correctAnswers / total) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
}

function playSound(success) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = success ? 880 : 220;
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
}

function showFeedback(emoji, text, success) {
    playSound(success);
    const feedback = document.getElementById('feedback');
    document.getElementById('feedback-emoji').textContent = emoji;
    document.getElementById('feedback-text').textContent = text;
    feedback.style.background = success ?
        'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' :
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)';
    feedback.classList.add('show');

    setTimeout(() => {
        feedback.classList.remove('show');
    }, 1500);
}

// Initialize on load
window.onload = () => {
    document.getElementById('high-score').textContent = highScore;
    initMatchGame();
};
