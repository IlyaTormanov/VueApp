<template>
    <div id="root">
        <HeaderLayout/>

        <router-view/>

        <FooterLayout/>


    </div>
</template>
<script>
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";
import MainLayout from "@/components/MainLayout";
import Login from "@/components/Login";
    export default {

        name: 'App',
        data: () => {
            return {
                api_key: "0274696aa30f21c",
                apiHash: "",

            }
        },


        components:{
            Login,
            MainLayout,
            HeaderLayout,
            FooterLayout
        },
        created() {
            this.initialiseAPI()
        },
        methods: {

            initialiseAPI: function () {

                return new Promise((resolve) => {
                    return fetch('https://weship2you.com/api/api', {

                        method: 'post',
                        body: JSON.stringify({
                            'api_key': this.api_key,
                            'link_id': 0,
                            'name': '',
                            'email': '',
                            'password': '',
                            'user_id': 0,
                            'version': ''
                        })
                    }).then(res => res.json())
                        .then(res => {
                            if (res.errors === undefined) {
                                this.apiHash = res.data.api_hash;//authData.api_hash;
                                resolve();
                                return res;
                            }
                        }).catch(() => {
                            resolve();
                        });
                });
            }
        }


    }
</script>
<style>
    * {
        margin: 0 auto;
        font-size:14px;
    }

    #root {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        display: flex;
        flex-direction: column;
        min-height: 100vh;

    }





</style>
