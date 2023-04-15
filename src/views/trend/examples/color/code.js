const code =
`<template>
  <div class="example-trend-color">
    <vui-trend v-bind:value="1125" v-bind:reference="1000" downwardColor="#a0d911" upwardColor="#eb2f96" />
    <vui-trend v-bind:value="80" v-bind:reference="100" downwardColor="#a0d911" upwardColor="#eb2f96" />
  </div>
</template>

<style>
  .example-trend-color { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-color .vui-trend + .vui-trend { margin-left:24px; }
</style>
`;

export default code;