const code = `
<template>
  <vui-row v-bind:gutter="16">
    <vui-col v-bind:span="12">
      <vui-statistic v-bind:value="1024" title="Feedback">
        <template v-slot:prefix>
          <vui-icon type="thumb-up" />
        </template>
      </vui-statistic>
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-statistic v-bind:value="88" title="Unmerged">
        <template v-slot:suffix>/ 100</template>
      </vui-statistic>
    </vui-col>
  </vui-row>
</template>
`;

export default code;