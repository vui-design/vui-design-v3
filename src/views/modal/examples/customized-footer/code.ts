const code =
`<template>
  <div class="example-modal-customized-footer">
    <vui-button type="primary" v-on:click="showModal">Open Modal with customized footer</vui-button>
    <vui-modal
      title="Modal Title"
      v-model:visible="visible"
    >
      <h4>What is Vue?</h4>
      <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
      <template v-slot:footer>
        <vui-button v-on:click="handleCancel">Cancel</vui-button>
        <vui-button type="primary" v-bind:loading="loading" v-on:click="handleSubmit">Submit</vui-button>
      </template>
    </vui-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const visible = ref<boolean>(false);
      const loading = ref<boolean>(false);

      const showModal = () => visible.value = true;
      const handleCancel = () => visible.value = false;
      const handleSubmit = () => {
        loading.value = true;

        setTimeout(() => {
          visible.value = false;
          loading.value = false;
        }, 1500);
      };

      return {
        visible,
        loading,
        showModal,
        handleCancel,
        handleSubmit
      };
    }
  });
</script>
`;

export default code;