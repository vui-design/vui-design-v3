<template>
  <vui-example id="example-switch-condition" v-bind:code="code">
    <template v-slot:demo>
      <vui-switch v-bind:checked="checked" v-on:change="handleChange" />
    </template>
    <template v-slot:title>按条件开/关</template>
    <template v-slot:description>
      <p>可以判断是否允许打开或关闭开关。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Modal } from "vui-design";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const checked = ref(false);
      const handleChange = newValue => {
        Modal.confirm({
          title: newValue ? "Do you want to open this task?" : "Do you want to close this task?",
          description: "Some descriptions...",
          onCancel: () => console.log("Cancel"),
          onOk: () => {
            checked.value = newValue;
          }
        });
      };

      return {
        code,
        checked,
        handleChange
      };
    }
  });
</script>