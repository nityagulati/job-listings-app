<template>
<div>
    <div class="job-card item-box" v-for="listing in listings" :key="listing.id">
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
            <span>{{listing.role}}</span>
            <span>{{listing.level}}</span>
            <span v-for="(language, index) in listing.languages" :key="index">{{language}}</span>
            <span v-for="(tool, index) in listing.tools" :key="index">{{tool}}</span>
        </div>
    </div>
</div>
</template>

<script>
import json from "@/assets/files/listings.json"

export default {
    name: 'job-listing',   
    data() {
        return {
            listings: json.listings,
        }
    },
    methods: {
        getLogo: function(logo) {
            return require('@/assets/images/' + logo)
        }
    },
}
</script>