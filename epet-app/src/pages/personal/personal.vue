<template>
  <div class="personalCenter">
    <div class="header">
      <div class="comeBack"></div>
      <div class="chooses"></div>
      <div class="register"></div>
      <div class="loginWay">
        <div class="commonLogin">普通登录</div>
        <div class="phoneLogin">手机动态密码登录</div>
      </div>
    </div>
    <div class="inputText">
      <form action="" class="userInfo">
        <input type="text" placeholder="手机号/邮箱/用户名" name="username" >
        <input type="text" placeholder="输入密码" name="password" >
      </form>
      <div class="text">
       <span>忘记密码？</span>
      </div>
      <div class="sumbitInfo">
        <mt-button type="primary" class="sumbitBtn">登&nbsp&nbsp&nbsp录</mt-button>
      </div>
      <div class="space"></div>
      <div class="icon">
        <a href="javascript">
          <img src="//static.epetbar.com/mpet/images/login/login_ico4.png">
        </a>
        <a href="javascript">
          <img src="//static.epetbar.com/mpet/images/login/login_ico2.png">
        </a>
      </div>
    </div>

  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .personalCenter
    min-height 90%
    .header
      position relative
      height 178px
      background-color lightslategray
      /*background-image: url(//img1.epetbar.com/2017-09/21/11/2ac7b0a4f0ab1e4a63819e0668d1cb39.png) no-repeat;*/
      /*background-size: 100% 100%*/
      .loginWay
        position absolute
        bottom 0
        height 44px
        overflow hidden
        font-size 16px
        line-height 44px
        width 100%
        background-color rgba(255,255,255,.5)
        .commonLogin, .phoneLogin
          display inline-block
          width 49%
          text-align center
          color white
    .inputText
      border 0
      .userInfo
        width 90%
        margin 0 auto
        height 92px
        input
          width 100%
          line-height 46px
          outline none
          border-bottom 2px solid #eee
          padding-left 30px
          font-size 16px
          color #eee
      .text
        color #7e8c8d
        width 90%
        margin 12px auto
        margin-bottom 6px
        overflow hidden
        span
          float right
      .sumbitInfo
        width 90%
        margin 0 auto
        .sumbitBtn
          height 38px
          width 100%
          font-size 15px
          background-color #2ec975
      .space
        height 150px
      .icon
        height 57px
        a
          margin-left 55px
          img
            height 100%
</style>
