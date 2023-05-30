<template>
  <vui-example id="example-time-type" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-time-type">
        <vui-time v-bind:value="value" />
        <br />
        <vui-time type="date" v-bind:value="value" />
        <br />
        <vui-time type="datetime" v-bind:value="value" />
      </div>
    </template>
    <template v-slot:title>显示类型</template>
    <template v-slot:description>
      <p>可以根据情况，设置不同的显示类型。</p>
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
      const value = ref<number>(new Date().getTime() - 5 * 24 * 60 * 60 * 1000);

      return {
        code,
        value
      };
    }
  });
</script>