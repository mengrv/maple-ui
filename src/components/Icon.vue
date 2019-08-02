<template>
    <span class="iconfont" :class="iconTag"></span>
</template>

<script>
  export default {
    name: "Icon",
    props: {
      type: {
        type: String,
        required: true
      }
    },
    computed: {
      iconTag () {
        return `icon--${this.type}`;
      }
    }
  }
</script>
<!--
    Add "scoped" attribute to limit CSS to this component only
-->
<style type="text/less" lang='less' scoped>
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 2em;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
