Nova.booting((Vue, router, store) => {
  Vue.component('index-dropdown-inline', require('./components/IndexField'))
  Vue.component('detail-dropdown-inline', require('./components/DetailField'))
  Vue.component('form-dropdown-inline', require('./components/FormField'))
})
