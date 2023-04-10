<template>
  <vui-example id="example-input-affix" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-input-affix">
        <vui-input affixBefore="mic" placeholder="Enter something..." />
        <vui-input affixAfter="calendar" placeholder="Enter something..." />
        <vui-input placeholder="Enter something...">
          <template v-slot:affixBefore>￥</template>
          <template v-slot:affixAfter>RMB</template>
        </vui-input>
        <vui-input placeholder="Enter something...">
          <template v-slot:affixBefore>
            <vui-icon type="group" />
          </template>
          <template v-slot:affixAfter>
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
  .example-input-affix .vui-input:not(:first-child) { margin-top:24px; }
</style>