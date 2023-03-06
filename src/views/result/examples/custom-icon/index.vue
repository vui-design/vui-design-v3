<template>
  <vui-example id="example-result-custom-icon" v-bind:code="code">
    <template v-slot:demo>
      <vui-result
        icon="checkmark-circle"
        title="Great, we have done all the operations!"
      >
        <template v-slot:extra>
          <vui-button type="primary">Next</vui-button>
        </template>
      </vui-result>
    </template>
    <template v-slot:title>自定义图标</template>
    <template v-slot:description>
      <p>通过 <code>icon</code> 属性自定义图标类型。</p>
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