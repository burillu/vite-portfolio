<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 ">
                <div class="d-flex flex-column gap-4">
                    <div v-for="link in store.contactLinks" class="card my-card-link row flex-row">
                        <div class="col-4 col-md-3 col-lg-2">
                            <img :src="link.srcLogo" :alt="link.title">
                        </div>
                        <div class="col-9 col-lg-10">
                            <div>
                                <h4>{{ link.title }}</h4>
                                <p>{{ link.description }}</p>
                                <button class="btn btn-outline-dark">
                                    <a target="_blank" :href="link.href">{{ link.href }}</a>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { store } from '../../store'
export default {
    name: 'AppContactsLink',
    data() {
        return {
            store
        }
    }
}
</script>
<style></style>