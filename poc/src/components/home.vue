<template>
  <div>
    <app-header></app-header>
    <h1>Hey {{name}}, Welcome !!!</h1>
    <div class="parentDiv">
      <div v-for="item in restaurants" v-bind:key="item.id" class="singlerestroDiv">
        <h2><router-link v-bind:to="'/singleRestro/'+item.id">{{item.name}}</router-link></h2>
        <button v-on:click="deleteRestro(item.id)">delete</button>
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
        name:"",
        restaurants:[]
      }
  },
  components:{
    'app-header':header
  },
  methods:{
    deleteRestro(id){
      //console.log("delete",id);
      axios.delete(`http://localhost:3000/restaurants/${id}`)
      this.loadData()
    },
    async loadData(){
      let user = localStorage.getItem("user-info");
        //console.log("name " , JSON.parse(user)[0].name)
        this.name = JSON.parse(user)[0].name
      if(!user){
        this.$router.push({name:"signUp"})
      }
      let res = await axios.get("http://localhost:3000/restaurants");
      //console.log(res.data)
      this.restaurants = res.data
    }
  },
  mounted(){
    this.loadData()
  }
}
</script>

 
<style scoped>
  
  h1{
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .parentDiv {
    border: 1px dotted rgb(231, 111, 111);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-flow: wrap;
    margin: 10px auto;
    width: 80%;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .singlerestroDiv{
    width: 30%;
    margin: 10px auto;
    background-color: rgb(182,66,57);
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s linear;
    cursor: pointer;
  }

  .singlerestroDiv>button{
    display: none;
    transition: all 0.5s linear;
    font-size: 15px;
    background-color: rgb(182,66,57);
    outline: none;
    /* border: 1px dotted rgb(182,66,57); */
    border-radius: 5px;
    border: 0;
    padding: 5px 10px;
    color: whitesmoke;
    cursor: pointer;
  }

  .singlerestroDiv:hover{
    background-color: rgb(252, 250, 249);
    color: black;
    transition: all 0.5s linear;
  }

  .singlerestroDiv:hover button{
    display: inline;
  }

  .singlerestroDiv h2 a{
    text-decoration: none;
    color: white;
    transition: all 0.5s linear;
  }

  .singlerestroDiv:hover a{
    color: rgb(182,66,57);
    transition: all 0.5s linear;
  }
</style>
