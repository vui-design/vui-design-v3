const code =
`<template>
  <vui-space block>
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
  </vui-space>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const loading1 = ref<boolean>(false);
      const loading2 = ref<boolean>(false);

      const handleClick1 = (e: MouseEvent) => loading1.value = true;
      const handleClick2 = (e: MouseEvent) => loading2.value = true;

      return {
        loading1,
        loading2,
        handleClick1,
        handleClick2
      };
    }
  });
</script>
`;

export default code;