var iconSearch = document.querySelector('.icon-search');
var icon = document.querySelector('.icon');
var search = document.querySelector('.search');
var clear = document.querySelector('.clear');
var nightMode = document.querySelector('.night-mode');
var nightModeIcon = document.querySelector('.night-mode__icon');
var boxCardMain = document.querySelector('.auctions-box');
var boxcardItems = document.querySelectorAll('.box-card');
var arrowLeft = document.querySelector('.icon-arrow-left');
var arrowRight = document.querySelector('.icon-arrow-right');
var boxcardItemsWidth = boxcardItems[0].offsetWidth;
var boxcardItemsLenght = boxcardItems.length;
var postionX = 0;
var index = 0;

arrowLeft.addEventListener('click', function () {
   handleChangeSlide('left');
});
arrowRight.addEventListener('click', function () {
   handleChangeSlide('right');
});
function handleChangeSlide(direction) {
   if (direction === 'right') {
      index++;
      if (index >= boxcardItemsLenght) {
         index = boxcardItemsLenght;
         return;
      }
      postionX = postionX - boxcardItemsWidth - 185;
      boxCardMain.style = `transform: translateX(${postionX}px)`;
   } else if (direction === 'left') {
      // index--;
      // if (index <= 0) {
      //    index = 0;
      //    return;
      // }
      // postionX = postionX + boxcardItemsWidth;
      // boxCardMain.style = `transform: translateX(${postionX}px)`;
   }
}

icon.onclick = function () {
   iconSearch.classList.toggle('active');
   clear.classList.toggle('hide');
};
clear.onclick = function () {
   return (search.value = '');
};
nightMode.onclick = function () {
   document.body.classList.toggle('light-theme');
   if (document.body.classList.contains('light-theme')) {
      nightModeIcon.src = './assets/images/sun.png';
   } else {
      nightModeIcon.src = './assets/images/moon.png';
   }
};
