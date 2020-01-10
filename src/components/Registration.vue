<template>

    <form method="post" action="http://localhost:8080/">
        <input v-model="email" type="email" placeholder="email"  name="email" />
        <input v-model="password" type="password"  placeholder="password" name="password"/>
        <div>

            <button type="button" class="button" @click="recaptcha">
                submit
            </button>
        </div>
        {{userInfo}}
    </form>

</template>

<script>


    export default {

        name: 'Registration',

        props:['apiHash'],
        data:function(){
            // eslint-disable-next-line no-console
            console.log(this.apiHash)
            return {
                email:"",
                password:"",
                token:null,
                userInfo:""
            }
        },

        methods: {
            recaptcha() {
                this.$recaptchaLoaded().then(() => {
                    return this.$recaptcha('login');
                }).then(token => {
                    this.token = token;
                    // eslint-disable-next-line no-console
                    console.log(token)
                    this.registrationAPI();
                })
            },
            registrationAPI() {

                return new Promise((resolve) => {
                    return fetch('https://weship2you.com/api/api/signup', {
                        method: 'post',

                        body: JSON.stringify({
                            api_hash: this.apiHash,
                            credentials: {regEmail: this.email, regPassword: this.password},
                            responseToken: this.token,
                            link_id: 0,
                        })



                    }).then(res => res.json())
                        .then(res => {
                            this.apiHash = res.data.api_hash

                            if (!res.errors)

                                resolve();

                            return res;

                        }).catch(() => {

                            resolve();
                        });
                });

            },


        }
    }

</script>

<style scoped>

</style>
