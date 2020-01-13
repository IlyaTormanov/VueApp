<template>
    <button type="button" class="button" v-bind="onClick">
        submit
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            onClick: Function
        }
    }
</script>

<style scoped>

</style>
