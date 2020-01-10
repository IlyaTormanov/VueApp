<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <Registration v-bind:api-hash="apiHash"></Registration>

        <div id="forpvz"></div>
    </div>
</template>

    <script>
        import HelloWorld from './components/HelloWorld.vue'
        import Registration from './components/Registration.vue'
        import Login from "@/components/Login";
        // eslint-disable-next-line no-unused-vars
        const registration = Registration;
        const login=Login
        
        export default {
            name: 'app',
            data: () => {
                return {
                    api_key: "0274696aa30f21c",
                    apiHash: "",
                }
            },
            components: {
                HelloWorld,
                Registration
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
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #forpvz {
        width: 100%;
        height: 600px;
    }
</style>
