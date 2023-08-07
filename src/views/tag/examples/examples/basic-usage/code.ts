const code =
`<template>
  <div class="example-tag-basic-usage">
    <vui-tag>Default</vui-tag>
    <vui-tag color="primary">Primary</vui-tag>
    <vui-tag color="info">Info</vui-tag>
    <vui-tag color="warning">Warning</vui-tag>
    <vui-tag color="success">Success</vui-tag>
    <vui-tag color="error">Error</vui-tag>
  </div>
</template>

<style>
  .example-tag-basic-usage { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-tag-basic-usage .vui-tag + .vui-tag { margin-left:8px; }
</style>
`;

export default code;