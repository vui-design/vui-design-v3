const code =
`<template>
  <vui-dropdown trigger="click">
    <vui-link type="primary">
      Click me<vui-icon type="chevron-down" />
    </vui-link>
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