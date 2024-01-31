<template>
    <div class="container">
        Footer
        <AppNavBar :classTextColor="store.navBarFooter.classText" :src="store.navBarFooter.srcLogo"
            :tabsArray="store.navBarFooter.tabs" />
    </div>
</template>
<script>
import AppNavBar from '../header/AppNavBar.vue';
import { store } from '../../store';

export default {
    name: 'AppFooter',
    components: { AppNavBar },
    data() {
        return {
            store
        }
    }
}
</script>
<style></style>