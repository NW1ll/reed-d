<template>
    <div class='rd-table' :style="xstyles">
        <table :class="'header'+(height?' headsticky':'')" 
        :style="{width:totalWidth+'px'}">
                <colgroup>
                <col v-for="(item,index) in columns" 
                        :style="{width:(item?.width?item.width:200)+'px'}"/>
                </colgroup>
                <thead>
                    <tr>
                       <th :colspan="columns.length" style="padding:0px;border:none">
                        <slot name="title"></slot>
                        </th>  
                    </tr>
                    <tr>
                        <th v-for="(item,index) in columns" :key="item.key"
                        :class="index==0&&width?'colsticky':''">
                            <slot name="headerCell" :title="item.title" :column="item">
                                {{item.title}}
                            </slot>
                        </th>
                    </tr>
                </thead>
                
        </table>
        <div class="body-box" :style="styles">
            <table :class="'body'+(strip?' strip':'')">
                    <colgroup>
                        <col v-for="(item,index) in columns" 
                        :style="{width:(item?.width?item.width:200)+'px'}"/>
                    </colgroup>
                    <template v-if="!loading">
                        <tbody v-if="dataSource.length>0">
                        <tr v-for="(data,index) in dataSource" :key="index">
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
                        <th colspan="4"><slot name="footer"></slot></th>
                        </tr> 
                    </tfoot>
            </table>
        </div>  
    </div>  
</template>

<script lang='ts'>
import { defineComponent, PropType, computed, ref } from 'vue'
import { ColumnItem, DataSource } from './types'
export default defineComponent({
    name: 'rdTable',
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
        width: { //指定表格的宽度，会在水平方向加滚动条
            type: Number as PropType<number>
        },
        height: {//指定表格tbody高度，会在tbody垂直方向加滚动条
            type: Number as PropType<number>
        },
        loading: {//是否加载中
            type: Boolean as PropType<boolean>
        }
    },
    setup(props){
        const { columns, dataSource, strip, width, height, loading } = props
        const totalWidth = computed(() => {
           return columns?.reduce((pre,now) => {
            if(now?.width)
                return pre+now.width
            return pre+100
           },0)
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
    
        return {
            columns,
            dataSource,
            strip,
            styles,
            xstyles,
            width,
            height,
            totalWidth,
            loading
        }
    }

})
</script>

<style lang="scss" scoped>
*{
    padding:0;
    margin:0;
}
.rd-table{
    position: relative;
    border-bottom: 1px solid #F0F0F0;
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