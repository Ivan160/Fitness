'use strict';
import elementClosest from 'element-closest';
elementClosest(window);

import scroll from './modules/scroll';
import {slidingDown, slidingUp, slidingToggle} from './modules/sliding';
import popupShow from './modules/popupShow';
import calculator from './modules/calculator';

import validator from './modules/validator';
import masked from './modules/masked.js';
import sendForm from './modules/sendForm';

import Glide from '@glidejs/glide'

addEventListener('DOMContentLoaded', function () {
   scroll();


   var clubSelect = document.querySelector('.club-select');
   clubSelect.addEventListener('click', function () {
      var ul = this.querySelector('ul');
      slidingToggle(ul);
   });


   popupShow();
   calculator();

   var forms = document.querySelectorAll('form');
   for (var i = 0; i < forms.length; i++) {
      validator(forms[i]);
   }
   var phone = document.querySelectorAll('[name="phone"]');
   for (var i = 0; i < phone.length; i++) {
      masked(phone[i], "+7 (___) ___-__-__");
   }
   sendForm('./server.php');


   new Glide('.main-slider', {
      type: 'carousel',
      autoplay: 7000,
   }).mount();
   new Glide('.services-slider', {
      type: 'carousel',
      perView: 5,
      gap: 0,
      autoplay: 5000,
      breakpoints: {
         768: {
           perView: 3
         },
         580: {
           perView: 1
         }
       }
   }).mount();
   new Glide('.gallery-slider', {
      type: 'carousel',
      autoplay: 7000,
   }).mount();
});