<template>
  <vui-article>
    <h1>Trend 趋势标记</h1>
    <p>趋势符号，标记数据的上升和下降趋势。通常用红色代表“好”，绿色代表“不好”，如股票涨跌场景。</p>
    <h2>何时使用</h2>
    <ul>
      <li>标记数据的上升和下降趋势。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-precision />
        <vui-example-label />
        <vui-example-color />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-reverse-color />
        <vui-example-placeholder />
        <vui-example-ratio />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Rate 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>当前值</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>target</td>
          <td>目标值/对比值</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>ratio</td>
          <td>自定义趋势值，设置此属性后 <code>value</code> 及 <code>target</code> 属性无效</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>precision</td>
          <td>数值精度，必须为 <code>0</code> 或大于 <code>0</code> 的整数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>label</td>
          <td>标签文本</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>downwardColor</td>
          <td>下降趋势的颜色</td>
          <td>String</td>
          <td>#52c41a</td>
        </tr>
        <tr>
          <td>upwardColor</td>
          <td>上升趋势的颜色</td>
          <td>String</td>
          <td>#ff4d4f</td>
        </tr>
        <tr>
          <td>reverseColor</td>
          <td>颜色反转，仅在使用默认颜色时生效</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>趋势值无效时的占位文本</td>
          <td>String | Slot</td>
          <td>NaN</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePrecision from "./examples/precision/index.vue";
  import VuiExampleLabel from "./examples/label/index.vue";
  import VuiExampleColor from "./examples/color/index.vue";
  import VuiExampleReverseColor from "./examples/reverse-color/index.vue";
  import VuiExamplePlaceholder from "./examples/placeholder/index.vue";
  import VuiExampleRatio from "./examples/ratio/index.vue";
</script>