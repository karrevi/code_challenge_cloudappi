<template>
  <div id="app">
    <Header />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    List,
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
body {
  background: #ffffff;
  color: #333333;
}
</style>
