<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" >
    <b-navbar-brand href="#">Juan José Londoño David</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/"><b-nav-item href="/">Home</b-nav-item></router-link>
        <router-link to="/projects"><b-nav-item href="/about">Projects</b-nav-item></router-link>
        <b-nav-item href="https://shore-tarp-c78.notion.site/Juan-Londo-o-Blog-c486d75ed31e4223ac84f0b819fd9119">Blog</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style scoped>
 a{
   text-decoration: none;
 }
 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   cursor: pointer;
   transition: 100ms;
   color: white;
 }

</style>
<script>
export default {
  name: 'Navbar'
}
</script>
