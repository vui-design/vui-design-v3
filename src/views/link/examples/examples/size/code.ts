const code =
`<template>
  <div class="example-link-size">
    <vui-space block>
      <vui-link size="small">Default</vui-link>
      <vui-link type="primary" size="small">Primary</vui-link>
      <vui-link icon="edit" size="small">Edit</vui-link>
      <vui-link type="danger" icon="dustbin" size="small">Delete</vui-link>
    </vui-space>
    <vui-space block>
      <vui-link>Default</vui-link>
      <vui-link type="primary">Primary</vui-link>
      <vui-link icon="edit">Edit</vui-link>
      <vui-link type="danger" icon="dustbin">Delete</vui-link>
    </vui-space>
    <vui-space block>
      <vui-link size="large">Default</vui-link>
      <vui-link type="primary" size="large">Primary</vui-link>
      <vui-link icon="edit" size="large">Edit</vui-link>
      <vui-link type="danger" icon="dustbin" size="large">Delete</vui-link>
    </vui-space>
  </div>
</template>

<style>
  .example-link-size .vui-space + .vui-space { margin-top:8px; }
</style>
`;

export default code;