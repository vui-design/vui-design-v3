<template>
  <vui-example id="example-badge-alone" v-bind:code="code">
    <template v-slot:title>独立使用</template>
    <template v-slot:description>
      <p>不包裹任何元素或组件。</p>
    </template>
    <template v-slot:demo>
      <div class="example-badge-alone">
        <vui-badge v-bind:count="99" />
        <vui-badge v-bind:count="100" />
        <vui-badge v-bind:count="1000" v-bind:overflowCount="999" />
        <vui-badge text="NEW" />
        <vui-badge text="HOT" />
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
  .example-badge-alone .vui-badge + .vui-badge { margin-left:16px; }
</style>