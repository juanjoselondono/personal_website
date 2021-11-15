<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" >
    <b-navbar-brand href="#">Juan José Londoño David</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/"><b-nav-item href="/" active>Home</b-nav-item></router-link>
        <router-link to="/projects"><b-nav-item href="/about">Projects</b-nav-item></router-link>
        <b-nav-item href="#">Music</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style scoped>
 a{
   text-decoration: none;
 }
</style>
<script>
export default {
  name: 'Navbar'
}
</script>
