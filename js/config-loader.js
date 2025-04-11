let websiteConfig = {};

fetch('../WEBSITE_CONFIG.json')
  .then(response => response.json())
  .then(config => {
    websiteConfig = config;
    applyGlobalSettings();
    initPageConfig();
  })
  .catch(error => console.error('Config load error:', error));

function applyGlobalSettings() {
  const trail = document.querySelector('.mouse-trail');
  if(trail) {
    trail.style.background = `radial-gradient(circle, ${websiteConfig.settings.cursorColor} 20%, transparent 70%)`;
  }
  document.body.style.cursor = websiteConfig.settings.hideSystemCursor ? 'none' : 'default';
  document.documentElement.style.setProperty('--cursor-color', websiteConfig.settings.cursorColor);
}

function initPageConfig() {
  const pageId = document.body.dataset.page;
  switch(pageId) {
    case 'about':
      loadAboutConfig();
      break;
    case 'work':
      loadWorkConfig();
      break;
    case 'contact':
      loadContactConfig();
      break;
    default:
      loadHomeConfig();
  }
}