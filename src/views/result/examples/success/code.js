const code =
`<template>
  <vui-result
    status="success"
    title="This is result title"
    description="Here is a brief description of the result of the operation."
  >
    <template v-slot:extra>
      <vui-space>
        <vui-button type="primary">Back Home</vui-button>
        <vui-button>Continue</vui-button>
      </vui-space>
    </template>
  </vui-result>
</template>
`;

export default code;