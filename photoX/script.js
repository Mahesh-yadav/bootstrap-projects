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