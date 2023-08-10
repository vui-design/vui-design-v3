const code =
`<template>
  <div class="example-popconfirm-trigger-condition">
    <section>Whether directly execute：<vui-checkbox v-model:checked="condition" /></section>
    <vui-popconfirm
      title="Are you sure delete this task?"
      cancelText="No"
      okText="Yes"
      v-bind:visible="visible"
      v-on:cancel="handleCancel"
      v-on:ok="handleOk"
      v-on:change="handleChange"
    >
      <a href="javascript:;">Delete</a>
    </vui-popconfirm>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const condition = ref(true);
      const visible = ref(false);

      const handleCancel = () => {
        visible.value = false;
        console.log("Clicked on No");
      };
      const handleOk = () => {
        visible.value = false;
        console.log("Next step.");
      };
      const handleChange = (newVisible: boolean) => {
        if (!newVisible) {
          visible.value = false;
          return;
        }

        if (condition.value) {
          handleOk();
        }
        else {
          visible.value = true;
        }
      };

      return {
        condition,
        visible,
        handleCancel,
        handleOk,
        handleChange
      };
    }
  });
</script>

<style>
  .example-popconfirm-trigger-condition section { display:flex; justify-content:flex-start; align-items:center; }
</style>
`;

export default code;