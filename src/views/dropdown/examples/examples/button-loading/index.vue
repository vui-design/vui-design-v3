<template>
  <vui-example id="example-dropdown-button-loading" v-bind:code="code">
    <template v-slot:title>加载中状态</template>
    <template v-slot:description>
      <p>添加 <code>loading</code> 属性即可让按钮处于加载中状态，最后两个按钮演示点击后进入加载状态。</p>
    </template>
    <template v-slot:demo>
      <div class="example-dropdown-button-loading">
        <vui-dropdown-button type="primary" loading>
          Submit
          <template v-slot:menu>
            <vui-menu>
              <vui-menu-item key="1" title="Menu Item 1" />
              <vui-menu-item key="2" title="Menu Item 2" />
              <vui-menu-item key="3" title="Menu Item 3" />
              <vui-menu-item key="4" title="Menu Item 4" />
            </vui-menu>
          </template>
        </vui-dropdown-button>
        <vui-dropdown-button v-bind:loading="loading1" v-on:click="handleClick1">
          Submit
          <template v-slot:menu>
            <vui-menu>
              <vui-menu-item key="1" title="Menu Item 1" />
              <vui-menu-item key="2" title="Menu Item 2" />
              <vui-menu-item key="3" title="Menu Item 3" />
              <vui-menu-item key="4" title="Menu Item 4" />
            </vui-menu>
          </template>
        </vui-dropdown-button>
        <vui-dropdown-button type="primary" icon="user" v-bind:loading="loading2" v-on:click="handleClick2">
          Submit
          <template v-slot:menu>
            <vui-menu>
              <vui-menu-item key="1" title="Menu Item 1" />
              <vui-menu-item key="2" title="Menu Item 2" />
              <vui-menu-item key="3" title="Menu Item 3" />
              <vui-menu-item key="4" title="Menu Item 4" />
            </vui-menu>
          </template>
        </vui-dropdown-button>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const loading1 = ref<boolean>(false);
      const loading2 = ref<boolean>(false);

      const handleClick1 = (e: MouseEvent) => loading1.value = true;
      const handleClick2 = (e: MouseEvent) => loading2.value = true;

      return {
        code,
        loading1,
        loading2,
        handleClick1,
        handleClick2
      };
    }
  });
</script>

<style>
  .example-dropdown-button-loading .vui-dropdown-button + .vui-dropdown-button { margin-left:16px; }
</style>