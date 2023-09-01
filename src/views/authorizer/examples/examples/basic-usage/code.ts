const code =
`<template>
  <vui-config-provider v-bind="configProvider">
    <vui-authorizer value="admin">
      <a href="javascript:;">Edit</a>
      <template v-slot:replacement>
        <a href="javascript:;">View</a>
      </template>
    </vui-authorizer>
  </vui-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      return {
        configProvider: {
          authorize: (
            value: string | string[] | undefined,
            attrs: Record<string, unknown>
          ) => {
            if (!value) {
              return true;
            }

            return ["admin", "user"].some(permission => typeof value === "string" ? value === permission : value.includes(permission));
          }
        },
      };
    }
  });
</script>
`;

export default code;