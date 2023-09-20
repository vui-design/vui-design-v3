const code =
`<template>
  <div class="example-pagination-simple">
    <vui-pagination simple v-bind:total="50" />
    <vui-pagination simple v-bind:total="50" showTotal />
  </div>
</template>

<style>
  .example-pagination-simple .vui-pagination + .vui-pagination { margin-top:24px; }
</style>
`;

export default code;