function registration(){
  var first = document.getElementById("first-name").value;
  var last = document.getElementById("last-name").value;
  var mail =document.getElementById("email-el").value
  var userPwd = document.getElementById("password-el").value
  var userName = document.getElementById("userName").value
 
  localStorage.setItem('firstName', first)
  localStorage.setItem('lastName', last)
  localStorage.setItem('username', userName )
  localStorage.setItem('email-address',mail)
  localStorage.setItem('userPassword', userPwd)
  document.location.href='index.html'
  const fn = document.getElementById("first-name").value
  const ln = document.getElementById("last-name").value
  const un = document.getElementById("userName").value
  const em = document.getElementById("email-el").value
  const pw = document.getElementById("password-el").value
  
}
  

  

 
  

  
  


const Toggle = document.getElementById("toggle-button")
const Pass = document.getElementById("password-el")


Toggle.addEventListener("click",function(){
  if (Pass.type === "password") {
    Pass.type = "text";
  } else {
    Pass.type = "password";
  }
});

