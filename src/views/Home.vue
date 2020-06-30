<template>
  <div class="container">
        <h1>Contacts</h1>
        <hr/>

        <ContactsForm v-on:emit-contact="registerContacts" />

        <div v-for="(l, index) in contacts" :key="index">
            <span>CPF: <strong>{{ l.cpf }}</strong></span>
            <div>Name: <strong>{{ l.name }}</strong></div>
            <div>Phone Number:{{ l.phone }}</div>
            <div>
                <a v-on:click.prevent="removeContact(index)" href="#">Delete</a>
            </div>
            <hr/>
        </div>
    </div>
</template>

<script>
import contactsService from '@/services/contactsService.js'
import ContactsForm from '@/components/ContactsForm.vue'

export default {
  name: 'Home',
  components:{
    ContactsForm
  },
  data(){
    return {
      contacts : []
    }
  },
  methods:{
    registerContacts(index){
      this.contacts.push(index);
    },
    removeContact(index){
      this.contacts.splice(index, 1);
    },
  },
  created(){
    contactsService.obtainContacts()
    
      .then(response => {
        this.contacts = response.data.data
      })
  }
}
</script>