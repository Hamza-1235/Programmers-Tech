let menuBtn = document.querySelector(' #menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

var swiper=new Swiper(".course-slider",{
    spacebetween: 20,
    grabCursor:true,
    loop:true,

    pagination:{
        el:"swiper-pagination",
        clickable:true,
    },
    breakpoint:{
        640:{
            slidePreview: 1,
        },
        768:{
            slidePreview: 2,
        },
        1024:{
            slidePreview: 3,
        },
    }
    });