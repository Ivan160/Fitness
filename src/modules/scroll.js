import animate from './animate';
var scroll = function (animationTime) {
   if (!animationTime) animationTime = 500;
   function scrolling() {
      var wind = window.pageYOffset;
      var hash = this.getAttribute('href').slice(1);
      var hashTop;
      if (hash) hashTop = document.getElementById(hash).getBoundingClientRect().top;
      else if (!hash) hashTop = -wind;
      animate({
         duration: animationTime,
         draw: function (progress) {
            if (hashTop > wind) {
               window.scrollTo(0, hashTop * progress + wind);
            } else if (hashTop < wind) {
               window.scrollTo(0, hashTop * progress + wind);
            } else if (hashTop == wind) {
               return;
            }
         }
      });
      return;
   }
   var hrefAll = document.querySelectorAll('[href^="#"]');
   for (var i = 0; i < hrefAll.length; i++) {
      hrefAll[i].addEventListener('click', scrolling);
   }
};
export default scroll;