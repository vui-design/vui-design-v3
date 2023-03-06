<template>
  <vui-example id="example-result-comingsoon" v-bind:code="code">
    <template v-slot:demo>
      <vui-result
        status="comingsoon"
        title="Coming Soon!"
        description="Sorry, The current page is under development, so stay tuned!"
      >
        <template v-slot:extra>
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
    </template>
    <template v-slot:title>Coming Soon</template>
    <template v-slot:description>
      <p>敬请期待！</p>
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