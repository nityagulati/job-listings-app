<template>
<div>
  <AppHeader />
  <FilterBar 
    v-show="isListFiltered"
    :filterTags="filterTags" 
    @removeTag="removeTag" 
    @clearFilters="clearFilters" 
  />
  <main class="main" :class="{filtered: isListFiltered}">
    <JobListing :listings="listings" @addTag="addTag" />
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
    this.sortListings()
  },
  computed: {
    isListFiltered() {
      return this.filterTags.length
    }
  },
  methods: {
    addTag(tag) {
      if(this.filterTags.indexOf(tag) == -1 ) {
        this.filterTags.push(tag)
      }
    },
    removeTag(index) {
      this.filterTags.splice(index, 1)
    },
    getListings() {
      this.listings = this.initialData.slice()
      let filteredListings = this.listings.filter((job) => {
        const tags = [job.level, job.role].concat(job.tools, job.languages)
        return this.filterTags.every(i => tags.includes(i))
      })
      this.listings = filteredListings
      this.sortListings()
    },
    sortListings() {
      this.listings.sort((a, b) => b.featured - a.featured || b.new - a.new)
    },
    clearFilters() {
      this.filterTags = []
    }
  },
  watch: {
    isListFiltered: function() {
      this.getListings()
    }
  },
}
</script>

<style lang="scss">

</style>
