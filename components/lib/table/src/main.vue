<template>
    <div :class="classes" :style="{height: height+'px',width:width+'%',overflow:'scroll'}" >
        <table :class="'rd-table'+(strip?' strip':'')">
        <thead>
            <tr>
                <th v-for="(item,index) in columns" :key="item.key"
                :class="getStickyClass(item,index)">
                    <slot name="headerCell" :title="item.title" :column="item">
                        {{item.title}}
                    </slot>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data,index) in dataSource" :key="index">
                <td v-for="(item,index1) in columns" :key="item.key"
                :class="getStickyClass(item,index1)">
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
        <tfoot></tfoot>
    </table>
    </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, computed } from 'vue'
import { ColumnItem, DataSource } from './types'
export default defineComponent({
    name: 'rdTable',
    props: {
        columns: {
            type: Array as PropType<Partial<ColumnItem>[]>,
            require: true
        },
        dataSource: {
            type: Array as PropType<DataSource>,
            default: []
        },
        strip: {//是否隔行变色
            type: Boolean as PropType<boolean>,
            default: false
        },
        width: {
            type: Number as PropType<number>,
            default: 100
        },
        height: {
            type: Number as PropType<number>
        }
    },
    setup(props){
        const { columns, dataSource, strip, width, height } = props
        const classes = computed(() => {
            return {
                headsticky: height? true:false
            }
        })
        const getStickyClass = (item:Partial<ColumnItem>,index:number) => {
            if(width<100&&item?.sticky){
                if(index==0)
                    return 'colsticky right'
                if(index+1==columns?.length)
                    return 'colsticky left'
                return 'colsticky'
            }
            return ''
        }
        return {
            columns,
            dataSource,
            strip,
            classes,
            width,
            height,
            getStickyClass
        }
    }

})
</script>

<style lang="scss" scoped>
.rd-table{
    border-top:1px solid #F0F0F0;
    width:100%;
    thead{
        position: sticky;
        z-index: 20;
        top:0%;
        background-color:#FAFAFA;
        th{
            padding:15px;
            border-right: 3px solid #F0F0F0;
            background-color:#FAFAFA;
            &:last-child{
                border-right: none;
            }
        }   
    }
    th,td{
         border-bottom:1px solid #F0F0F0;
         padding:15px;
    }
    tbody{
       tr{
            &:hover{
                background-color: #F0F0F0;
            }
            td{
                background-color: white;
            }
        }
    }
    .colsticky{
        position:sticky;
        left:0%;
    }
    .colsticky.left{
        box-shadow: 2px 0 15px 3px gainsboro;
    }
     .colsticky.right{
        box-shadow: -2px 0 15px 3px gainsboro;
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
        tbody{
            tr{
                &:hover{
                background-color: #F0F0F0;
                }
                td{
                    background-color: white;
                }
            }
        }
}
//  ::-webkit-scrollbar{
//         display: none;
//     }
.headsticky{
     overflow-y: scroll;
     overflow-x: scroll;
     thead{
         tr{
             box-shadow: 0px 5px 15px 3px rgb(244, 240, 240),
        }
     }
}

</style>