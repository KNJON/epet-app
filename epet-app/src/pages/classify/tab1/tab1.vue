<template>
  <div class="classifyWrap">
    <div class="nav-goods">
      <div class="nav-name"  ref="list" >
        <ul class="nav-list">
          <li class="greyBg" v-for="(item, index) in data.classifyName.categorys"
              @click="goodSingleShow(index)" :ref="'imisShow'+index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="nav-msg">
        <div class="nav-msg-div">
          <div class="goods-title" v-for="(goods, index) in data.classifyName.cate_list">
            {{goods.title}}
            <ul class="goods-group">
              <li class="good-single" v-for="(good , index) in goods.list">
                <img :src="good.photo">
                <span class="text">
                  {{good.name}}
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    methods:{
      goodSingleShow(index){
        let temp = 'imisShow' + index
      }
    },

    computed: {
      //...mapState(['classifyName']),
      ...mapState(['data']),
    },


     mounted(){
      new BScroll(this.$refs.list, {
        scrollY: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixin.styl"
  .classifyWrap
    .nav-goods
      clearFix()
      position relative
      top 0
      width 100%
      height 582px
      .nav-name
        width 70px
        height 100%
        background white
        overflow hidden
        .nav-list
          li
            border-1px(bottom,#f3f4f5)
            width 70px
            height 50px
            background #fff
            font-size 13px
            line-height 50px
            text-align center
            &.greyBg
              background white
      .nav-msg
        position absolute
        left 20%
        top 0
        width 80%
        height 100%
        font-size 13px
        padding-top 25px
        .nav-msg-div
          //border 1px solid red
          .goods-title
            height 19px
            //border 1px solid
            .goods-group
              .good-single
                //border 1px solid lawngreen
                float left
                width 33.33%
                text-align center
                padding-top 5px
                img
                  width 100%
                .text
                  color black
</style>
