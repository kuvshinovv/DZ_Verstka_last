'use strict';

//   Открываем менюшку из бургера
let menuActive = document.querySelector("div.popup_menu_hidden");
let burger = document.querySelector('.nav2pict3');
burger.onclick = function() {menuActive.classList.toggle("active")};
//-------------------------------------------------


