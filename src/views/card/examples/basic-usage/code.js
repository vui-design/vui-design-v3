const code =
`<template>
  <div class="example-card-basic-usage">
    <vui-card icon="menu-unfold" title="Card title">
      <p>Card content...</p>
      <p>Card content...</p>
      <p>Card content...</p>
      <template v-slot:extra>
        <a href="javascript:;">More</a>
      </template>
    </vui-card>
  </div>
</template>

<style>
  .example-card-basic-usage p { margin:0; }
  .example-card-basic-usage p + p { margin-top:8px; }
</style>
`;

export default code;