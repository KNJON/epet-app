<template>
  <div class="classify">
    <div class="tab">
      <ul class="list clearFix">
        <li class="clickRed" @click="isLeft(true)" ref="listLeft">
          <router-link to="/classify/tab1">分类</router-link>
        </li>
        <li @click="isLeft(false)" ref="listRight">
          <router-link to="/classify/tab2">品牌</router-link>
        </li>
      </ul>
      <div class="search">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png">
      </div>
    </div>
    <!--<div class="headerLine"></div>-->

    <router-view></router-view>
  </div>
</template>

<script>

    import BScroll from 'better-scroll'
    export default {
      data () {
        return{
          isShow:true
        }
      },
      mounted(){

      },
      methods:{
        //控制tab颜色
        isLeft(left){
          if (left){
            console.log ( "1212"+this.$refs.listLeft )
            this.$refs.listLeft.className="clickRed"
            this.$refs.listRight.className=" "
          }else{
            this.$refs.listLeft.className=" "
            this.$refs.listRight.className="clickRed"
          }
        }
      },
      computed: {

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .classify
    height 100%
    /*background-color #f3f4f5*/
    .tab
      position fixed !important
      top 0
      width 100%
      height 40px
      background-color white
      z-index 10
      border-1px(bottom,#999)
      .list
        //clearFix()
        width 40%
        margin 0 auto
        li
          height 35px
          text-align center
          line-height 35px
          width 50%
          float left
          &.clickRed
            a
              color red
              border-width 2px
              border-style solid
              border-color transparent transparent red transparent
          a
            text-decoration:none;
            display inline-block
            font-size 13px
            color black
            border 2px solid transparent

      .search
        float right
        line-height 40px
        margin-right 14px
        img
          width 14px
          height 14px


    .headerLine
      width 100%
      margin-top  40px
      border 1px solid #7e8c8d
      height 0
</style>
