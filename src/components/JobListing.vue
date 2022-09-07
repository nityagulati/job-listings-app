<template>
<div>
    <div class="job-card item-box" v-for="listing in this.listings" :key="listing.id">
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
              @click.stop="getListings(listing.role)"
            >
              {{listing.role}}
            </span>
            <span 
              @click.stop="getListings(listing.level)"
            >
              {{listing.level}}
            </span>
            <span 
              @click.stop="getListings(language)" 
              v-for="(language, index) in listing.languages" 
              :key="index"
            >
              {{language}}
            </span>
            <span 
              @click.stop="getListings(tool)" 
              v-for="(tool, index) in listing.tools" 
              :key="index"
            >
              {{tool}}
            </span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'job-listing',
    emit: ['getListings'],
    props: {
        listings: Object,
    },
    methods: {
        getLogo: function(logo) {
            return require('@/assets/images/' + logo)
        },
        getListings(tag) {
            this.$emit('getListings', tag)
        }
    },
}
</script>