const code =
`<template>
  <div class="example-popover-placement">
    <div class="top">
      <vui-popover placement="top-left" title="Title" content="This is a popover.">
        <vui-button>TL</vui-button>
      </vui-popover>
      <vui-popover placement="top" title="Title" content="This is a popover.">
        <vui-button>T</vui-button>
      </vui-popover>
      <vui-popover placement="top-right" title="Title" content="This is a popover.">
        <vui-button>TR</vui-button>
      </vui-popover>
    </div>
    <div class="middle">
      <div class="middle-left">
        <vui-popover placement="left-top" title="Title" content="This is a popover.">
          <vui-button block>LT</vui-button>
        </vui-popover>
        <vui-popover placement="left" title="Title" content="This is a popover.">
          <vui-button block>L</vui-button>
        </vui-popover>
        <vui-popover placement="left-bottom" title="Title" content="This is a popover.">
          <vui-button block>LB</vui-button>
        </vui-popover>
      </div>
      <div class="middle-right">
        <vui-popover placement="right-top" title="Title" content="This is a popover.">
          <vui-button block>RT</vui-button>
        </vui-popover>
        <vui-popover placement="right" title="Title" content="This is a popover.">
          <vui-button block>R</vui-button>
        </vui-popover>
        <vui-popover placement="right-bottom" title="Title" content="This is a popover.">
          <vui-button block>RB</vui-button>
        </vui-popover>
      </div>
    </div>
    <div class="bottom">
      <vui-popover placement="bottom-left" title="Title" content="This is a popover.">
        <vui-button>BL</vui-button>
      </vui-popover>
      <vui-popover placement="bottom" title="Title" content="This is a popover.">
        <vui-button>B</vui-button>
      </vui-popover>
      <vui-popover placement="bottom-right" title="Title" content="This is a popover.">
        <vui-button>BR</vui-button>
      </vui-popover>
    </div>
  </div>
</template>

<style>
  .example-popover-placement .top { text-align:center; }
  .example-popover-placement .top .vui-button { width:60px; }
  .example-popover-placement .top .vui-button + .vui-button { margin-left:12px; }

  .example-popover-placement .middle { width:324px; height:126px; margin:12px auto; }
  .example-popover-placement .middle-left { float:left; width:60px; }
  .example-popover-placement .middle-left .vui-button { width:60px; }
  .example-popover-placement .middle-left .vui-button + .vui-button { margin-top:12px; }
  .example-popover-placement .middle-right { float:right; width:60px; }
  .example-popover-placement .middle-right .vui-button { width:60px; }
  .example-popover-placement .middle-right .vui-button + .vui-button { margin-top:12px; }

  .example-popover-placement .bottom { text-align:center; }
  .example-popover-placement .bottom .vui-button { width:60px; }
  .example-popover-placement .bottom .vui-button + .vui-button { margin-left:12px; }
</style>
`;

export default code;