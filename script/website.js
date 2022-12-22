const hamburgerEl = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".navbar")
const logout = document.querySelector(".text-el6")
const social = document.querySelector(".text-el4")
const test = document.querySelector(".text-el1")
const specialist = document.querySelector(".text-el2")
const contactEl = document.querySelector(".contact-icon")
const Homer = document.querySelector(".home-icon")
var userflex = localStorage.getItem('username')
const welcomeMessage = document.querySelector(".middle-portion")


hamburgerEl.addEventListener("click", function(){
  navbar.classList.toggle("change");
  
})

logout.addEventListener("click", function(){
  document.location.href="index.html"
})

social.addEventListener("click", function(){
  window.open('https://github.com/jstarcaleb', '_blank').focus();
  
})
test.addEventListener("click", function(){
  window.open('https://www.cdc.gov/diabetes/takethetest/', '_blank').focus();
})

specialist.addEventListener("click",function(){
  window.open('https://www.icliniq.com/ask-a-doctor-online/diabetologist/diabetes', '_blank').focus();
})

contactEl.addEventListener("click", function(){
  window.open('Contact-Us.html')
})

Homer.addEventListener("click", function(){
  window.scrollTo(0,0);
})

welcomeMessage.innerHTML = `We've been expecting you
, ${userflex}!`

welcomeMessage.style.fontSize="70px"
welcomeMessage.style.textAlign="center"
welcomeMessage.style.fontFamily="lato","sans-serif"



