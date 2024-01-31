<template>
    <div class="container">
        <div v-if="project">
            <div class="row justify-content-center">
                <div class="col-8">
                    <AppCard :project="project" />
                </div>
                <router-link
                    :to="{ name: 'projects-details', params: { slug: 'proj-html-vuejs' } }">proj-html-vuejs</router-link>

            </div>

        </div>

    </div>
</template>
<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "@/components/AppCard.vue";
export default {
    watch: {
        // '$route.params.slug': function (newSlug, oldSlug) {
        //     if (newSlug !== oldSlug) {
        //         this.getOneProject();
        //     }
        // }

    },

    name: 'ProjectDetail',
    data() {
        return {
            message: 'Ciccio Bello',
            store,
            project: null,

        };
    },
    methods: {
        getProjectDetails() {
            console.log(this.$route);
            //console.log(this.store.apiUrl);
            axios.get(this.store.apiUrl + '/projects/' + this.$route.params.slug).then(resp => {
                this.project = resp.data.results;
                //this.technologies = resp.data.technologies;
            });
        },

    },
    mounted() {
        this.getProjectDetails();
    },


    components: { AppCard }
}
</script>
<style></style>