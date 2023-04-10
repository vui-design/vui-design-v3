<template>
  <vui-example id="example-radio-condition" v-bind:code="code">
    <template v-slot:demo>
      <vui-radio v-bind:checked="checked" v-on:change="handleChange">
        Radio
      </vui-radio>
    </template>
    <template v-slot:title>按条件勾选</template>
    <template v-slot:description>
      <p>可以判断是否需要勾选。</p>
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
        if (!newValue) {
          return;
        }

        Modal.confirm({
          title: "Are you sure you want to check?",
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