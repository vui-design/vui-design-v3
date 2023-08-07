<template>
  <vui-example id="example-dropdown-placement" v-bind:code="code">
    <template v-slot:title>弹出位置</template>
    <template v-slot:description>
      <p>支持 6 个弹出位置。</p>
    </template>
    <template v-slot:demo>
      <div class="example-dropdown-placement">
        <div class="example-dropdown-placement-top">
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
        </div>
        <div class="example-dropdown-placement-bottom">
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
        </div>
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
  .example-dropdown-placement-top {  }
  .example-dropdown-placement-top .vui-button {  }
  .example-dropdown-placement-top .vui-button + .vui-button { margin-left:16px; }
  .example-dropdown-placement-bottom { margin-top:16px; }
  .example-dropdown-placement-bottom .vui-button {  }
  .example-dropdown-placement-bottom .vui-button + .vui-button { margin-left:16px; }
</style>
