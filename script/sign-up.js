const submit = document.querySelector(".button-el")

submit.addEventListener("click", function(){
  var first = document.getElementById("first-name").value;
  var last = document.getElementById("last-name").value;
  var mail =document.getElementById("email-el").value
  var userPwd = document.getElementById("password-el").value
  var userName = document.getElementById("userName").value
 
  var fn = document.getElementById("first-name").value
  var ln = document.getElementById("last-name").value
  var un = document.getElementById("userName").value
  var em = document.getElementById("email-el").value
  var pw = document.getElementById("password-el").value

  
  if(fn !== '' && ln !== '' && un !=='' && em !=='' && pw !==''){
    localStorage.setItem('firstName', first)
    localStorage.setItem('lastName', last)
    localStorage.setItem('username', userName )
    localStorage.setItem('email-address',mail)
    localStorage.setItem('userPassword', userPwd)
    window.open("index.html", "_self") 
  }
  else{
    alert("please fill the form")
  }



})


  

 
  

  
  


const Toggle = document.getElementById("toggle-button")
const Pass = document.getElementById("password-el")


Toggle.addEventListener("click",function(){
  if (Pass.type === "password") {
    Pass.type = "text";
  } else {
    Pass.type = "password";
  }
});

