const code =
`<template>
  <div class="example-button-link">
    <vui-button type="primary" href="https://cn.vuejs.org/">Vue.js</vui-button>
    <vui-button type="primary" href="https://github.com/" target="_blank">Github</vui-button>
    <vui-button href="/guide">Guide</vui-button>
    <vui-button href="/components" target="_blank">Components</vui-button>
  </div>
</template>

<style>
  .example-button-link { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; gap:16px; }
</style>
`;

export default code;