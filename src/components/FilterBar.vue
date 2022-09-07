<template>
    <div class="filter-bar item-box">
        <div class="tag-container">
            <span 
              class="tag filter-tag"
              v-for="(tag, index) in this.filterTags" 
              :key=index 
            >
              {{tag}}
              <span class="tag--close" @click.stop="removeTag(index)">X</span>
            </span>
        </div>
        <span class="filter-clear" @click.stop="clearFilters">Clear</span>
    </div>
</template>

<script>
export default {
    name: 'filter-bar',
    emits: ['removeTag', 'clearFilters'],
    props: {
        filterTags: Array
    },
    methods: {
        removeTag(index) {
            return this.$emit('removeTag', index)
        },
        clearFilters() {
            return this.$emit('clearFilters')
        }
    }
}
</script>