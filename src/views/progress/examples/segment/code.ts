const code =
`<template>
  <div class="example-progress-segment">
    <vui-tooltip content="3 done / 3 in progress / 4 to do">
      <vui-progress v-bind:percentage="60" v-bind:success="30" />
    </vui-tooltip>
    <vui-space block>
      <vui-tooltip content="3 done / 3 in progress / 4 to do">
        <vui-progress type="circle" v-bind:percentage="60" v-bind:success="{ percentage: 30 }" />
      </vui-tooltip>
      <vui-tooltip content="3 done / 3 in progress / 4 to do">
        <vui-progress type="dashboard" v-bind:percentage="60" v-bind:success="{ percentage: 30, strokeColor: '#87d068' }" />
      </vui-tooltip>
    </vui-space>
  </div>
</template>

<style>
  .example-progress-segment .vui-progress-line { margin-bottom:16px; }
</style>
`;

export default code;