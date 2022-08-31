import Vue from 'vue';
import App from './App';

import pinia from './store';

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
  pinia,
});
