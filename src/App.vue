<template>
  <div id="app">
    <Header />
    <Title title="Lista de Usuarios" />
    <List />
    <Card />
    <Footer />
  </div>
</template>

<script>
import List from './components/List.vue'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Title from './components/Title/Title'

export default {
  name: 'App',
  components: {
    List,
    Card,
    Title,
    Header,
    Footer
  }
}
</script>

<style>
body,
ul,
#app {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
</style>
