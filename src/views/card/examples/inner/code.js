const code =
`<template>
  <div class="example-card-inner">
    <vui-card title="Card title">
      <vui-card title="Inner card title">
        <p>Inner card content...</p>
        <template v-slot:extra>
          <a href="javascript:;">More</a>
        </template>
      </vui-card>
      <vui-card style="margin-top: 20px;" title="Inner card title">
        <p>Inner card content...</p>
        <template v-slot:extra>
          <a href="javascript:;">More</a>
        </template>
      </vui-card>
    </vui-card>
  </div>
</template>

<style>
  .example-card-inner p { margin:0; }
</style>
`;

export default code;