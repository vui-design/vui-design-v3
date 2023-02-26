<template>
  <vui-example id="example-popconfirm-trigger-condition" v-bind:code="code">
    <template v-slot:demo>
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
    <template v-slot:title>条件触发</template>
    <template v-slot:description>
      <p>可以判断是否需要弹出。</p>
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
      const handleChange = newVisible => {
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
        code,
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