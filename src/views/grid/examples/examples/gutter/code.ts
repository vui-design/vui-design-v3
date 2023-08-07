const code =
`<template>
  <div>
    <div class="example-grid-gutter">
      <vui-divider orientation="left">Horizontal</vui-divider>
      <vui-row v-bind:gutter="16">
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
      </vui-row>
    </div>
    <div class="example-grid-gutter">
      <vui-divider orientation="left">Vertical</vui-divider>
      <vui-row v-bind:gutter="[16, 16]">
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
      </vui-row>
    </div>
    <div class="example-grid-gutter">
      <vui-divider orientation="left">Responsive</vui-divider>
      <vui-row v-bind:gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        <vui-col v-bind:span="6"><div>col-6</div></vui-col>
      </vui-row>
    </div>
  </div>
</template>

<style>
  .example-grid-gutter + .example-grid-gutter { margin-top:32px; }
  .example-grid-gutter .vui-divider { margin-top:0; }
  .example-grid-gutter .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-gutter .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-gutter .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;