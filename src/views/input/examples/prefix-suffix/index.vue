<template>
  <vui-example id="example-input-prefix-suffix" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-input-prefix-suffix">
        <vui-input prefix="mic" placeholder="Enter something..." />
        <vui-input suffix="calendar" placeholder="Enter something..." />
        <vui-input placeholder="Enter something...">
          <template v-slot:prefix>￥</template>
          <template v-slot:suffix>RMB</template>
        </vui-input>
        <vui-input placeholder="Enter something...">
          <template v-slot:prefix>
            <vui-icon type="group" />
          </template>
          <template v-slot:suffix>
            <vui-tooltip content="Extra Information">
              <vui-icon type="info" />
            </vui-tooltip>
          </template>
        </vui-input>
      </div>
    </template>
    <template v-slot:title>前缀/后缀图标</template>
    <template v-slot:description>
      <p>在输入框上添加前缀或后缀图标。</p>
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
  .example-input-prefix-suffix .vui-input:not(:first-child) { margin-top:24px; }
</style>