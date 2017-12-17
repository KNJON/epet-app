<template>
  <div id="app">

    <div class="fooder">
      <ul class="list">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/classify">分类</router-link>
        </li>
        <li>
          <router-link to="/shopcart">购物车</router-link>
        </li>
        <li>
          <router-link to="/personal">我的E宠</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('reqClassifyName')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fooder
    position fixed
    bottom 0px
    width 100%
    z-index 10
    height 45px
    background-color pink
    .list
      width 100%
      height 100%
      overflow hidden
      li
        width 25%
        height 100%
        float: left
        text-align center
        line-height 45px
        a
          width 100%
          height 100%
          display inline-block
          color black
</style>
