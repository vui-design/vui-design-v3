const code =
`<template>
  <div class="example-badge-text">
    <vui-badge text="NEW">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
    <vui-badge text="HOT">
      <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
    </vui-badge>
  </div>
</template>

<style>
  .example-badge-text .vui-badge + .vui-badge { margin-left:16px; }
  .example-badge-text .vui-badge img { display:block; width:48px; height:48px; border-radius:5px; }
</style>
`;

export default code;