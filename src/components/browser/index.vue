<template>
  <div class="vui-browser">
    <div class="vui-browser-header">
      <div class="location">
        <div class="location-href"></div>
      </div>
      <i class="btn btn-max"></i>
      <i class="btn btn-min"></i>
      <i class="btn btn-close"></i>
    </div>
    <div class="vui-browser-body" v-bind:style="elBodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import type { CSSProperties } from "vue";
  import { defineComponent, computed } from "vue";

  export default defineComponent({
    props: {
      height: {
        type: [String, Number],
        default: undefined
      }
    },
    setup(props, context) {
      // 计算 style 样式
      const elBodyStyle = computed(() => {
        const style: CSSProperties = {};

        if (props.height) {
          style.height = typeof props.height === "string" ? props.height : `${props.height}px`;
        }

        return style;
      });

      return {
        elBodyStyle
      };
    }
  });
</script>

<style>
  .vui-browser {  }

  .vui-browser-header { display:flex; align-items:center; background-color:#f0f2f4; padding:16px; }
  .vui-browser-header .location { flex:1; position:relative; border-radius:2px; background-color:#fff; margin-right:16px; padding:4px; }
  .vui-browser-header .location .location-href { height:4px; border-radius:2px; background-color:#f0f2f4; }
  .vui-browser-header .btn { width:12px; height:12px; border-radius:12px; }
  .vui-browser-header .btn + .btn { margin-left:8px; }
  .vui-browser-header .btn.btn-max { background-color:#52c41a; }
  .vui-browser-header .btn.btn-min { background-color:#faad14; }
  .vui-browser-header .btn.btn-close { background-color:#ff4d4f; }

  .vui-browser-body { overflow:auto; }
</style>