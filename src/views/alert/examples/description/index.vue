<template>
  <vui-example id="example-alert-description" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-alert-description">
        <vui-alert message="Information">
          <template v-slot:description>Additional description and information about copywriting.</template>
        </vui-alert>
        <vui-alert type="warning" message="Warning" description="Detailed description and advice about successful copywriting." />
        <vui-alert type="success" message="Success" description="This is a warning notice about copywriting." />
        <vui-alert type="error" message="Error" description="This is an error message about copywriting." />
      </div>
    </template>
    <template v-slot:title>描述信息</template>
    <template v-slot:description>
      <p>含有描述信息的警告提示。</p>
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
  .example-alert-description .vui-alert + .vui-alert { margin-top:16px; }
</style>