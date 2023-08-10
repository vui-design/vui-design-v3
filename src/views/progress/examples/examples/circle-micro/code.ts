const code =
`<template>
  <div class="example-progress-circle-micro">
    <vui-progress
      type="circle"
      v-bind:width="14"
      v-bind:stroke-width="2"
      v-bind:percentage="75"
      v-bind:formatter="formatter"
    />
    <span>代码发布</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const formatter = (percentage: number) => {
        return \`进行中，已完成\$\{percentage\}%\`;
      };

      return {
        formatter
      };
    }
  });
</script>

<style>
  .example-progress-circle-micro { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-circle-micro .vui-progress + span { margin-left:8px; }
</style>
`;

export default code;