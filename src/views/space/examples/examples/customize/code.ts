const code =
`<template>
  <div class="example-space-customize">
    <vui-space block divider v-bind:gutter="24">
      <a href="javascript:;">Link</a>
      <a href="javascript:;">Link</a>
      <a href="javascript:;">Link</a>
    </vui-space>
    <vui-space block v-bind:gutter="40">
      <vui-button type="primary">Primary</vui-button>
      <vui-button>Default</vui-button>
      <vui-button type="dashed">Dashed</vui-button>
      <vui-button type="text">Text</vui-button>
    </vui-space>
  </div>
</template>

<style>
  .example-space-customize .vui-space + .vui-space { margin-top:16px; }
</style>
`;

export default code;