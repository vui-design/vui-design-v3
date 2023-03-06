<template>
  <vui-example id="example-result-403" v-bind:code="code">
    <template v-slot:demo>
      <vui-result
        status="403"
        title="403"
        description="Sorry, you are not authorized to access this page."
      >
        <template v-slot:extra>
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
    </template>
    <template v-slot:title>403</template>
    <template v-slot:description>
      <p>你没有此页面的访问权限。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
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