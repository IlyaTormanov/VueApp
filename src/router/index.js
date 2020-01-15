import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/Login'
import Transfer from "@/components/Transfer";
import Registration from "@/components/Registration";
import MainLayout from "@/components/MainLayout";
import App from "@/App";
import Welcome from "@/components/Welcome";

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [


        {
            path: "/",
            redirect:"login",
            component: MainLayout,
            children:[
                {
                    path: "hello",
                    name: "Welcome",
                    component: Welcome
                },
                {
                    path: "login",
                    name: "Login",
                    component: Login


                },
                {
                    path: "registr",
                    name: "Registration",
                    component: Registration
                },

                {

                    path: "transfer",
                    name: "Transfer",
                    component: Transfer
                }
            ]

        },



    ]
})
