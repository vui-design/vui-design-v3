const code =
`<template>
  <vui-card style="width: 302px;">
    <template v-slot:cover>
      <img src="https://assets.youzhan.org/img/0/d3/826482502ab5ab3fc98967bd34ed1.jpg" />
    </template>
    <vui-card-meta title="Card title">
      <template v-slot:avatar>
        <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </template>
      <template v-slot:description>This is the description</template>
    </vui-card-meta>
    <template v-slot:actions>
      <vui-icon type="edit" />
      <vui-icon type="dustbin" />
      <vui-icon type="more-x" />
    </template>
  </vui-card>
</template>
`;

export default code;