<template>
  <vui-example id="example-textarea-show-count" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-textarea-show-count">
        <vui-textarea v-model:value="value1" showCount placeholder="Enter something..." />
        <vui-textarea v-model:value="value2" showCount v-bind:maxLength="10" placeholder="Enter something..." />
        <vui-textarea v-model:value="value3" showCount v-bind:maxLength="10" v-bind:bytes="getBytes" placeholder="Enter something..." />
      </div>
    </template>
    <template v-slot:title>字数统计</template>
    <template v-slot:description>
    <p>展示字数提示。</p>
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
      const value1 = ref<string>("");
      const value2 = ref<string>("");
      const value3 = ref<string>("");

      const getBytes = (value: string) => {
        const chinese = value.match(/[^\x00-\xff]/ig);

        return value.length + (chinese === null ? 0 : chinese.length);
      };

      return {
        code,
        value1,
        value2,
        value3,
        getBytes
      };
    }
  });
</script>

<style>
  .example-textarea-show-count .vui-textarea:not(:first-child) { margin-top:24px; }
</style>