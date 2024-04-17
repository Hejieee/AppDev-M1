// Step 1
const card = $('.card')[0];
const container = $('.container'); 

// Step 5
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');

// Step 2
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; 
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20;
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


// Step 4
container.on('mouseenter', e => {
    card.style.transform = 'none';
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// Step 3
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});