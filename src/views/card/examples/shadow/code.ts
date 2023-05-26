const code =
`<template>
  <div class="example-card-shadow">
    <vui-row v-bind:gutter="24">
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false" shadow="hover" title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-card v-bind:bordered="false" shadow="always" title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
      </vui-col>
    </vui-row>
  </div>
</template>

<style>
  .example-card-shadow { background-color:#f6f6f6; padding:24px; }
  .example-card-shadow p { margin:0; }
  .example-card-shadow p + p { margin-top:8px; }
</style>
`;

export default code;