const code = `
<template>
  <div class="example-avatar-dynamic">
    <vui-avatar v-bind:gap="gap" v-bind:style="{backgroundColor: color}">{{user}}</vui-avatar>
    <vui-button size="small" v-on:click="handleChangeUser">Change User</vui-button>
    <vui-button size="small" v-on:click="handleChangeGap">Change Gap</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  const users = ["U", "Lucy", "Tom", "Edward"];
  const gaps = [4, 3, 2, 1];
  const colors = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

  export default defineComponent({
    setup() {
      const user = ref(users[0]);
      const gap = ref(gaps[0]);
      const color = ref(colors[0]);

      const handleChangeUser = () => {
        const index = users.indexOf(user.value);
        let i = index < users.length - 1 ? (index + 1) : 0;

        user.value = users[i];
        color.value = colors[i];
      };

      const handleChangeGap = () => {
        const index = gaps.indexOf(gap.value);
        let i = index < users.length - 1 ? (index + 1) : 0;

        gap.value = gaps[i];
      };

      return {
        color,
        user,
        gap,
        handleChangeUser,
        handleChangeGap
      };
    }
  });
</script>

<style>
  .example-avatar-dynamic .vui-button { margin-left:16px; }
</style>
`;

export default code;