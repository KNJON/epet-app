<template>
  <div class="homeWrap">

    <epet-header :homeData="homeData"/>

    <epet-content :homeData="homeData"/>

  </div>
</template>

<script>
  import header from '../../components/header/header.vue'
//  import BScroll from 'better-scroll'
  import nav from '../../components/nav/nav.vue'
  import carousel from '../../components/carousel/carousel.vue'
  import content from '../../components/content/content.vue'
  import split from '../../components/split/split.vue'

  import {mapState} from 'vuex'
  export default {
    components: {
      'epet-header': header,
      'epet-nav': nav,
      'epet-content': content,
      'epet-carousel': carousel,
      'epet-split': split
    },
    mounted(){
//      new BScroll(this.$refs.homeScroll, {
//        click:true
//      })
    },
    computed:{
      ...mapState(['homeData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homeWrap
    height 100%
    padding-bottom 45px
    padding-top 92px
</style>
