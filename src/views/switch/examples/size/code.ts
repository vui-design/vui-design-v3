const code =
`<template>
  <div class="example-switch-size">
    <section>
      <vui-switch size="small" />
      <vui-switch />
      <vui-switch size="large" />
    </section>
    <section>
      <vui-switch type="round" size="small" />
      <vui-switch type="round" />
      <vui-switch type="round" size="large" />
    </section>
    <section>
      <vui-switch type="line" size="small" />
      <vui-switch type="line" />
      <vui-switch type="line" size="large" />
    </section>
  </div>
</template>

<style>
  .example-switch-size section { display:flex; justify-content:flex-start; align-items:center; }
  .example-switch-size section + section { margin-top:16px; }
  .example-switch-size section .vui-switch + .vui-switch { margin-left:16px; }
</style>
`;

export default code;