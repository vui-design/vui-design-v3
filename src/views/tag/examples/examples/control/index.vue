<template>
  <vui-example id="example-tag-control" v-bind:code="code">
    <template v-slot:title>动态添加和删除</template>
    <template v-slot:description>
      <p>用数组生成一组标签，可以动态添加和删除。</p>
    </template>
    <template v-slot:demo>
      <div class="example-tag-control">
        <template v-for="(tag, tagIndex) in tags" v-bind:key="tag">
          <vui-tooltip v-if="tag.length > 20" v-bind:content="tag">
            <vui-tag v-bind:closable="tagIndex !== 0" v-on:close="handleRemove(tag)">
              {{tag.slice(0, 20)}}...
            </vui-tag>
          </vui-tooltip>
          <vui-tag v-else v-bind:closable="tagIndex !== 0" v-on:close="handleRemove(tag)">
            {{tag}}
          </vui-tag>
        </template>
        <vui-input
          v-if="showInput"
          v-model:value="text"
          ref="inputRef"
          size="small"
          style="width: 100px;"
          v-on:keyup.enter="handleConfirm"
          v-on:blur="handleCancel"
        />
        <vui-button v-else type="dashed" size="small" v-on:click="handleAdd">Add Tag</vui-button>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, nextTick } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const inputRef = ref<HTMLInputElement>();
      const tags = ref<string[]>(["Unremovable", "Tag 1", "Tag 2, this label is very long"]);
      const showInput = ref<boolean>(false);
      const text = ref<string>("");

      const handleAdd = () => {
        showInput.value = true;
        nextTick(() => inputRef?.value?.focus());
      };
      const handleRemove = (tag: string) => {
        tags.value.splice(tags.value.indexOf(tag), 1);
      };
      const handleConfirm = () => {
        if (text.value && tags.value.indexOf(text.value) === -1) {
          tags.value.push(text.value);
        }

        showInput.value = false;
        text.value = "";
      };
      const handleCancel = () => {
        showInput.value = false;
        text.value = "";
      };

      return {
        code,
        inputRef,
        tags,
        showInput,
        text,
        handleAdd,
        handleRemove,
        handleConfirm,
        handleCancel
      };
    }
  });
</script>

<style>
  .example-tag-control { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; gap:8px; }
</style>