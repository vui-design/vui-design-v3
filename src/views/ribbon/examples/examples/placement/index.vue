<template>
  <vui-example id="example-ribbon-placement" v-bind:code="code">
    <template v-slot:title>位置</template>
    <template v-slot:description>
      <p>使用 <code>placement</code> 属性来指定缎带的位置。</p>
    </template>
    <template v-slot:demo>
      <vui-ribbon placement="left" text="Hippies">
        <vui-card title="What is Vue?">
          Vue is a JavaScript framework for building user interfaces.
        </vui-card>
      </vui-ribbon>
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