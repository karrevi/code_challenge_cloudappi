<template>
  <div>
    <ListStyle>
      <Card
        v-for="user in users"
        :key="user.id"
        :item="user.id"
        :user="user.name"
        :email="user.email"
      ></Card>
    </ListStyle>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from '../Card/Card'
import { ListStyle } from './ListStyle'

export default {
  name: 'List',
  components: {
    Card,
    ListStyle
  },
  mounted () {
    this.LOAD_USERS()
  },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['LOAD_USERS'])
  }
}
</script>
