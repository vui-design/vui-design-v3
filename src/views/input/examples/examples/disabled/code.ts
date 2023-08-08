const code =
`<template>
  <div class="example-input-disabled">
    <vui-input disabled placeholder="Enter something..." />
    <vui-input disabled addonBefore="https://github.com/u/" placeholder="Enter something..." />
    <vui-input disabled affixBefore="mic" placeholder="Enter something..." />
  </div>
</template>

<style>
  .example-input-disabled .vui-input + .vui-input { margin-top:24px; }
</style>
`;

export default code;