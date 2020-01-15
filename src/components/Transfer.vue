<!--suppress ALL -->
<template>
<div>
    <div id="forpvz" style="width:100%; height:600px;"></div>
<div>test</div>
</div>
</template>

<script>



    export default {
        name: "Transfer",
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
