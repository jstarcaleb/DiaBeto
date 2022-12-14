const hamburgerEl = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".navbar")
const logout = document.querySelector(".text-el6")


hamburgerEl.addEventListener("click", function(){
  navbar.classList.toggle("change");
  
})

logout.addEventListener("click", function(){
  document.location.href="homepage.html"
})