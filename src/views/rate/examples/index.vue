<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-half />
    <vui-example-text />
    <vui-example-clearable />
    <vui-example-disabled />
    <vui-example-character />
    <vui-example-character-function />
  </div>
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