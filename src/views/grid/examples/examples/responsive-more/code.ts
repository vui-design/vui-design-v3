const code =
`<template>
  <div class="example-grid-responsive-more">
    <vui-row>
      <vui-col v-bind:xs="{ span: 5, offset: 1 }" v-bind:lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
      <vui-col v-bind:xs="{ span: 11, offset: 1 }" v-bind:lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
      <vui-col v-bind:xs="{ span: 5, offset: 1 }" v-bind:lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
    </vui-row>
  </div>
</template>

<style>
  .example-grid-responsive-more .vui-row { background-color:#f6f6f6; }
  .example-grid-responsive-more .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-responsive-more .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-responsive-more .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;