const code =
`<template>
  <vui-watermark v-bind:rotate="20" text="zhangsan 张三">
    <vui-table v-bind:columns="columns" v-bind:data="data" bordered rowKey="id">
      <a href="javascript:;" slot="name" slot-scope="{ row, rowIndex }">{{row.name}}</a>
      <template slot="tags" slot-scope="{ row, rowIndex }">
        <vui-tag v-for="tag in row.tags" v-bind:key="tag.label" v-bind:color="tag.color" style="margin-right: 8px;">{{tag.label}}</vui-tag>
      </template>
      <vui-space divider slot="action" slot-scope="{ row, rowIndex }">
        <a href="javascript:;" style="display: block;">Edit</a>
        <a href="javascript:;" style="display: block;">Delete</a>
      </vui-space>
    </vui-table>
  </vui-watermark>
</template>

<script>
  export default {
    data() {
      const columns = [
        { key: "name", dataIndex: "name", width: 200, slot: "name", title: "Name" },
        { key: "age", dataIndex: "age", width: 140, title: "Age" },
        { key: "tags", dataIndex: "tags", slot: "tags", title: "Tags" },
        { key: "address", dataIndex: "address", title: "Address" },
        { key: "action", width: 140, slot: "action", title: "Action" }
      ];

      const data = [
        {
          id: 1,
          name: "John Brown",
          age: 20,
          tags: [
            { color: "green", label: "Nice" },
            { color: "geekblue", label: "Developer" }
          ],
          address: "New York No. 1 Lake Park"
        },
        {
          id: 2,
          name: "Jim Green",
          age: 24,
          tags: [
            { color: "red", label: "Loser" }
          ],
          address: "London No. 1 Lake Park"
        },
        {
          id: 3,
          name: "Joe Black",
          age: 30,
          tags: [
            { color: "green", label: "Cool" },
            { color: "geekblue", label: "Teacher" }
          ],
          address: "Sidney No. 1 Lake Park"
        },
        {
          id: 4,
          name: "Jon Snow",
          age: 26,
          tags: [
            { color: "red", label: "Loser" }
          ],
          address: "Ottawa No. 2 Lake Park"
        }
      ];

      return {
        columns,
        data
      };
    }
  };
</script>
`;

export default code;