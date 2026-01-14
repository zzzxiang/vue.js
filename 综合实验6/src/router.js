import { createRouter,createWebHashHistory } from "vue-router";
import home from './component/home.vue'
import about from './component/about.vue'
import movie from './component/movie.vue'
import m from './component/m.vue'
const router =createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/home',component:home},
        {path:'/about',component:about},
        {path:'/movie',component:movie,
            children:[
                {path:':id',component:m}
            ]
        }
    ]
})
export default router