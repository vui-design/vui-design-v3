<template>
  <vui-example id="example-input-size" v-bind:code="code">
    <template v-slot:title>尺寸</template>
    <template v-slot:description>
      <p>提供三种尺寸：大、中（默认）、小。</p>
    </template>
    <template v-slot:demo>
      <div class="example-input-size">
        <section>
          <vui-radio-group type="button" v-model:value="size">
            <vui-radio label="Small" value="small" />
            <vui-radio label="Medium" value="medium" />
            <vui-radio label="Large" value="large" />
          </vui-radio-group>
        </section>
        <section>
          <vui-input v-bind:size="size" placeholder="Enter something..." />
          <vui-input v-bind:size="size" affixAfter="calendar" placeholder="Enter something..." />
          <vui-input v-bind:size="size" addonAfter="@qq.com" placeholder="Enter something..." />
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
      const size = ref<string>("medium");

      return {
        code,
        size
      };
    }
  });
</script>

<style>
  .example-input-size section + section { margin-top:24px; }
  .example-input-size .vui-input + .vui-input { margin-top:24px; }
</style>