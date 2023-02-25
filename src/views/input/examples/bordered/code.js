const code =
`<template>
  <vui-input v-model="value" v-bind:bordered="false" placeholder="Borderless" />
</template>

<script>
  export default {
    data() {
      return {
        value: ""
      };
    }
  };
</script>
`;

export default code;