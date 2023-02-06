<template>
    <div :class='classes' :style="div_styles">
        <img v-if='src' :src='src' :style="img_styles"  @error="handleError" />
        <slot></slot>
    </div>
</template>
<script lang='ts'>
import { defineComponent, computed, ref } from 'vue'
import type { PropType } from 'vue'
 type Size = 'small'|'default'|'large'|number
 type Shape = 'circle'|'square'
export default defineComponent({
    name: 'rd-avatar',
    props: {
        size: {
            type: [String,Number] as PropType<Size>,
            default: 'default'
        },
        shape: {
            type: String as PropType<Shape>,
            default: 'circle'
        },
        imgSrc: {
            type: String,
            require: false
        },
        padding: {
            type: Number,
            default: 0
        },
        shade: {
            type: Boolean,
            default: false
        },
        bg: {
            type: String,
            default: 'white'
        }
    },
    setup(props,{slots}){
        console.log(slots)
        const {imgSrc,size,shape,padding,shade,bg} = props
        const src = ref<string|undefined>(imgSrc)
        const img_styles = computed(() => ({
         borderRadius: shape === 'square'? '0px':'100%' 
        }))
        const div_styles = computed(() => ({
            padding: `${padding}px`,
            border: padding? '1px solid lightgray':'',
            boxShadow: shade?`0 0 20px 0 gray`:'',
            borderRadius: shape === 'square'? '0px':'100%',
            backgroundColor: bg,
            color: bg === 'white'? 'black':'white',
            width: typeof size=='number' ? `${size}px`:'',
            height: typeof size=='number'? `${size}px`:'',
            lineHeight: typeof size=='number'? `${size}px`:''
        }))
        const classes = computed(()=>{
            let arr = ['avatar']
            if(typeof size =='string')
                arr.push(`avatar-${size}`)
            return arr
        })
        const handleError = () => {
            src.value = 'http://8.142.19.67:3000/images/unload.jpg'
        }
        return {
            src,
            img_styles,
            div_styles,
            classes,
            handleError
        }
    }
})
</script>
<style lang="scss" scoped>
$small-size: 50px;
$default-size: 100px;
$large-size: 100px;
$white: #fff;
$default-background: #c0cccb;
*{
    padding: 0;
    margin: 0;
}
.avatar{
    display: inline-block;
    text-align: center;
    font-size: 100%;
    img{
        width:100%;
        height:100%;
    }
}
.avatar-default{
    width: $default-size;
    height: $default-size;
    line-height: $default-size;
    font-size: 200%;
}
.avatar-large{
    width:$large-size;
    height: $large-size;
    line-height: $large-size;
    font-size: 300%;
}
.avatar-small{
    width: $small-size;
    height: $small-size;
    line-height: $small-size;
}
</style>