
// Setup and start animation! 


  var typed = new Typed("#element", {
    strings: [
      "Web Developer",
      "Data Analyst",
      "Vedio Editor",
      "Web Designer",
    ],
    typeSpeed: 70,
    backSpeed:70,
    backDelay:2000,
    loop:true,
  });

let scrolltop=document.querySelector('.scrolltop');
scrolltop.addEventListener("click",()=>{
  window.scrollTo(0,0);
})

const links=document.querySelectorAll(".linksList");
const sec=document.querySelectorAll(".autoNav");

const listItems = document.querySelectorAll('ul li');

listItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});


window.onscroll=()=>{
sec.forEach(section=>{
    let top=window.scrollY;
    let offset = section.offsetTop-300;
    let height = section.offsetHeight;
    let id=section.getAttribute("id");
    if(top>=offset && top<offset+height){
        links.forEach(link=>{
            link.classList.remove("active");
            document.querySelector('nav ul li a[href*='+id+ ']').classList.add("active");

        })
    }

})
}


