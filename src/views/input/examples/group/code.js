const code =
`<template>
  <div class="example-input-group">
    <vui-input-group>
      <vui-input placeholder="Enter something..." />
      <vui-button type="primary">Search</vui-button>
    </vui-input-group>
    <vui-input-group compact>
      <vui-input placeholder="Enter something..." />
      <vui-button type="primary">Search</vui-button>
    </vui-input-group>
    <vui-input-group>
      <vui-input defaultValue="0571" placeholder="Area code" style="width: 80px;" />
      <vui-input placeholder="Please enter phone number..." style="width: 220px;" />
    </vui-input-group>
    <vui-input-group compact>
      <vui-input defaultValue="0571" placeholder="Area code" style="width: 80px;" />
      <vui-input placeholder="Please enter phone number..." style="width: 220px;" />
    </vui-input-group>
  </div>
</template>

<style>
  .example-input-group .vui-input-group + .vui-input-group { margin-top:24px; }
</style>
`;

export default code;