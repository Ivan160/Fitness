const calculator = () => {
   const mozaika = {1: 1999, 6: 9900, 9: 13900, 12: 19900};
   const schelkovo = {1: 2999, 6: 14990, 9: 21990, 12: 24990};
   let price = 0;

   $('#card_order').change(function () {
      const inputData = $(this).find('input:checked');
      const formData = {};

      for (let i = 0; i < inputData.length; i++) formData[inputData[i].name] = inputData[i].value;

      if (formData['club-name'] === 'mozaika') price = mozaika[formData['card-type']];
      else if (formData['club-name'] === 'schelkovo') price = schelkovo[formData['card-type']];

      if ($('[name="promo"]').val() === 'ТЕЛО2019') price = Math.floor(price - (price * 0.3));

      $('#price-total').each(function () {
         $(this).prop('Counter', $(this).text())
            .animate({
               Counter: price
            }, {
               duration: 800,
               easing: 'swing',
               step: function (now) {
                  $(this).text(Math.ceil(now));
               }
            });
      });
   });
};
export default calculator;