const code =
`<template>
  <div class="example-input-addon">
    <vui-input addonBefore="https://github.com/u/" placeholder="Enter something..." />
    <vui-input addonAfter="@qq.com" placeholder="Enter something..." />
    <vui-input placeholder="Enter something...">
      <template v-slot:addonBefore>https://</template>
      <template v-slot:addonAfter>.com</template>
    </vui-input>
  </div>
</template>

<style>
  .example-input-addon .vui-input:not(:first-child) { margin-top:24px; }
</style>
`;

export default code;