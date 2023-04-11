const code =
`<template>
  <div class="example-rate-clearable">
    <section>
      <vui-rate v-model="value1" />
      <span>clearable: true</span>
    </section>
    <section>
      <vui-rate v-model="value2" v-bind:clearable="false" />
      <span>clearable: false</span>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value1 = ref<number>(2);
      const value2 = ref<number>(3);

      return {
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
`;

export default code;