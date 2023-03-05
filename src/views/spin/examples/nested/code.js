const code =
`<template>
  <div class="example-spin-nested">
    <div class="example-spin-nested-title">
      <label>Loading State:</label>
      <vui-switch type="line" v-model:checked="spinning" />
    </div>
    <vui-spin v-bind:spinning="spinning">
      <vui-alert
        type="info"
        message="Alert message title"
        description="Further details about the context of this alert."
      />
    </vui-spin>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const spinning = ref<boolean>(false);

      return {
        spinning
      };
    }
  });
</script>

<style>
  .example-spin-nested-title { display:flex; justify-content:flex-start; align-items:center; margin-bottom:16px; }
  .example-spin-nested-title label { margin-right:8px;; }
</style>
`;

export default code;