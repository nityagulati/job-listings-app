<template>
<div>
    <div 
      class="job-card item-box"
      :class="listing.featured ? 'featured' : ''"
      v-for="listing in this.listings" 
      :key="listing.id"
    >
        <img class="job-card__logo" :src="getLogo(listing.logo)" alt="company logo">
        <div class="job-card__info">
            <div class="job-card__company">
                <span>{{listing.company}}</span>
                <span class="callout callout--new" v-if="listing.new">NEW!</span>
                <span class="callout callout--feat" v-if="listing.featured">FEATURED</span>
            </div>
            <p class="job-card__position">{{listing.position}}</p>
            <div class="job-card__details">
                <span>{{listing.postedAt}}</span>
                <span class="dot">.</span>
                <span>{{listing.contract}}</span>
                <span class="dot">.</span>
                <span>{{listing.location}}</span>
            </div>
        </div>
        <div class="job-card__tags">
            <span
              class="tag"
              :class="{active: isTagActive(tag)}"
              v-for="tag in [listing.role, listing.level, ...listing.languages, ...listing.tools]"
              :key="tag"
              @click.stop="addTag(tag)"
            >
              {{tag}}
            </span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'job-listing',
    emit: ['addTag'],
    props: {
        listings: Object,
        filterTags: Array
    },
    methods: {
        getLogo: function(logo) {
            return require('@/assets/images/' + logo)
        },
        addTag(tag) {
            this.$emit('addTag', tag)
        },
        isTagActive(tag) {
            return this.filterTags.includes(tag)
        }
    },
}
</script>