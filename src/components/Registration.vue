<template>
    <div>
        <form action="registration">
            <label>Please,sign in</label>
          <Input name="login" placeholder="login" type="email" :on-change="onLogin"/>
            <Input name="password" placeholder="password" type="password" :on-change="onPass"/>
                   <routerLink to="login">
                       <Button content="Завершить регистрацию!"/>
                   </routerLink>

            {{userInfo}}
        </form>
    </div>
</template>

<script>
    import Button from "./Button";
    import Input from "./Input";
    export default {
        name: 'Registration',
        components: {Input, Button},
        props: ['apiHash'],
        data: function () {

            return {
                email:"",
                password: "",
                token: null,
                userInfo: ""
            }
        },

        methods: {
            onLogin (e) {

                   this.email=e.target.value

            },
            onPass(e){
                this.pass=e.target.value
            },
            recaptcha() {
                this.$recaptchaLoaded().then(() => {
                    return this.$recaptcha('registration');
                }).then(token => {
                    this.token = token;
                    // eslint-disable-next-line no-console
                }).then(()=>{
                    this.registrationAPI();
                })
            },
            registrationAPI() {

                return new Promise((resolve) => {
                    return fetch('https://weship2you.com/api/api/signup', {
                        method: 'post',

                        body: JSON.stringify({
                            'api_hash': this.apiHash,
                            'credentials': {regEmail: this.email, regPassword: this.password},
                            'responseToken': this.token,
                            'link_id': 0,
                        })


                    }).then(res => res.json())
                        .then(res => {
                            this.apiHash = res.data.api_hash

                            if (!res.errors) {
                                // eslint-disable-next-line no-console

                                resolve();

                                return res.data.api_hash;
                            }
                        }).catch(() => {

                            resolve();
                        });
                });

            },


        }
    }

</script>

<style>

    form {
        padding-top: 13px;
        display: grid;
        grid-row-gap: 15px;
        justify-content: center;
    }




    .input {

        padding: 15px;
        border-radius: 4px;
        font-size: 16px;
        width: 240px;
    }

</style>
