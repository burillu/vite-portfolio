<template>
    <div>
        <AppNavBar :classTextColor="store.navBarHeader.classText" :src="store.navBarHeader.srcLogo"
            :tabsArray="store.navBarHeader.tabs" :btn="hamburger" />

    </div>
</template>

<script>
import AppNavBar from './AppNavbar.vue';
import { store } from '../../store';

export default {
    name: "AppHeader",
    components: { AppNavBar },
    data() {
        return {
            store,
            hamburger: true


        }
    }
}
</script>
<style></style>