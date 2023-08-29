const code =
`<template>
  <vui-steps type="dot" v-bind:step="1">
    <template v-slot:dot="{ index, status, className }">
      <vui-tooltip color="light">
        <template v-slot:content>
          <div>Step {{ index }} status: {{ status }}</div>
        </template>
        <div v-bind:class="className"></div>
      </vui-tooltip>
    </template>
    <vui-step title="Finished" description="This is a description." />
    <vui-step title="In Progress" description="This is a description." />
    <vui-step title="Waiting" description="This is a description." />
    <vui-step title="Waiting" description="This is a description." />
  </vui-steps>
</template>
`;

export default code;