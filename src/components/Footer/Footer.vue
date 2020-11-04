<template>
  <designFooter>
    <Title textfooter="Creado por Carlos Revilla" />
  </designFooter>
</template>

<script>
import Title from '../Title/Title'
import { designFooter } from './FooterStyle'

export default {
  name: 'Footer',
  components: {
    Title,
    designFooter
  },
  props: {
    textfooter: String
  }
}
</script>
