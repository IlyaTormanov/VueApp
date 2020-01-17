<template>
    <div id="header">

        <div class="navigation">
            <div>home</div>
            <div>shop</div>
            <div>busket</div>
        </div>
        <div id="logotype">
            <span>Bostil</span>
            <span>Support</span>
        </div>
        <div class="iconLayout">
        <div class="navbar">
            <div @click="showNav=!showNav" :class="!showNav?'open':'close'"></div>

            <div :class="showNav?'set':'unset'">
                <span>Twitter</span>
                <span>FaceBook</span>
                <span>Instagram</span>

            </div>
        </div>
        <img src="../assets/search .png">
        <img src="../assets/shop.png">

        </div>
        <router-link to="/login">
        <div v-if="this.$route.path==='/transfer'" class="byeWrapper" >
            <div class="bye" @click="byeApp">Выход</div>
        </div>
        </router-link>
    </div>
</template>

<script>

    export default {
        name: "HeaderLayout",
        props:{
            apiHash:String
        },
        data: () => ({
            showNav: false,

        }),
        methods:{
            byeApp:function(){
                console.log("check")
                return new Promise((resolve) => {
                    return fetch('https://weship2you.com/api/api/signout', {
                        method: 'post',

                        body: JSON.stringify({
                            'api_hash': this.apiHash,

                        })


                    }).then(res => res.json())
                        .then(res => {
                            this.apiHash = res.data.api_hash

                            if (!res.errors) {


                                resolve();

                                return res.data.api_hash;
                            }
                        }).catch(() => {

                            resolve();
                        });
                });
            }
        }
    }
</script>

<style scoped>
    #header {

        height: 80px;

        padding: 10px;
        box-sizing: border-box;
        background: #2c3e50;
        width: 100%;
        top: 0;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-around;


        align-items: center;

    }
    #logotype>span:last-child{
        padding-top: 3px;
        font-size: 1.6em;
        letter-spacing: 1px;
    }
    #logotype>span:first-child{
        text-transform: uppercase;
        font-weight: bold;
        color:#e6b886;
        letter-spacing: 2px;
        font-size: 2.5em;

    }
    @media screen and (max-width:1366px){
        #header{
            height:60px;
        }
        #logotype>span:first-child{
            font-size: 2em ;
        }
        #logotype>span:last-child{
            padding-top: 3px;
            font-size: 1.4em;

        }
        .byeWrapper{
            order:4;
        }
    }
    @media screen and (max-width:500px){
      .navigation{
          order:2;

      }
        #header{
            flex-wrap: wrap;
            justify-content: space-between;
            height:auto;
        }
        #logotype {
            order: 1;
        }
        #logotype>span:first-child{
            font-size:1.3em;
        }
        #logotype>span:last-child{
            font-size:1.1em;
        }
        .iconLayout{
            order:3;
        }
    }

    .bye{
        background: #e01e5a;
        padding:5px 15px;
        color:white;
        border-radius: 6px;
        cursor:pointer;
    }

    .navigation{
        display:grid;
        grid-template-columns: repeat(3,auto);
        grid-column-gap: 15px;

    }
    .navbar {
        position: relative;
    }
    #logotype{
        display:flex;
        flex-direction: column;

    }

    .open:after {
        display: block;
        content: "We in social";
    }
    .iconLayout{
        display:grid;
        grid-template-columns: 120px repeat(2,max-content);
        grid-column-gap: 15px;
    }
    .close:after {
        content: url("../assets/cancel.png");
        display: block;

    }

    .set {

        display: flex;
        margin-top: 20px;
        flex-direction: column;
        position: absolute;
        background: #2c3e50;
        padding: 10px;
       right:-36px;
        border-radius: 6px;
    }

    .set > span {
        padding: 7px 0;

    }

    .unset {
        display: none;
    }

</style>
