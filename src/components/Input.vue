<template>
    <input v-model="value"
           :type="type"
           :placeholder="placeholder"
           :name="name"
           :class="$style.input"
           :readonly="isReadOnly"
           v-bind:value="value"
           v-on:input="$emit('input', $event.target.value)"
           :list="listName"
           :autocomplete="autoComplete"
           @change="onChange"
    />
</template>

<script>
    export default {
        name: "Input",
        props:["onChange","type","placeholder","name",'isReadOnly',"listName","autoComplete","value"],
        data:()=>{
            return{
                value:"",

            }
        },
        methods:{
            change(){
                this.onChange({
                    value:this.value
                })
            }

        }
    }
</script>

<style module>
    .input {
        border:1px solid #f1f1f1;
        background:#f1f1f1;
        padding: 20px 10px;
        color:gray;
        border-radius: 4px;
        cursor:pointer;
        font-size: 16px;
        width: 330px;
    }
</style>
