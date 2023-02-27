const code =
`<template>
  <div class="example-badge-status">
    <vui-badge status="default" />
    <vui-badge status="processing" />
    <vui-badge status="warning" />
    <vui-badge status="success" />
    <vui-badge status="error" />
    <br />
    <vui-badge status="default" text="Default" />
    <br />
    <vui-badge status="processing" text="Processing" />
    <br />
    <vui-badge status="warning" text="Warning" />
    <br />
    <vui-badge status="success" text="Success" />
    <br />
    <vui-badge status="error" text="Error" />
  </div>
</template>

<style>
  .example-badge-status .vui-badge + .vui-badge { margin-left:16px; }
</style>
`;

export default code;