const code = `
<template>
  <div class="example-statistic-extra">
    <vui-row v-bind:gutter="24">
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false">
          <vui-statistic v-bind:value="125670" title="New Users" extra="Extra" />
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false">
          <vui-statistic v-bind:value="50.52" v-bind:precision="2" suffix="%" title="User Growth Rate">
            <template v-slot:extra>
              <vui-tooltip content="This is a tooltip">
                <vui-icon type="help" style="cursor: pointer;" />
              </vui-tooltip>
            </template>
          </vui-statistic>
        </vui-card>
      </vui-col>
    </vui-row>
  </div>
</template>

<style>
  .example-statistic-extra { background-color:#f6f6f6; padding:24px; }
</style>
`;

export default code;