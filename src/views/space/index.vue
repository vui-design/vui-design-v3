<template>
  <vui-article>
    <h1>Space 间距</h1>
    <p>设置组件之间的间距。</p>
    <h2>何时使用</h2>
    <p>避免组件紧贴在一起，拉开统一的空间。</p>
    <ul>
      <li>适合行内元素的水平间距。</li>
      <li>可以设置各种水平对齐方式。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-vertical />
        <vui-example-justify />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-align />
        <vui-example-divider />
        <vui-example-size />
        <vui-example-customize />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Space 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="240">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>block</td>
          <td><code>Space</code> 组件是否以块级元素（宽度撑满父级元素）的方式渲染</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>direction</td>
          <td>项目排列方向，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
          <td>String</td>
          <td>horizontal</td>
        </tr>
        <tr>
          <td>justify</td>
          <td>项目在主轴上的对齐方式，可选值为 <code>start</code>、<code>center</code>、<code>end</code>、<code>around</code>、<code>between</code> 或者不设。该属性仅在 <code>direction</code> 为 <code>horizontal</code> 时有效</td>
          <td>String</td>
          <td>start</td>
        </tr>
        <tr>
          <td>align</td>
          <td>项目在交叉轴上的对齐方式，可选值为 <code>start</code>、<code>center</code>、<code>end</code>、<code>baseline</code>、<code>stretch</code> 或者不设。该属性仅在 <code>direction</code> 为 <code>horizontal</code> 时有效</td>
          <td>String</td>
          <td>center</td>
        </tr>
        <tr>
          <td>divider</td>
          <td>是否在项目间插入分割线，可设置为具体的数值，用于指定分割线高度。该属性仅在 <code>direction</code> 为 <code>horizontal</code> 时有效</td>
          <td>Boolean | String | Number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>间距大小，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设，支持自定义间距大小</td>
          <td>String | Number</td>
          <td>medium</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleJustify from "./examples/justify/index.vue";
  import VuiExampleAlign from "./examples/align/index.vue";
  import VuiExampleDivider from "./examples/divider/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleCustomize from "./examples/customize/index.vue";
</script>