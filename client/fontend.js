import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

new Vue({
  el: '#app',
  data() {
    return {
      form: {
        name: '',
        value: ''
      },
      contacts: [
        {id: 1, name: 'Насиб Мамедов', value: '+994-50-701-00-91', marked: false}
      ]
    }
  },
  computed: {
    canCreate() {
      return this.form.value.trim() && this.form.name.trim()
    }
  },
  methods: {
    createContact() {
      const {...contact} = this.form
      this.contacts.push({...contact, id: Date.now()})
      
      this.form.name = this.form.value = '';
    },
    markContact(id) {
      const contact = this.contacts.find(c => c.id === id)
      contact.marked = true;
    },
    removeContact(id) {

    }
  }
})
