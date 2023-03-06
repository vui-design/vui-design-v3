<template>
  <vui-example id="example-progress-formatter" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-progress-formatter">
        <vui-progress type="circle" v-bind:percentage="75" v-bind:formatter="formatter" />
        <vui-progress type="circle" v-bind:percentage="100" v-bind:formatter="formatter" />
        <vui-progress type="circle" v-bind:percentage="75">
          <template v-slot:formatter="percentage">
            <span style="color: #f00;">{{percentage}}%</span>
          </template>
        </vui-progress>
      </div>
    </template>
    <template v-slot:title>自定义文字格式</template>
    <template v-slot:description>
      <p>利用 <code>formatter</code> 插槽或属性指定文字格式。</p>
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
      const formatter = (percentage: number) => {
        return percentage < 100 ? `${percentage} Days` : `Done`;
      };

      return {
        code,
        formatter
      };
    }
  });
</script>

<style>
  .example-progress-formatter { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-formatter .vui-progress + .vui-progress { margin-left:16px; }
</style>