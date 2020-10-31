<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}
        {{ user.name }}
        {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'List',
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
