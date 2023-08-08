<template>
  <vui-example id="example-rate-clearable" v-bind:code="code">
    <template v-slot:title>清除</template>
    <template v-slot:description>
      <p>允许或者禁用清除。</p>
    </template>
    <template v-slot:demo>
      <div class="example-rate-clearable">
        <section>
          <vui-rate v-model:value="value1" />
          <span>clearable: true</span>
        </section>
        <section>
          <vui-rate v-model:value="value2" v-bind:clearable="false" />
          <span>clearable: false</span>
        </section>
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
      const value1 = ref<number>(2);
      const value2 = ref<number>(3);

      return {
        code,
        value1,
        value2
      };
    }
  });
</script>

<style>
  .example-rate-clearable section { display:flex; justify-content:flex-start; align-items:center; line-height:1; }
  .example-rate-clearable section + section { margin-top:16px; }
  .example-rate-clearable span { margin-left:16px; }
</style>