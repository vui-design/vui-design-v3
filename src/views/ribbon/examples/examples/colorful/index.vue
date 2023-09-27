<template>
  <vui-example id="example-ribbon-colorful" v-bind:code="code">
    <template v-slot:title>多彩缎带</template>
    <template v-slot:description>
      <p>我们添加了多种预设色彩的缎带样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。</p>
    </template>
    <template v-slot:demo>
      <div>
        <div class="example-ribbon-colorful">
          <vui-divider orientation="left">Presets</vui-divider>
          <vui-ribbon color="blue" text="Blue">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="cyan" text="Cyan">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="geekblue" text="Geekblue">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="gold" text="Gold">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="green" text="Green">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="lime" text="Lime">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="magenta" text="Magenta">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="orange" text="Orange">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="pink" text="Pink">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="purple" text="Purple">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="red" text="Red">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="volcano" text="Volcano">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="yellow" text="Yellow">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
        </div>
        <div class="example-ribbon-colorful">
          <vui-divider orientation="left">Custom</vui-divider>
          <vui-ribbon color="#f60" text="#f60">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="#2db7f5" text="#2db7f5">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="#87d068" text="#87d068">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
          <vui-ribbon color="#108ee9" text="#108ee9">
            <vui-card title="What is Vue?">
              Vue is a JavaScript framework for building user interfaces.
            </vui-card>
          </vui-ribbon>
        </div>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
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
  .example-ribbon-colorful + .example-ribbon-colorful { margin-top:24px; }
  .example-ribbon-colorful .vui-divider { margin-top:0; }
  .example-ribbon-colorful .vui-ribbon-wrapper + .vui-ribbon-wrapper { margin-top:24px; }
</style>