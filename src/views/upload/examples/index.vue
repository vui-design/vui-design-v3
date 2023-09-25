<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-picture />
    <vui-example-picture-card />
    <vui-example-draggable />
    <vui-example-list />
    <vui-example-avatar />
    <vui-example-manually />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePicture from "./examples/picture/index.vue";
  import VuiExamplePictureCard from "./examples/picture-card/index.vue";
  import VuiExampleDraggable from "./examples/draggable/index.vue";
  import VuiExampleList from "./examples/list/index.vue";
  import VuiExampleAvatar from "./examples/avatar/index.vue";
  import VuiExampleManually from "./examples/manually/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExamplePicture,
      VuiExamplePictureCard,
      VuiExampleDraggable,
      VuiExampleList,
      VuiExampleAvatar,
      VuiExampleManually
    }
  });
</script>