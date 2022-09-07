<template>
<div>
  <AppHeader />
  <FilterBar :filterTags="filterTags" />
  <main class="main">
    <JobListing :listings="listings" @getListings="getListings" />
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
      initialData: Array.from(json.listings),
      listings: null,
      filterTags: []
    }
  },
  created() {
    this.listings = this.initialData.slice()
  },
  methods: {
    getListings(tag) {
      if(this.filterTags.indexOf(tag) == -1 ) {
        this.filterTags.push(tag)
      }
      let filteredListings = this.listings.filter((job) => {
        const tags = [job.level, job.role].concat(job.tools, job.languages)
        return this.filterTags.every(i => tags.includes(i))
      })
      this.listings = filteredListings
    },
  }
}
</script>

<style lang="scss">

</style>
