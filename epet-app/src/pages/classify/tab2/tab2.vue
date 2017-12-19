<template>
  <div class="tabBrand">
    <ul class="brandDiv">
      <li class="brandDivTitle" v-for="(goods, index) in data.classifyName.brand">
        <epet-split/>
        <div class="goodsTitle">——{{goods.title}}——</div>
        <ul class="brandDivGoods">
          <li class="brandGood" v-for="(good) in goods.list">
            <div class="GoodImg">
              <img :src="good.logo">
            </div>
            <div class="GoodText">
              <span>{{good.name}}</span>
            </div>
            <div class="GoodCountry">
              <span>{{good.address}}</span>
            </div>
          </li>
        </ul>
      </li>

    </ul>
    <epet-split/>
    <router-view></router-view>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import split from '../../../components/split/split.vue'
    export default {
      components:{
          'epet-split': split
      },
      computed: {
//        ...mapState(['classifyName']),
        ...mapState(['data'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tabBrand
    z-index 99
  .brandDiv
    height 100%
    width 100%
    .brandDivTitle
      font-size 12px
      text-align center
      color #999
      .goodsTitle
        padding 20px 0
      .brandDivGoods
        height 100%
        /*padding-bottom 20px*/
        overflow hidden
        .brandGood
          float left
          margin-left 3.25%
          margin-bottom 20px
          height 107px
          width 29%

          text-align center
          .GoodImg
            position relative
            border 1px solid #e2e2e2
            width 100%
            height 62px
            margin-bottom 6px
            img
              position absolute
              left 50%
              top 50%
              width 65%
              transform translate3d(-50%, -50% ,0)

          .GoodText
            font-size 13px
            color black
            margin-bottom 2px
          .GoodCountry
            font-size 12px
            color #7e8c8d
</style>
