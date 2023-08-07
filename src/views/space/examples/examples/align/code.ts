const code =
`<template>
  <div class="example-space-align">
    <div class="example-space-align-block">
      <vui-space align="start">
        start
        <vui-button type="primary">Primary</vui-button>
        <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
      </vui-space>
    </div>
    <div class="example-space-align-block">
      <vui-space align="center">
        center
        <vui-button type="primary">Primary</vui-button>
        <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
      </vui-space>
    </div>
    <div class="example-space-align-block">
      <vui-space align="end">
        end
        <vui-button type="primary">Primary</vui-button>
        <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
      </vui-space>
    </div>
    <div class="example-space-align-block">
      <vui-space align="baseline">
        baseline
        <vui-button type="primary">Primary</vui-button>
        <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
      </vui-space>
    </div>
    <div class="example-space-align-block">
      <vui-space align="stretch">
        stretch
        <vui-button type="primary">Primary</vui-button>
        <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
      </vui-space>
    </div>
  </div>
</template>

<style>
  .example-space-align { display:inline-flex; flex-direction:column; }
  .example-space-align-block { border:1px solid #f0f0f0; padding:16px; }
  .example-space-align-block + .example-space-align-block { margin-top:32px; }
</style>
`;

export default code;