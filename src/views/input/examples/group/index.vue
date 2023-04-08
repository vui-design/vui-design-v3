<template>
  <vui-example id="example-input-group" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-input-group">
        <vui-input-group>
          <vui-input placeholder="Enter something..." />
          <vui-button type="primary">Search</vui-button>
        </vui-input-group>
        <vui-input-group compact>
          <vui-input placeholder="Enter something..." />
          <vui-button type="primary">Search</vui-button>
        </vui-input-group>
        <vui-input-group>
          <vui-input defaultValue="0571" placeholder="Area code" style="width: 80px;" />
          <vui-input placeholder="Please enter phone number..." style="width: 220px;" />
        </vui-input-group>
        <vui-input-group compact>
          <vui-input defaultValue="0571" placeholder="Area code" style="width: 80px;" />
          <vui-input placeholder="Please enter phone number..." style="width: 220px;" />
        </vui-input-group>
      </div>
    </template>
    <template v-slot:title>复合型输入框</template>
    <template v-slot:description>
      <p>输入框的组合展现，设置 <code>compact</code> 属性可以启用紧凑模式。</p>
      <p>复合型输入框中的组件宽度默认为自动适应，可以通过 <code>style</code> 属性自行设置宽度。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
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
  .example-input-group .vui-input-group + .vui-input-group { margin-top:24px; }
</style>