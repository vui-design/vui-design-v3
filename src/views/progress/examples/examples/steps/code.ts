const code =
`<template>
  <div class="example-progress-steps">
    <vui-progress type="steps" v-bind:steps="3" v-bind:percentage="50" />
    <br />
    <vui-progress type="steps" v-bind:steps="5" v-bind:percentage="30" />
    <br />
    <vui-progress type="steps" size="small" v-bind:steps="5" v-bind:percentage="100" strokeColor="#52c41a" />
    <br />
    <vui-progress type="steps" v-bind:steps="5" v-bind:percentage="60" v-bind:strokeColor="['#52c41a', '#52c41a', '#ff4d4f']" />
  </div>
</template>
`;

export default code;