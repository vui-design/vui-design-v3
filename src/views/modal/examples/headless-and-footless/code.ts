const code =
`<template>
  <div class="example-modal-headless-and-footless">
    <vui-space>
      <vui-button type="primary" v-on:click="showModal1">No Header</vui-button>
      <vui-button type="primary" v-on:click="showModal2">No Footer</vui-button>
    </vui-space>
    <vui-modal v-model:visible="visible1">
      <h4>What is Vue?</h4>
      <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
    </vui-modal>
    <vui-modal
      title="Modal Title"
      v-model:visible="visible2"
      v-bind:footer="false"
    >
      <h4>What is Vue?</h4>
      <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
    </vui-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const visible1 = ref<boolean>(false);
      const visible2 = ref<boolean>(false);

      const showModal1 = () => visible1.value = true;
      const showModal2 = () => visible2.value = true;

      return {
        visible1,
        visible2,
        showModal1,
        showModal2
      };
    }
  });
</script>
`;

export default code;