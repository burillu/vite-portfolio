<template>
    <AppHero :pageTitle="project.title" />
    <div class="container">
        <div v-if="project">
            <div class="row justify-content-center">
                <div class="col-8">
                    <AppCard :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "../components/AppCard.vue";
import AppHero from "../components/main/AppHero.vue";
export default {
    watch: {
        // '$route.params.slug': function (newSlug, oldSlug) {
        //     if (newSlug !== oldSlug) {
        //         this.getOneProject();
        //     }
        // }
        //src="./images/XW5hGO4os2XnS0KLAltCJ29lZxhad85dyY4EWYg0.png"
        //src="./images/XW5hGO4os2XnS0KLAltCJ29lZxhad85dyY4EWYg0.png"

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
        getProjectDetailsNoApi() {
            //console.log(this.$route);
            const project = store.projects.filter(el => {
                return this.$route.params.slug == el.slug;
            })
            this.project = project[0];
            console.log(this.project.title);
        }

    },
    created() {
        //this.getProjectDetails();
        this.getProjectDetailsNoApi();
    },


    components: { AppCard, AppHero }
}
</script>
<style></style>
