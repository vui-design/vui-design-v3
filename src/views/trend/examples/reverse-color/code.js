const code =
`<template>
  <div class="example-trend-reverse-color">
    <vui-trend v-bind:value="1125" v-bind:reference="1000" reverseColor />
    <vui-trend v-bind:value="80" v-bind:reference="100" reverseColor />
  </div>
</template>

<style>
  .example-trend-reverse-color { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-reverse-color .vui-trend + .vui-trend { margin-left:24px; }
</style>
`;

export default code;