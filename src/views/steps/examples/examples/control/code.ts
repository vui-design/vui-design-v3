const code =
`<template>
  <div class="example-steps-control">
    <vui-steps type="navigation" v-bind:step="step" style="box-shadow: 0 -1px 0 #e6e6e6 inset;">
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  interface Step {
    title: string;
    content: string;
  };

  const steps: Step[] = [
    { title: "First", description: "This is a description.", content: "First Content" },
    { title: "Second", description: "This is a description.", content: "Second Content" },
    { title: "Third", description: "This is a description.", content: "Third Content" },
    { title: "Last", description: "This is a description.", content: "Last Content" }
  ];

  export default defineComponent({
    setup() {
      const step = ref<number>(0);

      const handlePrev = () => {
        step.value--;
      };
      const handleNext = () => {
        step.value++;
      };

      return {
        steps,
        step,
        handlePrev,
        handleNext
      };
    }
  });
</script>

<style>
  .example-steps-control-content { border-radius:2px; background-color:#fafafa; margin-top:24px; padding:48px; }
  .example-steps-control-content p { text-align:center; }
  .example-steps-control-content p + p { margin-top:48px; }
  .example-steps-control-content .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;