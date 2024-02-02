<template>
    <AppHero :pageTitle="title" />
    <div class="container ">
        <h1 class="text-center">{{ title }}</h1>

        <div class="my-avatar rounded-circle mb-5">
            <img :src="'./images/MichelEbau.jpg'" alt="michelebau">
        </div>


        <AppContactsLink />
    </div>
</template>
<script>

import AppContactsLink from '@/components/main/AppContactsLink.vue';
import AppHero from '@/components/main/AppHero.vue';



export default {
    name: 'AppContact',
    data() {
        return {
            title: 'Contact ME'

        };
    },
    components: { AppHero, AppContactsLink }
}
</script>
<style></style>