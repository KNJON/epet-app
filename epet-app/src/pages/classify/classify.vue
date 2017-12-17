<template>
  <div class="classify">
    <div class="tab border-1px">
      <ul class="list clearFix">
        <li>
          <router-link to="/classify/tab1">分类</router-link>
        </li>
        <li>
          <router-link to="/classify/tab2">品牌</router-link>
        </li>
      </ul>
      <div class="search">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png">
      </div>
    </div>
    <div class="content">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul class="list">
          <li class="menu-item" v-for="(item, index) in classifyName.categorys">
            <span class="text">
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
    export default {
      mounted(){
        new BScroll(this.$refs.menuWrapper, {

        })
      },
      computed: {
        ...mapState(['classifyName'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .classify
    background-color #f3f4f5
    .tab
      position fixed
      top 0
      width 100%
      height 40px
      background-color white
      z-index 10
      .list
        //clearFix()
        width 40%
        margin 0 auto
        li
          text-align center
          line-height 40px
          width 50%
          float left
          a
            display inline-block
            font-size 13px
      .search
        float right
        line-height 40px
        margin-right 14px
        img
          width 14px
          height 14px
    .content
      margin-top 42px
      margin-bottom 38px
      overflow hidden
      height 100%
      .menu-wrapper
        .list
          width 20%
          background-color white
          li
            text-align center
            line-height 50px
            height 50px
            width 100%
            border 1px #f3f4f5 solid

</style>
