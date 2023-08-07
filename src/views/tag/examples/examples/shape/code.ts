const code =
`<template>
  <div class="example-tag-shape">
    <section>
      <vui-tag>Default</vui-tag>
      <vui-tag color="primary">Primary</vui-tag>
    </section>
    <section>
      <vui-tag shape="round">Default</vui-tag>
      <vui-tag color="primary" shape="round">Primary</vui-tag>
    </section>
    <section>
      <vui-tag shape="mark">Default</vui-tag>
      <vui-tag color="primary" shape="mark">Primary</vui-tag>
    </section>
  </div>
</template>

<style>
  .example-tag-shape section + section { margin-top:8px; }
  .example-tag-shape section { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-tag-shape section .vui-tag + .vui-tag { margin-left:8px; }
</style>
`;

export default code;