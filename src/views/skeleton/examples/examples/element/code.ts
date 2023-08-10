const code =
`<template>
  <div>
    <div class="example-skeleton-element">
      <vui-space>
        <vui-skeleton-avatar v-bind:animated="animated" v-bind:size="size" v-bind:shape="avatarShape" />
        <vui-skeleton-input v-bind:animated="animated" v-bind:size="size" />
        <vui-skeleton-button v-bind:animated="animated" v-bind:size="size" v-bind:shape="buttonShape" />
      </vui-space>
    </div>
    <div class="example-skeleton-element">
      <vui-skeleton-input v-bind:animated="animated" v-bind:block="block" v-bind:size="size" />
    </div>
    <div class="example-skeleton-element">
      <vui-skeleton-button v-bind:animated="animated" v-bind:block="block" v-bind:size="size" v-bind:shape="buttonShape" />
    </div>
    <div class="example-skeleton-element">
      <vui-skeleton-image v-bind:animated="animated" />
    </div>
    <div class="example-skeleton-element-status">
      <section>
        <label>Animated</label>
        <vui-switch v-model:checked="animated" style="margin: 6px 0;" />
      </section>
      <section>
        <label>Input and Button Block</label>
        <vui-switch v-model:checked="block" style="margin: 6px 0;" />
      </section>
      <section>
        <label>Avatar Shape</label>
        <vui-radio-group type="button" v-model:value="avatarShape">
          <vui-radio value="square">Square</vui-radio>
          <vui-radio value="circle">Circle</vui-radio>
        </vui-radio-group>
      </section>
      <section>
        <label>Button Shape</label>
        <vui-radio-group type="button" v-model:value="buttonShape">
          <vui-radio value="square">Square</vui-radio>
          <vui-radio value="round">Round</vui-radio>
          <vui-radio value="circle">Circle</vui-radio>
        </vui-radio-group>
      </section>
      <section>
        <label>Size</label>
        <vui-radio-group type="button" v-model:value="size">
          <vui-radio value="small">Small</vui-radio>
          <vui-radio value="medium">Medium</vui-radio>
          <vui-radio value="large">Large</vui-radio>
        </vui-radio-group>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const animated = ref<boolean>(false);
      const block = ref<boolean>(false);
      const avatarShape = ref<string>("square");
      const buttonShape = ref<string>("square");
      const size = ref<string>("medium");

      return {
        animated,
        block,
        avatarShape,
        buttonShape,
        size
      };
    }
  });
</script>

<style>
  .example-skeleton-element + .example-skeleton-element { margin-top:16px; }
  
  .example-skeleton-element-status { margin-top:16px; }
  .example-skeleton-element-status > section { display:flex; justify-content:flex-start; align-items:center; }
  .example-skeleton-element-status > section + section { margin-top:16px; }
  .example-skeleton-element-status > section > label { width:150px; }
</style>
`;

export default code;