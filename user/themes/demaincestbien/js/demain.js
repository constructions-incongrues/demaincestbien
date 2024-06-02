console.log('🦔')

// CLose button of newsletter

let closeBtn = document.querySelector('.close');
let newsletter = document.querySelector('.newsletter');

closeBtn.addEventListener('click', () => {  
    newsletter.style.display = 'none';
})

// Hide last border of event items

let eventItems = document.querySelectorAll('.event');
eventItems.forEach((item, index) => {  
    if(index === eventItems.length - 1) {
        item.style.borderBottom = 'none';
    }
})