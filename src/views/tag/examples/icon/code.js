const code =
`<template>
  <div class="example-tag-icon">
    <vui-tag icon="chat-ellipsis-filled" color="primary">Comment</vui-tag>
    <vui-tag icon="thumb-up-filled" color="success">Thumb up</vui-tag>
    <vui-tag icon="thumb-down-filled" color="error">Thumb down</vui-tag>
  </div>
</template>

<style>
  .example-tag-icon { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-tag-icon .vui-tag + .vui-tag { margin-left:8px; }
</style>
`;

export default code;