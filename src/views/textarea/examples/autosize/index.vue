<template>
  <vui-example id="example-textarea-autosize" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-textarea-autosize">
        <vui-textarea
          v-model:value="value1"
          autosize
          placeholder="Autosize height based on content lines"
        />
        <vui-textarea
          v-model:value="value2"
          v-bind:autosize="autosize"
          placeholder="Autosize height with minimum and maximum number of lines"
        />
      </div>
    </template>
    <template v-slot:title>适应内容高度的文本域</template>
    <template v-slot:description>
      <p>启用 <code>autosize</code> 属性，文本域会自动适应内容高度变化；另外 <code>autosize</code> 也可以设定为一个对象，指定最小行数和最大行数。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  interface Autosize {
    minRows?: string | number;
    maxRows?: string | number
  };

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value1 = ref<string>("");
      const value2 = ref<string>("");
      const autosize = reactive<Autosize>({ minRows: 2, maxRows: 8 });

      return {
        code,
        value1,
        value2,
        autosize
      };
    }
  });
</script>

<style>
  .example-textarea-autosize .vui-textarea + .vui-textarea { margin-top:24px; }
</style>