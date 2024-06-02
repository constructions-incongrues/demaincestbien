console.log('🦔')
// CLose button of newsletter

let closeBtn = document.querySelector('.close');
let newsletter = document.querySelector('.newsletter');

closeBtn.addEventListener('click', () => {  
    newsletter.style.display = 'none';
})

// Sort events by date
let sortFilter = document.querySelector('.icon-sort');
// console.log(sortValue);
let mainContainer = document.querySelector('.all-events');

sortFilter.addEventListener('click', (event) => {  
    let sortValue = sortFilter.getAttribute('data-value');
    // console.log(sortValue)
    if(sortValue === 'asc') {
        sortFilter.setAttribute('data-value', 'desc');
        event.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`;
    } else if(sortValue === 'desc'){
        sortFilter.setAttribute('data-value', 'asc');
        event.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>`;
    }

    //Je récupère tous les events
    let events = document.querySelectorAll('.event');
    //Je transforme la NodeList en Array
    let eventsArray = Array.from(events);
    if(sortValue === 'asc') {
        eventsArray.sort((a, b) => {  
            let dateA = new Date(a.querySelector('.date').textContent);
            let dateB = new Date(b.querySelector('.date').textContent);
            return dateA - dateB;
        })
    } else if(sortValue === 'desc') {   
        eventsArray.sort((a, b) => {  
            let dateA = new Date(a.querySelector('.date').textContent);
            let dateB = new Date(b.querySelector('.date').textContent);
            return dateB - dateA;
        })
    }

    eventsArray.forEach((event) => {  
        mainContainer.appendChild(event);
    })
})

// Filter events by location
let filterLocation = document.querySelector('.localisation');

filterLocation.addEventListener('change', (event) => {  
    let location = event.target.value;
    let events = document.querySelectorAll('.event');

    let eventsArray = Array.from(events);
    eventsArray = eventsArray.filter((event) => {
        let dep = event.querySelector('.departement span').textContent;
        return dep !== location;
    });

    eventsArray.forEach((event) => {  
        mainContainer.appendChild(event);
    });    
    
});

// Anim Arrow Up

let arrow = document.querySelector('.up')
arrow.addEventListener('click',()=>{

})