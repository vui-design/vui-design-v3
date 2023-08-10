const code =
`<template>
  <div class="example-progress-formatter">
    <vui-progress type="circle" v-bind:percentage="75" v-bind:formatter="formatter" />
    <vui-progress type="circle" v-bind:percentage="100" v-bind:formatter="formatter" />
    <vui-progress type="circle" v-bind:percentage="75">
      <template v-slot:formatter="percentage">
        <span style="color: #f00;">{{percentage}}%</span>
      </template>
    </vui-progress>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const formatter = (percentage: number) => {
        return percentage < 100 ? (percentage + " Days") : "Done";
      };

      return {
        formatter
      };
    }
  });
</script>

<style>
  .example-progress-formatter { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-formatter .vui-progress + .vui-progress { margin-left:16px; }
</style>
`;

export default code;