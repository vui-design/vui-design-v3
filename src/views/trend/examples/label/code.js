const code =
`<template>
  <div class="example-trend-label">
    <vui-trend v-bind:value="1125" v-bind:reference="1000" label="环比上期" />
    <vui-trend v-bind:value="80" v-bind:reference="100" label="同比上周同期" />
  </div>
</template>

<style>
  .example-trend-label { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-label .vui-trend + .vui-trend { margin-left:24px; }
</style>
`;

export default code;