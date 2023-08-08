const code =
`<template>
  <div class="example-list-simple">
    <vui-list bordered size="small" header="Header" footer="Footer">
      <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
      <vui-list-item>Japanese princess to wed commoner.</vui-list-item>
      <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
      <vui-list-item>Man charged over missing wedding girl.</vui-list-item>
    </vui-list>
    <vui-list bordered header="Header" footer="Footer">
      <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
      <vui-list-item>Japanese princess to wed commoner.</vui-list-item>
      <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
      <vui-list-item>Man charged over missing wedding girl.</vui-list-item>
    </vui-list>
    <vui-list bordered size="large" header="Header" footer="Footer">
      <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
      <vui-list-item>Japanese princess to wed commoner.</vui-list-item>
      <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
      <vui-list-item>Man charged over missing wedding girl.</vui-list-item>
    </vui-list>
  </div>
</template>

<style>
  .example-list-simple .vui-list + .vui-list { margin-top:24px; }
</style>
`;

export default code;