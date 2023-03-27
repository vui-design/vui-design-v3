const code =
`<template>
  <div>
    <div class="example-tag-colorful">
      <vui-divider orientation="left">Presets</vui-divider>
      <div class="vui-tag-list">
        <vui-tag>default</vui-tag>
        <vui-tag color="primary">primary</vui-tag>
        <vui-tag color="info">info</vui-tag>
        <vui-tag color="warning">warning</vui-tag>
        <vui-tag color="success">success</vui-tag>
        <vui-tag color="error">error</vui-tag>
        <vui-tag color="blue">blue</vui-tag>
        <vui-tag color="cyan">cyan</vui-tag>
        <vui-tag color="geekblue">geekblue</vui-tag>
        <vui-tag color="gold">gold</vui-tag>
        <vui-tag color="green">green</vui-tag>
        <vui-tag color="lime">lime</vui-tag>
        <vui-tag color="magenta">magenta</vui-tag>
        <vui-tag color="orange">orange</vui-tag>
        <vui-tag color="pink">pink</vui-tag>
        <vui-tag color="purple">purple</vui-tag>
        <vui-tag color="red">red</vui-tag>
        <vui-tag color="volcano">volcano</vui-tag>
        <vui-tag color="yellow">yellow</vui-tag>
      </div>
    </div>
    <div class="example-tag-colorful">
      <vui-divider orientation="left">Custom</vui-divider>
      <div class="vui-tag-list">
        <vui-tag color="#f60">#f60</vui-tag>
        <vui-tag color="#2db7f5">#2db7f5</vui-tag>
        <vui-tag color="#87d068">#87d068</vui-tag>
        <vui-tag color="#108ee9">#108ee9</vui-tag>
      </div>
    </div>
  </div>
</template>

<style>
  .example-tag-colorful + .example-tag-colorful { margin-top:24px; }
  .example-tag-colorful .vui-divider { margin-top:0; }
  .example-tag-colorful .vui-tag-list { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; row-gap:8px; }
  .example-tag-colorful .vui-tag { margin-right:8px; }
</style>
`;

export default code;