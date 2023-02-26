<template>
  <vui-example id="example-avatar-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-avatar-basic-usage">
        <section>
          <vui-avatar icon="user" v-bind:size="54" />
          <vui-avatar icon="user" size="large" />
          <vui-avatar icon="user" />
          <vui-avatar icon="user" size="small" />
        </section>
        <section>
          <vui-avatar icon="user" shape="square" v-bind:size="54" />
          <vui-avatar icon="user" shape="square" size="large" />
          <vui-avatar icon="user" shape="square" />
          <vui-avatar icon="user" shape="square" size="small" />
        </section>
      </div>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>头像有三种尺寸，两种形状可选；其中尺寸支持自定义数值。</p>
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
  .example-avatar-basic-usage section + section { margin-top:24px; }
  .example-avatar-basic-usage .vui-avatar + .vui-avatar { margin-left:16px; }
</style>