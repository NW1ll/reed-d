export interface ColumnItem {
    title: string;//列标题
    dataIndex: string | string[];//对应数据源中的属性名
    key: string;//v-for的key
    width?: number;//指定该列的宽，不指定会默认100
    filters?: Array<{text:string,value:string|string[]}>;//设置筛选参数
    onFilter?: (value:string, record:object) => boolean; //过滤回调函数
    sort? : (arg1:object,arg2:object)=>number ;
}
export type DataSource = Object[]