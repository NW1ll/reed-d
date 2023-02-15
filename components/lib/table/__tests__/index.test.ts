import { mount } from "@vue/test-utils";
import { h } from 'vue'
import rdTable from '../src/main.vue';
import { ColumnItem } from "../src/types";
type TableData = {
  key:string;
  name:string;
  sex:string;
  age:number;
  address:string;
  describe:string;
}
const columns:Partial<ColumnItem>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 300
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      key: 'sex',
      width:200,
      filters: [
        {text: 'man', value: 'man'},
        {text: 'femal', value: 'femal'}
      ],
      onFilter: (value: string, record: TableData) => {
        return record.sex===value
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sort: (arg1:TableData, arg2:TableData) => {
        return arg1.age-arg2.age
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 300
    },
    {
      title: 'action',
      key: 'action',
      width: 300
    }
  ];
const datas: TableData[] = [
    {
      key: '1',
      name: 'John Brown',
      sex:'man',
      age: 32,
      address: 'New York No. 1 Lake Park',
      describe:"I am John Brown, a hansome man.Working in ByteDance as a front"
    },
    {
      key: '2',
      name: 'Jim Green',
      sex: 'femal',
      age: 42,
      address: 'London No. 1 Lake Park',
      describe:"I am Jim Green, a miss, fall in love with John Brown"
    },
    {
      key: '3',
      name: 'Joe Black',
      sex: 'man',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      describe: "I am Joe Black,I am 32 years old"
    },
    {
      key: '4',
      name: 'Joe Green',
      sex: 'femal',
      age: 35,
      address: 'Sidney No. 1 Lake Park',
      describe: "I am Joe Green ,I am dreaming to work for ByteDance"
    },
    {
      key: '5',
      name: 'Joe Json',
      sex: 'man',
      age: 37,
      address: 'Sidney No. 1 Lake Park',
      describe: "I am Joe Json, 37 years old"
    },
    {
      key: '6',
      name: 'Joe Jackson',
      sex: 'man',
      age: 39,
      address: 'Sidney No. 1 Lake Park',
      describe: "I am Joe Jackson, 39 years old"
    },
];
describe('test rd-table component', () => {
    it('test props', () => {
        const wrapper = mount(rdTable,{
            props:{
                dataSource: datas,
                columns: columns,
                border: true,
                strip: true,
                loading: true,
                scroll:{
                    x:600,
                    y:400
                }
            }
        })
        expect(wrapper.props()).toEqual({
            dataSource: datas,
            columns: columns,
            border: true,
            strip: true,
            loading: true,
            scroll:{
                x:600,
                y:400
            }
        })
    })
    it('test slots', async () => {
      const wrapper = mount(rdTable,{
        props:{
          dataSource: datas,
          columns: columns,
        },
        slots: {
          title: h('h1','人员统计'),
          footer: h('p','总结'),
          emptyText: h('p','暂无数据'),
          loadingText: h('p','数据加载中...'),
          headerCell: '<template #headerCell="{column}">😀{{column.title}}</template>',
          bodyCell: '<template #bodyCell="{text}">hello {{text}}</template>',
          expandeRowRender: '<template #expandeRowRender="{record}">{{record.describe}}</template>'
        }
      })
      const html = expect(wrapper.html())
      html.toContain("<h1>人员统计</h1>")
      html.toContain("<p>总结</p>")
      html.toContain("😀Name")
      html.toContain("hello John Brown")
    })
    it('test empty', () => {
      const wrapper = mount(rdTable,{
        props:{
          dataSource:[],
          columns: columns
        },
        slots: {
          emptyText: h('div',{},'数据为空')
        }
      })
      expect(wrapper.html()).toContain('<div>数据为空</div>')
    })
    it('test loading', () => {
      const wrapper = mount(rdTable, {
        props:{
          dataSource: datas,
          columns: columns,
          loading: true
        },
        slots: {
          loadingText: h('div',{},'数据加载中...')
        }
      })
      expect(wrapper.html()).toContain('<div>数据加载中...</div>')
    })
    it('test emits', async () => {
      const wrapper = mount(rdTable,{
        props:{
          dataSource: datas,
          columns: columns,
        },
      })
      await wrapper.find('[data-test="shaixuan"]').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('change')
    })
})