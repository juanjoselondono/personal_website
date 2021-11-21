<template>
  <div class="404" id="container">
      <h1 class="text">404</h1>
      <p style="color:white">The page that you were looking for does not exists<br>Go back to <a href="/">Home</a></p>
      <img class="image" src="../../public/assets/images/404Astro.png" alt="">
  </div>
</template>
<style scoped>
    #container{
        width: 100%;
        height: 100%;
    }
    .text{
        font-size: 10em;
        color: white;
    }
    .image{
        padding: 5px;
        width: 30vh;
        -webkit-box-shadow: 5px 5px 40px 5px #000000; 
        box-shadow: 5px 5px 40px 5px #000000;
        animation:Astronaut 5s infinite;
        margin-bottom: 5%;
        border-radius: 150px;
    }
    @keyframes Astronaut {
    0%   {background-color: white;}
    25%  {background-color: gray;}
    50%  {background-color: rgb(36, 36, 36);}
    100% {background-color: black;}
    }
</style>
<script>
export default {
    name:'NotFound'
}
</script>