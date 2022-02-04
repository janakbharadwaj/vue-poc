<template>
  <div class="signup-parent">
        <div class="signup">
            <h2>Sign-Up</h2>
            <input type="text" v-model="name" placeholder="name"/>
            <input type="text" v-model="email" placeholder="email"/>
            <input type="password" v-model="password" placeholder="password"/>
            <button v-on:click="signUp"><router-link to='/login'>sign-Up</router-link></button>
            <p>
                <router-link to='/login'>Existing User - Login</router-link>
            </p>
        </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
    data(){
        return{
            name:"",
            email:"",
            password:""
        }
    },
    methods:{
        async signUp(){
            var res = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            })
            console.log(res.data)
            if(res.status==201){
                localStorage.setItem("user-info",JSON.stringify(res.data))
                //this.$router.push({name:"home"})
            }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .signup-parent{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px auto;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .signup{
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

    .signup>input{
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

    .signup>input:hover{
        border-bottom: 2px solid rgb(182,66,57);
    }

    .signup>button{
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
    }

    .signup>button:hover{
        background-color: rgb(182,66,57);
        color: rgb(233, 225, 225);
    }

    a{
        text-decoration: none;
        color: rgb(182,66,57);
        font-size: 15px;
    }

    .signup>button:hover a{
        color: white;
    }
</style>
