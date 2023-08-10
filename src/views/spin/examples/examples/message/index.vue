<template>
  <vui-example id="example-spin-message" v-bind:code="code">
    <template v-slot:title>自定义消息文案</template>
    <template v-slot:description>
      <p>通过 <code>message</code> 属性设置消息文案。</p>
    </template>
    <template v-slot:demo>
      <div class="example-spin-message">
        <vui-spin message="Loading...">
          <vui-alert
            type="info"
            message="Alert message title"
            description="Further details about the context of this alert."
          />
        </vui-spin>
      </div>
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