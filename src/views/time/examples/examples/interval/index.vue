<template>
  <vui-example id="example-time-interval" v-bind:code="code">
    <template v-slot:title>更新间隔</template>
    <template v-slot:description>
      <p>设置自动更新间隔，默认为 <code>60</code> 秒。</p>
    </template>
    <template v-slot:demo>
      <div class="example-time-interval">
        <vui-time v-bind:value="value" v-bind:interval="300" />
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
      const value = ref<number>(new Date().getTime());

      return {
        code,
        value
      };
    }
  });
</script>