<template>
  <card-wrapper>
    <div class="mt-5">
      <b-card
        img-src="https://image.flaticon.com/icons/svg/164/164641.svg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 17rem"
        class="mb-2"
      >
        <h3>{{ item }}</h3>
        <b-card-text>
          <h2>{{ user }}</h2>
          <p>{{ email }}</p>
        </b-card-text>
      </b-card>
    </div>
  </card-wrapper>
</template>

<script>
import { CardWrapper } from './CardStyle'

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
