<template>
  <vui-example id="example-affix-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-affix-basic-usage">
        <section>
          <vui-affix v-bind:offsetTop="top">
            <vui-button type="primary" v-on:click="addTop">Affix top</vui-button>
          </vui-affix>
        </section>
        <section>
          <vui-affix v-bind:offsetBottom="bottom">
            <vui-button type="primary" v-on:click="addBottom">Affix bottom</vui-button>
          </vui-affix>
        </section>
      </div>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法。</p>
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
      const top = ref<number>(10);
      const bottom = ref<number>(10);

      const addTop = () => {
        top.value += 10;
      };
      const addBottom = () => {
        bottom.value += 10;
      };

      return {
        code,
        top,
        bottom,
        addTop,
        addBottom
      };
    }
  });
</script>

<style>
  .example-affix-basic-usage section + section { margin-top:16px; }
</style>