const code =
`<template>
  <vui-timeline mode="right" pending>
    <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
    <vui-timeline-item color="red">
      <template v-slot:dot>
        <vui-icon type="time" v-bind:size="16" />
      </template>
      Solve initial network problems 2018-01-01
    </vui-timeline-item>
    <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
    <vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>
    <vui-timeline-item>
      <template v-slot:dot>
        <vui-icon type="loading" v-bind:size="16" />
      </template>
      Recording...
    </vui-timeline-item>
  </vui-timeline>
</template>
`;

export default code;