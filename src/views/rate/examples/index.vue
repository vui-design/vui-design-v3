<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-half />
      <vui-example-text />
      <vui-example-clearable />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-disabled />
      <vui-example-character />
      <vui-example-character-function />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleHalf from "./examples/half/index.vue";
  import VuiExampleText from "./examples/text/index.vue";
  import VuiExampleClearable from "./examples/clearable/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleCharacter from "./examples/character/index.vue";
  import VuiExampleCharacterFunction from "./examples/character-function/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleHalf,
      VuiExampleText,
      VuiExampleClearable,
      VuiExampleDisabled,
      VuiExampleCharacter,
      VuiExampleCharacterFunction
    }
  });
</script>