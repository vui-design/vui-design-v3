<template>
  <vui-example id="example-segments-dynamic" v-bind:code="code">
    <template v-slot:title>动态数据</template>
    <template v-slot:description>
      <p>动态加载数据。</p>
    </template>
    <template v-slot:demo>
      <vui-space>
        <vui-segments v-model:options="options" />
        <vui-button type="primary" v-bind:disabled="disabled" v-on:click="handleLoad">Load more</vui-button>
      </vui-space>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const activeKey = ref<string>("Daily");
      const options = ref<string[]>(["Daily", "Weekly", "Monthly"]);
      const disabled = ref<boolean>(false);

      watch(activeKey, (newActiveKey: string) => {
        console.log(newActiveKey);
      });

      const handleLoad = () => {
        options.value.push(...["Quarterly", "Yearly"]);
        disabled.value = true;
      };

      return {
        code,
        activeKey,
        options,
        disabled,
        handleLoad
      };
    }
  });
</script>