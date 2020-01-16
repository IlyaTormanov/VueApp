<!--suppress ALL -->
<template>
<div>

    <Input type="text" name="country" />

    <div id="forpvz" style="width:100%; height:600px;"></div>

</div>
</template>

<script>



    import Input from "./Input";
    export default {
        name: "Transfer",
        components: {Input},
        mounted() {
            var ourWidjet = new ISDEKWidjet ({
                defaultCity: 'Санкт-Петербург',
                cityFrom: 'Москва',
                country: 'Россия',
                link: 'forpvz',
                path: 'https://www.cdek.ru/website/edostavka/template/scripts/',

            });
        }
    }
</script>

<style scoped>

</style>
