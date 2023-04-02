<template>
  <vui-example id="example-modal-update-and-close" v-bind:code="code">
    <template v-slot:demo>
      <vui-button type="primary" v-on:click="showModal">Close automatically after 5s</vui-button>
    </template>
    <template v-slot:title>更新和关闭</template>
    <template v-slot:description>
      <p>手动更新和关闭通过 <code>Modal[type]()</code> 方式创建的对话框。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Modal } from "vui-design";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const showModal = () => {
        let seconds = 5;
        let modal = Modal.success({
          title: "This is a success message",
          description: "This modal will be closed after " + seconds + " second!"
        });
        let interval = setInterval(() => {
          seconds -= 1;
          modal.update({
            description: "This modal will be closed after " + seconds + " second!"
          });
        }, 1000);

        setTimeout(() => {
          clearInterval(interval);
          interval = null;

          modal.close();
        }, seconds * 1000);
      };

      return {
        code,
        showModal
      };
    }
  });
</script>