<template>
  <div id="app">
    <Header />
    <List />
    <Footer />
  </div>
</template>

<script>
import List from './components/List.vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    List,
    Header,
    Footer
  }
}
</script>
