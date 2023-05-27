const code = `
<template>
  <div class="example-statistic-card">
    <vui-row v-bind:gutter="24">
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false">
          <vui-statistic v-bind:value="11.5" v-bind:precision="2" suffix="%" title="Active" valueStyle="color: #52c41a;">
            <template v-slot:prefix>
              <vui-icon type="arrow-up" />
            </template>
          </vui-statistic>
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false">
          <vui-statistic v-bind:value="9.5" v-bind:precision="2" suffix="%" title="Idle" valueStyle="color: #ff4d4f;">
            <template v-slot:prefix>
              <vui-icon type="arrow-down" />
            </template>
          </vui-statistic>
        </vui-card>
      </vui-col>
    </vui-row>
  </div>
</template>

<style>
  .example-statistic-card { background-color:#f6f6f6; padding:24px; }
</style>
`;

export default code;