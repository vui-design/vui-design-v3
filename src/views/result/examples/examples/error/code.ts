const code =
`<template>
  <vui-result
    status="error"
    title="This is result title"
    description="Here is a brief description of the result of the operation."
  >
    <dl class="example-result-error">
      <dt>The content you submitted has the following error:</dt>
      <dd>
        <vui-icon type="crossmark-circle" color="#ff4d4f" />
        <span>Your account has been frozen.</span>
        <a href="javascript:;">Thaw immediately ></a>
      </dd>
      <dd>
        <vui-icon type="crossmark-circle" color="#ff4d4f" />
        <span>Your account is not yet eligible to apply.</span>
        <a href="javascript:;">Apply Unlock ></a>
      </dd>
    </dl>
    <template v-slot:extra>
      <vui-space>
        <vui-button type="primary">Back Home</vui-button>
        <vui-button>Try Again</vui-button>
      </vui-space>
    </template>
  </vui-result>
</template>

<style>
  .example-result-error { margin:0; padding:0; }
  .example-result-error dt { margin-bottom:24px; color:#262626; font-size:16px; font-weight:600; }
  .example-result-error dd { margin:0; padding:0; color:#595959; }
  .example-result-error dd + dd { margin-top:8px; }
  .example-result-error dd span { margin-left:8px; }
  .example-result-error dd a { margin-left:8px; }
</style>
`;

export default code;