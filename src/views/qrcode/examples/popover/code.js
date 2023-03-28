const code = `
<template>
  <vui-popover contentStyle="padding: 12px;">
    <img src="https://www.runoob.com/wp-content/uploads/2017/01/vue.png" width="80" height="80" alt="Vue.js" />
    <template v-slot:content>
      <vui-qrcode v-bind:bordered="false" v-bind:size="134" value="https://cn.vuejs.org/" />
    </template>
  </vui-popover>
</template>
`;

export default code;