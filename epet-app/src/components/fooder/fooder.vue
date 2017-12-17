<template>
  <div class="fooder">
    <ul class="list">
      <li>
        <a href="javascript:"></a>
      </li>
      <li>
        <a href="javascript:"></a>
      </li>
      <li>
        <a href="javascript:"></a>
      </li>
      <li>
        <a href="javascript:"></a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fooder
    position fixed
    bottom 0px
    width 100%
    z-index 10
    height 45px
    background-color white
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
          display block
          background url(./icon.png) no-repeat
          background-size 234px 163px
          height 40px
          width 42px
          margin 0 auto
          margin-top 2px
          &.home-page
            background-position -42px 0
          &.classification
            background-position -85px -41px
          &.shopping-cart
            background-position -85px -81px
          &.center
            background-position -85px -122px

</style>
