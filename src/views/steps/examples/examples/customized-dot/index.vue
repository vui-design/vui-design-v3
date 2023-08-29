<template>
  <vui-example id="example-steps-customized-dot" v-bind:code="code">
    <template v-slot:title>自定义点状步骤条</template>
    <template v-slot:description>
      <p>为点状步骤条增加自定义展示。</p>
    </template>
    <template v-slot:demo>
      <vui-steps type="dot" v-bind:step="1">
        <template v-slot:dot="{ index, status, className }">
          <vui-tooltip color="light">
            <template v-slot:content>
              <div>Step {{ index }} status: {{ status }}</div>
            </template>
            <div v-bind:class="className"></div>
          </vui-tooltip>
        </template>
        <vui-step title="Finished" description="This is a description." />
        <vui-step title="In Progress" description="This is a description." />
        <vui-step title="Waiting" description="This is a description." />
        <vui-step title="Waiting" description="This is a description." />
      </vui-steps>
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