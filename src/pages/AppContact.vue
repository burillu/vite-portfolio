<template>
    <AppHero :pageTitle="title" />
    <div class="container">
        <h1 class="text-center">{{ title }}</h1>
        <AppContactForm />
    </div>
</template>
<script>
import AppContactForm from '@/components/main/AppContactForm.vue';
import AppHero from '@/components/main/AppHero.vue';



export default {
    name: 'AppContact',
    data() {
        return {
            title: 'Contact ME'

        };
    },
    components: { AppContactForm, AppHero }
}
</script>
<style></style>