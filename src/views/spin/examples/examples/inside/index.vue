<template>
  <vui-example id="example-spin-inside" v-bind:code="code">
    <template v-slot:title>容器</template>
    <template v-slot:description>
      <p>放入一个容器中。</p>
    </template>
    <template v-slot:demo>
      <div class="example-spin-inside">
        <vui-spin />
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>

<style>
  .example-spin-inside { border-radius:2px; background-color:#fafafa; padding:48px; text-align:center; }
</style>