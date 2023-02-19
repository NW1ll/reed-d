<template>
  <div class="father" :style="{width:width+'px'}">
      <slot></slot>
    <div class="child">
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'rdPop',
    props: {
        width: {
            type: Number,
            default: 100
        }
    },
    setup(props){
        const {width} = props
        return {
            width
        }
    }

})
</script>

<style lang='scss' scoped>
    .father{
        background-color: black;
        color:white;
        position: relative;
        display: inline-block;
        border-radius: 10px;
        padding: 15px;
        .child{
            position: absolute;
            top: -30px;
            left:0px;
            width:0px;
            height:0px;
            border: 20px solid black;
            border-color: transparent transparent black transparent
        }
    }
</style>