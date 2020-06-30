<template>
    <div class="form-group">
        <p>
            <label>Cpf:</label>
            <input v-model="cpf" type=number placeholder="Insert the cpf" class="form-control">
        </p>
        <p>
            <label>Name:</label>
            <input v-model="name" type="text" placeholder="Insert the name" class="form-control">
        </p>
        <p>
            <label>Phone:</label>
            <input v-model="phone" type="text" placeholder="Insert the phone number" class="form-control">
        </p>
        <hr/>
        <button v-on:click="registerContact" class="btn btn-primary">Register Contact</button>
    </div>
</template>

<script>
export default {
    name: "ContactsForm",
    data(){
        return{
            cpf: null,
            name: '',
            phone: '',
        }
    },
    methods :{
        registerContacts(){
            if(this.cpf.trim() === '') {
                return;
            }
            else if(this.name.trim() === '') {
                return;
            }
            else if(this.phone.trim() === '') {
                return;
            }
            this.$emit("emit-contact", {cpf: this.cpf, name: this.name, phone: this.phone})
        }
    }
}
</script>