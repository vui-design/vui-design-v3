const code =
`<template>
  <div class="example-trend-basic-usage">
    <vui-trend v-bind:value="1125" v-bind:reference="1000" />
    <vui-trend v-bind:value="80" v-bind:reference="100" />
  </div>
</template>

<style>
  .example-trend-basic-usage { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-basic-usage .vui-trend + .vui-trend { margin-left:24px; }
</style>
`;

export default code;