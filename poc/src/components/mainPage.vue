<template>
  <div class="mainPage">
    <h1>Welcome User</h1>
    <div class="buttonsDiv">
        <button><router-link to="/sign-up"> User Sign-Up</router-link></button>
        <button><router-link to="/login">Existing User Login</router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mainPage{
        margin: 100px auto;
        border: 1px solid rgb(182,66,57);
        border-radius: 5px;
        width: 50%;
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    button{
        width: 30%;
        background-color: white;
        color: rgb(182,66,57);
        padding: 14px 20px;
        margin: 15px;
        border: 1px solid rgb(182,66,57);
        border-radius: 4px;
        cursor: pointer;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        transition: all 0.5s linear;
        font-size: 15px;
    }

    button:hover{
        background-color: rgb(182,66,57);
        color: rgb(233, 225, 225);
    }

    a{
        text-decoration: none;
        color: rgb(182,66,57);
        font-size: 15px;
    }

    button:hover a{
        color: whitesmoke;
    }
</style>
