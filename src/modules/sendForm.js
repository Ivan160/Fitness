const sendForm = () => {
   $('form').submit(function (e) {
      e.preventDefault();
      const target = e.target;
      $.ajax({
         type: "POST",
         url: "server.php",
         data: $(this).serialize(),

         beforeSend: function () {
            $('<div class = "form-status"><p id="statusMesseng">Отправка...</p></div>').appendTo(target).slideDown(300);
            $(target).find('button').attr('disabled', 'true');
         },

         success: function () {
            $('#statusMesseng').text('Заявка отправлена!');
            setTimeout(() => $('.form-status').slideUp(300), 5000);
         },

         error: function () {
            $('#statusMesseng').text('Ошибка! Что-то пошло не так :(');
            setTimeout(() => $('.form-status').slideUp(200), 7000);
         }
      });
      target.reset();
   });
};
export default sendForm;