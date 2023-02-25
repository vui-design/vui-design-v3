const code =
`<template>
  <div class="example-grid-sort">
    <vui-row>
      <vui-col v-bind:span="18" v-bind:push="6"><div>col-18 | col-push-6</div></vui-col>
      <vui-col v-bind:span="6" v-bind:pull="18"><div>col-6 | col-pull-18</div></vui-col>
    </vui-row>
  </div>
</template>

<style>
  .example-grid-sort .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-sort .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-sort .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;