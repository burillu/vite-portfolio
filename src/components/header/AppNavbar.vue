<template>
    <div class="container d-flex justify-content-between align-items-center">
        <div class="my-logo">
            <img :src="src" alt="logo">
        </div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class=" " id="navbarNavDropdown">
                    <ul class="navbar-nav fw-bold ">
                        <li class="nav-item" v-for="item in tabsArray">
                            <router-link class="nav-link" active-class="active" :class="classTextColor" aria-current="page"
                                :to="{ name: item.href }">{{
                                    item.title }}</router-link>
                            <!-- <a class="nav-link" :class="classTextColor" aria-current="page" :href="item.href">{{ item.title
                            }}</a> -->
                        </li>
                        <li v-if="btn" class="nav-item">
                            <button class="my-btn my-btn-light" :class="btn.classBg">
                                {{ btn.title }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'AppNavBar',
    props: {
        src: String,
        classTextColor: String,
        tabsArray: Array,
        btn: Object
    }

}
</script>

<style lang="scss" scoped>
// @use '../../assets/styles/partials/variables' as *;
</style>