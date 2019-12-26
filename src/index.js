import "@babel/polyfill";
import elementClosest from 'element-closest'; 
elementClosest(window);

import scroll from '../src/modules/scroll';
import popup from '../src/modules/popup';
import sendForm from '../src/modules/sendForm';
import calculator from '../src/modules/calculator';

$(function () {
   'use strict';
   scroll();
   popup();
   sendForm();
   calculator();
});