<template>
  <vui-example id="example-alert-icon" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-alert-icon">
        <vui-alert showIcon message="Infomation" />
        <vui-alert type="warning" showIcon message="Warning" />
        <vui-alert type="success" showIcon message="Success" />
        <vui-alert type="error" showIcon message="Error" />
        <vui-alert showIcon message="Information">
          <template v-slot:description>Additional description and information about copywriting.</template>
        </vui-alert>
        <vui-alert type="warning" showIcon message="Warning" description="Detailed description and advice about successful copywriting." />
        <vui-alert type="success" showIcon message="Success" description="This is a warning notice about copywriting." />
        <vui-alert type="error" showIcon message="Error" description="This is an error message about copywriting." />
      </div>
    </template>
    <template v-slot:title>图标</template>
    <template v-slot:description>
      <p>可口的图标让信息类型更加醒目。</p>
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

<style>
  .example-alert-icon .vui-alert + .vui-alert { margin-top:16px; }
</style>