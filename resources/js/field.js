import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSpinner)

Nova.booting((Vue, router, store) => {
  Vue.component('index-dropdown-inline', require('./components/IndexField'));
  Vue.component('detail-dropdown-inline', require('./components/DetailField'));
  Vue.component('form-dropdown-inline', require('./components/FormField'));

  Vue.component('font-awesome-icon', FontAwesomeIcon);
})
