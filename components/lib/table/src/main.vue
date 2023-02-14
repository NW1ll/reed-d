<template>
    <div class='rd-table' :style="xstyles">
        <table :class="'header'+(height?' headsticky':'')" 
        :style="{width:totalWidth+'px'}">
                <colgroup>
                <col v-if="$slots.expandeRowRender" style="width:85px"/>
                <col v-for="(item,index) in columns" 
                        :style="{width:(item?.width?item.width:200)+'px'}"/>
                </colgroup>
                <thead>
                    <tr>
                       <th :colspan="columns.length+1" style="padding:0px;border:none">
                        <slot name="title"></slot>
                        </th>  
                    </tr>
                    <tr>
                        <th v-if="$slots.expandeRowRender"></th>
                        <th v-for="(item,index) in columns" :key="item.key"
                        :style="item?.sort?'display:flex;align-items:center;justify-content:center':''"
                        :class="index==0&&width?'colsticky':''">
                            <slot name="headerCell" :title="item.title" :column="item">
                                {{item.title}}
                            </slot>
                            <span v-if="item?.filters" class="iconfont icon-shaixuan"
                             :style="isFilt?'color:black':''">
                                <div class="pop">
                                    <rd-pop :width="100">
                                        <template v-for="(elem,index) in item.filters">
                                        <input type="checkbox" @click="getFiltWords" :value="elem.value"/>&nbsp;<span style="font-weight:normal">{{elem.text}}</span><br>
                                        </template>
                                        <hr>
                                        <button style="margin-right:5px;padding:2px;margin-top:3px" @click="reset">重置</button>
                                        <button style="padding:2px;margin-top:3px" @click="filt(item)">确定</button>
                                    </rd-pop>
                                </div>
                            </span>
                            <span style="display:flex;flex-direction:column" v-if="item?.sort">
                                <span :style="sortOrder=='asc'?'color:black':''" 
                                class="iconfont icon-sanjiaoxing_shang-copy"
                                @click="ascend(item)"></span>
                                <span :style="sortOrder=='desc'?'color:black':''" 
                                class="iconfont icon-sanjiaoxing_shang"
                                @click="descend(item)"></span>
                            </span>
                            
                        </th>
                    </tr>
                </thead>        
        </table>
        <div class="body-box" :style="styles">
            <table :class="'body'+(strip?' strip':'')">
                    <colgroup>
                        <col v-if="$slots.expandeRowRender" style="width:50px"/>
                        <col v-for="(item,index) in columns" 
                        :style="{width:(item?.width?item.width:200)+'px'}"/>
                    </colgroup>
                    <template v-if="!loading">
                        <tbody v-if="dataSource.length>0">
                        <template  v-for="(data,index) in dataSource" :key="index">
                            <tr>
                                <td v-if="$slots.expandeRowRender">
                                    <span @click="expande($event,data)" class="iconfont icon-zhankai1" style="font-size:16px"></span>
                                </td>
                                <td v-for="(item,index1) in columns" :key="item.key"
                                :class="index1==0&&width?'colsticky':''">
                                    <slot name="bodyCell" 
                                    :index="index"
                                    :text="data[item?.dataIndex]" 
                                    :record="data" 
                                    :column="item">
                                        {{data[item?.dataIndex]}}
                                    </slot>
                                </td>
                            </tr>
                            <tr v-if="$slots.expandeRowRender&&data.expand">
                                <td :colspan="columns.length+1">
                                    <slot name="expandeRowRender" :record="data"></slot>
                                </td>
                            </tr>
                        </template>   
                    </tbody>
                    <tbody v-else style="text-align:center">
                        <tr>
                            <th :colspan="columns.length">
                                 <img style="width:200px;height:200px" 
                                src="./assets/images/empty.png"/>
                            </th>    
                        </tr>
                    </tbody>
                    </template>
                    <tbody v-else style="text-align:center">
                        <tr>
                            <th :colspan="columns.length"
                             style="padding-top:100px">
                                 <img class="load-img" 
                                 style="width:80px;height:80px" 
                                src="./assets/images/loading.png"/>
                            </th>    
                        </tr>
                        <tr>
                            <td :colspan="columns.length" 
                            style="background-color:white;padding-bottom:100px">
                                <span style="color:gray">加载中...</span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                       <tr>
                            <th :colspan="columns.length"><slot name="footer"></slot></th>
                        </tr> 
                    </tfoot>
            </table>
        </div>  
    </div>  
</template>

