<template>
    <div class="m-card" :style = "width ? {width: width + 'px'} : {}">
        <div class="m-card-img" :style = "imgHeight ? {height: imgHeight + 'px'} : {}">
            <img :src = "imgSrc" alt="img"/>
        </div>
        <div class="m-card-summary" v-if="summary">
            {{summary}}
        </div>
        <div class="m-card-summary" v-else>
            <slot></slot>   <!--如果用户没有穿summary，就是自定义summary的样式，那么使用插槽就可以-->
        </div>
        <slot name = "footer"></slot>   <!--有的card可能没有底部footer，可选的，使用插槽-->
    </div>
</template>

<script lang="ts">
export default{
    name : "m-card",  
    props: {
        width: {
            type: Number,
            default: 0
        },
        imgHeight: {
            type: Number,
            default: 0,
        },
        imgSrc: {
            type: String,
            default: "",
        },
        summary: {
            type: String,
            default: "",
        }
    }
}
</script>

<style lang="scss">
.m-card {
    width: 270px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 6px 10px 0px rgb(95, 101, 105, 0.15);
    padding-bottom: 8px;

    &-img {
        height: 152px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    &-summary {
        padding: 6px;
        text-align: left;
        font-size: 16px;
    }
}
</style>
