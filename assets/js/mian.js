let body = document.querySelector("body");
let sidebar = document.querySelector(".sidebar");
let close = document.querySelector(".close-btn");
let toggleSwitch = document.querySelector(".toggle-switch");
let dswitch = document.querySelector(".switch");
let modeText = document.querySelector(".mode-text");

close.addEventListener("click",()=>{
  sidebar.classList.toggle("close");
});

toggleSwitch.addEventListener("click",()=>{
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
    modeText.innerHTML = "Light Mode";
  }else{
    modeText.innerHTML = "Dark Mode";
  }
});

let hasMenu = document.querySelectorAll(".has-subMenu");

for(let i = 0; i<hasMenu.length; i++){
  hasMenu[i].addEventListener("click",(e)=>{
   hasMenu[i].classList.toggle("showMenu");
  });
}