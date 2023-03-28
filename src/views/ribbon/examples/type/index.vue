<template>
  <vui-example id="example-ribbon-type" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-ribbon-type">
        <vui-ribbon type="default" text="Default">
          <vui-card title="What is Vue?">
            Vue is a JavaScript framework for building user interfaces.
          </vui-card>
        </vui-ribbon>
        <vui-ribbon text="Primary">
          <vui-card title="What is Vue?">
            Vue is a JavaScript framework for building user interfaces.
          </vui-card>
        </vui-ribbon>
        <vui-ribbon type="info" text="Info">
          <vui-card title="What is Vue?">
            Vue is a JavaScript framework for building user interfaces.
          </vui-card>
        </vui-ribbon>
        <vui-ribbon type="warning" text="Warning">
          <vui-card title="What is Vue?">
            Vue is a JavaScript framework for building user interfaces.
          </vui-card>
        </vui-ribbon>
        <vui-ribbon type="success" text="Success">
          <vui-card title="What is Vue?">
            Vue is a JavaScript framework for building user interfaces.
          </vui-card>
        </vui-ribbon>
        <vui-ribbon type="error" text="Error">
          <vui-card title="What is Vue?">
            Vue is a JavaScript framework for building user interfaces.
          </vui-card>
        </vui-ribbon>
      </div>
    </template>
    <template v-slot:title>预设类型</template>
    <template v-slot:description>
      <p>使用 <code>type</code> 属性，可以创建不同类型的缎带。默认情况下使用 <code>primary</code> 类型。</p>
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
  .example-ribbon-type .vui-ribbon-wrapper + .vui-ribbon-wrapper { margin-top:24px; }
</style>