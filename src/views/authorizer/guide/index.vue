<template>
  <div>
    <h2 id="guide-authorizer-how-to-use">如何使用</h2>
    <h3>1. 注册全局校验函数</h3>
    <p>利用 <code>ConfigProvider</code> 组件全局注册权限校验函数（<code>ConfigProvider</code> 组件使用 Vue 的 <a href="https://vuejs.org/api/composition-api-dependency-injection.html#provide" target="_blank">provide</a> / <a href="https://vuejs.org/api/composition-api-dependency-injection.html#inject" target="_blank">inject</a> 特性，只需在应用外围包裹一次即可全局生效），如下所示：</p>
    <vui-example-register />
    <h3>2. 组件使用</h3>
    <vui-example-use />
    <p>如上例，若用户为 <code>admin</code> 管理员角色，将展示默认插槽中的编辑按钮，反之显示 <code>replacement</code> 插槽中的查看按钮。</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleRegister from "./examples/register/index.vue";
  import VuiExampleUse from "./examples/use/index.vue";

  export default defineComponent({
    components: {
      VuiExampleRegister,
      VuiExampleUse
    }
  });
</script>