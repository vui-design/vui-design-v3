const code =
`<template>
  <div class="example-progress-segment">
    <vui-progress v-bind:percentage="60" v-bind:success="30" />
    <vui-space block>
      <vui-progress type="circle" v-bind:percentage="60" v-bind:success="{ percentage: 30 }" />
      <vui-progress type="dashboard" v-bind:percentage="60" v-bind:success="{ percentage: 30, strokeColor: '#1ab394' }" />
    </vui-space>
  </div>
</template>

<style>
  .example-progress-segment .vui-progress-line { margin-bottom:16px; }
</style>
`;

export default code;