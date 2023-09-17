const code =
`<template>
  <vui-select v-model:value="value" backfillOptionProp="label" style="width: 200px;" placeholder="Please select">
    <vui-option value="new york" label="New York">
      New York<span style="float: right; opacity: 0.5;">America</span>
    </vui-option>
    <vui-option value="london" label="London">
      London<span style="float: right; opacity: 0.5;">U.K.</span>
    </vui-option>
    <vui-option value="sydney" label="Sydney">
      Sydney<span style="float: right; opacity: 0.5;">Australian</span>
    </vui-option>
  </vui-select>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<string>();
      const handleChange = (value: string) => {
        console.log(value);
      };

      return {
        value,
        handleChange
      };
    }
  });
</script>
`;

export default code;