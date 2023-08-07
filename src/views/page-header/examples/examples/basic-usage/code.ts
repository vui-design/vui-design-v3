const code =
`<template>
  <vui-page-header
    style="border: 1px solid #f0f0f0;"
    title="Title"
    subTitle="This is a subtitle"
    v-on:back="handleBack"
  />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";

  export default defineComponent({
    setup() {
      const router = useRouter();
      const handleBack = () => router.back();

      return {
        handleBack
      };
    }
  });
</script>
`;

export default code;