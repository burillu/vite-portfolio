<template>
    <section id="home-content">
        <div class="container p-5">

            <div class="row justify-content-between">
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h2 class="my-color-jolly">Jr. Web Developer Full Stack </h2>
                    <p>
                        L'esperienza con cui ho acquisito questa qualifica, è stato un corso di formazione professionale
                        effettuato in
                        <a target="_blank" class="text-primary"
                            href="https://boolean.careers/corso/full-stack-web-development">Boolean.careers</a>,
                        che mi ha
                        dato la possibilità di conoscere la programmazione web in prima persona, fino a poco tempo prima
                        conosciuta per passione e attraverso una nota piattaforma di e-learning.
                        Fin dai primi giorni è stata un <span class="my-color-jolly fw-bold">immersione</span> diretta nel
                        codice e questo ha fatto sì che venissero
                        apprese, gradualmente le tecnologie base lato <span class="my-color-jolly fw-bold">frontend</span>,
                        e lato <span class="my-color-jolly fw-bold">backend</span>, fino allo sviluppo di interi
                        progetti in autonomia e in team, senza escludere l’applicazione di sistemi per il controllo della
                        versione, utilizzati fin dal primo progetto.
                    </p>
                </div>
                <div class="col-12 col-md-5">
                    <div class="row">
                        <div class="col-6">
                            <img src="https://png.pngtree.com/png-vector/20190811/ourmid/pngtree-vector-server-icon-png-image_1683167.jpg"
                                alt="img-server">

                        </div>
                        <div class="col-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/3621/3621616.png" alt="img coding">
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </section>
</template>
<script>
import { store } from '../../store';
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
            currPage: null,
            srcNext: null
        }
    },
    methods: {
        nextPage() {
            if (this.currPage == store.projects.last_page) {
                this.srcNext = store.projects.first_page_url;
            }
            axios.get(this.srcNext).then(res => {

                console.log(this.srcNext);
                this.store.projects = res.data.results;
                console.log(store.projects);
                this.currPage = res.data.results.current_page;
                this.srcNext = res.data.results.next_page_url;

            })
        },

        getAllProjects() {
            axios.get(store.apiUrl + "/projects").then(res => {

                this.store.projects = res.data.results;
                this.currPage = res.data.results.current_page;
                this.srcNext = res.data.results.next_page_url;

                console.log(store.projects);

            });
        }
    },
    mounted() {
        //this.getAllProjects();
        //console.log(store.projects);
    },
}
</script>
<style></style>