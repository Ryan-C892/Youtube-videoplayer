// Container //
const container = document.querySelector("container");
// Navigation //
const openButton = document.querySelector("openNav");
const closeButton = document.querySelector("closeNav");
const sideNav = document.querySelector("sidenav");
// Prevents Navbar from shwoing without clicking on button //
window.onload = function() {
    closeBtn();
}
function openBtn() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("top").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
function closeBtn() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("top").style.marginLeft= "0";
    document.body.style.backgroundColor = "transparent";
}
// When the user clicks the button, toggle between hiding and showing the dropdown content //
function dropDown(num) {
    document.getElementById("myDropdown" + num).classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let myDropDown = document.getElementsByClassName("dropdown-content");
        let i;
    for (i = 0; i < myDropDown.length; i++) {
        let openDropdown = myDropDown[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
}
}
}