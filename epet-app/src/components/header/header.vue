<template>
  <div class="container">
    <!--头部-->
    <div class="header">
      <div class="theme">
        <span>猫猫站</span> |
    <span>柳州</span>
      </div>
      <div class="search">
        <input type="text" >
      </div>
      <div class="personInfo">
        <a href="javascript:">
          <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
        </a>
      </div>
    </div>
    <!--导航-->
    <div class="nav-wrap" ref="nav">
      <ul class="nav-list">
        <li>
          <a href="javascript:;" class="active">首页</a>
        </li>
        <li>
          <a href="javascript:;">猫猫主粮</a>
        </li>
        <li>
          <a href="javascript:;">罐头超市</a>
        </li>
        <li>
          <a href="javascript:;">医疗保健</a>
        </li>
        <li>
          <a href="javascript:;">猫砂</a>
        </li>
        <li>
          <a href="javascript:;">零食玩具</a>
        </li>
        <li>
          <a href="javascript:;">美容香波</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    components: {

    },
    mounted(){
      new BScroll(this.$refs.nav, {
        scrollX: true
      })
    },
    methods:{

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    position fixed
    top 0
    width 100%
    z-index 10
    background-color white
    .header
      margin-top 15px
      overflow hidden
      div
        float left
        color: #888888
        font-size 15px
      .search
        width 60%
        input
          width 100%
          background-color: #e8e8e8
          margin: 0 10px
      .personInfo
        float right
        img
          width 25px
          height 25px
    .nav-wrap
      overflow hidden
      margin-top 22px
      .nav-list
        float left
        font-size 14px
        white-space nowrap
        li
          width 74px
          display inline-block
          text-align center
          a
            display inline-block
            color #666
</style>
