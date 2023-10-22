<template>
    <b-form>
        <b-form-input v-model="test_input" 
            type="text" 
            placeholder="Test text here thanks! :)" 
            class="mb-2">
        </b-form-input>
        <b-button type="submit" class="mr-2" variant="primary">Submit</b-button>
        <b-button type="reset" class="mr-2" variant="danger">Reset</b-button>
    </b-form>
    <hr/>
    {{ test_input }}
</template>

<script setup lang="ts">
import { ref }from 'vue'
const test_input= ref('')
</script>

<style scoped>

</style>