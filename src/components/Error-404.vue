<template>
    <div flex="dir:column cross:center">
        <h1>404 Not Found: 该页面无法显示</h1>
        <img src="../assets/404.svg" alt="">
        <h2>很抱歉你访问的地址并不存在</h2>
        <p>
            <router-link to="/">首页</router-link>
        </p>
    </div>
</template>

<script>
  export default {
    name: "Error-404",
    data () {
      return {}
    },
    methods: {},
    components: {}
  }
</script>
<!--
    Add "scoped" attribute to limit CSS to this component only
-->
<style type="text/less" lang='less' scoped>
    @import "../style/color";
    @import "../style/size";

    h1 {
        color: @color-title;
        font-size: @fontSize-extraLarge;
    }

    h2 {
        color: @color-text;
        font-size: @fontSize-medium;
    }
</style>
