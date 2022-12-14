const inputEl = document.getElementById("input-el");
const passwordEl = document.getElementById("password-el");
const loginEl = document.querySelector(".signin-btn");

loginEl.addEventListener("click", function(){
  if(inputEl.value == "caleb" && passwordEl.value == "ama"){
    alert("login Successful")
    document.location.href ="website.html";
  }
  else{
    alert("Incorrect Username or Password")
  }
  
})
