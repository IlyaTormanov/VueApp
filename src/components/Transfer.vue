<!--suppress ALL -->
<template>
    <div id="transfer">
        <form class="form">
            <Input type="text" name="country" :is-read-only="true" placeholder="Россия"/>
            <Input type="text" name="city" list-name="cityList" :on-change="onCityChange" v-model="currentValue.name"
                   placeholder="Выберите город" auto-complete="off"/>
        </form>
        <dataList id="cityList">
            <option v-for="item in filteredArr"
                    v-bind:value="item.id">
                {{item.name}}
            </option>
            <label class="city" :style="receiveStation.name.length===0?'display:none':'display:block'"
                   v-on:click="flag=true"> {{receiveStation.name}}</label>
        </dataList>
        <div v-if="!startWidget&&!flag" class="dangerous">Выберите город</div>

        <Button content="Выбрать ПВЗ" :is-disabled="flag" v-bind:handle-click="handlePvzButtonClick"/>
        <!--    <div @click="handlePvzButtonClick">check</div>-->

        <div id="forpvz" ></div>


    </div>
</template>

<script>


    import Input from "./Input";
    import Button from "@/components/Button";

    export default {
        name: "Transfer",
            template:{

            },
        data: () => {
            return {

                city: [
                    {
                        id: 0,
                        name: "Санкт-Петербург"
                    },
                    {
                        id: 1,
                        name: "Йокшар-Ола"
                    },
                    {
                        id: 2,
                        name: "Москва"
                    },
                    {
                        id: 3,
                        name: "Краснодар"
                    },
                    {
                        id: 4,
                        name: "Сочи"
                    },
                    {
                        id: 5,
                        name: "Архангельск"
                    }
                ],
                receiveStation: {id: '', name: ''},
                currentValue: {id: "", name: ""},
                filteredArr: [],
                flag: false,
                startWidget: false,

            }
        },
        watch: {



            currentValue: function (val) {
                if (val.length < 2) return;

                const filterArray = this.city.filter(station => this.checkStation(val, station));
                if (filterArray.length == 1) {
                    this.receiveStation = filterArray[0];
                    this.filteredStations = null;
                    return;
                }
                this.filteredArr = filterArray;
            }

        },

        components: {Button, Input},
        methods: {

            handlePvzButtonClick: function () {

                if(this.flag) {
                    new ISDEKWidjet({
                        defaultCity: this.receiveStation.name,
                        country: 'Россия',
                        link: 'forpvz',
                        path: 'https://www.cdek.ru/website/edostavka/template/scripts/',

                    })
                    this.startWidget=true;

                }

            },
            checkStation: function (patt, station) {
                const regexp = new RegExp(patt, "i");
                return regexp.test(station.code) || regexp.test(station.name);
            },
            onCityChange(e) {
                const value = e.target.value
                this.currentValue = value
                console.log(this.filteredArr)

                return function () {
                    return value
                }
            }

    },

    }
</script>

<style scoped>
    datalist {
        display: block !important;
    }

    .form {
        display: grid;
        grid-row-gap: 20px;

    }

    #cityList {

    }

    #cityList > option {

    }

    #transfer {
        display: grid;
        grid-row-gap: 20px;

    }

    label {
        width: 350px;

        -webkit-box-shadow: 0px 3px 10px 0px rgba(148, 148, 148, 1);
        -moz-box-shadow: 0px 3px 10px 0px rgba(148, 148, 148, 1);
        box-shadow: 0px 3px 10px 0px rgba(148, 148, 148, 1);
        box-sizing: border-box;
        border-radius: 4px;
        border-bottom: 1px solid lightgray;
        padding: 13px;
        cursor: pointer;
        text-align: start;
        font-size:1.3em;
        font-weight: bold;
    }
    #forpvz{
        width:60%;
        height:500px;


    }
    .dangerous{
        font-weight:bolder;
        font-size:1.3em;

    }
</style>
