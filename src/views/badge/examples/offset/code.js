const code =
`<template>
  <div class="example-badge-offset">
    <vui-badge v-bind:count="10" v-bind:offset="[5, -5]">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
  </div>
</template>

<style>
  .example-badge-offset .vui-badge img { display:block; width:48px; height:48px; border-radius:5px; }
</style>
`;

export default code;