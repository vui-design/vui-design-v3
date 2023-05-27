const code =
`<template>
  <div class="example-trend-placeholder">
    <vui-trend v-bind:value="1125" v-bind:target="0" />
    <vui-trend v-bind:value="80" v-bind:target="0" placeholder="--" />
  </div>
</template>

<style>
  .example-trend-placeholder { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-placeholder .vui-trend + .vui-trend { margin-left:24px; }
</style>
`;

export default code;