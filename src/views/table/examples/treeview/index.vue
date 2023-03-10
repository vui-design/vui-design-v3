<template>
  <example v-bind:code="code" id="example-table-treeview">
    <template slot="demo">
      <vui-table v-bind:columns="columns" v-bind:data="data" v-bind:rowTreeview="rowTreeview" rowKey="id">
        <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </vui-space>
      </vui-table>
    </template>
    <template slot="title">树形结构</template>
    <template slot="description">
      <p>通过设置 <code>rowTreeview</code> 属性可以使表格进行树形结构展示。</p>
      <p>通过 <code>rowTreeview.value</code> 属性设置默认展开的行，数据类型为 <code>Array</code>，数据项为对应行的 <code>rowKey</code> 取值。<a href="javascript:;">详见下文 API 说明</a></p>
    </template>
  </example>
</template>

<script>
  import Example from "src/components/example";
  import code from "./code";

  export default {
    components: {
      Example
    },
    data() {
      const columns = [
        { key: "province", dataIndex: "province", title: "Province/City" },
        { key: "area", dataIndex: "area", title: "Area" },
        { key: "population", dataIndex: "population", title: "Population" },
        { key: "action", width: 140, slot: "action", title: "Action" }
      ];

      const data = [
        {
          id: 1,
          province: "Zhejiang",
          area: 105500,
          population: 5850,
          children: [
            {
              id: 11,
              province: "Ningbo",
              area: 9816,
              population: 854.2
            },
            {
              id: 12,
              province: "Hangzhou",
              area: 16853.57,
              population: 1036,
              children: [
                { id: 121, province: "Shangcheng", area: 26.06, population: 34.5},
                { id: 122, province: "Xiacheng", area: 29.33, population: 52.6 },
                { id: 123, province: "Xihu", area: 34.8, population: 49.56 },
                { id: 124, province: "Binjiang", area: 72.22, population: 39.2 }
              ]
            }
          ]
        },
        {
          id: 2,
          province: "Beijing",
          area: 16410.54,
          population: 2153.6
        },    
        {
          id: 3,
          province: "Jiangsu",
          area: 107200,
          population: 8070,
          children: [
            { id: 31, province: "Nanjing", area: 6587.02, population: 850.0 },
            { id: 32, province: "Wuxi", area: 4627.47, population: 659.15 },
            { id: 33, province: "Suzhou", area: 8657.32, population: 1074.99 }
          ]
        },  
        {
          id: 4,
          province: "Guangdong",
          area: 179700,
          population: 11521.00,
          children: [
            {
              id: 41,
              province: "Guangzhou",
              area: 7434.4,
              population: 1530.59,
              children: [
                { id: 411, province: "Huangpu", area: 484.17, population: 115.12 }
              ]
            },
            {
              id: 42,
              province: "Zhuhai",
              area: 1736.46,
              population: 202.37
            },
            {
              id: 43,
              province: "Shenzhen",
              area: 1997.47,
              population: 1343.88,
              children: [
                { id: 431, province: "Bao'an", area: 398.38, population: 334.25 }
              ]
            }
          ]
        }
      ];

      const rowTreeview = {
        children: "children",
        value: [1]
      };

      return {
        code,
        columns,
        data,
        rowTreeview
      };
    }
  };
</script>