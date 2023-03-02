<template>
  <vui-example id="example-switch-state-value" v-bind:code="code">
    <template v-slot:demo>
      <vui-switch
        v-model:checked="checked"
        v-bind:checkedValue="1"
        v-bind:uncheckedValue="0"
      />
    </template>
    <template v-slot:title>自定义状态值</template>
    <template v-slot:description>
      <p>设置 <code>Switch</code> 打开/关闭时的状态值，默认为 <code>true</code> / <code>false</code>。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const checked = ref<number>(1);

      watch(checked, value => {
        console.log(value);
      });

      return {
        code,
        checked
      };
    }
  });
</script>