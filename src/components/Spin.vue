<template>
    <div id="loading" :class="loading?'loadingMask': 'hidden'">
        <div class="loader">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Spin",
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: true
      }
    },
  }
</script>
<!--
    Add "scoped" attribute to limit CSS to this component only
-->
<style type="text/less" lang='less' scoped>
    .loadingMask {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 999999;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        animation-fill-mode: forwards;
    }

    .loader {
        position: relative;
        margin: auto;
        width: 350px;
        color: white;
        flex-grow: 0;
        flex-shrink: 0;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 250%;
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
        text-align: center;
        height: 120px;
        overflow: hidden;

        * {
            box-sizing: border-box;
            overflow: hidden;
        }

        &:after {
            content: "";
            display: table;
            clear: both;
        }

        & > span {
            height: 100px;
            line-height: 120px;
            width: 50px;
            float: left;
            animation: up 3s infinite;

            &:nth-child(2) {
                animation-delay: .142857s;
            }

            &:nth-child(3) {
                animation-delay: .285714s;
            }

            &:nth-child(4) {
                animation-delay: .428571s;
            }

            &:nth-child(5) {
                animation-delay: .571428s;
            }

            &:nth-child(6) {
                animation-delay: .714285s;
            }

            &:nth-child(7) {
                animation-delay: .857142s;
            }
        }
    }


    @keyframes up {
        0% {
            margin-top: 0;
        }

        16% {
            margin-top: 100%;
            height: 20px;
        }

        16% {
            margin-top: 100%;
            height: 20px;
        }

        50% {
            margin-top: 0;
        }

        100% {
            margin-top: 0;
        }
    }


    .hidden {
        display: none;
    }

</style>
