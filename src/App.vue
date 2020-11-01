<template>
  <div id="app">
    <Header />
    <List />
  </div>
</template>

<script>
import List from './components/List.vue'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    List,
    Header
  }
}
</script>
