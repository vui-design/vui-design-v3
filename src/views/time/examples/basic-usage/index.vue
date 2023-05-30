<template>
  <vui-example id="example-time-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-time-basic-usage">
        <vui-time v-bind:value="value1" />
        <br />
        <vui-time v-bind:value="value2" />
        <br />
        <vui-time v-bind:value="value3" />
        <br />
        <vui-time v-bind:value="value4" />
        <br />
        <vui-time v-bind:value="value5" />
        <br />
        <vui-time v-bind:value="value6" />
      </div>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>设置一个 <code>Date</code> 对象、日期字符串或时间戳，可自动转换为相对于此时此刻的时间描述。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value1 = ref<Date>(new Date("2014-01-01"));
      const value2 = ref<string>("2018-12-31");
      const value3 = ref<number>(new Date().getTime() - 5 * 24 * 60 * 60 * 1000);
      const value4 = ref<number>(new Date().getTime() - 5 * 60 * 60 * 1000);
      const value5 = ref<number>(new Date().getTime() - 5 * 60 * 1000);
      const value6 = ref<number>(new Date().getTime());

      return {
        code,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6
      };
    }
  });
</script>