<script lang='ts'>
import { defineComponent, PropType, computed, ref, reactive } from 'vue'
import { ColumnItem, DataSource } from './types'
import rdPop from './pop.vue'
export default defineComponent({
    name: 'rdTable',
    components: {rdPop},
    props: {
        columns: { //列的配置项
            type: Array as PropType<Partial<ColumnItem>[]>,
            require: true
        },
        dataSource: {//数据源
            type: Array as PropType<DataSource>,
            default: []
        },
        strip: {//是否隔行变色
            type: Boolean as PropType<boolean>,
            default: false
        },
        loading: {//是否加载中
            type: Boolean as PropType<boolean>
        },
        scroll: {//指定表格宽度高度，自动加滚动条
            type: Object as PropType<{width?:number, height?:number}>
        }
    },
    setup(props,{slots,emit}){
        console.log(slots.bodyCell)
        const { columns,strip,  loading, scroll } = props
        const width = scroll?.width
        const height = scroll?.height
        const dataSource = reactive(props.dataSource)
        const nativeData = JSON.parse(JSON.stringify(dataSource)) //拷贝一份原生的数据保存
        const totalWidth = computed(() => {
            let w;
            w = columns?.reduce((pre,now) => {
                if(now?.width)
                    return pre+now.width
                return pre+100
            },0)
            if(slots.expandeRowRender&&w){
              w=w+50
            }
            return w
        })
        const styles = computed(() => {//指定height，固定表头
            console.log(totalWidth)
            if(height){
                return {
                    height:height+'px',
                    overflowY:'scroll',
                    width: totalWidth.value + 'px'
                }
            }else{
                return { width: totalWidth.value + 'px'}
            }
        })
        const xstyles = computed(() => {
            if(width){
                return {
                    width:width+'px',
                    overflowX: 'scroll'
                }
            }
            return {width:totalWidth.value+'px'}
        })
        const sortOrder = ref<'asc'|'desc'|''>('');
        const isFilt = ref<boolean>(false);
        const ascend = (item:ColumnItem) => {
            sortOrder.value='asc'
            dataSource.sort(item.sort)
        }
        const descend = (item:ColumnItem) => {
            sortOrder.value='desc'
            dataSource.sort(item.sort).reverse()
        }
        const filtWords: string[] = []
        const getFiltWords = (e:InputEvent) => {
            const dom: any = e.target
            if(dom.checked){
                filtWords.push(dom.value)
            }else{
                let index = filtWords.indexOf(dom.value)
                filtWords.splice(index,1);
            }
        }
        const filt = (item:ColumnItem) => {
            dataSource.splice(0,dataSource.length)
            dataSource.push(...nativeData)
            isFilt.value = true
            //筛选等于filtWords中的数据
            for(let i=dataSource.length-1;i>=0;i--){
                let elem = dataSource[i]
                let flag: boolean = false
                for(let words of filtWords){
                    if(item.onFilter&&item.onFilter(words,elem))
                       flag = true 
                }
                if(!flag){
                    dataSource.splice(i,1)
                }
            }
        }
        const reset = () => {
            isFilt.value = false
            dataSource.splice(0,dataSource.length)
            dataSource.push(...nativeData)
        }
        const expande = (e:Event,data:any) => {
            const dom:any = e.target
            if(!data.expand){
               dom.classList.add("zhankai")
            }else{
               dom.classList.remove("zhankai")
            }
            data.expand = !Boolean(data.expand)
            emit('expand', data);
        } 
        return {
            columns,
            dataSource,
            strip,
            styles,
            xstyles,
            width,
            height,
            totalWidth,
            loading,
            sortOrder,
            ascend,
            descend,
            filt,
            isFilt,
            getFiltWords,
            reset,
            expande   
        }
    }

})
</script>

<style lang="scss" scoped>
@import './assets/css/iconfont.css';
.iconfont{
    display: inline-block;
    position: relative;
    font-size: 20px;
    margin-left:25px;
    color:#a9a7a7;
    &:hover{
        color:black;
        cursor: pointer;
        .pop{
            visibility: visible;
        }

    }
    .pop{
        position:absolute;
        z-index: 20;
        bottom: -130px;
        visibility: hidden;
    }
}
@keyframes rotate {
    0%{
        transform: rotateZ(0deg);
    }
    100%{
        transform: rotateZ(90deg);
    }
}
@keyframes rotate2 {
    0%{
        transform: rotateZ(90deg);
    }
    100%{
        transform: rotateZ(-90deg);
    }
}
.zhankai{
    animation-name: rotate;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
}
.icon-zhankai1{
    transition: all 500ms;
}
*{
    padding:0;
    margin:0;
}
.rd-table{
    position: relative;
    border-bottom: 1px solid #F0F0F0;
    .flex{
        display: flex;
        align-items: center;
    }
    .header{
    thead{
            position: sticky;
            z-index: 20;
            top:0%;
            background-color:#FAFAFA;
            th{
                padding:15px;
                border-right: 3px solid #F0F0F0;
                border-top: 1px solid #F0F0F0;
                background-color:#FAFAFA;
                &:last-child{
                    border-right: none;
                }
            }   
        } 
    }
    th,td{
        box-sizing: border-box;
    }
    .body{
        border-top:1px solid #F0F0F0;
        td{
            border-bottom:1px solid #F0F0F0;
            padding:15px;
        }
        tbody{
            tr{
                td{
                    background-color: white;
                }
                &:hover{
                    td{
                        background-color: #F0F0F0;
                    }
                    
                }
            }
        }
    }
    .strip{
            tr{
                &:nth-child(even){
                    background-color: #FAFAFA;
                    td{
                        background-color: #FAFAFA;
                    }
                }
            }
    }
    .headsticky{//tobody滚动时表头阴影效果
        thead{
            tr{
                box-shadow: 0px 5px 15px 3px rgb(244, 240, 240),
            }
        }
    }
    .colsticky{
            z-index:100;
            position:sticky;
             left: 0%;
             border-right: none !important;
            box-shadow: rgba(0, 0, 0, 0.12) -10px 0px 8px -8px inset;
    }
    .title{
        border-top: 1px solid #F0F0F0;
        margin:0;
    }
    .title,tfoot{
        background-color: #FAFAFA;
    }
    .load-img{
        animation-name: loading;
        animation-duration: 400ms;
        animation-iteration-count: infinite;
        animation-delay: 0ms;
        animation-timing-function: linear;
    }
    @keyframes loading {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(30deg);
      }
    }
}
</style>