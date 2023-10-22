<template>
    <NavbarLayout/>
    <div>
        <RouterView/>
    </div>
    <BottomLayout/>
</template>

<script setup lang="ts">
import NavbarLayout from './NavbarLayout.vue';
import BottomLayout from './BottomLayout.vue';


</script>

<style scoped>

</style>