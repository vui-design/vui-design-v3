<template>
  <vui-example id="example-statistic-icon-and-unit" v-bind:code="code">
    <template v-slot:title>图标/单位</template>
    <template v-slot:description>
      <p>通过前缀和后缀添加图标/单位。</p>
    </template>
    <template v-slot:demo>
      <vui-row v-bind:gutter="16">
        <vui-col v-bind:span="12">
          <vui-statistic v-bind:value="1024" title="Feedback">
            <template v-slot:prefix>
              <vui-icon type="thumb-up" />
            </template>
          </vui-statistic>
        </vui-col>
        <vui-col v-bind:span="12">
          <vui-statistic v-bind:value="88" title="Unmerged">
            <template v-slot:suffix>/ 100</template>
          </vui-statistic>
        </vui-col>
      </vui-row>
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