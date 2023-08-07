const code =
`<template>
  <div class="example-space-customize">
    <section>
      <vui-space divider v-bind:gutter="24">
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
      </vui-space>
    </section>
    <section>
      <vui-space v-bind:gutter="40">
        <vui-button type="primary">Primary</vui-button>
        <vui-button>Default</vui-button>
        <vui-button type="dashed">Dashed</vui-button>
        <vui-button type="text">Text</vui-button>
      </vui-space>
    </section>
  </div>
</template>

<style>
  .example-space-customize section { margin-top:32px; }
</style>
`;

export default code;