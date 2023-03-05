<template>
  <vui-example id="example-spin-nested" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-spin-nested">
        <div class="example-spin-nested-title">
          <label>Loading State:</label>
          <vui-switch type="line" v-model:checked="spinning" />
        </div>
        <vui-spin v-bind:spinning="spinning">
          <vui-alert
            type="info"
            message="Alert message title"
            description="Further details about the context of this alert."
          />
        </vui-spin>
      </div>
    </template>
    <template v-slot:title>卡片加载中</template>
    <template v-slot:description>
      <p>可以直接把内容内嵌到 <code>Spin</code> 中，将现有容器变为加载状态。</p>
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
      const spinning = ref<boolean>(false);

      return {
        code,
        spinning
      };
    }
  });
</script>

<style>
  .example-spin-nested-title { display:flex; justify-content:flex-start; align-items:center; margin-bottom:16px; }
  .example-spin-nested-title label { margin-right:8px;; }
</style>