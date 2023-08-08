<template>
  <vui-example id="example-tag-checkable" v-bind:code="code">
    <template v-slot:title>可选择</template>
    <template v-slot:description>
      <p>设置 <code>checkable</code> 属性后可以对标签进行选择，属性 <code>checked</code> 控制当前选择状态。</p>
    </template>
    <template v-slot:demo>
      <div class="example-tag-checkable">
        <vui-tag color="primary" checkable v-model:checked="checked1">Tag 1</vui-tag>
        <vui-tag color="info" checkable v-model:checked="checked2">Tag 2</vui-tag>
        <vui-tag color="warning" checkable v-model:checked="checked3">Tag 3</vui-tag>
        <vui-tag color="success" checkable v-model:checked="checked4">Tag 4</vui-tag>
        <vui-tag color="error" checkable v-model:checked="checked5">Tag 5</vui-tag>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const checked1 = ref<boolean>(false);
      const checked2 = ref<boolean>(false);
      const checked3 = ref<boolean>(false);
      const checked4 = ref<boolean>(false);
      const checked5 = ref<boolean>(false);

      return {
        code,
        checked1,
        checked2,
        checked3,
        checked4,
        checked5
      };
    }
  });
</script>

<style>
  .example-tag-checkable { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; gap:8px; }
</style>