<template>
  <vui-article>
    <h1>Descriptions 描述列表</h1>
    <p>成组展示多个只读字段。</p>
    <h2>何时使用</h2>
    <p>常见于详情页的信息展示。</p>
    <h2>代码演示</h2>
    <vui-example-basic-usage />
    <vui-example-bordered />
    <vui-example-vertical />
    <vui-example-vertical-bordered />
    <vui-example-size />
    <vui-example-responsive />
    <h2 id="example-api">API</h2>
    <h3>Descriptions 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="160">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>layout</td>
          <td>描述列表的布局方式，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
          <td>String</td>
          <td>horizontal</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>是否显示边框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>描述列表的尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>title</td>
          <td>描述列表的标题，显示在最顶部</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>描述列表的操作区，显示在标题的右侧</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>columns</td>
          <td>描述列表的列数，即一行中显示的 <code>Description</code> 数量，可以写成支持响应式的对象 <code>{ xs: 1, sm: 2, md: 3 }</code></td>
          <td>Number | Object</td>
          <td>3</td>
        </tr>
        <tr>
          <td>colon</td>
          <td>描述标签右侧是否显示冒号，在不含边框的描述列表中默认为 <code>true</code>，即显示冒号</td>
          <td>Boolean</td>
          <td>--</td>
        </tr>
        <tr>
          <td>labelWidth</td>
          <td>描述标签的宽度，设为 <code>String</code> 类型时支持百分比宽度；该属性仅在 <code>layout</code> 为 <code>horizontal</code> 且含有边框的描述列表中有效</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>labelAlign</td>
          <td>描述标签的文本对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设；该属性仅在 <code>layout</code> 为 <code>horizontal</code> 且含有边框的描述列表中有效</td>
          <td>String</td>
          <td>left</td>
        </tr>
        <tr>
          <td>labelStyle</td>
          <td>自定义描述标签样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>contentStyle</td>
          <td>自定义内容区样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>tableStyle</td>
          <td>自定义内容区表格样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>Description 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="160">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>label</td>
          <td>描述标签</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>span</td>
          <td>所占的列数</td>
          <td>Number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>labelStyle</td>
          <td>自定义描述标签样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>contentStyle</td>
          <td>自定义内容样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleVerticalBordered from "./examples/vertical-bordered/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleResponsive from "./examples/responsive/index.vue";
</script>