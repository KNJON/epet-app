<template>
  <div class="contentMain">
    <div class="columnitem">
      <ul class="columlist1">
        <li v-for="(good, index) in homeData.datas[1].menus">
          <a href="javascript:">
            <img :src="good.image">
          </a>
        </li>
      </ul>
      <!--<ul class="columlist2">-->
        <!--<li>-->
          <!--<a href="javascript:">-->
            <!--<img src="./2-1.jpg">-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="javascript:">-->
            <!--<img src="./2-2.jpg">-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="javascript:">-->
            <!--<img src="./2-3.jpg">-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="javascript:">-->
            <!--<img src="./2-4.jpg">-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="javascript:">-->
            <!--<img src="./2-5.jpg">-->
          <!--</a>-->
        <!--</li>-->
      <!--</ul>-->
    </div>
    <epet-split/>

    <div class="surprise_day" >
      <div class="listHeader">
        <div class="content">
          <img class="logo" src="//static.epetbar.com/static_web/wap/src/images/suprice.png" >
          <div class="actuaTime">
            距离下一场
            <span>00</span>:
            <span>00</span>:
            <span>00</span>
          </div>
          <a href="javascrip:">
            <img class="more" src="https://img2.epetbar.com/nowater/2016-10/26/20/c6b7ac04e8c6cb827365c17bd74aef59.png" >
          </a>
        </div>
      </div>
      <div class="sellerInfo" ref="wrapper">
        <ul class="list">
          <li>
            <a href="javascript:">
              <div class="info">
                <img src="https://img1.epetbar.com/2017-02/07/10/81189f4d95be18ba88eabb1e4eb7ba87.jpg@!300w-b">
                <span>￥</span><span>2.00</span>
                <p>省￥18.00</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <div class="info">
                <img src="https://img1.epetbar.com/2017-09/28/11/e0e2994933b8fdded9ba1a3410ea4f8b.jpg@!300w-b">
                <span>￥</span><span>2.00</span>
                <p>省￥18.00</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <div class="info">
                <img src="https://img1.epetbar.com/2017-11/28/09/6673268b95b4d62b17c56e4484816ecb.jpg@!300w-b">
                <span>￥</span><span>2.00</span>
                <p>省￥18.00</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <div class="info">
                <img src="https://img1.epetbar.com/2017-08/16/14/157ee5cfcfb8a7cc5cb802a1ca454416.jpg@!300w-b">
                <span>￥</span><span>2.00</span>
                <p>省￥18.00</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <epet-split/>

    <div class="divimg">
      <a href="javascript:">
        <img src="https://img2.epetbar.com/nowater/2017-12/14/21/370311d69fd1a39fedca2774dc25ad97.jpg@!water">
      </a>
    </div>
    <epet-split/>

    <div class="currency-adcon">
      <div class="left">
        <img src="https://img2.epetbar.com/nowater/2017-12/14/19/5a2a1a99f5642f160f4d22ee3cb7ee8a.jpg@!water">
      </div>
      <div class="right">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/09/e785855e80fd229d424d9ce15d7d7666.jpg@!water">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/09/5d685158ea5f5eb8b707dad905384aa6.jpg@!water">
      </div>
    </div>
    <epet-split/>

    <div class="assortment" >
      <div class="fashion">
        <!--复用部分标题-->
        <div class="subtitle">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/16/2b2ca7c9270d99cab79cc9a7b8b42399.jpg" >
          </div>
          <div class="right">
            <a href="javascript:">
              <img src="https://img2.epetbar.com/nowater/2017-12/13/11/f58b605d8d9b1900944a7b3a4ce12eb1.jpg">
            </a>
          </div>
        </div>
        <div class="list">
          <a href="javascript:">
            <img src="https://img1.epetbar.com/2017-12/14/15/94de9a1a616ed0aa647be3f133d85f78.jpg@!500w0h">
            <div class="fashionFooder">
              <span class="text">狮王 猫咪去毛喷剂  防静电 防打结 梳毛轻松</span>
              <div class="fashionInfo">
                <i>34374</i> |
                <span class="fashionTime">03:07</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <epet-split/>
      <div class="specialSelling">
        <div class="subtitle">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/16/70adf3f7cc4cbe58a7dc4865c4b4f932.jpg" >
          </div>
          <div class="right">
            <a href="javascript:">
              <img src="https://img2.epetbar.com/nowater/2017-12/13/11/f58b605d8d9b1900944a7b3a4ce12eb1.jpg">
            </a>
          </div>
        </div>
        <div class="list">
          <a href="javascript:">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/21/f9b03b752970c2c957877a4c6eabf206.jpg@!water">
          </a>
        </div>
        <epet-split/>
        <div class="list">
          <a href="javascript:">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/21/ed5436e5ee13a4f8d83fff1314e24e42.jpg@!water">
          </a>
        </div>
        <epet-split/>
        <div class="list">
          <a href="javascript:">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/21/7dee954fae7fdb254a57bf9aef7fa404.jpg@!water">
          </a>
        </div>
        <epet-split/>
        <div class="list">
          <a href="javascript:">
            <img src="https://img2.epetbar.com/nowater/2017-12/14/18/41a2c0e86fc36dba2a99b7e2ca7f977c.jpg@!water">
          </a>
        </div>
        <epet-split/>
        <div class="list">
          <a href="javascript:">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/21/f517eb9ebcc886504f885041717b944e.jpg@!water">
          </a>
        </div>
        <epet-split/>
        <div class="list">
          <a href="javascript:">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/21/78d0d84294183888aaaf864cb04ca0df.jpg@!water">
          </a>
        </div>
        <epet-split/>
        <div class="list">
          <a href="javascript:">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/21/0a1231be7907b558c59cc2453d6135b1.jpg@!water">
          </a>
        </div>
        <epet-split/>
      </div>
      <epet-split/>
      <div class="experience">
        <div class="subtitle">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/16/0954d3cd070051587d8f4d6af79882aa.jpg" >
          </div>
          <div class="right">
            <a href="javascript:">
              <img src="https://img2.epetbar.com/nowater/2017-12/13/11/f58b605d8d9b1900944a7b3a4ce12eb1.jpg">
            </a>
          </div>
        </div>
        <div class="list">
          <a href="javascript:">
            <epet-carousel/>
          </a>
        </div>
      </div>
      <epet-split/>
      <div class="fashion">
        <div class="subtitle">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/16/31188b47432f39588fbf6c7d39f59e2a.jpg" >
          </div>
          <div class="right">
            <a href="javascript:">
              <img src="https://img2.epetbar.com/nowater/2017-12/13/11/f58b605d8d9b1900944a7b3a4ce12eb1.jpg">
            </a>
          </div>
        </div>
        <div class="list">
          <a href="javascript:">
            <img src="https://img1.epetbar.com/2017-12/13/13/c77a3914d21996090f02df06f5def12a.jpg@!500w0h">
            <div class="fashionFooder">
              <span class="text">第2期-猫啪啪啪的时候爽吗？</span>
              <div class="fashionInfo">
                <i>3281</i> |
                <span class="fashionTime">02:57</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <epet-split/>
      <div class="fashion">
        <div class="subtitle">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/16/ef5a8dee1393526fed2afe5059fb8c58.jpg" >
          </div>
          <div class="right">
            <a href="javascript:">
              <img src="https://img2.epetbar.com/nowater/2017-12/13/11/f58b605d8d9b1900944a7b3a4ce12eb1.jpg">
            </a>
          </div>
        </div>
        <div class="list">
          <a href="javascript:">
            <img src="https://img1.epetbar.com/2017-10/31/16/e113957a8e3397f46adf4e2cbe904c34.jpg@!500w0h">
            <div class="fashionFooder">
              <span class="text">吐槽！E宠！首部自黑视频</span>
              <div class="fashionInfo">
                <i>1448</i> |
                <span class="fashionTime">04:57</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="fooderInfo">
      <div class="splitDiv">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/16/2b4302241c921a29523ce43d465cd28d.jpg@!water" alt="">
      </div>
      <div class="ft">
        <span>触屏版</span>
        <span><a href="javascript:">手机客户端</a></span>
        <span><a href="javascript:">关于我们</a></span>
        <span><a href="javascript:">联系我们</a></span>
      </div>
      <div class="cope">© wap.epet.com 版权：重庆易宠科技有限公司</div>
    </div>
  </div>
