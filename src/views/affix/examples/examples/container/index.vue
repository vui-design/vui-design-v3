<template>
  <vui-example id="example-affix-container" v-bind:code="code">
    <template v-slot:title>滚动容器</template>
    <template v-slot:description>
      <p>使用 <code>getScrollContainer</code> 设置 <code>Affix</code> 需要监听其滚动事件的元素，默认为 <code>window</code> 对象。</p>
    </template>
    <template v-slot:demo>
      <div ref="containerRef" class="example-affix-container">
        <div class="example-affix-container-content">
          <vui-affix v-bind:getScrollContainer="getScrollContainer">
            <vui-button type="primary">Fixed at the top of container</vui-button>
          </vui-affix>
        </div>
      </div>
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
      const containerRef = ref<HTMLDivElement>();
      const getScrollContainer = () => containerRef.value;

      return {
        code,
        containerRef,
        getScrollContainer
      };
    }
  });
</script>

<style>
  .example-affix-container { height:200px; overflow-y:auto; }
  .example-affix-container-content { height:400px; background:transparent url("src/assets/images/transparent.png") repeat 50% 50%; padding:40px 0; }
</style>