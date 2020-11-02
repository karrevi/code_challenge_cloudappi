<template>
  <div id="app">
    <Header />
    <List />
    <Card />
    <Footer />
  </div>
</template>

<script>
import List from './components/List.vue'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Card from './components/Card/Card'

export default {
  name: 'App',
  components: {
    List,
    Card,
    Header,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
body {
  width: 90%;
  margin: 20px auto;
  max-width: 1000px;
  background: #ffffff;
  font-family: "Helvetica", sans-serif;
  color: #333333;
}
</style>
