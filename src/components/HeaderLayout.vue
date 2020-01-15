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
    </div>
</template>

<script>


    export default {
        name: "HeaderLayout",
        data: () => ({
            showNav: false,

        })
    }
</script>

<style scoped>
    #header {

        height: 80px;
        position: fixed;
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
