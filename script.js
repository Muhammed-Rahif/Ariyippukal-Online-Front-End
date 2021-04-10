if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('sw.js',{scope:"/Ariyippukal-Online-Front-End/"})
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'SW registration failed'));
}