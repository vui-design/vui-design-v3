<template>
  <vui-example id="example-badge-dot" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-badge-dot">
        <vui-badge dot v-bind:count="99">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge dot v-bind:count="100">
          <vui-icon type="mail" />
        </vui-badge>
        <vui-badge dot v-bind:count="1000">
          <a href="javascript:;">Link</a>
        </vui-badge>
      </div>
    </template>
    <template v-slot:title>小红点</template>
    <template v-slot:description>
      <p>不显示具体的数值或文本。友情提醒，强迫症患者慎用！</p>
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
  .example-badge-dot .vui-badge + .vui-badge { margin-left:16px; }
  .example-badge-dot .vui-badge img { width:48px; height:48px; border-radius:5px; }
</style>