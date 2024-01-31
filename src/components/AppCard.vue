<template>
    <div class="card">
        <div class="card-body">
            <img :src="project.image" :alt="project.title">


            <div v-if="shortText">
                <h4>Title: {{ project.title.substr(0, 15) + '...' }}</h4>
                <pre class="mb-3">{{ project.body.substr(0, 10) + '...' }}</pre>
                <router-link class="btn btn-primary" :to="{ name: 'projects-details', params: { slug: project.slug } }">
                    See Details
                </router-link>

            </div>
            <div v-else>
                <h3>Title: {{ project.title }}</h3>
                <div class="mb-3">
                    <h5>Type: {{ project.type.name }}</h5>
                </div>
                <pre class="mb-3">{{ project.body }}</pre>

            </div>

            <!-- <router-link v-for="technology in project.technologies" :to="{ name: 'projects' }">
                <span class="badge rounded-pill" :class="'my-badge-' + technology.slug">{{ technology.name }}</span>
            </router-link> -->



        </div>

    </div>
</template>
<script>
import { store } from '../store';
export default {

    name: 'AppCard',
    props: {
        project: Object,
        shortText: Boolean

    },
    data() {
        return {
            store,
        }
    }
}
</script>
<style></style>