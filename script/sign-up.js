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
  
  const fn = document.getElementById("first-name").value
 
  const un = document.getElementById("userName").value
 
  const pw = document.getElementById("password-el").value

  if(fn === '' || un ==='' || pw === '' ){
    console.log("fail")
  }

  else{document.location.href='index.html'}
  const ln = document.getElementById("last-name").value
  const em = document.getElementById("email-el").value

  if( ln ===''|| em ===''){
    console.log("ham")
  }
  else{document.location.href='index.html'}
  
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

