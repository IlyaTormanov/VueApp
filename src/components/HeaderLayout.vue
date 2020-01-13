<template>
    <div id="header">
        <div id="logotype">
            <a>~TransferCars~</a>
        </div>
        <a>
            Main
        </a>
        <a>
            Contacts
        </a>
        <a>
            About us
        </a>
        <a>
            Price
        </a>
        <a>
            Management
        </a>
    </div>
</template>

<script>
    export default {
        name: "HeaderLayout"
    }
</script>

<style scoped>
    #header {

        height: 60px;
        position: fixed;
        padding: 10px;
        box-sizing: border-box;
        background: #41b883;
        width: 100%;
        top: 0;
        color: white;
        display: grid;
        grid-template-areas: "logotype link link link link link link";
        grid-template-columns: 30% repeat(5, auto);
        align-items: center;

    }

    a {
        cursor: pointer;
        font-weight: bolder;
        align-items: center;
        vertical-align: middle;
    }

    a:hover {
        border-bottom: 1px solid white;
    }

    #logotype {
        grid-area: logotype;
        font-size: 24px;
        font-style: Italic;
        letter-spacing: 3px;
        font-weight: bold;
    }
</style>
