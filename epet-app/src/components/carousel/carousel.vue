<template>
  <div class="carousel" v-if="homeData">
    <mt-swipe :auto="2500" >
      <mt-swipe-item v-for="(good,index) in homeData.datas[0].value">
        <img :src="good.image" >
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  //import { Swipe } from 'mint-ui'
  export default {
    props:{
      homeData:Object
    },
    components:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .carousel
    width 100%
    height 160px
    img
      width 100%
</style>
