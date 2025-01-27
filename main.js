const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

// Toggle nav menu visibility
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-0");
  navMenu.classList.toggle("left-[-100%]");
  hamburger.classList.toggle("ri-close-line"); // Change to close icon
  hamburger.classList.toggle("ri-menu-4-line"); // Reset to menu icon
});

// Close nav menu on link click
navLink.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.add("left-[-100%]");
    navMenu.classList.remove("left-0");
    hamburger.classList.remove("ri-close-line");
    hamburger.classList.add("ri-menu-4-line");
  });
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay:{
    delay:3000,
    disableOnInteraction: false
  },
 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  grabCursor: true,
  breakpoints:{
    640:{
      slidesPerView:1
    },
    768:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    }
  }
});

//active link
const activeLink = () =>{
  const sections= document.querySelectorAll('section')
  const navLinks = document.querySelectorAll(".nav-link")

  let current= "home"

  sections.forEach(section =>{
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop - 60){
      current = section.getAttribute("Id")
    }
  })

  navLinks.forEach(item =>{
    item.classList.remove("active")

    if(item.href .includes(current)){
      item.classList.add("active")
    }
  })

}

window.addEventListener("scroll", activeLink)