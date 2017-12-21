<template>
  <div class="nav-goods">
    <div class="nav-name"  ref="list">
      <ul class="nav-list">
        <li class="greyBg" v-for="(goods ,index) in classifyName.categorys"
            @click="navIndex(index)" :key="index">
          {{goods.name}}
        </li>
      </ul>
    </div>
    <ul class="nav-msg-wrap" ref="navMsg" v-if="classifyName">
      <li class="nav-msg" ref="navMsg" >
        <div class="cataGoodList" v-if="classifyName.categorys">
          <div class="cataTitle" >
            <a href="" class="cataname" >
              {{classifyName.categorys[flagIndex].title}}
            </a>
            <img class=" arrowL" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" >
          </div>
          <ul class="catalist" v-if="classifyName.categorys[flagIndex].cate_list">
            <li class="cataGoodItem" v-for="(good, index) in classifyName.categorys[flagIndex].cate_list[0].list">
              <a href="" class="db">
                <img class="goodImg" :src="good.photo" >
                <p class="cataText">{{good.name}}</p>
              </a>
            </li>

          </ul>
        </div>
        <div v-if="flagIndex !==0 ">
          <div class="cataGoodBrand" v-if="classifyName">
            <p class="brandname">{{classifyName.categorys[flagIndex].title2}}</p>
            <ul class="Brandlist" v-if="classifyName.categorys[flagIndex].cate_list">
              <li v-for="(good, index) in classifyName.categorys[flagIndex].cate_list[1].list">
                <div class="logo-img">
                  <img :src="good.logo">
                </div>
                <p class="sign-name">{{good.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        flagIndex:0
      }
    },
    methods:{
      navIndex(index,ev) {
        console.log ( 'index = ' + index )
        this.flagIndex = index
        ev=ev||event
        var listNodes=document.querySelectorAll('.nav-list>li');
        for (var i=0;i<listNodes.length;i++){
          listNodes[i].style.backgroundColor='#fff';
          listNodes[i].style.color='black'
        }
        ev.target.style.backgroundColor='#f3f4f5';
        ev.target.style.color='red';
      }
    },
    computed: {
      ...mapState(['classifyName']),
    },


    mounted(){
      new BScroll(this.$refs.list, {
        click:true
      }),
      new BScroll(this.$refs.navMsg, {
        click:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import  '../../../common/stylus/mixin.styl'
  .nav-goods
    clearFix()
    position relative
    top 0
    width 100%
    height 95%
    .nav-name
      width 75px
      height 100%
      background #f3f4f5
      overflow hidden
      .nav-list
        padding-top 40px
        padding-bottom 10px
        li
          border-1px(bottom ,#f3f4f5)
          width 70px
          height 50px
          background width
          font-size 13px
          line-height 50px
          text-align center
          &.greyBg
            background white
          &.greyBgClick
            background #f3f4f5
    .nav-msg-wrap
      padding-top 40px
      position absolute
      left 75px
      top 0
      right 0
      height 100%
      .nav-msg
        width 100%
        overflow hidden
        padding-bottom 40px
        .cataGoodList
          box-sizing border-box
          width 100%
          padding 10px 10px
          .cataTitle
            padding 6px 0
            .cataname
              color #999
              font-size 12px
            .arrowL
              float right
              height 10px
          .catalist
            width 100%
            display flex
            flex-wrap wrap

            .cataGoodItem
              width 33.33%
              text-align center
              .goodImg
                height 86.66px
              .cataText
                height 20px
                color #333
                font-size 12px
                margin-top 10px
                text-align center
                white-space nowrap
                text-overflow ellipsis
                overflow hidden

        .cataGoodBrand
          box-sizing border-box
          width 100%
          overflow hidden
          padding 10px 8px
          .brandname
            font-size 12px
            color: #7e8c8d
            padding 5px 0
          .Brandlist
            display flex
            flex-wrap wrap
            width 100%
            overflow hidden
            li
              width 50%
              text-align center
              padding 3px 5px
              .logo-img
                padding 3px 0
                width 100%
                height  65px
                margin 0 5px
                border 1px solid #f3f4f5
                line-height 40px
                img
                 width 90%
              .sign-name
                height 20px
                line-height 20px
                overflow hidden
                /*text-overflow ellipsi;*/
                white-space nowrap
                font-size 13px
                margin-top 5px
                text-align center
              .country
                height 20px
                line-height 20px
                font-size 12px
                color #999
                text-align center



</style>
