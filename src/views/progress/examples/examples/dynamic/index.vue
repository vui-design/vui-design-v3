<template>
  <vui-example id="example-progress-dynamic" v-bind:code="code">
    <template v-slot:title>动态展示</template>
    <template v-slot:description>
      <p>通过数据的联动和逻辑控制，实现动态效果。</p>
    </template>
    <template v-slot:demo>
      <div class="example-progress-dynamic">
        <vui-button-group>
          <vui-button icon="minus" v-on:click="handleDecrease" />
          <vui-button icon="plus" v-on:click="handleIncrease" />
        </vui-button-group>
        <vui-progress v-bind:percentage="percentage" />
        <vui-space block>
          <vui-progress type="circle" v-bind:percentage="percentage" />
          <vui-progress type="dashboard" v-bind:percentage="percentage" />
        </vui-space>
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
      const percentage = ref(10);

      const handleDecrease = () => {
        const value = percentage.value - 10;

        percentage.value = value < 0 ? 0 : value;
      };

      const handleIncrease = () => {
        const value = percentage.value + 10;

        percentage.value = value > 100 ? 100 : value;
      };

      return {
        code,
        percentage,
        handleDecrease,
        handleIncrease
      };
    }
  });
</script>

<style>
  .example-progress-dynamic .vui-progress-line { margin-top:16px; margin-bottom:16px; }
</style>