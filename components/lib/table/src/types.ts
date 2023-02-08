export interface ColumnItem {
    title: string;//列标题
    dataIndex: string | string[];//对应数据源中的属性名
    key: string;//v-for的key
    width?: number;//指定该列的宽，不指定会默认100
}
export type DataSource = Object[]