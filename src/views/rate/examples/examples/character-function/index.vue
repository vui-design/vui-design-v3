<template>
  <vui-example id="example-rate-character-function" v-bind:code="code">
    <template v-slot:title>其他字符</template>
    <template v-slot:description>
      <p>可以使用函数类型的 <code>character</code> 属性自定义每一个字符。</p>
    </template>
    <template v-slot:demo>
      <div class="example-rate-character-function">
        <section>
          <vui-rate v-model="value1" v-bind:character="getRateCharacter1" />
        </section>
        <section>
          <vui-rate v-model="value2" v-bind:character="getRateCharacter2" />
        </section>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, h } from "vue";
  import { Icon } from "vui-design";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value1 = ref<number>(2);
      const value2 = ref<number>(3);

      const getRateCharacter1 = (index: number) => index + 1;

      const stars = ref<string[]>(["emotion-skull", "emotion-unhappy", "emotion-normal", "emotion-happy", "emotion"]);
      const getRateCharacter2 = (index: number) => {
        return h(Icon, {
          type: stars.value[index]
        });
      };

      return {
        code,
        value1,
        value2,
        getRateCharacter1,
        getRateCharacter2
      };
    }
  });
</script>

<style>
  .example-rate-character-function section { display:flex; justify-content:flex-start; align-items:center; line-height:1; }
  .example-rate-character-function section + section { margin-top:16px; }
</style>