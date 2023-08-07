const code =
`<template>
  <div class="example-grid-playground">
    <h4>Horizontal Gutter:</h4>
    <vui-radio-group v-model:value="hgutter">
      <vui-radio v-bind:value="8">8px</vui-radio>
      <vui-radio v-bind:value="16">16px</vui-radio>
      <vui-radio v-bind:value="24">24px</vui-radio>
      <vui-radio v-bind:value="32">32px</vui-radio>
      <vui-radio v-bind:value="40">40px</vui-radio>
      <vui-radio v-bind:value="48">48px</vui-radio>
    </vui-radio-group>
    <h4>Vertical Gutter:</h4>
    <vui-radio-group v-model:value="vgutter">
      <vui-radio v-bind:value="8">8px</vui-radio>
      <vui-radio v-bind:value="16">16px</vui-radio>
      <vui-radio v-bind:value="24">24px</vui-radio>
      <vui-radio v-bind:value="32">32px</vui-radio>
      <vui-radio v-bind:value="40">40px</vui-radio>
      <vui-radio v-bind:value="48">48px</vui-radio>
    </vui-radio-group>
    <h4>Column Count:</h4>
    <vui-radio-group v-model:value="count">
      <vui-radio v-bind:value="2">2</vui-radio>
      <vui-radio v-bind:value="3">3</vui-radio>
      <vui-radio v-bind:value="4">4</vui-radio>
      <vui-radio v-bind:value="6">6</vui-radio>
      <vui-radio v-bind:value="8">8</vui-radio>
      <vui-radio v-bind:value="12">12</vui-radio>
    </vui-radio-group>
    <vui-row v-bind:gutter="[hgutter, vgutter]">
      <vui-col v-for="item in count" v-bind:key="item.toString()" v-bind:span="24 / count">
        <div>Col</div>
      </vui-col>
      <vui-col v-for="item in count" v-bind:key="item.toString()" v-bind:span="24 / count">
        <div>Col</div>
      </vui-col>
    </vui-row>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const hgutter = ref<number>(16);
      const vgutter = ref<number>(16);
      const count = ref<number>(4);

      return {
        hgutter,
        vgutter,
        count
      };
    }
  });
</script>

<style>
  .example-grid-playground { line-height:1; }
  .example-grid-playground h4 { margin:32px 0 16px 0; }
  .example-grid-playground h4:first-child { margin-top:0; }
  .example-grid-playground .vui-row { margin-top:32px; }
  .example-grid-playground .vui-row .vui-col div { height:96px; overflow:hidden; color:#fff; text-align:center; line-height:96px; }
  .example-grid-playground .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-playground .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>
`;

export default code;