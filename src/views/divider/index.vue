<template>
  <div>
    <h1>Divider 分割线</h1>
    <p>区隔内容的分割线。</p>
    <h2>何时使用</h2>
    <ul>
      <li>对不同章节的文本段落进行分割。</li>
      <li>对行内文字/链接进行分割，例如表格的操作列。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-vertical />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-with-text />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Divider 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="160">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>分割线类型，可选值为 <code>solid</code>、<code>dashed</code>、<code>dotted</code>、<code>double</code> 或者不设</td>
          <td>String</td>
          <td>solid</td>
        </tr>
        <tr>
          <td>direction</td>
          <td>分割线的方向，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
          <td>String</td>
          <td>horizontal</td>
        </tr>
        <tr>
          <td>orientation</td>
          <td>分割线文本的位置，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
          <td>String</td>
          <td>center</td>
        </tr>
        <tr>
          <td>size</td>
          <td>分割线的宽度/高度</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>gutter</td>
          <td>分割线距离两侧内容的间隔</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleWithText from "./examples/with-text/index.vue";
</script>