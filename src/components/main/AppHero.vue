<template>
    <div class="hero ">
        <div class="hero-content h-100">
            <div class="d-flex flex-column justify-content-center h-100">
                <h1 class="text-center my-secondary fw-bold mb-4">{{ pageTitle }} - Michele Ebau</h1>
                <p class="text-center fw-bold my-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad temporibus voluptatibus
                    incidunt
                    dolore, iusto fuga rerum adipisci in neque, minus assumenda dolor, non nobis.
                </p>
            </div>

        </div>

    </div>
</template>
<script>
export default {
    name: 'AppHero',
    props: {
        pageTitle: String
    },
    data() {
        return {
            message: 'tu sorella',

        }
    }
}
</script>
<style></style>