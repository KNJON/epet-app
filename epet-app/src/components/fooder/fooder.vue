<template>
  <div class="fooder">
    <ul class="list">
      <li>
        <a href="javascript:">
          首页
        </a>
      </li>
      <li>
        <a href="javascript:">
          分类
        </a>
      </li>
      <li>
        <a href="javascript:">
          购物车
        </a>
      </li>
      <li>
        <a href="javascript:">
          我的E宠
        </a>
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
          width 100%
          height 100%
          display inline-block
</style>
