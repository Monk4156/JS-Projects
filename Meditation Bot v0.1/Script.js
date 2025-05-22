function startMeditation() {
  const chat = document.getElementById('chat');
  const btn = document.getElementById('hidebtn');

  
  const messages = [
    "1) Sit cross-legged or on a chair (whichever is comfortable).",
    "2) Close your eyes and take 5 slow breaths to let your mind settle. Keep breathing 🌬️",
    "3) Be a silent witness to whatever passes in the mind or externally. Keep breathing",
    "4) If you get enmeshed in thoughts, bring attention back to your breath again. Continue for as long as you like.",
    "5) When you wish to finish, breathe out and open your eyes.",
    "6) Great job! You rock! 🌟",
    "7) Tip: The more you detach from your thoughts, more happy you get. Meditation is a great stress buster."
  ];

  // Clear previous chat if needed
  chat.innerHTML = '';

  messages.forEach(msg => {
    const botMsg = document.createElement('p');
    botMsg.className = 'bot';
    botMsg.textContent = msg;
    chat.appendChild(botMsg);
    btn.style.display  = "none";
  });
}