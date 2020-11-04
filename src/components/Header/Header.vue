<template>
  <header-style>
    <Title title="Lista de Usuarios" subtitle="Code Challenge CloudAppi" />
  </header-style>
</template>

<script>
import { HeaderStyle } from './HeaderStyle'
import Title from '../Title/Title'

export default {
  name: 'Header',
  components: {
    HeaderStyle,
    Title
  },
  props: {
    title: String,
    subtitle: String
  }
}
</script>
