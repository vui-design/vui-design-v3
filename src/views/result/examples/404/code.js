const code =
`<template>
  <vui-result
    status="404"
    title="404"
    description="Sorry, the page you visited does not exist."
  >
    <template v-slot:extra>
      <vui-button type="primary">Back Home</vui-button>
    </template>
  </vui-result>
</template>
`;

export default code;