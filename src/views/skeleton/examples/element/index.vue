<template>
  <vui-example id="example-skeleton-element" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-skeleton-element">
        <section>
          <vui-space>
            <vui-skeleton-avatar v-bind:animated="animated" v-bind:size="size" v-bind:shape="avatarShape" />
            <vui-skeleton-input v-bind:animated="animated" v-bind:size="size" />
            <vui-skeleton-button v-bind:animated="animated" v-bind:size="size" v-bind:shape="buttonShape" />
          </vui-space>
        </section>
        <section>
          <vui-skeleton-input v-bind:animated="animated" v-bind:block="block" v-bind:size="size" />
        </section>
        <section>
          <vui-skeleton-button v-bind:animated="animated" v-bind:block="block" v-bind:size="size" v-bind:shape="buttonShape" />
        </section>
        <section>
          <vui-skeleton-image v-bind:animated="animated" />
        </section>
        <section>
          <vui-form layout="inline">
            <vui-form-item label="Animated">
              <vui-switch v-model="animated" style="margin: 6px 0;" />
            </vui-form-item>
            <vui-form-item label="Input and Button Block">
              <vui-switch v-model="block" style="margin: 6px 0;" />
            </vui-form-item>
            <vui-form-item label="Avatar Shape">
              <vui-radio-group type="button" v-model="avatarShape">
                <vui-radio value="square">Square</vui-radio>
                <vui-radio value="circle">Circle</vui-radio>
              </vui-radio-group>
            </vui-form-item>
            <vui-form-item label="Button Shape">
              <vui-radio-group type="button" v-model="buttonShape">
                <vui-radio value="default">Default</vui-radio>
                <vui-radio value="round">Round</vui-radio>
                <vui-radio value="circle">Circle</vui-radio>
              </vui-radio-group>
            </vui-form-item>
            <vui-form-item label="Size">
              <vui-radio-group type="button" v-model="size">
                <vui-radio value="small">Small</vui-radio>
                <vui-radio value="medium">Medium</vui-radio>
                <vui-radio value="large">Large</vui-radio>
              </vui-radio-group>
            </vui-form-item>
          </vui-form>
        </section>
      </div>
    </template>
    <template v-slot:title>头像/输入框/按钮/图像</template>
    <template v-slot:description>
      <p>骨架头像、输入框、按钮和图像。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const animated = ref(false);
      const block = ref(false);
      const avatarShape = ref("square");
      const buttonShape = ref("default");
      const size = ref("medium");

      return {
        code,
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
  .example-skeleton-element section + section { margin-top:16px; }
</style>