<template>
    <div id="footer">
        <div>
            <a>
                +37580348574
            </a>
            <a>
                testApplication@mail.ru
            </a>
        </div>
        <div>
            <a>
                Moscow,Gagarina Street 39
            </a>
            <a>
                We did better software
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterLayout"
    }
</script>

<style scoped>
    #footer {

        bottom: 0;
        background: #2c3e50;
        height: 100px;
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width:100%;
        box-sizing: border-box;
    }
    @media screen and (max-width:1366px){
        #footer{
            height:60px;
        }
    }
    #footer>div{
            display:flex;
        flex-direction: column;
    }
   #footer>div>a:last-child{
       padding-top:10px;
   }
    a {

        color: white;

    }
</style>
