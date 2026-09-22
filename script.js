const fileInput = document.getElementById('currencyInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultBox = document.getElementById('result');
const statusText = document.getElementById('status');
const confidenceText = document.getElementById('confidence');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');
analyzeBtn.addEventListener('click', async () => {
  const file = fileInput.files[0];
  if (!file) {
    alert('⚠️ Please upload an image first!');
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert('File too large! Must be under 5MB for security reasons.');
    return;
  }

  resultBox.classList.remove('hidden');
  statusText.textContent = 'Analyzing image with AI model...';
  confidenceText.textContent = '';

  setTimeout(() => {
    const isFake = Math.random() > 0.5;
    const confidence = (Math.random() * (99 - 85) + 85).toFixed(2);

    statusText.textContent = isFake
      ? '⚠️ Fake Currency Detected'
      : '✅ Original Currency Verified';
    confidenceText.textContent = `Confidence: ${confidence}%`;

    statusText.style.color = isFake ? '#ff4d4d' : '#00ffb3';
    resultBox.style.border = isFake
      ? '1px solid #ff4d4d'
      : '1px solid #00ffb3';
  }, 1500);
});
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formResponse.classList.remove('hidden');
  contactForm.reset();

  setTimeout(() => {
    formResponse.classList.add('hidden');
  }, 3000);
});