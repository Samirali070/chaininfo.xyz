const languageButton = document.querySelector('[data-lang-toggle]');
const languageButtonText = document.querySelector('.language-toggle-text');
const translatableElements = document.querySelectorAll('[data-en][data-da]');

function setLanguage(language) {
  translatableElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  document.documentElement.lang = language === 'da' ? 'da' : 'en';

  if (languageButton && languageButtonText) {
    languageButton.setAttribute('aria-label', language === 'da' ? 'Translate site to English' : 'Translate site to Danish');
    languageButton.querySelector('.flag').textContent = language === 'da' ? '🇬🇧' : '🇩🇰';
    languageButtonText.textContent = language === 'da' ? 'English' : 'Dansk';
  }

  localStorage.setItem('chaininfo-language', language);
}

const savedLanguage = localStorage.getItem('chaininfo-language') || 'en';
setLanguage(savedLanguage);

if (languageButton) {
  languageButton.addEventListener('click', () => {
    const currentLanguage = document.documentElement.lang === 'da' ? 'da' : 'en';
    setLanguage(currentLanguage === 'da' ? 'en' : 'da');
  });
}
