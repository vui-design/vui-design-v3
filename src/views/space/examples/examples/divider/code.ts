const code =
`<template>
  <div class="example-space-divider">
    <vui-space block divider>
      <a href="javascript:;">Link</a>
      <a href="javascript:;">Link</a>
      <a href="javascript:;">Link</a>
    </vui-space>
    <vui-space block v-bind:divider="54" v-bind:gutter="32">
      <vui-statistic v-bind:value="110888" title="Active Users" />
      <vui-statistic v-bind:value="110888" v-bind:precision="2" title="Account Balance (CNY)" />
      <vui-statistic v-bind:value="88" title="Unmerged">
        <template slot="suffix">/ 100</template>
      </vui-statistic>
    </vui-space>
  </div>
</template>

<style>
  .example-space-divider .vui-space + .vui-space { margin-top:16px; }
</style>
`;

export default code;