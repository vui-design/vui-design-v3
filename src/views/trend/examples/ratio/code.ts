const code =
`<template>
  <div class="example-trend-ratio">
    <vui-trend v-bind:ratio="12.5" />
    <vui-trend v-bind:ratio="-20" />
  </div>
</template>

<style>
  .example-trend-ratio { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-ratio .vui-trend + .vui-trend { margin-left:24px; }
</style>
`;

export default code;