<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <form @submit.prevent="submitForm" class="row g-3">
                    <div class="col-12">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" v-model="name">
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email">
                    </div>

                    <div class="col-12">
                        <label for="adress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="adress" placeholder="1234 Main St" v-model="address">
                    </div>
                    <div class="col-12">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" name="message" id="message" cols="30" rows="10"
                            v-model="message"></textarea>

                    </div>

                    <div class="col-12 d-flex gap-3">
                        <button type="submit" class="btn btn-primary">Send Message</button>
                        <button type="reset" class="btn btn-warning">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from '../../store';
import axios from 'axios';


export default {

    name: 'AppContactForm',
    data() {
        return {

            store,
            name: null,
            email: null,
            address: null,
            message: null
        };
    },
    methods: {
        submitForm() {
            //console.log('funziona il submit');
            const data = {
                name: this.name,
                email: this.email,
                address: this.address,
                message: this.message
            }
            axios.post(store.apiUrl + '/contacts', data).then(res => {
                console.log(res)
                this.name = null;
                this.email = null;
                this.address = null;
                this.message = null;

            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
<style></style>