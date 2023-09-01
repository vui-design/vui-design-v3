const code =
`<template>
  <vui-config-provider v-bind:authorize="authorize">
    <App />
  </vui-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const authorize: (
        value: string | string[] | undefined,
        attrs: Record<string, unknown>
      ) => {
        if (!value) {
          return true;
        }
  
        return ["admin", "user"].some(role => typeof value === "string" ? value === role : value.includes(role));
      };

      return {
        authorize
      };
    }
  });
</script>`;

export default code;