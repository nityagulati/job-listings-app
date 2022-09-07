<template>
<div>
  <AppHeader />
  <FilterBar />
  <main class="main">
    <JobListing :listings="listings" />
  </main>
</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import FilterBar from './components/FilterBar.vue'
import JobListing from './components/JobListing.vue'
import json from "./assets/files/listings.json"

export default {
  name: 'App',
  components: {
    AppHeader,
    FilterBar,
    JobListing
  },
  data() {
    return {
      initialData: json.listings,
      listings: null,
      tag: null
    }
  },
  beforeMount() {
    this.listings = this.initialData.slice()
  },
}
</script>

<style lang="scss">

</style>
