import animate from './animate';

var fadingIn = function (item, animationTime) {
   if (!animationTime) animationTime = 300;
   item.style.opacity = '0';
   item.style.display = 'block';
   animate({
      duration: animationTime,
      draw: function (progress) {
         item.style.opacity = 1 * progress;
         if (progress === 1) item.setAttribute('style', 'display: block');
      }
   });
};

var fadingOut = function (item, animationTime) {
   if (!animationTime) animationTime = 300;
   item.style.opacity = '1';
   item.style.display = 'block';
   animate({
      duration: animationTime,
      draw: function (progress) {
         item.style.opacity = 1 * (1 - progress);
         if (progress === 1) item.setAttribute('style', 'display: none');
      }
   });
};

var fadingToggle = function (item, animationTime) {
   if (getComputedStyle(item).display === 'none' || getComputedStyle(item).opacity === '0') {
      fadingIn(item, animationTime);
   } else {
      fadingOut(item, animationTime);
   }
};

export {fadingIn, fadingOut, fadingToggle};