<template>
  <div id="app">
    <Header />
    <List />
    <Card />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import List from './components/List/List'
import Footer from './components/Footer/Footer'

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
  box-sizing: border-box;
}
#app {
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
body {
  background: #ffffff;
  color: #333333;
}
</style>
