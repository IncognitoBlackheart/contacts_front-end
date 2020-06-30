import apiClient from '../services/configService.js'

export default {
    obtainContacts(){
        return apiClient.get('/contacts')
    },
    newContact(contact){
        return apiClient.post('/contact', contact)
    },
    editContact(contact){
        return apiClient.put('/contact', contact)
    },
    deleteContact(cpf){
        return apiClient.delete('/contact/' + cpf)
    }
}