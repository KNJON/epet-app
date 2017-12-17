<template>
  <div id="app">
    <epet-header/>

    <epet-carousel/>

    <epet-content/>

  </div>
</template>

<script>
  import header from '../../components/header/header.vue'

  import nav from '../../components/nav/nav.vue'
  import carousel from '../../components/carousel/carousel.vue'
  import content from '../../components/content/content.vue'
  import split from '../../components/split/split.vue'
  export default {
    components: {
      'epet-header': header,
      'epet-nav': nav,
      'epet-content': content,
      'epet-carousel': carousel,
      'epet-split': split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    min-height 100%
    padding-bottom 45px
    padding-top 50px
</style>
