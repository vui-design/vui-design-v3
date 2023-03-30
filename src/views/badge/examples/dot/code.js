const code =
`<template>
  <div class="example-badge-dot">
    <vui-badge dot v-bind:count="99">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge dot v-bind:count="100">
      <vui-icon type="mail" />
    </vui-badge>
    <vui-badge dot v-bind:count="1000">
      <a href="javascript:;">Link</a>
    </vui-badge>
  </div>
</template>

<style>
  .example-badge-dot .vui-badge + .vui-badge { margin-left:16px; }
  .example-badge-dot .vui-badge img { display:block; width:48px; height:48px; border-radius:5px; }
</style>
`;

export default code;