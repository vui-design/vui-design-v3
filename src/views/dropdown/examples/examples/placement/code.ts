const code =
`<template>
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

<style>
  .example-dropdown-placement-top {  }
  .example-dropdown-placement-top .vui-button {  }
  .example-dropdown-placement-top .vui-button + .vui-button { margin-left:16px; }
  .example-dropdown-placement-bottom { margin-top:16px; }
  .example-dropdown-placement-bottom .vui-button {  }
  .example-dropdown-placement-bottom .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;