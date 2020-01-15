<template>
    <div id="root">
        <HeaderLayout/>
        <div class="content">
            <div class="promo">
                <img alt="Vue logo" src="./assets/logo.png">
                <div class="hello">Welcome to our transfer Application!</div>
            </div>
        </div>
           <router-link :to="{path:'/registration'}" ><div class="button">go registration</div></router-link>
            <router-view :api-hash="apiHash"/>
        <FooterLayout/>
    </div>
</template>
<script>
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";
    export default {

        name: 'App',
        data: () => {
            return {
                api_key: "0274696aa30f21c",
                apiHash: "",

            }
        },


        components:{
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
    }

    #root {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }

    .promo {
        width: 100%;
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid #2c3e50;
        padding: 30px;
        box-sizing: border-box;
    }
    .content{
        margin-top:60px;
    }
    .hello {
        padding-bottom: 15px;
        font-size: 22px;


    }
    .button{
        background: #2c3e50;
        color:white;
        padding:10px;
        width:140px;
        border-radius:10px;
        margin-top:20px;
        cursor:pointer;

    }
    .button:hover{
        background:lightblue;
        color:#2c3e50;
    }


</style>
