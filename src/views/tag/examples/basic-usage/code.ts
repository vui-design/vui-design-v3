const code =
`<template>
  <div class="example-tag-basic-usage">
    <vui-tag>Tag 1</vui-tag>
    <vui-tag>Tag 2</vui-tag>
    <vui-tag>Tag 3</vui-tag>
  </div>
</template>

<style>
  .example-tag-basic-usage { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-tag-basic-usage .vui-tag + .vui-tag { margin-left:8px; }
</style>
`;

export default code;