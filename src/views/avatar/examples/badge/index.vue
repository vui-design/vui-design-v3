<template>
  <vui-example id="example-avatar-badge" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-avatar-badge">
        <vui-badge v-bind:count="10">
          <vui-avatar shape="square" icon="user" />
        </vui-badge>
        <vui-badge v-bind:count="10" dot>
          <vui-avatar shape="square" icon="user" />
        </vui-badge>
      </div>
    </template>
    <template v-slot:title>带徽标的头像</template>
    <template v-slot:description>
      <p>通常用于消息提示。</p>
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
  .example-avatar-badge .vui-badge + .vui-badge { margin-left:16px; }
</style>