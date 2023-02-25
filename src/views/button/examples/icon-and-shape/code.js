const code =
`<template>
  <div class="example-button-icon-and-shape">
    <section>
      <vui-button type="primary" icon="search">Search</vui-button>
      <vui-button type="primary" icon="search" shape="round">Search</vui-button>
      <vui-button type="primary" icon="search" shape="circle" />
      <vui-button type="primary" shape="round">
        More<vui-icon type="more-x" />
      </vui-button>
      <vui-button type="primary" shape="circle">
        <vui-icon type="more-x" />
      </vui-button>
    </section>
    <section>
      <vui-button icon="search">Search</vui-button>
      <vui-button icon="search" shape="round">Search</vui-button>
      <vui-button icon="search" shape="circle" />
      <vui-button shape="round">
        More<vui-icon type="more-x" />
      </vui-button>
      <vui-button shape="circle">
        <vui-icon type="more-x" />
      </vui-button>
    </section>
  </div>
</template>

<style>
  .example-button-icon-and-shape section + section { margin-top:16px; }
  .example-button-icon-and-shape .vui-button { margin-right:16px; }
</style>
`;

export default code;