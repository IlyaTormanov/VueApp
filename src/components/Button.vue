<template>
    <button type="button" :class="isDisabled===undefined||isDisabled===true?$style.button:isDisabled===false&&$style.disabled" @click="handleClick">
        {{content}}
    </button>
</template>

<script>

    export default {
        name: "Button",
        props:['content',"handleClick","isDisabled"],


    }
</script>

<style module>
    .button {
        min-width: 200px;
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
        .disabled{
            background:gray !important;
            min-width: 200px;
            height: 40px;
            border-radius: 10px;
            border: none;
            box-sizing: border-box;
            font-weight: 600;
            font-size: 16px;
            padding: 0 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color:white;
                cursor:unset !important;
        }
</style>
