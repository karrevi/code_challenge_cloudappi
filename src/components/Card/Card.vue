<template>
  <card-wrapper>
    <li>
      <h2>{{ item }}</h2>
      <h3>{{ user }}</h3>
      <p>{{ email }}</p>
    </li>
  </card-wrapper>
</template>

<script>
import { CardWrapper } from './style'

export default {
  name: 'Card',
  components: {
    CardWrapper
  },
  props: {
    item: Number,
    email: String,
    user: String
  }
}
</script>
