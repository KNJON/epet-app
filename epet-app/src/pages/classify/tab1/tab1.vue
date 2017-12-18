<template>
  <div class="tab1">
    <div class="menuWrapper" ref="menuWrapper">
      <ul class="list">
        <li class="menu-item" v-for="(item, index) in classifyName.categorys">
          <span class="text">
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    components:{

    },
    computed: {
      ...mapState(['classifyName'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab1
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
