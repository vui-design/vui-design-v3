const code =
`<template>
  <div class="example-tag-size">
    <vui-tag size="small">Small</vui-tag>
    <vui-tag>Medium</vui-tag>
    <vui-tag size="large">Large</vui-tag>
  </div>
</template>

<style>
  .example-tag-size { display:flex; justify-content:flex-start; align-items:center; }
  .example-tag-size .vui-tag + .vui-tag { margin-left:8px; }
</style>
`;

export default code;