const code =
`<template>
  <div>
    <div class="example-breadcrumb-link">
      <vui-divider orientation="left">A Link</vui-divider>
      <vui-breadcrumb>
        <vui-breadcrumb-item href="/">Home</vui-breadcrumb-item>
        <vui-breadcrumb-item href="/components" target="_blank">Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
      <vui-breadcrumb>
        <vui-breadcrumb-item>
          <a href="/">Home</a>
        </vui-breadcrumb-item>
        <vui-breadcrumb-item>
          <a href="/components" target="_blank">Components</a>
        </vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
    </div>
    <div class="example-breadcrumb-link">
      <vui-divider orientation="left">Router Link</vui-divider>
      <vui-breadcrumb>
        <vui-breadcrumb-item>
          <router-link to="/">Home</router-link>
        </vui-breadcrumb-item>
        <vui-breadcrumb-item>
          <router-link to="/components">Components</router-link>
        </vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
    </div>
  </div>
</template>

<style>
  .example-breadcrumb-link + .example-breadcrumb-link { margin-top:24px; }
  .example-breadcrumb-link .vui-divider { margin-top:0; }
  .example-breadcrumb-link .vui-breadcrumb + .vui-breadcrumb { margin-top:8px; }
</style>
`;

export default code;