const code =
`<template>
  <vui-space>
    <vui-segments v-model:options="options" />
    <vui-button type="primary" v-bind:disabled="disabled" v-on:click="handleLoad">Load more</vui-button>
  </vui-space>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
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
        activeKey,
        options,
        disabled,
        handleLoad
      };
    }
  });
</script>
`;

export default code;