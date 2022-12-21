const hamburgerEl = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".navbar")
const logout = document.querySelector(".text-el6")
const social = document.querySelector(".text-el4")
const test = document.querySelector(".text-el1")


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
  console.log("clicked")
  window.open('https://www.cdc.gov/diabetes/takethetest/', '_blank').focus();
})