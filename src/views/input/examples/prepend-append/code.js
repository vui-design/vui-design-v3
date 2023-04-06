const code =
`<template>
  <div class="example-input-prepend-append">
    <vui-input prepend="https://github.com/u/" placeholder="Enter something..." />
    <vui-input append="@qq.com" placeholder="Enter something..." />
    <vui-input placeholder="Enter something...">
      <template v-slot:prepend>https://</template>
      <template v-slot:append>.com</template>
    </vui-input>
  </div>
</template>

<style>
  .example-input-prepend-append .vui-input:not(:first-child) { margin-top:24px; }
</style>
`;

export default code;