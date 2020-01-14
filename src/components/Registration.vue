<template>
    <div>
        <form action="registration">
            <label>Please,sign in</label>
            <input v-model="email" type="email" placeholder="email" name="email" class="input"/>
            <input v-model="password" type="password" placeholder="password" name="password" class="input"/>


                <button type="button" class="button" @click="recaptcha">
                    submit
                </button>



            {{userInfo}}
        </form>
    </div>
</template>

<script>

    import Login from "@/components/Login";


    export default {

        name: 'Registration',

        props: ['apiHash'],
        data: function () {

            return {
                email: "",
                password: "",
                token: null,
                userInfo: ""
            }
        },

        methods: {
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

    .button {
        width: 150px;
        color: white;
        background: #41b883;
        padding: 10px;
        font-weight: bolder;
        border: none;
        font-size: 16px;
        border-radius: 6px;
        cursor: pointer;
        justify-self: flex-end;

    }

    .button:hover {
        background: #2c3e50;
    }

    .input {
        border: 2px solid #41b883;
        padding: 15px;
        border-radius: 4px;
        font-size: 16px;
        width: 240px;
    }

</style>
