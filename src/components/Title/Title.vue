<template>
  <title-content>
    <h2>{{ title }}</h2>
    <h5>{{ subtitle }}</h5>
    <p>{{ textfooter }}</p>
  </title-content>
</template>

<script>
import { TitleContent } from './TitleStyle'

export default {
  name: 'Title',
  components: {
    TitleContent
  },
  props: {
    title: String,
    subtitle: String,
    textfooter: String
  }
}
</script>
