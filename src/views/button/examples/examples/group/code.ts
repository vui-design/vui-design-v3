const code =
`<template>
  <div>
    <div class="example-button-group">
      <vui-divider orientation="left">Basic</vui-divider>
      <vui-button-group type="primary">
        <vui-button>Cancel</vui-button>
        <vui-button>OK</vui-button>
      </vui-button-group>
      <vui-button-group disabled>
        <vui-button>Cancel</vui-button>
        <vui-button>OK</vui-button>
      </vui-button-group>
      <vui-button-group>
        <vui-button>Cancel</vui-button>
        <vui-button>OK</vui-button>
      </vui-button-group>
    </div>
    <div class="example-button-group">
      <vui-divider orientation="left">Shape And Icon</vui-divider>
      <vui-button-group type="primary">
        <vui-button>
          <vui-icon type="chevron-left" />Backward
        </vui-button>
        <vui-button>
          Forward<vui-icon type="chevron-right" />
        </vui-button>
      </vui-button-group>
      <vui-button-group type="primary" shape="round">
        <vui-button icon="chevron-left" />
        <vui-button icon="chevron-right" />
      </vui-button-group>
      <vui-button-group shape="round">
        <vui-button icon="chevron-left" />
        <vui-button icon="chevron-right" />
      </vui-button-group>
    </div>
    <div class="example-button-group">
      <vui-divider orientation="left">Size</vui-divider>
      <vui-button-group size="small">
        <vui-button>L</vui-button>
        <vui-button>M</vui-button>
        <vui-button>R</vui-button>
      </vui-button-group>
      <br />
      <br />
      <vui-button-group>
        <vui-button>L</vui-button>
        <vui-button>M</vui-button>
        <vui-button>R</vui-button>
      </vui-button-group>
      <br />
      <br />
      <vui-button-group size="large">
        <vui-button>L</vui-button>
        <vui-button>M</vui-button>
        <vui-button>R</vui-button>
      </vui-button-group>
    </div>
  </div>
</template>

<style>
  .example-button-group { line-height:1; }
  .example-button-group + .example-button-group { margin-top:24px; }
  .example-button-group .vui-divider { margin-top:0; }
  .example-button-group .vui-button-group + .vui-button-group { margin-left:12px; }
</style>
`;

export default code;