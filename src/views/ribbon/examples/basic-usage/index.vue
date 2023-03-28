<template>
  <vui-example id="example-ribbon-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-ribbon text="Hippies">
        <vui-card title="What is Vue?">
          Vue is a JavaScript framework for building user interfaces.
        </vui-card>
      </vui-ribbon>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>简单的缎带展示。</p>
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