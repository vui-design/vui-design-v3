<template>
  <vui-example id="example-steps-control" v-bind:code="code">
    <template v-slot:title>切换步骤</template>
    <template v-slot:description>
      <p>通常配合内容及按钮使用，表示一个流程的处理进度。</p>
    </template>
    <template v-slot:demo>
      <div class="example-steps-control">
        <vui-steps v-bind:step="step">
          <vui-step v-for="(item, index) in steps" v-bind:key="index" v-bind:title="item.title" v-bind:description="item.description" />
        </vui-steps>
        <div class="example-steps-control-content">
          <p>{{steps[step].content}}</p>
          <p>
            <vui-button type="primary" v-bind:disabled="step === 0" v-on:click="handlePrev">Previous</vui-button>
            <vui-button type="primary" v-bind:disabled="step === steps.length - 1" v-on:click="handleNext">Next</vui-button>
          </p>
        </div>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  interface Step {
    title: string;
    description: string;
    content: string;
  };

  const steps: Step[] = [
    { title: "First", description: "This is a description.", content: "First Content" },
    { title: "Second", description: "This is a description.", content: "Second Content" },
    { title: "Third", description: "This is a description.", content: "Third Content" },
    { title: "Last", description: "This is a description.", content: "Last Content" }
  ];

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const step = ref<number>(0);

      const handlePrev = () => {
        step.value--;
      };
      const handleNext = () => {
        step.value++;
      };

      return {
        code,
        steps,
        step,
        handlePrev,
        handleNext
      };
    }
  });
</script>

<style>
  .example-steps-control-content { border:1px dashed #e0e0e0; border-radius:2px; background-color:#fafafa; margin-top:24px; padding:48px; }
  .example-steps-control-content p { text-align:center; }
  .example-steps-control-content p + p { margin-top:48px; }
  .example-steps-control-content .vui-button + .vui-button { margin-left:16px; }
</style>