const code =
`<template>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref<string>("medium");

      return {
        size
      };
    }
  });
</script>

<style>
  .example-input-size section + section{ margin-top:24px; }
  .example-input-size .vui-input + .vui-input { margin-top:24px; }
</style>
`;

export default code;