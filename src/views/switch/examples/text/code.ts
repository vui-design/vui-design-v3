const code =
`<template>
  <div class="example-switch-text">
    <vui-switch checkedText="开" uncheckedText="关" />
    <vui-switch v-bind:checkedText="1" v-bind:uncheckedText="0" />
    <vui-switch v-bind:defaultChecked="true">
      <template v-slot:checkedText>
        <vui-icon type="checkmark" />
      </template>
      <template v-slot:uncheckedText>
        <vui-icon type="crossmark" />
      </template>
    </vui-switch>
  </div>
</template>

<style>
  .example-switch-text { display:flex; justify-content:flex-start; align-items:center; }
  .example-switch-text .vui-switch + .vui-switch { margin-left:16px; }
</style>
`;

export default code;