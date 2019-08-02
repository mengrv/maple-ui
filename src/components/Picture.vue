<template>
    <img :src="src" :style="{backgroundColor: backgroundColor}" :class="{error:isError}"
         @error.once="imgError" ref="img" :alt="alt" @click="$emit('click')"/>
</template>

<script>
  import noImg from '@/assets/noImg.svg';

  export default {
    name: "Picture",
    props: {
      src: {
        type: String,
        default: ''
      },
      backgroundColor: {
        type: String,
        default: 'transparent'
      },
      errorImgUrl: {
        type: String,
        default: noImg
      },
      alt: {
        type: String,
        default: '图片'
      }
    },
    data () {
      return {
        isError: false,
      }
    },
    methods: {
      imgError (e) {
        this.isError = true;
        e.target.src = this.errorImgUrl;
      },
    },
    components: {}
  }
</script>
<!--
    Add "scoped" attribute to limit CSS to this component only
-->
<style type="text/less" lang='less' scoped>

    img {
        max-width: 100%;
        max-height: 100%;
    }

</style>
