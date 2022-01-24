document.querySelector("#header i").addEventListener("click" ,function(){
   
  document.querySelector(" #menu").style.display="inline-block"
  
});

document.querySelector("#close i").addEventListener("click" ,function(){
   
  document.querySelector(" #menu").style.display="none"
  
});

// document.querySelector("#close i").addEventListener("click" ,function(){
   
//   document.querySelector("#about").style.display="none"
//   // document.querySelector("#main1").style.display="initial"
  
// });
var tl
$('.container3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});