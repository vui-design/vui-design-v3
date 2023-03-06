const code =
`<template>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
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
`;

export default code;