<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-picture />
      <vui-example-picture-card />
      <vui-example-avatar />
      <vui-example-default-file-list />
      <vui-example-controlled />
      <vui-example-multiple />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-directory />
      <vui-example-draggable />
      <vui-example-accept />
      <vui-example-request />
      <vui-example-manually />
      <vui-example-upload-png-only />
      <vui-example-transform-file />
      <vui-example-before-remove />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePicture from "./examples/picture/index.vue";
  import VuiExamplePictureCard from "./examples/picture-card/index.vue";
  import VuiExampleAvatar from "./examples/avatar/index.vue";
  import VuiExampleDefaultFileList from "./examples/default-file-list/index.vue";
  import VuiExampleControlled from "./examples/controlled/index.vue";
  import VuiExampleMultiple from "./examples/multiple/index.vue";
  import VuiExampleDirectory from "./examples/directory/index.vue";
  import VuiExampleDraggable from "./examples/draggable/index.vue";
  import VuiExampleAccept from "./examples/accept/index.vue";
  import VuiExampleRequest from "./examples/request/index.vue";
  import VuiExampleManually from "./examples/manually/index.vue";
  import VuiExampleUploadPngOnly from "./examples/upload-png-only/index.vue";
  import VuiExampleTransformFile from "./examples/transform-file/index.vue";
  import VuiExampleBeforeRemove from "./examples/before-remove/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExamplePicture,
      VuiExamplePictureCard,
      VuiExampleAvatar,
      VuiExampleDefaultFileList,
      VuiExampleControlled,
      VuiExampleMultiple,
      VuiExampleDirectory,
      VuiExampleDraggable,
      VuiExampleAccept,
      VuiExampleRequest,
      VuiExampleManually,
      VuiExampleUploadPngOnly,
      VuiExampleTransformFile,
      VuiExampleBeforeRemove
    }
  });
</script>