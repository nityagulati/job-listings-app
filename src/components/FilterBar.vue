<template>
    <div class="filter-bar item-box">
        <span class="filter-tag">{{filterTag}}</span>
        <a href="" class="filter-clear">Clear</a>
    </div>
</template>

<script>
export default {
    name: 'filter-bar',
    data() {
        return {

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
}
     
</style>