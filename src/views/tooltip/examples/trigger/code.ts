const code =
`<template>
  <div class="example-tooltip-trigger">
    <vui-tooltip trigger="hover" content="This is a tooltip">
      <vui-button>Hover</vui-button>
    </vui-tooltip>
    <vui-tooltip trigger="focus" content="This is a tooltip">
      <vui-button>Focus</vui-button>
    </vui-tooltip>
    <vui-tooltip trigger="click" content="This is a tooltip">
      <vui-button>Click</vui-button>
    </vui-tooltip>
    <vui-tooltip trigger="contextmenu" content="This is a tooltip">
      <vui-button>Contextmenu</vui-button>
    </vui-tooltip>
  </div>
</template>

<style>
  .example-tooltip-trigger .vui-button + .vui-button { margin-left:12px; }
</style>
`;

export default code;