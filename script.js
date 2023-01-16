'use strict';


// let menuActive = document.querySelector("div.popup_menu_active");
// let burger = document.getElementsByClassName("div.nav2pict3");

function toggleMenu()
{
    menuActive.classList.toggle("active");
}

// burger.addEventListener("click", toggleMenu() {});




//   onclick="return toggleMenu(this)
//Console.log("Кнопка работает!!!")


let menuActive = document.querySelector("div.popup_menu_hidden");
let burger = document.querySelector('.nav2pict3');
burger.onclick = function() {menuActive.classList.toggle("active")};