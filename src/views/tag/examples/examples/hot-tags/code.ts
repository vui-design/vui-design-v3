const code =
`<template>
  <div class="example-tag-hot-tags">
    <h4>Categories:</h4>
    <vui-tag
      v-for="tag in tags"
      color="primary"
      checkable
      v-bind:key="tag"
      v-bind:checked="selectedTags.indexOf(tag) > -1"
      v-on:check="checked => handleCheck(checked, tag)"
    >
      {{tag}}
    </vui-tag>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const tags = ref<string[]>(["Movies", "Books", "Music", "Sports"]);
      const selectedTags = ref<string[]>(["Movies"]);

      const handleCheck = (checked: boolean, tag: string) => {
        selectedTags.value = checked ? [...selectedTags.value, tag] : selectedTags.value.filter(item => item !== tag);
      };

      return {
        tags,
        selectedTags,
        handleCheck
      };
    }
  });
</script>

<style>
  .example-tag-hot-tags { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; gap:8px; }
  .example-tag-hot-tags h4 { height:24px; color:#333; font-size:14px; font-weight:600; line-height:24px; }
</style>
`;

export default code;