const code =
`<template>
  <div class="example-card-in-column">
    <vui-row v-bind:gutter="[24, 24]">
      <vui-col v-bind:span="8">
        <vui-card v-bind:bordered="false" title="Card title">
          <p>Card content...</p>
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="8">
        <vui-card v-bind:bordered="false" title="Card title">
          <p>Card content...</p>
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="8">
        <vui-card v-bind:bordered="false" title="Card title">
          <p>Card content...</p>
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="16">
        <vui-card v-bind:bordered="false" title="Card title">
          <p>Card content...</p>
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="8">
        <vui-card v-bind:bordered="false" title="Card title">
          <p>Card content...</p>
        </vui-card>
      </vui-col>
    </vui-row>
  </div>
</template>

<style>
  .example-card-in-column { background-color:#f6f6f6; padding:24px; }
  .example-card-in-column p { margin:0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
</style>
`;

export default code;