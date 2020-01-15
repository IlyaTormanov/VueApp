<template>
    <div id="login">
        <Welcome/>
        <form>
            <input v-model="login" type="email" placeholder="email" name="email" class="input"/>
            <input v-model="pass" type="password" placeholder="password" name="password" class="input"/>
            <div class="redirectReg"><span>Не зарегистрированы?</span><span class="go">Войти!</span></div>
            <router-link to="transfer" class="button">
                Войти
            </router-link>
        </form>




    </div>
</template>

<script>


    import Welcome from "@/components/Welcome";
    const time_zone = (new Date().getTimezoneOffset() / 60) * (-1);

    export default {
        name: "Login",
        components: {Welcome},
        data: () => {
            return {
                login: "",
                pass: "",
                sitekey: ""
            }

        },
        props: ["apiHash"],

        methods: {
            signIn: function () {
                return new Promise((resolve) => {
                    return fetch('https://weship2you.com/api/api/signin', {

                        method: 'post',
                        body: JSON.stringify({
                            api_hash: this.apiHash,
                            credentials: {regEmail: this.login, regPassword: this.pass},
                            time_zone: time_zone
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
            }
        },

    }
</script>

<style scoped>
    #login{
        height:calc(100vh - 180px);
        display:flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }
    .redirectReg{
        color:gray;

        text-align: end;
    }
    .redirectReg>span{
        font-size:1.3em;
        cursor:pointer;
    }
    .button {
       width:100%;
    height: 40px;
        border-radius: 10px;
        border: solid 2px #00d2d2;
        cursor: pointer;
        background: transparent;
        box-sizing: border-box;
        font-weight: 600;
        font-size: 16px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    a{
        text-decoration: none;
        color: #00d2d2;
    }
    .button:hover {
        color: #00d2d2;
    }
    .button:active {
        background: #00d2d2;
        color: #fff;
    }
.go{
    color:#2c3e50;
    font-size:1.3em;
}
    .input {
        border:1px solid #f1f1f1;
     background:#f1f1f1;
        padding: 20px 10px;
        color:gray;
        border-radius: 4px;
        font-size: 16px;
        width: 330px;
    }


</style>
