<template>
<div>
     <Card v-for="user in users" :key="user.id" :item= user.id :user= user.name :email= user.email></Card>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from './Card/Card'

export default {
  name: 'List',
  components: {
    Card
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
