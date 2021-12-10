<template>
  <AppHeader />
  <div class="main">
    <JobListing />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import JobListing from './components/JobListing.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    JobListing
  }
}
</script>

<style lang="scss">

</style>
