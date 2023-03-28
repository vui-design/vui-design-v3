<template>
  <vui-article>
    <h1>Ribbon 缎带</h1>
    <p>容器右上角的缎带徽标。</p>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-placement />
        <vui-example-type />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-colorful />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Ribbon 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="140">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>缎带类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
          <td>String</td>
          <td>primary</td>
        </tr>
        <tr>
          <td>color</td>
          <td>自定义缎带的颜色，会覆盖 <code>type</code> 类型下的默认颜色。预设颜色详见示例〔多彩缎带〕</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>text</td>
          <td>缎带文本</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>缎带位置，可选值为 <code>left</code>、<code>right</code> 或者不设</td>
          <td>String</td>
          <td>right</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleColorful from "./examples/colorful/index.vue";
</script>