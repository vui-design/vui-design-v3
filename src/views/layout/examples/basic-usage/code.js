const code =
`<template>
  <div class="example-layout-basic-usage">
    <vui-layout>
      <vui-layout-header>Header</vui-layout-header>
      <vui-layout-content>Content</vui-layout-content>
      <vui-layout-footer>Footer</vui-layout-footer>
    </vui-layout>
    <vui-layout>
      <vui-layout-header>Header</vui-layout-header>
      <vui-layout>
        <vui-layout-sider>Sider</vui-layout-sider>
        <vui-layout-content>Content</vui-layout-content>
      </vui-layout>
      <vui-layout-footer>Footer</vui-layout-footer>
    </vui-layout>
    <vui-layout>
      <vui-layout-header>Header</vui-layout-header>
      <vui-layout>
        <vui-layout-content>Content</vui-layout-content>
        <vui-layout-sider>Sider</vui-layout-sider>
      </vui-layout>
      <vui-layout-footer>Footer</vui-layout-footer>
    </vui-layout>
    <vui-layout>
      <vui-layout-sider>Sider</vui-layout-sider>
      <vui-layout>
        <vui-layout-header>Header</vui-layout-header>
        <vui-layout-content>Content</vui-layout-content>
        <vui-layout-footer>Footer</vui-layout-footer>
      </vui-layout>
    </vui-layout>
  </div>
</template>

<style>
  .example-layout-basic-usage .vui-layout + .vui-layout { margin-top:24px; }
  .example-layout-basic-usage .vui-layout-header,
  .example-layout-basic-usage .vui-layout-footer { background-color:rgba(45,140,240,0.7); color:#fff; text-align:center; }
  .example-layout-basic-usage .vui-layout-sider { background-color:rgba(45,140,240,0.85); color:#fff; text-align:center; line-height:120px; }
  .example-layout-basic-usage .vui-layout-content { background-color:rgba(45,140,240,1); color:#fff; text-align:center; line-height:120px; }
</style>
`;

export default code;