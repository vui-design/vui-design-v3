<template>
  <vui-article>
    <h1>Radio 单选框</h1>
    <p>单选框。</p>
    <h2>何时使用</h2>
    <ul>
      <li>用于在多个备选项中选中单个状态。</li>
      <li>和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-disabled />
        <vui-example-condition />
        <vui-example-state-value />
        <vui-example-controller />
        <vui-example-group />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-group-vertical />
        <vui-example-group-options />
        <vui-example-button />
        <vui-example-size />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Radio 属性</h3>
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
          <td>name</td>
          <td>原生 <code>input[type="radio"]</code> 元素名称</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>type</td>
          <td>单选框样式类型，可选值为 <code>button</code> 或者不设，为 <code>button</code> 时使用按钮样式</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>size</td>
          <td>单选框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>minWidth</td>
          <td>仅在 <code>type</code> 为 <code>button</code> 时有效，用于指定单选按钮的最小宽度</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>label</td>
          <td>单选框文本</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>value</td>
          <td>仅在单选组合中有效，用于指定单选框的 <code>value</code> 值，组合会自动判断是否选中</td>
          <td>Boolean | String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>defaultChecked</td>
          <td>默认是否选中（非受控模式），仅在单独使用时有效</td>
          <td>Boolean | String | Number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>是否选中（受控模式），仅在单独使用时有效，可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Boolean | String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用单选框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>checkedValue</td>
          <td>仅在单独使用时有效，用于设置选中时的值，例如使用 <code>1</code> 来标记选中状态</td>
          <td>Boolean | String | Number</td>
          <td>true</td>
        </tr>
        <tr>
          <td>uncheckedValue</td>
          <td>仅在单独使用时有效，用于设置未选中时的值，例如使用 <code>0</code> 来标记未选中状态</td>
          <td>Boolean | String | Number</td>
          <td>false</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>选中状态变化时是否触发父级表单验证</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
    <h3>Radio 事件</h3>
    <table class="example-api-events">
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
          <td>选中状态发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Function</td>
          <td>checkedValue | uncheckedValue</td>
        </tr>
        <tr>
          <td>change</td>
          <td>选中状态发生变化时触发的事件回调函数</td>
          <td>Function</td>
          <td>checkedValue | uncheckedValue</td>
        </tr>
      </tbody>
    </table>
    <h3>RadioGroup 属性</h3>
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
          <td>name</td>
          <td>原生 <code>input[type="radio"]</code> 元素名称</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>layout</td>
          <td>单选组合布局方式，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
          <td>String</td>
          <td>horizontal</td>
        </tr>
        <tr>
          <td>type</td>
          <td>单选组合样式类型，可选值为 <code>button</code> 或者不设，为 <code>button</code> 时使用按钮样式</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>size</td>
          <td>单选组合尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>minWidth</td>
          <td>仅在 <code>type</code> 为 <code>button</code> 时有效，用于指定单选按钮的最小宽度</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>defaultValue</td>
          <td>默认选中的值（非受控模式）</td>
          <td>Boolean | String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>value</td>
          <td>选中的值（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Boolean | String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>options</td>
          <td>以配置形式设置单选组合的选项列表，详见示例〔配置方式〕</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用单选组合</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>选中值变化时是否触发父级表单验证</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
    <h3>RadioGroup 事件</h3>
    <table class="example-api-events">
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
          <td>update:value</td>
          <td>选中值发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Function</td>
          <td>value</td>
        </tr>
        <tr>
          <td>change</td>
          <td>选中值发生变化时触发的事件回调函数</td>
          <td>Function</td>
          <td>value</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleCondition from "./examples/condition/index.vue";
  import VuiExampleStateValue from "./examples/state-value/index.vue";
  import VuiExampleController from "./examples/controller/index.vue";
  import VuiExampleGroup from "./examples/group/index.vue";
  import VuiExampleGroupVertical from "./examples/group-vertical/index.vue";
  import VuiExampleGroupOptions from "./examples/group-options/index.vue";
  import VuiExampleButton from "./examples/button/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
</script>