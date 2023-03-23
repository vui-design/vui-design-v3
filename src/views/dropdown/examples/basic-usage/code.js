const code =
`<template>
  <vui-dropdown>
    <vui-link type="primary">
      Hover me<vui-icon type="chevron-down" />
    </vui-link>
    <template v-slot:menu>
      <vui-menu>
        <vui-menu-item key="1" title="Menu Item 1" />
        <vui-menu-item key="2" title="Menu Item 2" />
        <vui-menu-item key="3" title="Menu Item 3" />
        <vui-menu-item key="4" danger title="Menu Item danger" />
      </vui-menu>
    </template>
  </vui-dropdown>
</template>
`;

export default code;