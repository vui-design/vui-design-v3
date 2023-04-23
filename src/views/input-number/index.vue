<template>
  <vui-article>
    <h1>InputNumber 数字输入框</h1>
    <p>通过鼠标或键盘，输入范围内的数值。</p>
    <h2>何时使用</h2>
    <ul>
      <li>当需要获取标准数值时。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-digit />
        <vui-example-formatter />
        <vui-example-bordered />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-size />
        <vui-example-clearable />
        <vui-example-disabled />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>InputNumber 属性</h3>
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
          <td>defaultValue</td>
          <td>默认值（非受控模式）</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>value</td>
          <td>值（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>min</td>
          <td>最小值</td>
          <td>Number</td>
          <td>-Infinity</td>
        </tr>
        <tr>
          <td>max</td>
          <td>最大值</td>
          <td>Number</td>
          <td>Infinity</td>
        </tr>
        <tr>
          <td>step</td>
          <td>每次改变的步长，可以是小数</td>
          <td>Number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>precision</td>
          <td>数值精度，必须为 <code>0</code> 或大于 <code>0</code> 的整数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>formatter</td>
          <td>指定输入框展示值的格式</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>输入框占位文本</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>是否含有边框</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>size</td>
          <td>输入框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>是否自动获得焦点</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否允许清空</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>输入框是否为只读状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>输入框是否为禁用状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>值变化时是否触发父级表单验证</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
    <h3>InputNumber 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="140">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:value</td>
          <td>输入框内容变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Function</td>
          <td>value</td>
        </tr>
        <tr>
          <td>change</td>
          <td>输入框内容变化时触发的事件回调函数</td>
          <td>Function</td>
          <td>value</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>输入框获取焦点时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>输入框失去焦点时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>keydown</td>
          <td>键盘按下时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>keyup</td>
          <td>键盘弹起时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>enter</td>
          <td>按下回车键时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>clear</td>
          <td>点击清空按钮时触发的事件回调函数</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleDigit from "./examples/digit/index.vue";
  import VuiExampleFormatter from "./examples/formatter/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleClearable from "./examples/clearable/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
</script>