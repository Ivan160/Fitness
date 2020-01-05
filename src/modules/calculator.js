import animate from './animate';
import serializeObject from './serializeObject';
const calculator = () => {
   const formCardOrder = document.querySelector('#card_order');
   const priceTotal = formCardOrder.querySelector('#price-total');
   const mozaika = {1: 1999, 6: 9900, 9: 13900, 12: 19900};
   const schelkovo = {1: 2999, 6: 14990, 9: 21990, 12: 24990};
   let price = 0;

   formCardOrder.addEventListener('change', () => {
      const formData = serializeObject(formCardOrder);
      if (formData['club-name'] === 'mozaika') price = mozaika[formData['card-type']];
      else if (formData['club-name'] === 'schelkovo') price = schelkovo[formData['card-type']];
      if (formData['promo'] === 'ТЕЛО2019') price = Math.floor(price - (price * 0.3));

      const totalText = +priceTotal.textContent;
      animate({
         duration: 700,
         draw(progress) {
            priceTotal.textContent = Math.floor(totalText + (price - totalText) * progress);
         }
      });
   });
};
export default calculator;