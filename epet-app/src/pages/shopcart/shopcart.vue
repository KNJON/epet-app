<template>
  <div class="personal">
    <div class="header">
      <div class="headerTop">
        <div class="comeBack">
          <router-link to="javascript:">
            <img src="">111
          </router-link>
        </div>
        <span class="text">购物车</span>
        <div class="showShop">
          <router-link to="javascript:">
            <img src="">222
          </router-link>
        </div>
      </div>
    </div>
    <div class="headerShow">
      <ul class="list">
        <li></li>
      </ul>
    </div>
    div.
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .personal
    .header
      height 50px
      .headerTop
        //border-1px(top,#eee)
        line-height 50px
        .comeBack
          position absolute
          display inline-block
          a
            display inline-block
        .text
          position absolute
          left 50%
          transform translatex(-50%)
          margin 0 auto
          font-size 18px
        .showShop
          position absolute
          right 0
</style>
