// ESTADO DO FORMULÁRIO
const formData = {
  name: '',
  email: '',
  phone: ''
};

// URL DE CHECKOUT
const KIRVANO_CHECKOUT_URL = "https://pay.kirvano.com/93efb02b-ceb5-4e04-8f9e-f1421344ebfc";

// FUNÇÃO PARA CONSTRUIR URL COM PARÂMETROS
function buildKirvanoCheckoutUrl({ name, email, phone }) {
  let url = KIRVANO_CHECKOUT_URL;
  let params = [];
  
  if (name) params.push(`customer.name=${encodeURIComponent(name)}`);
  if (email) params.push(`customer.email=${encodeURIComponent(email)}`);
  if (phone) params.push(`customer.phone=${encodeURIComponent(phone)}`);
  
  if (params.length > 0) {
    url += "?" + params.join("&");
  }
  
  return url;
}

// MANIPULAÇÃO DO VÍDEO
let videoStarted = false;
const videoElement = document.querySelector('.video-element');
const playButton = document.querySelector('.play-button');

function handlePlayClick() {
  videoStarted = true;
  playButton.style.display = 'none';
  videoElement.controls = true;
  videoElement.play();
}

playButton.addEventListener('click', handlePlayClick);

// MANIPULAÇÃO DO FORMULÁRIO
const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const phoneInput = document.querySelector('input[type="tel"]');

function handleInputChange(field, value) {
  formData[field] = value;
}

nameInput.addEventListener('input', (e) => handleInputChange('name', e.target.value));
emailInput.addEventListener('input', (e) => handleInputChange('email', e.target.value));
phoneInput.addEventListener('input', (e) => handleInputChange('phone', e.target.value));

function handleSubmit(e) {
  e.preventDefault();
  const checkoutUrl = buildKirvanoCheckoutUrl({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
  });
  window.open(checkoutUrl, '_blank');
}

form.addEventListener('submit', handleSubmit);

// BOTÕES DE CTA
const ctaButtons = document.querySelectorAll('.cta-button, .final-cta');

ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    const checkoutUrl = buildKirvanoCheckoutUrl({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });
    window.open(checkoutUrl, '_blank');
  });
});

// VALIDAÇÃO DE FORMULÁRIO
function validateForm() {
  const name = formData.name.trim();
  const email = formData.email.trim();
  
  if (!name || !email) {
    alert('Por favor, preencha pelo menos o nome e email.');
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um email válido.');
    return false;
  }
  
  return true;
}

// ANIMAÇÕES DE HOVER
const hoverElements = document.querySelectorAll('.cta-button, .play-button, button[type="submit"]');

hoverElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.transform = element.style.transform || 'scale(1.05)';
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)';
  });
});

// SCROLL SUAVE PARA SEÇÕES
function smoothScrollTo(element) {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// LAZY LOADING PARA IMAGENS
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if

