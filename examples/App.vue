<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <r-Button>确认</r-Button>
  <hr />
  <g-button btnType="default">提交</g-button>
  <g-button btnType="success">提交</g-button>
  <g-button btnType="warning">提交</g-button>
  <!-- <rd-avatar :padding='5' shade imgSrc="http://8.142.19.67:3000/images/cat1.jpg"/>
  <rd-avatar :padding='2' shade imgSrc="http://8.142.19.97:3000/images/cat.jpg"/>
  <rd-avatar :padding='2' shade shape="square" imgSrc="http://8.142.19.67:3000/images/cat2.jpg"/>
  <rd-avatar size="small" bg="green">Tom</rd-avatar>
  <rd-avatar bg="pink">Alen</rd-avatar>
  <rd-avatar bg="blue">Jack</rd-avatar> -->
   <rd-table :columns="columns" :dataSource="[]" loading strip>
    <template #headerCell="{column}">
      <template v-if="column.key=='name'">
        <span>😊{{column.title}}</span>
      </template>
    </template>
    <template #bodyCell="{column,text,index,record}">
      <template v-if="column.key=='name'">
        <a href="">{{text}}</a>
      </template>
       <template v-if="column.key=='action'">
      <button @click="edit(record,index)">编辑</button>
      <button @click="del(record,index)">删除</button>
    </template>
    </template>
    <template #footer><h4>表尾</h4></template>
    <template #title><h4>标题</h4></template>
  </rd-table>
  <hr>
  <rd-table :columns="columns" :dataSource="[]" strip>
    <template #headerCell="{column}">
      <template v-if="column.key=='name'">
        <span>😊{{column.title}}</span>
      </template>
    </template>
    <template #bodyCell="{column,text,index,record}">
      <template v-if="column.key=='name'">
        <a href="">{{text}}</a>
      </template>
       <template v-if="column.key=='action'">
      <button @click="edit(record,index)">编辑</button>
      <button @click="del(record,index)">删除</button>
    </template>
    </template>
    <template #footer><h4>表尾</h4></template>
    <template #title>标题</template>
  </rd-table>
  <hr>
  <rd-table :columns="columns" :dataSource="data" strip>
    <template #headerCell="{column}">
      <template v-if="column.key=='name'">
        <span>😊{{column.title}}</span>
      </template>
    </template>
    <template #bodyCell="{column,text,index,record}">
      <template v-if="column.key=='name'">
        <a href="">{{text}}</a>
      </template>
       <template v-if="column.key=='action'">
      <button @click="edit(record,index)">编辑</button>
      <button @click="del(record,index)">删除</button>
    </template>
    </template>
    <template #footer><h4>表尾</h4></template>
    <template #title><h4>标题</h4></template>
  </rd-table>
  <hr>
  <rd-table :columns="columns" :dataSource="data" :width="600" strip>
    <template #headerCell="{column}">
      <template v-if="column.key=='name'">
        <span>😊{{column.title}}</span>
      </template>
    </template>
    <template #bodyCell="{column,text,index,record}">
      <template v-if="column.key=='name'">
        <a href="">{{text}}</a>
      </template>
       <template v-if="column.key=='action'">
      <button @click="edit(record,index)">编辑</button>
      <button @click="del(record,index)">删除</button>
    </template>
    </template>
   
  </rd-table>
  <hr>
  <rd-table :columns="columns" :dataSource="data"  :height="200" strip>
    <template #headerCell="{column}">
      <template v-if="column.key=='name'">
        <span>😊{{column.title}}</span>
      </template>
    </template>
    <template #bodyCell="{column,text,index,record}">
      <template v-if="column.key=='name'">
        <a href="">{{text}}</a>
      </template>
       <template v-if="column.key=='action'">
      <button @click="edit(record,index)">编辑</button>
      <button @click="del(record,index)">删除</button>
    </template>
    </template>
   
  </rd-table>
</template>
<script setup lang='ts'>
import {reactive} from 'vue'
type TableData = {
  key:string;
  name:string;
  sex:string;
  age:number;
  address:string;
}
const columns = [
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
const datas = [
  {
    key: '1',
    name: 'John Brown',
    sex:'man',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    sex: 'femal',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'man',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Joe Green',
    sex: 'femal',
    age: 35,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Joe Json',
    sex: 'man',
    age: 37,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Joe Jackson',
    sex: 'man',
    age: 39,
    address: 'Sidney No. 1 Lake Park',
  },
];
const data = reactive(datas)
type Data = {
  key: string,
  name: string,
  age: number,
  address: string
}
const edit = (record:Data,index:number) => {
  console.log(record,index)
  record.age=18
}
const del = (record:Data,index:number) => {
  console.log(record,index)
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
