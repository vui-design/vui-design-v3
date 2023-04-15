const code =
`<template>
  <div class="example-trend-basic-usage">
    <vui-trend v-bind:value="1125" v-bind:reference="1000" v-bind:precision="2" />
    <vui-trend v-bind:value="80" v-bind:reference="100" v-bind:precision="2" />
  </div>
</template>

<style>
  .example-trend-precision { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-precision .vui-trend + .vui-trend { margin-left:24px; }
</style>
`;

export default code;