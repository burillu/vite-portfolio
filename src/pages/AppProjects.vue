<template>
    <AppHero :pageTitle="'Projects'" />
    <div class="container" id="projects">
        <div class="row mb-4 mt-4">
            <div class="col-2">
                <label class="select-label" for="type">
                    Select Project Type:
                </label>
                <select id="type" class="form-select" @change="filterByType()" v-model="selectedType" name="type">
                    <option selected value="">All</option>
                    <option v-for="item in typesList" :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
            </div>
        </div>


        <h2 class="text-center">
            {{ selectTypeValue }} Projects
        </h2>
        <div class="row g-2 mb-4">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 " v-for="project in projects">


                <AppCard :project="project" :shortText="true" />



            </div>
        </div>
        <!-- <div class="d-flex justify-content-between">
            <div class="col-auto">
                <button class="btn btn-primary" @click="prevPage">Prev</button>

            </div>
            <div class="col-auto text-center d-flex justify-content-center">
                <button class="page-link " @click="goToPage(n)" v-for="n in store.projects.last_page">{{ n }}</button>
            </div>
            <div class="col-auto">
                <button class="btn btn-success" @click="nextPage">Next</button>
            </div>
        </div> -->

    </div>
</template>
<script>
import AppCard from '@/components/AppCard.vue';
import { store } from '../store';
import axios from 'axios';
import AppHero from '@/components/main/AppHero.vue';
export default {
    name: 'AppProjects',
    data() {
        return {
            store,
            currPage: null,
            srcNext: null,
            srcPrev: null,
            typesList: [
                {
                    id: 1,
                    name: "Front-end",
                    slug: "front-end",
                    created_at: "2024-01-16T11:16:50.000000Z",
                    updated_at: "2024-01-16T11:16:50.000000Z"
                },
                {
                    id: 2,
                    name: "Back-end",
                    slug: "back-end",
                    created_at: "2024-01-16T11:16:50.000000Z",
                    updated_at: "2024-01-16T11:16:50.000000Z"
                },
                {
                    id: 3,
                    name: "Full-Stack",
                    slug: "full-stack",
                    created_at: "2024-01-16T11:16:50.000000Z",
                    updated_at: "2024-01-16T11:16:50.000000Z"
                }
            ],
            projects: store.projects,
            selectedType: null,
            selectTypeValue: 'All',
            noProjects: false

        };
    },
    methods: {
        nextPage() {
            if (this.currPage == store.projects.last_page) {
                this.srcNext = store.projects.first_page_url;
            }
            axios.get(this.srcNext).then(res => {
                //console.log(this.srcNext);
                this.store.projects = res.data.results;
                //console.log(store.projects);
                this.currPage = res.data.results.current_page;
                this.srcNext = res.data.results.next_page_url;
                this.srcPrev = res.data.results.prev_page_url;
            });

        },
        prevPage() {
            if (this.currPage == 1) {
                this.srcPrev = store.projects.last_page_url;
            }
            axios.get(this.srcPrev).then(res => {
                //console.log(this.srcNext);
                this.store.projects = res.data.results;
                //console.log(store.projects);
                this.currPage = res.data.results.current_page;
                this.srcNext = res.data.results.next_page_url;
                this.srcPrev = res.data.results.prev_page_url;
            });

        },
        goToPage(n) {
            //console.log('andremo al link a pagina ' + n);
            const params = {};
            params.params = { page: n };
            console.log(params);
            axios.get(this.store.apiUrl + '/projects', params).then(res => {
                this.store.projects = res.data.results;
                //console.log(store.projects);
                this.currPage = res.data.results.current_page;
                this.srcNext = res.data.results.next_page_url;
                this.srcPrev = res.data.results.prev_page_url;
            })

        },
        getAllProjects() {
            // const params = {};

            // if (this.selectedType) {
            //     params.params = { type: this.selectedType }

            // }
            fetch('./data/projects.json').then((response) => response.json()).then(json => {
                console.log(json);
                this.store.projects = json.results;

            });
            // axios.get(store.apiUrl + "/projects", params).then(res => {
            //     console.log(res.data.results)
            //     if (res.data.results.data) {
            //         this.store.projects = res.data.results;
            //         this.currPage = res.data.results.current_page;
            //         this.srcNext = res.data.results.next_page_url;
            //     } else {
            //         this.store.projects = res.data.results;                    
            //     }
            //});
        },
        getType() {

            this.getAllProjects();
            if (!this.selectedType) {
                this.selectTypeValue = 'All';
                return
            }

            let typeValue = [];
            this.typesList.forEach(el => {
                if (el.id === this.selectedType) {
                    typeValue.push(el);
                }
            });
            if (typeValue[0].name) {
                this.selectTypeValue = typeValue[0].name;

            } else {

                this.selectTypeValue = 'All';
            }


        },
        getTypesList() {
            fetch('./data/types.json').then((response) => response.json()).then(json => {
                console.log(json);
                this.typesList = json.results;

            });

            // axios.get(store.apiUrl + '/types').then(res => {
            //     //console.log(res.data.results);
            //     this.typesList = res.data.results;
            // });
            //return types
        },

        filterByType() {
            //axios.get(store.apiUrl+)
            //console.log(store.projects);

            this.projects = store.projects;
            if (!this.selectedType) {
                return
            }
            const resultFilter = this.projects.filter(el => {
                return el.type.id == this.selectedType;
            });
            if (!resultFilter) {
                this.noProjects = true;
            }
            this.projects = resultFilter;

        }
    },
    computed: {
        // getProjects() {
        //     this.projects = store.projects
        // }
        // filterByType() {
        //     //axios.get(store.apiUrl+)
        //     console.log(store.projects);


        //     const resultFilter = store.projects.data.filter(el => {
        //         //console.log(el);

        //         el.type == this.selectedType
        //     })
        //     console.log(resultFilter)
        //     return resultFilter
        // }
    },
    mounted() {
        //this.getAllProjects();
        //this.getTypesList();
        console.log(this.projects);
    },
    components: { AppCard, AppHero }
}
</script>
<style></style>