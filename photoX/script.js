document.querySelector('#menu-toggle-btn').addEventListener('click', (e) => {
    e.target.classList.toggle('show-nav');
});

const navBar = document.querySelector('.nav-menu');
const missionImage = document.querySelector('.camera-img');
const missionText = document.querySelector('.mission-text');

window.addEventListener('scroll', () => {
    let height = window.pageYOffset;
    
    if(height >= 200){
        navBar.classList.add('nav-scroll');
    }else{
        navBar.classList.remove('nav-scroll');
    }

    if(height >= 650){
        missionImage.classList.add('from-left');
        missionText.classList.add('from-right');
    }else{
        missionImage.classList.remove('from-left');
        missionText.classList.remove('from-right');
    }
});

let currentFilter = 'all';

const galleryTabs = document.querySelectorAll('.gallery-item');

for(tab of galleryTabs){
    tab.addEventListener('click', (e) => {

        const previousTab = document.querySelector(`[data-filter=${currentFilter}]`);
        previousTab.classList.remove('active-gallery-item');

        currentFilter = e.target.dataset.filter;
        e.target.classList.add('active-gallery-item');

        displayFilteredSlides();
    });
}

function displayFilteredSlides(){
    const allImages = document.querySelectorAll('.filter');

    for(image of allImages){
        image.style.display = currentFilter === 'all' ? 'block' : 'none'; 
    }

    if(currentFilter === 'new'){
        const newImages = document.querySelectorAll('.new');
        for(img of newImages){
            img.style.display = 'block'
        }
    }
    else if(currentFilter === 'free'){
        const freeImages = document.querySelectorAll('.free');
        for(img of freeImages){
            img.style.display = 'block'
        }
    }
    else if(currentFilter === 'pro'){
        const proImages = document.querySelectorAll('.pro');
        for(img of proImages){
            img.style.display = 'block'
        }
    }
}