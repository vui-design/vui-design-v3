const code =
`<template>
  <div>
    <div class="example-grid-flex-stretch">
      <vui-divider orientation="left">Percentage columns</vui-divider>
      <vui-row>
        <vui-col v-bind:flex="2"><div>2 / 5</div></vui-col>
        <vui-col v-bind:flex="3"><div>3 / 5</div></vui-col>
      </vui-row>
    </div>
    <div class="example-grid-flex-stretch">
      <vui-divider orientation="left">Fill rest</vui-divider>
      <vui-row>
        <vui-col flex="200px"><div>200px</div></vui-col>
        <vui-col flex="auto"><div>Fill Rest</div></vui-col>
      </vui-row>
    </div>
    <div class="example-grid-flex-stretch">
      <vui-divider orientation="left">Raw flex style</vui-divider>
      <vui-row>
        <vui-col flex="1 1 200px"><div>1 1 200px</div></vui-col>
        <vui-col flex="0 1 300px"><div>0 1 300px</div></vui-col>
      </vui-row>
      <vui-row v-bind:wrap="false">
        <vui-col flex="none"><div style="padding: 0 16px;">none</div></vui-col>
        <vui-col flex="auto"><div>auto with no-wrap</div></vui-col>
      </vui-row>
    </div>
  </div>
</template>

<style>
  .example-grid-flex-stretch + .example-grid-flex-stretch { margin-top:32px; }
  .example-grid-flex-stretch .vui-divider { margin-top:0; }
  .example-grid-flex-stretch .vui-row { background-color:#ececec; }
  .example-grid-flex-stretch .vui-row + .vui-row { margin-top:16px; }
  .example-grid-flex-stretch .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-flex-stretch .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-flex-stretch .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;