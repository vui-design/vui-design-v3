const code =
`<template>
  <vui-space>
    Space
    <vui-button type="primary">Button</vui-button>
    <vui-dropdown placement="bottom-left">
      <vui-button>Dropdown</vui-button>
      <template v-slot:menu>
        <vui-dropdown-menu>
          <vui-dropdown-menu-item key="1" title="Menu Item 1" />
          <vui-dropdown-menu-item key="2" title="Menu Item 2" />
          <vui-dropdown-menu-item key="3" title="Menu Item 3" />
          <vui-dropdown-menu-item key="4" title="Menu Item 4" />
        </vui-dropdown-menu>
      </template>
    </vui-dropdown>
    <vui-popconfirm title="Are you sure delete this task?" cancelText="No" okText="Yes">
      <vui-button type="dashed">Delete</vui-button>
    </vui-popconfirm>
  </vui-space>
</template>
`;

export default code;