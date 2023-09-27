const code =
`<template>
  <div>
    <div class="example-tag-icon">
      <vui-divider orientation="left">Normal</vui-divider>
      <div class="vui-tag-list">
        <vui-tag color="primary" icon="chat-ellipsis-filled">Comment</vui-tag>
        <vui-tag color="success" icon="thumb-up-filled">Thumb Up</vui-tag>
        <vui-tag color="error" icon="thumb-down-filled">Thumb Down</vui-tag>
      </div>
    </div>
    <div class="example-tag-icon">
      <vui-divider orientation="left">Round & Ghost</vui-divider>
      <div class="vui-tag-list">
        <vui-tag shape="round" color="primary" ghost icon="time-filled">Todo</vui-tag>
        <vui-tag shape="round" color="success" ghost icon="checkmark-circle-filled">Approved</vui-tag>
        <vui-tag shape="round" color="error" ghost icon="crossmark-circle-filled">Approval Failed</vui-tag>
      </div>
    </div>
    <div class="example-tag-icon">
      <vui-divider orientation="left">Borderless & Round & Ghost</vui-divider>
      <div class="vui-tag-list">
        <vui-tag v-bind:bordered="false" shape="round" color="primary" ghost icon="time-filled">Todo</vui-tag>
        <vui-tag v-bind:bordered="false" shape="round" color="success" ghost icon="checkmark-circle-filled">Approved</vui-tag>
        <vui-tag v-bind:bordered="false" shape="round" color="error" ghost icon="crossmark-circle-filled">Approval Failed</vui-tag>
      </div>
    </div>
  </div>
</template>

<style>
  .example-tag-icon + .example-tag-icon { margin-top:24px; }
  .example-tag-icon .vui-divider { margin-top:0; }
  .example-tag-icon .vui-tag-list { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; gap:8px; }
</style>
`;

export default code;