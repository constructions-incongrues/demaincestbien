console.log('🐽')
import anime from 'anime.min.js';
// AnimeJS
let myAnimation = anime({
  targets: '.up',
  // Properties 
  translateX: 100,
  borderRadius: 50,
  // Property Parameters
  duration: 2000,
  easing: 'linear',
  // Animation Parameters
  direction: 'alternate'
});
