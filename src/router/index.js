import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Login from '@/components/Login'
import Transfer from "@/components/Transfer";
import Registration from "@/components/Registration";

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[

        {
            path:"/registration",
            name:"Registration",
            component:Registration
        }
    ]
})
