<template>
  <div class="login-parent">
    <div class="login" v-if="userStatus">
        <h1>Login</h1>
        <input type="text" v-model="email" placeholder="email"/>
        <input type="password" v-model="password" placeholder="password"/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to='/sign-up'>New User - SignUp</router-link>
        </p>
    </div>
    <div v-if="!userStatus" class="login">
        <h2>invalid credentials or user dosen't exist</h2>
        <button v-on:click="tryAgain">Try Again</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name:"login",
    data(){
        return{
            email:"",
            password:"",
            userStatus:true
        }
    },
    methods:{
        async login(){
            let res = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            //console.log(res);
            if(res.status==200 && res.data.length>0){
                localStorage.setItem("user-info",JSON.stringify(res.data))
                this.$router.push({name:"home"})
            }else{
                this.userStatus = false
            }
        },
        tryAgain(){
            this.userStatus = true
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        if(user){
            this.$router.push({name:"home"})
        }
    }
}
</script>


<style scoped>
    .login-parent{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px auto;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .login{
        width: 60%;
        display: flex;
        border: 1px solid #9b1717;
        border-radius: 10px;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        color: rgb(0, 0, 0);
        text-align: center;
        padding: 10px 5px 20px 5px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .login>input{
        width: 50%;
        padding: 10px 0px;
        margin: 15px 0;
        display: inline-block;
        color: rgb(0, 0, 0);
        border: 0;
        border-bottom: 1px solid #ccc;
        outline: none;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 18px;
        text-align: center;
        transition: all 0.1s linear;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .login>input:hover{
        border-bottom: 2px solid rgb(182,66,57);
    }

    .login>button{
        width: 30%;
        background-color: white;
        color: rgb(182,66,57);
        padding: 14px 20px;
        margin: 8px 0;
        border: 1px solid rgb(182,66,57);
        border-radius: 4px;
        cursor: pointer;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        transition: all 0.5s linear;
        font-size: 15px;
    }

    .login>button:hover{
        background-color: rgb(182,66,57);
        color: rgb(233, 225, 225);
    }

    a{
        text-decoration: none;
        color: rgb(182,66,57);
        font-size: 15px;
    }
</style>
