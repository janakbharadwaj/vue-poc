<template>
  <div>
    <app-header></app-header>
    <div class="updaterestro-parent">
      <div class="updaterestro" v-if="!resStatus">
        <h1>Update Restaurant here !</h1>
        <input type="text" placeholder="restaurant name" v-model="resName" required/>
        <input type="text" placeholder="contact" v-model="resContact" required/>
        <input type="text" placeholder="address" v-model="resAddress" required/>
        <button v-on:click="updateRestro">update restaurant</button>
      </div>
      <div v-if="resStatus" class="updaterestro">
        <h2>successfully updated restaurant </h2>
        <button v-on:click="goBack">back</button>
      </div>
    </div>
  </div>
</template>

<script>
import header from "./header.vue"
import axios from "axios"

export default {
  data(){
    return{
      resName:"",
      resContact:"",
      resAddress:"",
      resStatus:false,
      id:this.$route.params.id
    }
  },
  components:{
    'app-header':header
  },
  methods:{
    async updateRestro(){
      //console.log(this.resName, this.resContact, this.resAddress)
      let res = await axios.patch(`http://localhost:3000/restaurants/${this.id}`,{
        name:this.resName,
        contact:this.resContact,
        address:this.resAddress
      })
      this.resStatus = true
      //console.log(res)
      if(res.status == 201){
        this.$router.push({name:"home"})
      }else{
        this.resStatus = "adding new restaurant failed !!"
      }
    },
    goBack(){
      this.$router.push({name:"singleRestro"})
    }
  },
  async created(){
    let data = await axios.get(`http://localhost:3000/restaurants/${this.id}`)
    //console.log(data.data);
    this.resName = data.data.name
    this.resContact = data.data.contact
    this.resAddress = data.data.address
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .updaterestro-parent{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .updaterestro{
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

  .updaterestro>input{
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

  .updaterestro>input:hover{
    border-bottom: 2px solid rgb(182,66,57);
  }

  .updaterestro>button{
    width: 30%;
    background-color: white;
    color: rgb(182,66,57);
    padding: 14px 20px;
    margin: 8px 0;
    border: 1px solid rgb(182,66,57);
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    transition: all 0.5s linear;
  }

  .updaterestro>button:hover{
    background-color: rgb(182,66,57);
    color: rgb(233, 225, 225);
  }
</style>
