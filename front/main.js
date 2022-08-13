window.addEventListener("load", init);

// Globals Variables

// Availale Levels
const levels = {
  beginner: 10,
  easy: 5,
  medium: 3,
  hard: 1,
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Words Array
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "stubborn",
  "cocktail",
  "runaway",
  "goodbye",
  "operation",
  "operator",
  "revolver",
  "var",
  "const",
  "function",
  "higher",
  "isTrue",
  "querySelector",
  "querySelectorAll",
  "document",
  "container",
  "echo",
  "interdinominationalism",
  "System.Out.Println",
  "education",
  "span",
  "div",
  "addEventListener",
  "innerHTML",
  "init",
  "knowledge",
  "breakthrough",
  "Technology",
  "dictionary",
  "console.log",
  "println",
  "siblings",
  "investigate",
  "return",
  "horrendous",
  "symptoms",
  "establishment",
  "hero",
  "joke",
  "developer",
  "javascript",
  "nutrition",
  "@override",
  "fun main",
  "getElementById",
  "class",
  "Olugbengajohn99@gmail.com",
  "WithGodinc",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "setInterval",
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match Currentword to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randindex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randindex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is Over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
