var inputEl = document.getElementById("input-el");
var passwordEl = document.getElementById("password-el");

const eYe = document.querySelector(".eye")

eYe.addEventListener("mousedown",function(){
  if (passwordEl.type == 'password'){
    passwordEl.type ="text"
  }
  else{
    passwordEl.type="password"
  }
})

function userLog(){
  var usernameEl = document.getElementById("input-el").value
  var passwordEl = document.getElementById("password-el").value
  
  var getUsername = localStorage.getItem('username');
  var getPass =localStorage.getItem('userPassword');

  if(usernameEl == getUsername){
    if(passwordEl == getPass){
      alert("Login Success")
      document.location.href='website.html'
    }
    else{
      alert("Wrong password")
    }
  
  }
  else{
    alert("Invalid details");
  }
}

