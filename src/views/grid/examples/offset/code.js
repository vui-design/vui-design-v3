const code =
`<template>
  <div class="example-grid-offset">
    <vui-row>
      <vui-col v-bind:span="8"><div>col-8</div></vui-col>
      <vui-col v-bind:span="8" v-bind:offset="8"><div>col-8 | col-offset-8</div></vui-col>
    </vui-row>
    <vui-row>
      <vui-col v-bind:span="6" v-bind:offset="6"><div>col-6 | col-offset-6</div></vui-col>
      <vui-col v-bind:span="6" v-bind:offset="6"><div>col-6 | col-offset-6</div></vui-col>
    </vui-row>
    <vui-row>
      <vui-col v-bind:span="12" v-bind:offset="6"><div>col-12 | col-offset-6</div></vui-col>
    </vui-row>
  </div>
</template>

<style>
  .example-grid-offset .vui-row { background-color:#f6f6f6; }
  .example-grid-offset .vui-row + .vui-row { margin-top:16px; }
  .example-grid-offset .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-offset .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-offset .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;