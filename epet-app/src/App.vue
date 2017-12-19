<template>
  <div id="app">
    <div class="fooder">
      <ul class="list">
        <li>
          <router-link to="/home" ref="homePage" @click="homePage">
            <span class="home-page"></span>
          </router-link>
        </li>
        <li @click="classifyPage" ref="classification">
          <router-link to="/classify"  >
            <span class="classification"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/shopcart" >
            <span class="shopping-cart"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/personal" >
            <span class="center"></span>
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
        homePage() {
//          this.$refs.homePage.style.backgroundPosition='-42px -41px'
        },
       classifyPage() {
          console.log ( '1212'+ this.$refs.classification )
//          this.$refs.classification.style.backgroundPosition='-42px -41px'
          console.log ( '121' )
        }
     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
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
            background url(./components/fooder/icon.png) no-repeat
            background-size 234px 163px
            height 40px
            width 42px
            margin 0 auto
            margin-top 2px
            .home-page
              background-position -42px 0
            .classification
              background-position -85px -41px
            .shopping-cart
              background-position -85px -81px
            .center
              background-position -85px -122px

</style>
