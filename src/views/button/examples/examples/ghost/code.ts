const code =
`<template>
  <div class="example-button-ghost">
    <vui-button type="primary" ghost>Primary</vui-button>
    <vui-button type="info" ghost>Info</vui-button>
    <vui-button type="warning" ghost>Warning</vui-button>
    <vui-button type="success" ghost>Success</vui-button>
    <vui-button type="danger" ghost>Danger</vui-button>
    <vui-button ghost>Default</vui-button>
    <vui-button type="dashed" ghost>Dashed</vui-button>
    <vui-button type="text" ghost>Text</vui-button>
  </div>
</template>

<style>
  .example-button-ghost { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; gap:16px; background-color:#bec8c8; padding:16px; }
</style>
`;

export default code;