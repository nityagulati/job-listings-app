<template>
  <Header />
  <div class="main">
    <JobListing />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import JobListing from './components/JobListing.vue'

export default {
  name: 'App',
  components: {
    Header,
    JobListing
  }
}
</script>

<style lang="scss">

</style>
