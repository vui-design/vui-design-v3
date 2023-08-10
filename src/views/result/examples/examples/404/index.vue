<template>
  <vui-example id="example-result-404" v-bind:code="code">
    <template v-slot:title>404</template>
    <template v-slot:description>
      <p>此页面未找到。</p>
    </template>
    <template v-slot:demo>
      <vui-result
        status="404"
        title="404"
        description="Sorry, the page you visited does not exist."
      >
        <template v-slot:extra>
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
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