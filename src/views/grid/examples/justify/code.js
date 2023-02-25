const code =
`<template>
  <div class="example-grid-justify">
    <vui-divider orientation="left">start</vui-divider>
    <vui-row justify="start">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
    <vui-divider orientation="left">center</vui-divider>
    <vui-row  justify="center">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
    <vui-divider orientation="left">end</vui-divider>
    <vui-row  justify="end">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
    <vui-divider orientation="left">space-around</vui-divider>
    <vui-row  justify="space-around">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
    <vui-divider orientation="left">space-between</vui-divider>
    <vui-row  justify="space-between">
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
      <vui-col v-bind:span="4"><div>col-4</div></vui-col>
    </vui-row>
  </div>
</template>

<style>
  .example-grid-justify .vui-divider:first-child { margin-top:0; }
  .example-grid-justify .vui-row { background-color:#f6f6f6; }
  .example-grid-justify .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-justify .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-justify .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;