<template>
    <button type="button" :class="$style.button" @click="handleClick">
        {{content}}
    </button>
</template>

<script>

    export default {
        name: "Button",
        props:['content',"handleClick"]


    }
</script>

<style module>
    .button {
        width: 100%;
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
        color:#00d2d2;
    }
    .button:hover {
        color: #00d2d2;
    }
    .button:active {
        background: #00d2d2;
        color: #fff;
    }
    a{
        text-decoration: none;
        color: #00d2d2;
    }

</style>
