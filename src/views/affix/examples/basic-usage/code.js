const code =
`<template>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
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
`;

export default code;