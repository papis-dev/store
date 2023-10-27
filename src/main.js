import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faMagnifyingGlass,
  faUser,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

library.add(
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faPinterest,
  faLocationDot,
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
  faUser,
  faArrowRight,
);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
