console.log('🦔')

// CLose button of newsletter

let closeBtn = document.querySelector('.close');
let newsletter = document.querySelector('.newsletter');

closeBtn.addEventListener('click', () => {  
    newsletter.style.display = 'none';
})