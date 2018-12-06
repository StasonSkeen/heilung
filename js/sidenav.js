//script.js
document.addEventListener('DOMContentLoaded', function() {
    
   
    var myMenuButton = document.querySelector(".menu-button");
    var mySideNav = document.querySelector("#mySidenav");
    
    myMenuButton.onclick = function() {
       console.log("clicked");
       mySideNav.classList.toggle("open");
       myMenuButton.classList.toggle("open")
   };
   
   
})
