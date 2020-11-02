<template>
  <title-content>
    {{ title }}
    <p>{{ subtitle }}</p>
  </title-content>
</template>

<script>
import { TitleContent } from './style'

export default {
  name: 'Title',
  components: {
    TitleContent
  },
  props: {
    title: String,
    subtitle: String
  }
}
</script>
