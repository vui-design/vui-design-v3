const code =
`<template>
  <div class="example-alert-banner">
    <vui-alert type="warning" showIcon banner message="Warning" />
    <vui-alert type="warning" showIcon banner closable message="Detailed description and advice about warning copywriting." />
    <vui-alert type="success" banner message="Success without icon" />
    <vui-alert type="error" showIcon banner message="This is an error message about copywriting." />
  </div>
</template>

<style>
  .example-alert-banner .vui-alert + .vui-alert { margin-top:16px; }
</style>
`;

export default code;