const code =
`<template>
  <div class="example-input-affix">
    <vui-input affixBefore="mic" placeholder="Enter something..." />
    <vui-input affixAfter="calendar" placeholder="Enter something..." />
    <vui-input placeholder="Enter something...">
      <template v-slot:affixBefore>￥</template>
      <template v-slot:affixAfter>RMB</template>
    </vui-input>
    <vui-input placeholder="Enter something...">
      <template v-slot:affixBefore>
        <vui-icon type="group" />
      </template>
      <template v-slot:affixAfter>
        <vui-tooltip content="Extra Information">
          <vui-icon type="info" />
        </vui-tooltip>
      </template>
    </vui-input>
  </div>
</template>

<style>
  .example-input-affix .vui-input:not(:first-child) { margin-top:24px; }
</style>
`;

export default code;