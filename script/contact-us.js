const emailEl = document.querySelector(".gmail-logo")
const twitterEl = document.querySelector(".twitter-logo")
const linkedinEl = document.querySelector(".linked-logo")
const githubEl = document.querySelector(".github-logo")


emailEl.addEventListener("click",function(){
  window.open('mailto:niiadjartey1@email.com?subject=Hello&body=Hi%20there!', '_blank').focus()
})

twitterEl.addEventListener("click",function(){
  window.open('https://twitter.com/CalebJstar', '_blank').focus()
})
linkedinEl.addEventListener("click", function(){
  console.log("clicked")
  window.open('https://www.linkedin.com/in/caleb-jeffery-teye-376313254/', '_blank').focus()
})
githubEl.addEventListener("click", function(){
  console.log("clicked")
  window.open('https://github.com/jstarcaleb', '_blank').focus()
})