// Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


// Show Menu
if(navToggle)
{
    navToggle.addEventListener('click', ()=> 
    { navMenu.classList.add('show-menu') })
}

// Hide Menu
if(navClose)
{
    navClose.addEventListener('click', ()=> 
    { navMenu.classList.remove('show-menu') })
}

// Remove Menu(Phone)
const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
    //Remove menu after clicking on each one
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Change Navbar Header*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Swiper (Popular Section) */
let swiperPopular = new Swiper('.popular__container', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    autoplay: /* Popular Swiper Auto Swap */
    {
        delay: 4000,
        disableOnInteraction: false,
   },
   
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: 
    {
        768: 
        {
          slidesPerView: 3,
        },
        1024: 
        {
          spaceBetween: 48,
          slidesPerView: 3,
        },
    },
});

/* MixItUp 3 Filter (Featured Section)*/   
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link Active Featured*/
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured()
{
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}

linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))

/* Scroll Active-Link (HamMenu) */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Scroll Reveal Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal('.popular__container, .featured__filters')
sr.reveal('.about__group' , {origin: 'left'})
sr.reveal('.about__data' , {origin: 'right'})
sr.reveal('.featured__card' , {interval: '300'})
sr.reveal('.featured__card, .logos__content, .footer__content' , {interval: '100'})