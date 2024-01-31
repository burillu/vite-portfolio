<template>
    <section id="home-content">
        <div class="container p-5">

            <div class="row justify-content-between">
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h2> Web Developer Full Stack </h2>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident veritatis laboriosam reiciendis!
                        Vel
                        dolorum quam quod culpa! Eaque odit fugiat repellendus omnis natus modi saepe, unde itaque? Tempora
                        debitis dolorum ab eius? Dolor, nihil? Totam autem consectetur cumque suscipit quisquam voluptatum,
                        placeat, dicta beatae eligendi minus sed in, animi fugit saepe! Dignissimos, et. Deleniti maxime
                        fuga ea
                        sint accusamus dolorem esse numquam nostrum explicabo sapiente voluptatem dolorum, harum velit sed
                        in
                        facilis doloribus. Id aperiam vitae doloribus architecto, atque et omnis alias quis ratione? Ipsum
                        accusantium, quos dicta vero, molestias ad commodi fugit est delectus ut voluptate atque? Error?</p>
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