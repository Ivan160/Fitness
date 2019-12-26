const popup = () => {
   const popupOpen = (popup) => {
      popup.click(function (e) {
         const target = e.target;
         if (target.closest('.close_icon') || target.closest('.close-btn') || target.closest('.close-menu-btn') || target.closest('.overlay') || target.closest('a[href^="#"]')) popup.fadeOut(300);
      });
   };

   $('[data-popup]').on('click', function () {
      const popup = $($(this).attr('data-popup')).fadeIn(300);
      popupOpen(popup);
   });

   $('.fixed-gift').click(function () {
      popupOpen($('#gift').fadeIn(300));
      $('.fixed-gift').remove();
   });
};
export default popup;