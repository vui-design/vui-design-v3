const code =
`<template>
  <div>
    <vui-steps type="navigation" v-bind:step="1" style="box-shadow: 0 -1px 0 #e6e6e6 inset;">
      <vui-step title="Finished" description="This is a description." />
      <vui-step title="In Progress" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." />
    </vui-steps>
    <vui-divider v-bind:gutter="32" />
    <vui-steps type="navigation" direction="vertical" v-bind:step="1" style="width: 240px; box-shadow: -1px 0 0 #e6e6e6 inset;">
      <vui-step title="Finished" description="This is a description." />
      <vui-step title="In Progress" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." />
    </vui-steps>
  </div>
</template>
`;

export default code;