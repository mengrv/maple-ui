<template>
    <div>
        <Spin/>
        <iframe :src="src" width="100%" height="100%" @load="iframeLoadEnd"/>
    </div>
</template>

<script>
  import Spin from "./Spin";

  export default {
    name: "Iframe",
    props: {
      src: {
        type: String,
        default: ""
      },
    },
    data () {
      return {}
    },
    methods: {
      iframeLoadEnd () {
      }
    },
    components: {Spin}
  }
</script>
<!--
    Add "scoped" attribute to limit CSS to this component only
-->
<style type="text/less" lang='less' scoped>
    iframe {
        border: 0;
    }
</style>
