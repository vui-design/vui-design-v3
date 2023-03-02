<template>
  <vui-example id="example-switch-color" v-bind:code="code">
    <template v-slot:demo>
      <vui-switch
        v-model:checked="checked"
        checkedColor="#52c41a"
        uncheckedColor="#ff4d4f"
      />
    </template>
    <template v-slot:title>自定义颜色</template>
    <template v-slot:description>
      <p>通过 <code>checkedColor</code> 和 <code>uncheckedColor</code> 属性自定义颜色。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const checked = ref<boolean>(false);

      watch(checked, value => {
        console.log(value);
      });

      return {
        code,
        checked
      };
    }
  });
</script>