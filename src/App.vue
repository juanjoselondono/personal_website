<template>
  <div id="app">
    <vue-particles 
      color="#dedede"
      style="position:fixed;width:100%;height:100%"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
    ></vue-particles>
    <div style="position:relative">
      <Navbar/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
#app {
  font-family: 'Raleway', sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  color:white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #273033;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
a{
  text-decoration: none !important
}
</style>
