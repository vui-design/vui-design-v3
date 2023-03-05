<template>
  <vui-example id="example-spin-message" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-spin-message">
        <vui-spin message="Loading...">
          <div style="border: 1px solid #e0e0e0; border-radius: 2px; height: 100px; background-color: #fafafa; text-align: center; line-height: 100px;">Spin 组件</div>
        </vui-spin>
      </div>
    </template>
    <template v-slot:title>自定义消息文案</template>
    <template v-slot:description>
      <p>通过 <code>message</code> 属性设置消息文案。</p>
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