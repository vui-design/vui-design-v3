<template>
  <vui-example id="example-affix-change" v-bind:code="code">
    <template v-slot:demo>
      <vui-affix v-bind:offsetTop="top" v-on:change="handleChange">
        <vui-button>100px to affix top</vui-button>
      </vui-affix>
    </template>
    <template v-slot:title>监听状态变化</template>
    <template v-slot:description>
      <p>通过 <code>change</code> 事件监听固定状态的变化。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const top = ref<number>(100);
      const handleChange = affixed => console.log(affixed);

      return {
        code,
        top,
        handleChange
      };
    }
  });
</script>