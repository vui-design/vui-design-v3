const code =
`<template>
  <div class="example-alert-closable">
    <vui-alert type="warning" closable message="Warning" />
    <vui-alert type="error" closable message="Error" description="This is an error message about copywriting." />
  </div>
</template>

<style>
  .example-alert-closable .vui-alert + .vui-alert { margin-top:16px; }
</style>
`;

export default code;