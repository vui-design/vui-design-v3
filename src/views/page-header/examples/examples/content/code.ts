const code =
`<template>
  <vui-page-header
    avatar="https://dummyimage.com/32x32/2d8cf0/fff"
    title="Title"
    subTitle="This is a subtitle"
  >
  <template v-slot:breadcrumb>
    <vui-breadcrumb>
      <vui-breadcrumb-item>Home</vui-breadcrumb-item>
      <vui-breadcrumb-item>Components</vui-breadcrumb-item>
      <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
      <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>
    </vui-breadcrumb>
  </template>
  <template v-slot:tags>
    <vui-tag color="red">Red Tag</vui-tag>
    <vui-tag color="blue">Blue Tag</vui-tag>
  </template>
  <template v-slot:extra>
    <vui-button>Action 1</vui-button>
    <vui-button>Action 2</vui-button>
    <vui-button type="primary">Action 3</vui-button>
  </template>
  <vui-descriptions>
    <vui-description label="UserName">Chillyme</vui-description>
    <vui-description label="Telephone">18012341234</vui-description>
    <vui-description label="Live">Hangzhou, Zhejiang</vui-description>
    <vui-description label="Address" v-bind:span="2">
      No. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China
    </vui-description>
    <vui-description label="Remark">Empty</vui-description>
  </vui-descriptions>
  <template v-slot:footer>
    <vui-menu mode="horizontal" defaultSelectedKey="1">
      <vui-menu-item key="1" title="Navigation 1" />
      <vui-menu-item key="2" title="Navigation 2" />
    </vui-menu>
  </template>
  </vui-page-header>
</template>
`;

export default code;