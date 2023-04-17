const code =
`<template>
  <div class="example-input-number-size">
    <section>
      <vui-radio-group type="button" v-model:value="size">
        <vui-radio value="small" label="Small" />
        <vui-radio value="medium" label="Medium" />
        <vui-radio value="large" label="Large" />
      </vui-radio-group>
    </section>
    <section>
      <vui-input-number v-model:value="value" v-bind:size="size" />
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref<string>("medium");
      const value = ref<number>(1);

      return {
        size,
        value
      };
    }
  });
</script>

<style>
  .example-input-number-size section + section { margin-top:24px; }
</style>
`;

export default code;