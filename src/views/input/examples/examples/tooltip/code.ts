const code =
`<template>
  <vui-tooltip
    trigger="focus"
    placement="top-left"
    style="max-width: 200px;"
    v-bind:visible="visible"
    v-on:change="handleChange"
  >
    <template v-slot:content>{{content}}</template>
    <vui-input
      v-model:value="number"
      v-on:blur="handleBlur"
      style="width: 200px"
      placeholder="Input a number..."
    />
  </vui-tooltip>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, watch } from "vue";

  const formatter = (number: string) => {
    const value = String(number);
    const parts = value.split(".");
    let integer = parts[0];
    let decimal = parts[1];
    let prefix = integer.charAt(0) === "-" ? "-" : "";

    integer = prefix ? integer.slice(1) : integer;

    return prefix + integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (decimal ? ("." + decimal) : "");
  };

  export default defineComponent({
    setup() {
      const visible = ref<boolean>(false);
      const number = ref<string>("");
      const content = computed(() => number.value === "-" ? "-" : formatter(number.value));

      const format = (newValue: string, oldValue: string) => {
        const regex = /^-?\d*(\.\d*)?$/;

        if ((!isNaN(+newValue) && regex.test(newValue)) || newValue === "" || newValue === "-") {
          number.value = newValue;
        }
        else {
          number.value = oldValue;
        }
      };

      watch(number, (newValue, oldValue) => {
        format(newValue, oldValue);
        visible.value = !!newValue;
      });

      const handleChange = (newVisible: boolean) => {
        visible.value = number.value ? newVisible : false;
      };

      const handleBlur = () => {
        if (number.value.charAt(number.value.length - 1) === "0" || number.value === "-") {
          format(number.value.slice(0, -1), number.value);
        }
      };

      return {
        visible,
        number,
        content,
        handleChange,
        handleBlur
      };
    }
  });
</script>
`;

export default code;