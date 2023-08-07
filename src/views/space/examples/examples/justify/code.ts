const code =
`<template>
  <div class="example-space-justify">
    <div class="example-space-justify-block">
      <vui-space block justify="start">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
    <div class="example-space-justify-block">
      <vui-space block justify="center">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
    <div class="example-space-justify-block">
      <vui-space block justify="end">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
    <div class="example-space-justify-block">
      <vui-space block justify="around">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
    <div class="example-space-justify-block">
      <vui-space block justify="between">
        <vui-button>Default</vui-button>
        <vui-button type="primary">Primary</vui-button>
      </vui-space>
    </div>
  </div>
</template>

<style>
  .example-space-justify-block { border:1px solid #f0f0f0; padding:16px; }
  .example-space-justify-block + .example-space-justify-block { margin-top:32px; }
</style>
`;

export default code;