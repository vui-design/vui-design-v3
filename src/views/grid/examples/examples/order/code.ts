const code =
`<template>
  <div>
    <div class="example-grid-order">
      <vui-divider orientation="left">Normal</vui-divider>
      <vui-row>
        <vui-col v-bind:span="6" v-bind:order="4"><div>1 | col-order-4</div></vui-col>
        <vui-col v-bind:span="6" v-bind:order="3"><div>2 | col-order-3</div></vui-col>
        <vui-col v-bind:span="6" v-bind:order="2"><div>3 | col-order-2</div></vui-col>
        <vui-col v-bind:span="6" v-bind:order="1"><div>4 | col-order-1</div></vui-col>
      </vui-row>
    </div>
    <div class="example-grid-order">
      <vui-divider orientation="left">Responsive</vui-divider>
      <vui-row>
        <vui-col v-bind:span="6" v-bind:xs="{ order: 1 }" v-bind:sm="{ order: 2 }" v-bind:md="{ order: 3 }" v-bind:lg="{ order: 4 }">
          <div>1 | col-order-responsive</div>
        </vui-col>
        <vui-col v-bind:span="6" v-bind:xs="{ order: 2 }" v-bind:sm="{ order: 3 }" v-bind:md="{ order: 4 }" v-bind:lg="{ order: 1 }">
          <div>2 | col-order-responsive</div>
        </vui-col>
        <vui-col v-bind:span="6" v-bind:xs="{ order: 3 }" v-bind:sm="{ order: 4 }" v-bind:md="{ order: 1 }" v-bind:lg="{ order: 2 }">
          <div>3 | col-order-responsive</div>
        </vui-col>
        <vui-col v-bind:span="6" v-bind:xs="{ order: 4 }" v-bind:sm="{ order: 1 }" v-bind:md="{ order: 2 }" v-bind:lg="{ order: 3 }">
          <div>4 | col-order-responsive</div>
        </vui-col>
      </vui-row>
    </div>
  </div>
</template>

<style>
  .example-grid-order + .example-grid-order { margin-top:32px; }
  .example-grid-order .vui-divider { margin-top:0; }
  .example-grid-order .vui-row { background-color:#f6f6f6; }
  .example-grid-order .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-order .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-order .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;