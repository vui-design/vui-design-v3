<template>
  <vui-example id="example-rate-character" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-rate-character">
        <section>
          <vui-rate allowHalf>
            <template v-slot:character>
              <vui-icon type="heart" />
            </template>
          </vui-rate>
        </section>
        <section>
          <vui-rate allowHalf character="A" style="font-size: 28px;" />
        </section>
        <section>
          <vui-rate allowHalf character="好" />
        </section>
      </div>
    </template>
    <template v-slot:title>自定义字符</template>
    <template v-slot:description>
      <p>可以将星星替换为其他字符，比如字体图标、数字、字母，甚至中文。</p>
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
  .example-rate-character section { display:flex; justify-content:flex-start; align-items:center; line-height:1; }
  .example-rate-character section + section { margin-top:16px; }
</style>