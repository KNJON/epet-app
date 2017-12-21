<template>
  <div id="app">
    <div class="fooder">
      <ul class="list">
        <li @click="pageClick(1)" >
          <router-link to="/home"  >
            <a href="javascript:" class="home-page-click" ref="page1"></a>
          </router-link>
        </li>
        <li @click="pageClick(2)" >
          <router-link to="/classify"  >
            <a href="javascript:" class="classification" ref="page2"></a>
          </router-link>
        </li>
        <li @click="pageClick(3)">
          <router-link to="/shopcart" >
            <a href="javascript:" class="shopping-cart page3" ref="page3" ></a>
          </router-link>
        </li>
        <li @click="pageClick(4)">
          <router-link to="/personal" >
            <a href="javascript:" class="center page4" ref="page4"></a>
          </router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('reqClassifyName')
      this.$store.dispatch('reqHomeName')

      document.addEventListener("touchstart",function(ev){
        ev=ev||event;
        ev.preventDefault();
      });
      (function(){
        var styleNode = document.createElement("style");
        var width = document.documentElement.clientWidth/16;
        styleNode.innerHTML="html{font-size:"+width+"px!important}";
        document.head.appendChild(styleNode);
      })()
    },
    methods:{
      pageClick(index){
          switch (index){
            case 1:
              this.$refs.page1.className='home-page-click page1'
              this.$refs.page2.className='classification page2'
              this.$refs.page3.className='shopping-cart page3'
              this.$refs.page4.className='center page4'
              break;
            case 2:
              this.$refs.page1.className='home-page'
              this.$refs.page2.className='classification-click'
              this.$refs.page3.className='shopping-cart'
              this.$refs.page4.className='center'
              break;
            case 3:
              this.$refs.page1.className='home-page'
              this.$refs.page2.className='classification'
              this.$refs.page3.className='shopping-cart-click'
              this.$refs.page4.className='center'
              break;
            case 4:
              this.$refs.page1.className='home-page'
              this.$refs.page2.className='classification'
              this.$refs.page3.className='shopping-cart'
              this.$refs.page4.className='center-click'
              break;
          }
        }
     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html, body
    height 100%
    overflow hidden
  #app
    height 100%
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
            a
              display block
              background url(./components/fooder/icon.png) no-repeat
              background-size 234px 163px
              height 40px
              width 42px
              margin 0 auto
              margin-top 2px
              &.home-page
                background-position -85px 0
              &.home-page-click
                background-position -42px 0
              &.classification
                background-position -85px -41px
              &.classification-click
                background-position -42px -41px
              &.shopping-cart
                background-position -85px -81px
              &.shopping-cart-click
                background-position -42px -81px
              &.center
                background-position -85px -122px
              &.center-click
                background-position -42px -122px


</style>
