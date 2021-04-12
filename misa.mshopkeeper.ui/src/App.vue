<template>
  <div id="app">
    <Navbar></Navbar>
    <Header></Header>
    <Content></Content>

  </div>
</template>

<script>
import Content from './components/layout/Content.vue'
import Header from './components/layout/Header.vue'
import Navbar from './components/layout/Navbar.vue'
export default {
  components: { Content, Navbar,Header },

}
</script>

<style>
#app{
   font-family: roboto,Tahoma,sans-serif!important;
    font-size: 13px;
   
}

@import 'styles/setup/index.css';

@import 'assets/font/fontawesome/fontawesome/css/fontawesome.css';
@import 'assets/font/fontawesome/fontawesome/css/brands.css';
@import 'assets/font/fontawesome/fontawesome/css/solid.css';


</style>