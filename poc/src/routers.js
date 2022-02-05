import home from "./components/home.vue"
import signUp from "./components/signUp.vue"
import login from "./components/login.vue"
import addRestro from "./components/addRestro.vue"
import updateRestro from "./components/updateRestro.vue"
import singleRestro from "./components/singleRestro.vue"
import mainPage from "./components/mainPage.vue"


export default[
    {name:"mainPage", path:'/',component:mainPage},
    {name:"home", path:'/home', component:home},
    {name:"signUp", path:'/sign-up', component:signUp},
    {name:"login", path:'/login', component:login},
    {name:"addRestro", path:'/addRestro', component:addRestro},
    {name:"updateRestro", path:'/updateRestro/:id', component:updateRestro},
    {name:"singleRestro", path:'/singleRestro/:id', component:singleRestro}
]
