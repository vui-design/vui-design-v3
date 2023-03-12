<template>
  <vui-article>
    <h1>Empty 空状态</h1>
    <p>空状态时的展示占位图。</p>
    <h2>何时使用</h2>
    <ul>
      <li>当目前没有数据时，用于显式的用户提示。</li>
      <li>初始化场景时的引导创建流程。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-no-description />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-customize />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Empty 属性</h3>
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
          <td>image</td>
          <td>设置显示图片，为 <code>String</code> 类型时表示自定义图片地址</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>description</td>
          <td>自定义描述内容，为 <code>false</code> 时不显示。</td>
          <td>String | Boolean | Slot</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleNoDescription from "./examples/no-description/index.vue";
  import VuiExampleCustomize from "./examples/customize/index.vue";
</script>