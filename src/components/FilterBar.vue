<template>
    <div class="filter-bar item-box">
        <div class="tag-container">
            <span 
              class="tag filter-tag"
              v-for="(tag, index) in this.filterTags" 
              :key=index 
            >
              {{tag}} 
            </span>
        </div>
        <a href="" class="filter-clear">Clear</a>
    </div>
</template>

<script>
export default {
    name: 'filter-bar',
    props: {
        filterTags: Array
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
}

span.tag.filter-tag {
    cursor: default;
}
     
</style>