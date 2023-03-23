const code =
`<template>
  <vui-breadcrumb>
    <vui-breadcrumb-item>Home</vui-breadcrumb-item>
    <vui-breadcrumb-item>Components</vui-breadcrumb-item>
    <vui-breadcrumb-item>
      <vui-link>
        Navigation
        <vui-icon type="chevron-down" />
      </vui-link>
      <template v-slot:menu>
        <vui-menu>
          <vui-menu-item key="anchor" title="Anchor" />
          <vui-menu-item key="breadcrumb" title="Breadcrumb" />
          <vui-menu-item key="dropdown" title="Dropdown" />
          <vui-menu-item key="menu" title="Menu" />
        </vui-menu>
      </template>
    </vui-breadcrumb-item>
    <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
  </vui-breadcrumb>
</template>
`;

export default code;