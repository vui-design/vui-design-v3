const code =
`<template>
  <vui-transfer
    v-bind:titles="titles"
    v-bind:panelStyle="panelStyle"
    v-bind:options="options"
    v-bind:selectedKeys="selectedKeys"
    v-bind:targetKeys="targetKeys"
    v-bind:formatter="formatter"
    v-bind:searchable="searchable"
    v-bind:filter="filter"
    v-on:select="handleSelect"
    v-on:change="handleChange"
  />
</template>

<script>
  export default {
    data() {
      const dataSource = this.getDataSource();

      return {
        titles: ["Source", "Target"],
        panelStyle: {
          width: "240px"
        },
        options: dataSource.options,
        selectedKeys: [],
        targetKeys: dataSource.targetKeys,
        formatter: option => option.title + " - " + option.description,
        searchable: true,
        filter: (keyword, option) => option.title.indexOf(keyword) > -1 || option.description.indexOf(keyword) > -1
      };
    },
    methods: {
      getDataSource() {
        let options = [];
        let targetKeys = [];

        for (let i = 0; i < 20; i++) {
          const key = i + 1;

          options.push({
            key: key,
            title: "Option " + key,
            description: "Description of option " + key
          });

          if (Math.random() * 2 > 1) {
            targetKeys.push(key);
          }
        }

        return {
          options,
          targetKeys
        };
      },
      handleSelect(sourceSelectedKeys, targetSelectedKeys) {
        console.log("sourceSelectedKeys:", sourceSelectedKeys, "targetSelectedKeys:", targetSelectedKeys);

        this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
      },
      handleChange(nextTargetKeys, direction, moveKeys) {
        console.log("targetKeys:", nextTargetKeys);
        console.log("direction:", direction);
        console.log("moveKeys:", moveKeys);

        this.targetKeys = nextTargetKeys;
      }
    }
  };
</script>
`;

export default code;