const code =
`<template>
  <div class="example-input-prefix-suffix">
    <vui-input prefix="mic" placeholder="Enter something..." />
    <vui-input suffix="calendar" placeholder="Enter something..." />
    <vui-input placeholder="Enter something...">
      <template v-slot:prefix>￥</template>
      <template v-slot:suffix>RMB</template>
    </vui-input>
    <vui-input placeholder="Enter something...">
      <template v-slot:prefix>
        <vui-icon type="group" />
      </template>
      <template v-slot:suffix>
        <vui-tooltip content="Extra Information">
          <vui-icon type="info" />
        </vui-tooltip>
      </template>
    </vui-input>
  </div>
</template>

<style>
  .example-input-prefix-suffix .vui-input:not(:first-child) { margin-top:24px; }
</style>
`;

export default code;