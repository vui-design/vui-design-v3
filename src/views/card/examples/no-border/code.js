const code =
`<template>
  <div class="example-card-no-border">
    <vui-card v-bind:bordered="false" title="Card title">
      <p>Card content...</p>
      <p>Card content...</p>
      <p>Card content...</p>
    </vui-card>
  </div>
</template>

<style>
  .example-card-no-border { background-color:#f6f6f6; padding:24px; }
  .example-card-no-border p { margin:0; }
  .example-card-no-border p + p { margin-top:8px; }
</style>
`;

export default code;