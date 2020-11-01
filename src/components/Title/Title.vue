<template>
  <title-content>{{ title }}</title-content>
</template>

<script>
import { TitleContent } from './style'

export default {
  name: 'Title',
  components: {
    TitleContent
  },
  props: {
    title: String
  }
}
</script>

<style>
</style>
