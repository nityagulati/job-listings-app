(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],g=0,d=[];g<s.length;g++)r=s[g],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var l=o[s];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/job-listings-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},2655:function(e,t,o){e.exports=o.p+"img/icon-remove.ae67c678.svg"},"318f":function(e,t,o){e.exports=o.p+"img/faceit.76faa79f.svg"},"4b8b":function(e,t,o){e.exports=o.p+"img/bg-header-mobile.6b5ff5a0.svg"},"4baa":function(e){e.exports=JSON.parse('{"listings":[{"id":1,"company":"Photosnap","logo":"photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]}')},"4c1e":function(e,t,o){e.exports=o.p+"img/myhome.e0ad9358.svg"},"52cf":function(e,t,o){e.exports=o.p+"img/photosnap.3f34b49c.svg"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23");function a(e,t,o,a,i,r){var s=Object(n["k"])("AppHeader"),l=Object(n["k"])("FilterBar"),c=Object(n["k"])("JobListing");return Object(n["i"])(),Object(n["d"])("div",null,[Object(n["g"])(s),Object(n["n"])(Object(n["g"])(l,{filterTags:i.filterTags,onRemoveTag:r.removeTag,onClearFilters:r.clearFilters},null,8,["filterTags","onRemoveTag","onClearFilters"]),[[n["m"],r.isListFiltered]]),Object(n["e"])("main",{class:Object(n["h"])(["main",{filtered:r.isListFiltered}])},[Object(n["g"])(c,{listings:i.listings,onAddTag:r.addTag,filterTags:i.filterTags},null,8,["listings","onAddTag","filterTags"])],2)])}o("a630"),o("3ca3"),o("fb6a"),o("a434"),o("4de4"),o("99af"),o("caad"),o("2532"),o("4e82");var i={class:"header"};function r(e,t,o,a,r,s){return Object(n["i"])(),Object(n["d"])("div",i)}var s={name:"app-header"};o("b855");s.render=r;var l=s,c={class:"filter-bar item-box"},u={class:"tag-container"},g=["onClick"];function d(e,t,o,a,i,r){return Object(n["i"])(),Object(n["d"])("div",c,[Object(n["e"])("div",u,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["j"])(this.filterTags,(function(e,t){return Object(n["i"])(),Object(n["d"])("span",{class:"tag filter-tag",key:t},[Object(n["f"])(Object(n["l"])(e)+" ",1),Object(n["e"])("span",{class:"tag--close",onClick:Object(n["o"])((function(e){return r.removeTag(t)}),["stop"])},"X",8,g)])})),128))]),Object(n["e"])("span",{class:"filter-clear",onClick:t[0]||(t[0]=Object(n["o"])((function(){return r.clearFilters&&r.clearFilters.apply(r,arguments)}),["stop"]))},"Clear")])}var f={name:"filter-bar",emits:["removeTag","clearFilters"],props:{filterTags:Array},methods:{removeTag:function(e){return this.$emit("removeTag",e)},clearFilters:function(){return this.$emit("clearFilters")}}};f.render=d;var p=f,A=o("2909"),b=["src"],v={class:"job-card__info"},O={class:"job-card__company"},j={key:0,class:"callout callout--new"},m={key:1,class:"callout callout--feat"},h={class:"job-card__position"},y={class:"job-card__details"},T=Object(n["e"])("span",{class:"dot"},".",-1),F=Object(n["e"])("span",{class:"dot"},".",-1),w={class:"job-card__tags"},S=["onClick"];function x(e,t,o,a,i,r){return Object(n["i"])(),Object(n["d"])("div",null,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["j"])(this.listings,(function(e){return Object(n["i"])(),Object(n["d"])("div",{class:Object(n["h"])(["job-card item-box",e.featured?"featured":""]),key:e.id},[Object(n["e"])("img",{class:"job-card__logo",src:r.getLogo(e.logo),alt:"company logo"},null,8,b),Object(n["e"])("div",v,[Object(n["e"])("div",O,[Object(n["e"])("span",null,Object(n["l"])(e.company),1),e.new?(Object(n["i"])(),Object(n["d"])("span",j,"NEW!")):Object(n["c"])("",!0),e.featured?(Object(n["i"])(),Object(n["d"])("span",m,"FEATURED")):Object(n["c"])("",!0)]),Object(n["e"])("p",h,Object(n["l"])(e.position),1),Object(n["e"])("div",y,[Object(n["e"])("span",null,Object(n["l"])(e.postedAt),1),T,Object(n["e"])("span",null,Object(n["l"])(e.contract),1),F,Object(n["e"])("span",null,Object(n["l"])(e.location),1)])]),Object(n["e"])("div",w,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["j"])([e.role,e.level].concat(Object(A["a"])(e.languages),Object(A["a"])(e.tools)),(function(e){return Object(n["i"])(),Object(n["d"])("span",{class:Object(n["h"])(["tag",{active:r.isTagActive(e)}]),key:e,onClick:Object(n["o"])((function(t){return r.addTag(e)}),["stop"])},Object(n["l"])(e),11,S)})),128))])],2)})),128))])}var k={name:"job-listing",emit:["addTag"],props:{listings:Object,filterTags:Array},methods:{getLogo:function(e){return o("7584")("./"+e)},addTag:function(e){this.$emit("addTag",e)},isTagActive:function(e){return this.filterTags.includes(e)}}};k.render=x;var E=k,D=o("4baa"),C={name:"App",components:{AppHeader:l,FilterBar:p,JobListing:E},data:function(){return{initialData:Array.from(D.listings),listings:null,filterTags:[]}},created:function(){this.listings=this.initialData.slice(),this.sortListings()},computed:{isListFiltered:function(){return this.filterTags.length}},methods:{addTag:function(e){-1==this.filterTags.indexOf(e)&&this.filterTags.push(e)},removeTag:function(e){this.filterTags.splice(e,1)},getListings:function(){var e=this;this.listings=this.initialData.slice();var t=this.listings.filter((function(t){var o=[t.level,t.role].concat(t.tools,t.languages);return e.filterTags.every((function(e){return o.includes(e)}))}));this.listings=t,this.sortListings()},sortListings:function(){this.listings.sort((function(e,t){return t.featured-e.featured||t.new-e.new}))},clearFilters:function(){this.filterTags=[]}},watch:{isListFiltered:function(){this.getListings()}}};C.render=a;var M=C;Object(n["b"])(M).mount("#app")},"57a5":function(e,t,o){e.exports=o.p+"img/the-air-filter-company.23b515f9.svg"},6518:function(e,t,o){e.exports=o.p+"img/eyecam-co.39eaebdf.svg"},"6d8a":function(e,t,o){e.exports=o.p+"img/account.9f72c13b.svg"},7584:function(e,t,o){var n={"./account.svg":"6d8a","./bg-header-desktop.svg":"f898","./bg-header-mobile.svg":"4b8b","./eyecam-co.svg":"6518","./faceit.svg":"318f","./favicon-32x32.png":"f245","./icon-remove.svg":"2655","./insure.svg":"9b7a","./loop-studios.svg":"7ab7","./manage.svg":"d8b4","./myhome.svg":"4c1e","./photosnap.svg":"52cf","./shortly.svg":"ba15","./the-air-filter-company.svg":"57a5"};function a(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="7584"},"762d":function(e,t,o){},"7ab7":function(e,t,o){e.exports=o.p+"img/loop-studios.6c50fd74.svg"},"9b7a":function(e,t,o){e.exports=o.p+"img/insure.52b85a50.svg"},b855:function(e,t,o){"use strict";o("762d")},ba15:function(e,t,o){e.exports=o.p+"img/shortly.45f63772.svg"},d8b4:function(e,t,o){e.exports=o.p+"img/manage.fbe431a9.svg"},f245:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABO1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////l9Pff8fS54ein2eOn2eL9/v684unr9vj7/f7c8PSl2eKHzNil2OLv+Prz+vue1eB3xdOq2uPm9Pf29/vy8/n3/Py13+eEyteZ097P6u/2+/zByeKOm8r8/f7u+Pq+4+qOz9uU0dzo9fjb4O5meLbh5fH0+vvV7fHx+fv8/P2Gk8Wbps+44eim2eLW2+xkdrXO1Oit3OWttthperja3u7u+Pn6+/2hrNJneLfFy+P7+/23v92IlcbN0ufx8/nj5/Kbp9BsfbltfrqAj8ORnsvg5PD+/v/v8ffQ1em0vduqtNfn6vS/61TcAAAAHHRSTlMAAAQqbK3Z8v0DN5ff+xqJ6jbC/kHBAjjp3qz8qSKHsgAAAAFiS0dEAf8CLd4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiChMPAx5FOtlkAAABSUlEQVQ4y4WTZ2OCMBCGc4IMEXAPjB10771t7dLuXbv3/v+/oNigIYjN+4HcJU9CcgMhVxASxLAkK4oshUUhBIgVqBEtqmNXelSLqF4EwDBjmFHMNADoejyRxD4lE/EGAZCScICkFCGc/YHrDkHOACON2yhtOABkTNxWZgYQZHPeqWKH18tlAakas6ezi3E1FQl5Fuhm3LyARD0AsIs9vSSmIrJwC9DXPzA4NEx8C0ktwMjo2PiE3YgFkokxOdUEpmdm5+YXXEBGCjEWl5bpHVZKq2tlMq+gAjHWNza9r9jarpD5QuMX1Z3dv3Fvn72T3LzkweFRfSgd+xJGn3lyeuZ8K+csYNFAXVzWrqr+bDmBoqG+vqnd3t3bDOCE2push8en55fXNzZZTLrfPz6/vn+oX083t2C4JccvWm7Z8xuH33r85v2v/X8Bp/FiyVLnL/0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTAtMTlUMTU6MDM6MzArMDI6MDCzEaEaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEwLTE5VDE1OjAzOjMwKzAyOjAwwkwZpgAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="},f898:function(e,t,o){e.exports=o.p+"img/bg-header-desktop.6e2f7196.svg"}});
//# sourceMappingURL=app.5ce1d678.js.map