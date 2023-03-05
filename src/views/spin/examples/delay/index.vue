<template>
  <vui-example id="example-spin-delay" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-spin-delay">
        <div class="example-spin-delay-title">
          <label>Loading State:</label>
          <vui-switch type="line" v-model:checked="spinning" />
        </div>
        <vui-spin v-bind:spinning="spinning" v-bind:delay="500">
          <div style="border: 1px solid #e0e0e0; border-radius: 2px; height: 100px; background-color: #fafafa; text-align: center; line-height: 100px;">Spin 组件</div>
        </vui-spin>
      </div>
    </template>
    <template v-slot:title>延迟</template>
    <template v-slot:description>
      <p>延迟显示 <code>spinning</code> 效果，当 <code>spinning</code> 状态在 <code>delay</code> 时间内结束，则不显示 <code>spinning</code> 状态。</p>
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
  .example-spin-delay-title { display:flex; justify-content:flex-start; align-items:center; margin-bottom:16px; }
  .example-spin-delay-title label { margin-right:8px;; }
</style>