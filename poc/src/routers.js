import home from "./components/home.vue"
import signUp from "./components/signUp.vue"
import login from "./components/login.vue"
import addRestro from "./components/addRestro.vue"
import updateRestro from "./components/updateRestro.vue"
import singleRestro from "./components/singleRestro.vue"


export default[
    {name:"home", path:'/', component:home},
    {name:"signUp", path:'/sign-up', component:signUp},
    {name:"login", path:'/login', component:login},
    {name:"addRestro", path:'/addRestro', component:addRestro},
    {name:"updateRestro", path:'/updateRestro/:id', component:updateRestro},
    {name:"singleRestro", path:'/singleRestro/:id', component:singleRestro}
]
