const code =
`<template>
  <div class="example-popconfirm-placement">
    <div class="top">
      <vui-popconfirm placement="top-left" title="Are you sure delete this task?">
        <vui-button>TL</vui-button>
      </vui-popconfirm>
      <vui-popconfirm placement="top" title="Are you sure delete this task?">
        <vui-button>T</vui-button>
      </vui-popconfirm>
      <vui-popconfirm placement="top-right" title="Are you sure delete this task?">
        <vui-button>TR</vui-button>
      </vui-popconfirm>
    </div>
    <div class="middle">
      <div class="middle-left">
        <vui-popconfirm placement="left-top" title="Are you sure delete this task?">
          <vui-button block>LT</vui-button>
        </vui-popconfirm>
        <vui-popconfirm placement="left" title="Are you sure delete this task?">
          <vui-button block>L</vui-button>
        </vui-popconfirm>
        <vui-popconfirm placement="left-bottom" title="Are you sure delete this task?">
          <vui-button block>LB</vui-button>
        </vui-popconfirm>
      </div>
      <div class="middle-right">
        <vui-popconfirm placement="right-top" title="Are you sure delete this task?">
          <vui-button block>RT</vui-button>
        </vui-popconfirm>
        <vui-popconfirm placement="right" title="Are you sure delete this task?">
          <vui-button block>R</vui-button>
        </vui-popconfirm>
        <vui-popconfirm placement="right-bottom" title="Are you sure delete this task?">
          <vui-button block>RB</vui-button>
        </vui-popconfirm>
      </div>
    </div>
    <div class="bottom">
      <vui-popconfirm placement="bottom-left" title="Are you sure delete this task?">
        <vui-button>BL</vui-button>
      </vui-popconfirm>
      <vui-popconfirm placement="bottom" title="Are you sure delete this task?">
        <vui-button>B</vui-button>
      </vui-popconfirm>
      <vui-popconfirm placement="bottom-right" title="Are you sure delete this task?">
        <vui-button>BR</vui-button>
      </vui-popconfirm>
    </div>
  </div>
</template>

<style>
  .example-popconfirm-placement .top { text-align:center; }
  .example-popconfirm-placement .top .vui-button { width:60px; }
  .example-popconfirm-placement .top .vui-button + .vui-button { margin-left:12px; }

  .example-popconfirm-placement .middle { width:324px; height:126px; margin:12px auto; }
  .example-popconfirm-placement .middle-left { float:left; width:60px; }
  .example-popconfirm-placement .middle-left .vui-button { width:60px; }
  .example-popconfirm-placement .middle-left .vui-button + .vui-button { margin-top:12px; }
  .example-popconfirm-placement .middle-right { float:right; width:60px; }
  .example-popconfirm-placement .middle-right .vui-button { width:60px; }
  .example-popconfirm-placement .middle-right .vui-button + .vui-button { margin-top:12px; }

  .example-popconfirm-placement .bottom { text-align:center; }
  .example-popconfirm-placement .bottom .vui-button { width:60px; }
  .example-popconfirm-placement .bottom .vui-button + .vui-button { margin-left:12px; }
</style>
`;

export default code;