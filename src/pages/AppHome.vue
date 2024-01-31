<template>
    <AppHero :pageTitle="'Home'" />
    <AppMain />
</template>
<script>
import AppHero from '@/components/main/AppHero.vue';
import AppMain from '../components/main/AppMain.vue';

export default {
    name: 'AppHome',
    data() {
        return {
            message: 'tu sorella'
        };
    },
    components: { AppHero, AppMain }
}
</script>
<style></style>