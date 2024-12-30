// Script File
var hamburgerBtn = document.querySelector('.hamburger-btn');
var sideBar = document.querySelector('.side-bar');

hamburgerBtn.addEventListener('click', sidebarToggle);
function sidebarToggle(){
	sideBar.classList.toggle('active');
}

// Code For Light/Dark Mode Toggle
var modeSwitcher = document.querySelector('.mode-switch i');
var body = document.querySelector('body');
modeSwitcher.addEventListener('click', modeSwitch);
function modeSwitch(){
	body.classList.toggle('active');
}

	// Function to close the banner
function closeBanner() {
  document.getElementById("banner").style.display = "none";
}

// Function to close the cookie dialog
function closeCookieDialog() {
  document.getElementById("cookieDialog").style.display = "none";
}

// Function to handle "Accept Cookies"
function acceptCookies() {
  closeCookieDialog();
  console.log("Cookies accepted");
}

// Function to handle "Decline Cookies"
function declineCookies() {
  closeCookieDialog();
  console.log("Cookies declined");
}

