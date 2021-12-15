<template>
  <AppHeader />
  <FilterBar />
  <main class="main">
    <JobListing />
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import FilterBar from './components/FilterBar.vue'
import JobListing from './components/JobListing.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    FilterBar,
    JobListing
  }
}
</script>

<style lang="scss">

</style>
