<template>
  <vui-example id="example-avatar-dynamic" v-bind:code="code">
    <template v-slot:title>自动调整字符大小</template>
    <template v-slot:description>
      <p>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。也可使用 <code>gap</code> 来设置字符距离左右两侧边界的像素距离。</p>
    </template>
    <template v-slot:demo>
      <div class="example-avatar-dynamic">
        <vui-avatar v-bind:gap="gap" v-bind:style="{backgroundColor: color}">{{user}}</vui-avatar>
        <vui-button size="small" v-on:click="handleChangeUser">Change User</vui-button>
        <vui-button size="small" v-on:click="handleChangeGap">Change Gap</vui-button>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  const users = ["U", "Lucy", "Tom", "Edward"];
  const gaps = [4, 3, 2, 1];
  const colors = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

  export default defineComponent({
    components: {
      VuiExample
    },
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
        code,
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