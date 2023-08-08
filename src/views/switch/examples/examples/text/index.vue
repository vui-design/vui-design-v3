<template>
  <vui-example id="example-switch-text" v-bind:code="code">
    <template v-slot:title>文字图标</template>
    <template v-slot:description>
      <p>带有文字或图标的开关。</p>
    </template>
    <template v-slot:demo>
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
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>

<style>
  .example-switch-text { display:flex; justify-content:flex-start; align-items:center; }
  .example-switch-text .vui-switch + .vui-switch { margin-left:16px; }
</style>