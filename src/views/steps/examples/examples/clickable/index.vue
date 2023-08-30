<template>
  <vui-example id="example-steps-clickable" v-bind:code="code">
    <template v-slot:title>可点击</template>
    <template v-slot:description>
      <p>绑定了 <code>onChange</code> 事件后，<code>Steps</code> 变为可点击状态；可通过 <code>disabled</code> 属性禁用点击。</p>
    </template>
    <template v-slot:demo>
      <div class="example-steps-clickable">
        <vui-steps v-bind:step="step" v-on:change="handleChange">
          <vui-step title="Step 1" description="This is a description." />
          <vui-step title="Step 2" description="This is a description." />
          <vui-step title="Step 3" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." disabled />
        </vui-steps>
        <vui-divider v-bind:gutter="32" />
        <vui-steps direction="vertical" v-bind:step="step" v-on:change="handleChange">
          <vui-step title="Step 1" description="This is a description." />
          <vui-step title="Step 2" description="This is a description." />
          <vui-step title="Step 3" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." disabled />
        </vui-steps>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const step = ref<number>(1);
      const handleChange = (newStep: number) => step.value = newStep;

      return {
        code,
        step,
        handleChange
      };
    }
  });
</script>