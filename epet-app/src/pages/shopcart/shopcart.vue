<template>
  <div class="shopCart">
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
      <div class="headerShow clearFix">
        <ul class="list">
          <li>
            <a href="javascript:">
              <div></div>
              <span>首页</span>
            </a>
          </li>
          <li>
            商品分类
          </li>
          <li>
            购物车
          </li>
          <li>
            我的e宠
          </li>
        </ul>
      </div>
    </div>
    <div class="shopCartContent">
      <div class="btnWrap">
        <mt-button type="default" class="btn1">去逛逛</mt-button>
        <mt-button type="default" class="btn2">我的收藏</mt-button>

      </div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .shopCart
    background-color #f3f4f5
    .header
      .headerTop
        //border-1px(top,#eee)
        line-height 50px
        height 50px
        background-color white
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
      .headerShow
        height 75px
        background-color white
        overflow hidden
        border 1px solid #f3f4f5
        //clearFix()
        .list
          li
            width 25%
            float left
            text-align center
            line-height 75px

    .shopCartContent
      position relative
      background-color white
      min-height 298px
      border 1px solid #f3f4f5
      .btnWrap
        position absolute
        overflow hidden
        width 100%
        bottom 50px
        left 50%
        transform translateX(-25%)
        .btn1, .btn2
          width 100px
          height 40px
          line-height 40px
          margin 0 4px
          border 1px solid #999
          border-radius 8px
          font-size 16px
          color #999
          background-color white

</style>
