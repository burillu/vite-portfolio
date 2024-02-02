<template>
    <div class="container d-flex justify-content-between">
        <div class="my-logo">
            <img :src="src" alt="logo">
        </div>

        <nav class="navbar navbar-expand-lg" :class="btn ? 'my-bg-quaternary' : ''">

            <div class="container-fluid flex-row-reverse">
                <div v-if="btn" class="d-flex">
                    <button @click="visible = !visible" class="navbar-toggler ms-auto" :class="!visible ? 'collapsed' : ''"
                        type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse " :class="visible ? 'show' : ''" id="navbarTogglerDemo01">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold ">
                        <li class="nav-item" v-for=" item  in  tabsArray ">
                            <router-link class="nav-link" active-class="active" :class="classTextColor" aria-current="page"
                                :to="{ name: item.href }">{{
                                    item.title }}</router-link>
                            <!-- <a class="nav-link" :class="classTextColor" aria-current="page" :href="item.href">{{ item.title
                            }}</a> -->
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
        btn: Boolean

    },
    data() {
        return {
            visible: false
        }
    }

}
</script>

<style lang="scss" scoped>
// @use '../../assets/styles/partials/variables' as *;
</style>