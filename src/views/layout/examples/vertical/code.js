const code =
`<template>
  <vui-layout>
    <vui-layout-header color="dark">
      <h1 style="float: left; width: 120px; height: 32px; background-color: rgba(255,255,255,0.2); margin: 16px 0;" />
      <vui-menu
        mode="horizontal"
        color="dark"
        selectedKeys="1"
        style="float: left; margin-left: 24px; line-height: 64px;"
      >
        <vui-menu-item key="1" title="Item 1" />
        <vui-menu-item key="2" title="Item 2" />
        <vui-menu-item key="3" title="Item 3" />
      </vui-menu>
    </vui-layout-header>
    <vui-layout-content style="padding: 0 48px;">
      <vui-breadcrumb style="margin: 24px 0;">
        <vui-breadcrumb-item>Home</vui-breadcrumb-item>
        <vui-breadcrumb-item>Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>Layout</vui-breadcrumb-item>
      </vui-breadcrumb>
      <div style="min-height: 280px; background-color: #fff; padding: 24px;">Content</div>
    </vui-layout-content>
    <vui-layout-footer style="text-align: center;">2010-2020 © EXAMPLE</vui-layout-footer>
  </vui-layout>
</template>
`;

export default code;