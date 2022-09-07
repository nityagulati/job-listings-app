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

<style lang="scss">
.filter-bar {
    height: 120px;
    margin: -40px auto 40px;
    padding: 20px 40px;
    justify-content: space-between;
    align-items: center;

    @include mq($width-lg) {
        height: 72px;
    }
}

.filter-clear {
    color: #5CA5A5;
    font-size: 13px;
    cursor: pointer;
    text-decoration: underline;
}

span.tag.filter-tag {
    cursor: default;
    padding-right: 0;
}

.tag--close {
    background: #5CA5A5;
    color: #ffffff;
    height: inherit;
    padding: 8px;
    border-radius: 0 4px 4px 0;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
        background: #000000;
    }
}
     
</style>