const code =
`<template>
  <vui-dropdown trigger="contextmenu">
    <div style="height: 200px; background-color: #f6f6f6; text-align: center; line-height: 200px;">
      Right click on here
    </div>
    <template v-slot:menu>
      <vui-menu>
        <vui-menu-item key="1" title="Menu Item 1" />
        <vui-menu-item key="2" title="Menu Item 2" />
        <vui-menu-item key="3" title="Menu Item 3" />
        <vui-menu-item key="4" title="Menu Item 4" />
      </vui-menu>
    </template>
  </vui-dropdown>
</template>
`;

export default code;