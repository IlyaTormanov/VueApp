<template>
    <div id="login">
        <Welcome/>
        <form>
            <Input  name="login" placeholder="login" type="email" :on-change="onLogin" />
                <Input  name="pass" placeholder="password" type="password" :on-change="onPass" />
            <div class="redirectReg"><span>Не зарегистрированы?</span><router-link to="registr" class="go">Регистрация.</router-link></div>
            <router-link to="transfer" >
                <Button content="Войти"/>
            </router-link>
        </form>




    </div>
</template>

<script>


    import Welcome from "@/components/Welcome";
    import Button from "./Button";
    import Input from "./Input";
    const time_zone = (new Date().getTimezoneOffset() / 60) * (-1);

    export default {
        name: "Login",
        components: {Input, Button, Welcome},
        data: () => {
            return {
                login: "",
                pass: "",
                sitekey: ""
            }

        },
        props: ["apiHash"],

        methods: {
            onLogin(e){
                this.login=e.target.value;

            },
            onPass(e){
                this.pass=e.target.value
            },
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


.go{
    color:#2c3e50;
    font-size:1.3em;
    cursor:pointer;
}



</style>
