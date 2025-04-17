
const firebaseConfig = {
  apiKey: "AIzaSyCDZoBecmF5q3xibgtJm5bwOLyI9x7nzCU",
  authDomain: "toribill.firebaseapp.com",
  databaseURL: "https://toribill-default-rtdb.firebaseio.com",
  projectId: "toribill",
  storageBucket: "toribill.firebasestorage.app",
  messagingSenderId: "887198449730",
  appId: "1:887198449730:web:998881b905423af6886ddb"
};


document.addEventListener('DOMContentLoaded', function () {
  const particlesContainer = document.getElementById('particles');
  const colors = ['rgba(255,255,255,0.5)', 'rgba(173,216,230,0.5)', 'rgba(255,192,203,0.5)', 'rgba(144,238,144,0.5)']; // soft tones

  for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const size = Math.random() * 8 + 4;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-duration: ${Math.random() * 20 + 10}s;
          animation-delay: ${Math.random() * 10}s;
          opacity: ${Math.random() * 0.5 + 0.3};
      `;

      particlesContainer.appendChild(particle);
  }
});


function showSuccessMessage() {
  const messageDiv = document.getElementById("productMessage");
  messageDiv.style.display = "block";
  
  // Hide the message after 3 seconds
  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 3000);
}
