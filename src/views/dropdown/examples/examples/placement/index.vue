<template>
  <vui-example id="example-dropdown-placement" v-bind:code="code">
    <template v-slot:title>弹出位置</template>
    <template v-slot:description>
      <p>支持 6 个弹出位置。</p>
    </template>
    <template v-slot:demo>
      <div class="example-dropdown-placement">
        <vui-space block>
          <vui-dropdown placement="top-left">
            <vui-button>Top Left</vui-button>
            <template v-slot:menu>
              <vui-menu>
                <vui-menu-item key="1" title="Menu Item 1" />
                <vui-menu-item key="2" title="Menu Item 2" />
                <vui-menu-item key="3" title="Menu Item 3" />
                <vui-menu-item key="4" title="Menu Item 4" />
              </vui-menu>
            </template>
          </vui-dropdown>
          <vui-dropdown placement="top">
            <vui-button>Top</vui-button>
            <template v-slot:menu>
              <vui-menu>
                <vui-menu-item key="1" title="Menu Item 1" />
                <vui-menu-item key="2" title="Menu Item 2" />
                <vui-menu-item key="3" title="Menu Item 3" />
                <vui-menu-item key="4" title="Menu Item 4" />
              </vui-menu>
            </template>
          </vui-dropdown>
          <vui-dropdown placement="top-right">
            <vui-button>Top Right</vui-button>
            <template v-slot:menu>
              <vui-menu>
                <vui-menu-item key="1" title="Menu Item 1" />
                <vui-menu-item key="2" title="Menu Item 2" />
                <vui-menu-item key="3" title="Menu Item 3" />
                <vui-menu-item key="4" title="Menu Item 4" />
              </vui-menu>
            </template>
          </vui-dropdown>
        </vui-space>
        <vui-space block>
          <vui-dropdown placement="bottom-left">
            <vui-button>Bottom Left</vui-button>
            <template v-slot:menu>
              <vui-menu>
                <vui-menu-item key="1" title="Menu Item 1" />
                <vui-menu-item key="2" title="Menu Item 2" />
                <vui-menu-item key="3" title="Menu Item 3" />
                <vui-menu-item key="4" title="Menu Item 4" />
              </vui-menu>
            </template>
          </vui-dropdown>
          <vui-dropdown placement="bottom">
            <vui-button>Bottom</vui-button>
            <template v-slot:menu>
              <vui-menu>
                <vui-menu-item key="1" title="Menu Item 1" />
                <vui-menu-item key="2" title="Menu Item 2" />
                <vui-menu-item key="3" title="Menu Item 3" />
                <vui-menu-item key="4" title="Menu Item 4" />
              </vui-menu>
            </template>
          </vui-dropdown>
          <vui-dropdown placement="bottom-right">
            <vui-button>Bottom Right</vui-button>
            <template v-slot:menu>
              <vui-menu>
                <vui-menu-item key="1" title="Menu Item 1" />
                <vui-menu-item key="2" title="Menu Item 2" />
                <vui-menu-item key="3" title="Menu Item 3" />
                <vui-menu-item key="4" title="Menu Item 4" />
              </vui-menu>
            </template>
          </vui-dropdown>
        </vui-space>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>

<style>
  .example-dropdown-placement .vui-space + .vui-space { margin-top:16px; }
</style>
