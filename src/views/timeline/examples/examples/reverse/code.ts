const code =
`<template>
  <div>
    <vui-timeline v-bind:reverse="reverse">
      <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
      <vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>
      <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
      <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>
      <vui-timeline-item>Recording...</vui-timeline-item>
    </vui-timeline>
    <vui-button type="primary" style="margin-top: 32px;" v-on:click="handleClick">Toggle Reverse</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const reverse = ref<boolean>(false);
      const handleClick = () => reverse.value = !reverse.value;

      return {
        reverse,
        handleClick
      };
    }
  });
</script>
`;

export default code;