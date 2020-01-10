<template>
    <div>
    <head>
        <script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script>
    </head>
    <form>
        <input v-bind="login"/>
        <input v-bind="pass"/>
        <div>submit</div>
    </form>
    </div>
</template>

<script>


    const time_zone=(new Date().getTimezoneOffset() / 60) * (-1);

    export default {
        name: "Login",
        data:()=>{
           return{
               login:"",
               pass:"",
               sitekey:""
           }
        },

        methods:{
            signIn:function(){
                return new Promise((resolve) => {
                    return fetch('https://weship2you.com/api/api/signin', {

                        method: 'post',
                        body: JSON.stringify({
                            api_hash:this.apiHash,
                            credentials: {regEmail: this.login, regPassword: this.pass},
                           time_zone:time_zone
                        })


                    }).then(res =>res.json())
                        .then(res => {
                            this.apiHash=res.data.api_hash
                            if (!res.errors)

                                resolve();

                            return res;

                        }).catch(() => {

                            resolve();
                        });
                });
            }
        },

    }
</script>

<style scoped>

</style>
