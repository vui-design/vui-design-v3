const code =
`<template>
  <div class="example-ribbon-type">
    <vui-ribbon type="default" text="Default">
      <vui-card title="What is Vue?">
        Vue is a JavaScript framework for building user interfaces.
      </vui-card>
    </vui-ribbon>
    <vui-ribbon text="Primary">
      <vui-card title="What is Vue?">
        Vue is a JavaScript framework for building user interfaces.
      </vui-card>
    </vui-ribbon>
    <vui-ribbon type="info" text="Info">
      <vui-card title="What is Vue?">
        Vue is a JavaScript framework for building user interfaces.
      </vui-card>
    </vui-ribbon>
    <vui-ribbon type="warning" text="Warning">
      <vui-card title="What is Vue?">
        Vue is a JavaScript framework for building user interfaces.
      </vui-card>
    </vui-ribbon>
    <vui-ribbon type="success" text="Success">
      <vui-card title="What is Vue?">
        Vue is a JavaScript framework for building user interfaces.
      </vui-card>
    </vui-ribbon>
    <vui-ribbon type="error" text="Error">
      <vui-card title="What is Vue?">
        Vue is a JavaScript framework for building user interfaces.
      </vui-card>
    </vui-ribbon>
  </div>
</template>

<style>
  .example-ribbon-type .vui-ribbon-wrapper + .vui-ribbon-wrapper { margin-top:24px; }
</style>
`;

export default code;