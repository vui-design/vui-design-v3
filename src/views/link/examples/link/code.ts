const code =
`<template>
  <div class="example-link-link">
    <vui-link type="primary" href="https://cn.vuejs.org/">Vue.js</vui-link>
    <vui-link type="primary" href="https://github.com/" target="_blank">Github</vui-link>
    <vui-link href="/guide">Guide</vui-link>
    <vui-link href="/components" target="_blank">Components</vui-link>
  </div>
</template>

<style>
  .example-link-link .vui-link + .vui-link { margin-left:16px; }
</style>
`;

export default code;