<template>
    <div class="content">



    <router-view exact="Login" :api-hash="apiHash"/>

    </div>
</template>


<script>
    import Login from "@/components/Login";
    import Registration from "@/components/Registration";
    export default {
        name: "MainLayout",
        components: {Registration, Login},
        props:['apiHash'],

    }
</script>

<style scoped>
    .promo {
        width: 100%;
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid #2c3e50;
        padding: 30px;
        box-sizing: border-box;
    }
    .content{

        flex: 1 1 auto;
        width:100%;
        flex-direction: column;
    }

</style>
