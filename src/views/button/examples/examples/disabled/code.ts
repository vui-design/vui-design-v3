const code =
`<template>
  <div class="example-button-disabled">
    <vui-space block>
      <vui-button type="primary">Primary</vui-button>
      <vui-button type="primary" disabled>Primary(disabled)</vui-button>
    </vui-space>
    <vui-space block>
      <vui-button>Default</vui-button>
      <vui-button disabled>Default(disabled)</vui-button>
    </vui-space>
    <vui-space block>
      <vui-button type="dashed">Dashed</vui-button>
      <vui-button type="dashed" disabled>Dashed(disabled)</vui-button>
    </vui-space>
    <vui-space block>
      <vui-button type="text">Text</vui-button>
      <vui-button type="text" disabled>Text(disabled)</vui-button>
    </vui-space>
  </div>
</template>

<style>
  .example-button-disabled .vui-space + .vui-space { margin-top:16px; }
</style>
`;

export default code;