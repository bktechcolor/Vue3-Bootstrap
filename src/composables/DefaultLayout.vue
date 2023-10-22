<template>
    <main class="flex">
        <LeftSitebarLayout/>
        <b-container>
            <RouterView/>
        </b-container>
    </main>
</template>

<script setup lang="ts">
import LeftSitebarLayout from './LeftSitebarLayout.vue';
</script>

<style scoped>

</style>