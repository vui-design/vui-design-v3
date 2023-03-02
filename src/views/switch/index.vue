<template>
  <div>
    <h1>Switch 开关</h1>
    <p>开关选择器。</p>
    <h2>何时使用</h2>
    <ul>
      <li>需要表示开关状态/两种状态之间的切换时。</li>
      <li>和 Checkbox 的区别是，切换 Switch 会直接触发状态改变，而 Checkbox 一般用于状态标记，需要和提交操作配合。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-type />
        <vui-example-size />
        <vui-example-text />
        <vui-example-state-value />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-color />
        <vui-example-loading />
        <vui-example-disabled />
        <vui-example-condition />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Switch 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="250">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>开关类型，可选值为 <code>circle</code>、<code>round</code>、<code>line</code> 或者不设</td>
          <td>String</td>
          <td>circle</td>
        </tr>
        <tr>
          <td>size</td>
          <td>开关尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否处于加载状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>defaultChecked</td>
          <td>默认是否打开（非受控模式）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>是否打开（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Boolean</td>
          <td>--</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用开关</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>checkedValue</td>
          <td>用于设置开关打开时的值，例如使用 <code>1</code> 来标记打开状态</td>
          <td>Boolean | String | Number</td>
          <td>true</td>
        </tr>
        <tr>
          <td>uncheckedValue</td>
          <td>用于设置开关关闭时的值，例如使用 <code>0</code> 来标记关闭状态</td>
          <td>Boolean | String | Number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>checkedColor</td>
          <td>用于设置开关打开时的 <code>16</code> 进制颜色值</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>uncheckedColor</td>
          <td>用于设置开关关闭时的 <code>16</code> 进制颜色值</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>checkedText</td>
          <td>用于设置开关打开时的显示内容</td>
          <td>Slot | String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>uncheckedText</td>
          <td>用于设置开关关闭时的显示内容</td>
          <td>Slot | String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>开关状态变化时是否触发父级表单验证</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
    <h3>Switch 事件</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="250">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:checked</td>
          <td>在开关状态发生变化时触发的事件回调函数，可以使用<code>v-model</code>双向绑定数据</td>
          <td>Function</td>
          <td>checkedValue | uncheckedValue</td>
        </tr>
        <tr>
          <td>change</td>
          <td>在开关状态发生变化时触发的事件回调函数</td>
          <td>Function</td>
          <td>checkedValue | uncheckedValue</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleText from "./examples/text/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleStateValue from "./examples/state-value/index.vue";
  import VuiExampleColor from "./examples/color/index.vue";
  import VuiExampleCondition from "./examples/condition/index.vue";
</script>