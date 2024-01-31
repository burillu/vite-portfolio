<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-auto p-5 text-center">
                <h1>Page Not Found</h1>
                <i class="fa-solid fa-triangle-exclamation my-secondary fa-10x"></i>

                <p>The page "{{ $route.href }}" is not found. <br>
                    Go to these links, to coming back to home, or to projects</p>
                <div class="d-flex justify-content-center gap-3">
                    <router-link class="btn btn-outline-dark" :to="{ name: 'home' }"> <i class="fa-solid fa-house"></i> Back
                        to Home</router-link>
                    <router-link class="btn btn-outline-dark" :to="{ name: 'projects' }"> <i
                            class="fa-solid fa-diagram-project"></i> Back to
                        Projects</router-link>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NotFound',

}
</script>