</template>

<script>
  import split from '../split/split.vue'
  import carousel from '../carousel/carousel.vue'
  import BScroll from 'better-scroll'
  export default {
      props:{
        homeData:Object
      },
      components:{
        'epet-split': split,
        'epet-carousel': carousel
      },
      mounted(){
        new BScroll(this.$refs.wrapper, {
          scrollX: true
        })
      },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contentMain
    .columnitem
    .columlist1, .columlist2
      overflow hidden
      width 100%
      li
        float left
        width 20%
        a
          display inline-block
          img
            width 100%
            height 100%
    .surprise_day
      overflow hidden
      height 190px
      .listHeader
        .content
          position relative
          height 60px
          .logo
            float left
            margin 10px 0
            top 0
            height 24px
          .actuaTime
            margin 10px 0
            float left
            height 20px
            font-size 14px
            text-align center
            span
              display inline-block
              width 20px
              height 20px
              border 1px solid #cacbcc
          .more
            float right
            height 40px

      .sellerInfo
        height 130px
        .list
          width 120%
          height 100%
          li
            float left
            width 84px
            margin 0 10px
            a
              text-align center
              display inline-block
              .info
                height 80%
                span
                  color red
                p
                  font-size 12px
                  color #999
                img
                  width 100%

    .divimg
      height 185px
      a
        img
          width 100%

    .currency-adcon
      height 250px
      .left
        float left
        width 50%
        img
          width 100%
      .right
        float right
        width 50%
        img
          width 100%

    .assortment
      .subtitle
        height 87px
        width 100%
        overflow hidden
        .left
          float left
          height 100%
          margin-left 10px
          img
            margin-top 5px
            height  90%
        .right
          float right
          margin-top 16px
          height 100%
          a
            img
              height 60%
      .fashion
        height 356px
        .list
          height 210px
          background-color lightslategray
          a
            /*display inline-block*/
            img
              width 100%
            .fashionFooder
              margin-top 12px
              height 58px
              font-size 12px
              text-align center
              .text
                color #333
              .fashionInfo
                font-size 13px
                color #999

      .specialSelling
        .list
          height 160px
          a
            img
              width 100%
      .experience
        .list
          height 160px
          background-color lightslategray


    .fooderInfo
      height 116px
      //background-color lightblue
      overflow hidden
      .splitDiv

        img
          height 30px
          width 100%
      .ft
        width 80%
        margin 10px auto
        margin-top 20px
        text-align center
        span
          display inline-block
          margin 0 5px
        color red
        a
          color #333
      .cope
        font-size 12px
        margin 0 auto
        text-align center
</style>
