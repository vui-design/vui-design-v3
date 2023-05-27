const code =
`<template>
  <div class="example-modal-position">
    <vui-button type="primary" v-on:click="showModal">Open Modal at 160px to top</vui-button>
    <vui-modal
      title="Modal Title"
      v-model:visible="visible"
      v-bind:top="160"
      v-bind:centered="false"
    >
      <h4>What is Vue?</h4>
      <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
    </vui-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const visible = ref<boolean>(false);
      const showModal = () => visible.value = true;

      return {
        visible,
        showModal
      };
    }
  });
</script>
`;

export default code;