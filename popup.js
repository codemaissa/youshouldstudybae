const quotes = [
  "The best way to predict your future is to create it. —Abraham Lincoln",
  "Failure is part of the process of success. People who avoid failure also avoid success.” —Robert T Kiyosaki",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Preparation is the key to success. —Alexander Graham Bell",
  "Every accomplishment starts with the decision to try. —Gail Devers",
  "All progress takes place outside the comfort zone. —Michael John Bobak",
  "I am so proud of you",
  "You're doing great"
];

let timerInterval;
let timeLeft = 0;

function updateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  document.getElementById('quote').textContent = `"${selectedQuote}"`;
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('time').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startStopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById('startStop').textContent = 'Start';
  } else {
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById('startStop').textContent = 'Start';
      }
    }, 1000);
    document.getElementById('startStop').textContent = 'Stop';
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 0;
  updateTimerDisplay();
  document.getElementById('startStop').textContent = 'Start';
}
function setTime() {
  const inputMinutes = parseInt(document.getElementById('minutes').value) || 0;
  const inputSeconds = parseInt(document.getElementById('seconds').value) || 0;
  timeLeft = inputMinutes * 60 + inputSeconds;
  updateQuote();
  updateTimerDisplay();
}
document.getElementById('startStop').addEventListener('click', startStopTimer);
documdocument.getElementById('setTime').addEventListener('click', setTime);
document.getElementById('reset').addEventListener('click', resetTimer);

updateQuote();
updateTimerDisplay();
