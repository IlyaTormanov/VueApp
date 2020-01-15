<template>
    <div>

    <form>
        <input v-model="login" type="email" placeholder="email" name="email" class="input"/>
        <input v-model="pass" type="password" placeholder="password" name="password" class="input"/>


    </form>
        <button type="button" class="button" @click="recaptcha">
            submit
        </button>
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
    .input {
        border: 2px solid #41b883;
        padding: 15px;
        border-radius: 4px;
        font-size: 16px;
        width: 240px;
    }

    .button:hover {
        background: #2c3e50;
    }
</style>
