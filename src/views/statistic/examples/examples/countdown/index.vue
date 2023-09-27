<template>
  <vui-example id="example-statistic-countdown" v-bind:code="code">
    <template v-slot:title>倒计时</template>
    <template v-slot:description>
      <p>倒计时组件。</p>
    </template>
    <template v-slot:demo>
      <vui-row v-bind:gutter="16">
        <vui-col v-bind:span="12">
          <vui-countdown v-bind:value="deadline" v-on:finish="handleFinish" title="Countdown" />
        </vui-col>
        <vui-col v-bind:span="12">
          <vui-countdown v-bind:value="deadline" formatter="HH:mm:ss:SSS" title="Million Seconds" />
        </vui-col>
        <vui-col v-bind:span="24" style="margin-top: 24px;">
          <vui-countdown v-bind:value="deadline" formatter="D 天 H 时 m 分 s 秒" title="Day Level" />
        </vui-col>
      </vui-row>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const deadline = ref<number>(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30);
      const handleFinish = () => {
        console.log("finished!");
      };

      return {
        code,
        deadline,
        handleFinish
      };
    }
  });
</script>