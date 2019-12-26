const scroll = () => {
   $('.club-select').click(function () {
      const ul = $(this).find('ul');
      ul.is(":visible") ? ul.slideUp(300) : ul.slideDown(300);
   });

   const scrollTopMenu = $('.menu-button').offset().top;
   $(window).scroll(function () {
      if ($(this).scrollTop() > scrollTopMenu && screen.width < '768') $('.top-menu').css({
         "top": "0",
         "position": "fixed"
      });
      else if ($(this).scrollTop() < scrollTopMenu || screen.width > '768') $('.top-menu').css({
         "top": "0",
         "position": ""
      });
   });

   $('a[href^="#"]').on('click', function () {
      if ($(this).attr('href') !== '#') $('html').animate({
         scrollTop: $($(this).attr('href')).offset().top
      }, 800);
   });
};
export default scroll;