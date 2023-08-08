<template>
  <div>
    <h2 id="api-radio-props">Radio 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="230">类型</th>
          <th width="260">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>原生 <code>input[type="radio"]</code> 元素名称</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>单选框样式类型，可选值为 <code>button</code> 或者不设，为 <code>button</code> 时使用按钮样式</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>单选框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>minWidth</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>仅在 <code>type</code> 为 <code>button</code> 时有效，用于指定单选按钮的最小宽度</td>
        </tr>
        <tr>
          <td>label</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>单选框文本</td>
        </tr>
        <tr>
          <td>value</td>
          <td>Boolean | String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>仅在单选组合中有效，用于指定单选框的 <code>value</code> 值，组合会自动判断是否选中</td>
        </tr>
        <tr>
          <td>defaultChecked</td>
          <td>Boolean | String | Number</td>
          <td>false</td>
          <td>N</td>
          <td>默认是否选中（非受控模式），仅在单独使用时有效</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>Boolean | String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>是否选中（受控模式），仅在单独使用时有效，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用单选框</td>
        </tr>
        <tr>
          <td>checkedValue</td>
          <td>Boolean | String | Number</td>
          <td>true</td>
          <td>N</td>
          <td>仅在单独使用时有效，用于设置选中时的值，例如使用 <code>1</code> 来标记选中状态</td>
        </tr>
        <tr>
          <td>uncheckedValue</td>
          <td>Boolean | String | Number</td>
          <td>false</td>
          <td>N</td>
          <td>仅在单独使用时有效，用于设置未选中时的值，例如使用 <code>0</code> 来标记未选中状态</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>选中状态变化时是否触发父级表单验证</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-radio-events">Radio 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th width="230">类型</th>
          <th width="260">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:checked</td>
          <td>Function</td>
          <td>checkedValue | uncheckedValue</td>
          <td>选中状态发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>checkedValue | uncheckedValue</td>
          <td>选中状态发生变化时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-radio-group-props">RadioGroup 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="230">类型</th>
          <th width="260">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>原生 <code>input[type="radio"]</code> 元素名称</td>
        </tr>
        <tr>
          <td>layout</td>
          <td>String</td>
          <td>horizontal</td>
          <td>N</td>
          <td>单选组合布局方式，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>单选组合样式类型，可选值为 <code>button</code> 或者不设，为 <code>button</code> 时使用按钮样式</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>单选组合尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>minWidth</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>仅在 <code>type</code> 为 <code>button</code> 时有效，用于指定单选按钮的最小宽度</td>
        </tr>
        <tr>
          <td>defaultValue</td>
          <td>Boolean | String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>默认选中的值（非受控模式）</td>
        </tr>
        <tr>
          <td>value</td>
          <td>Boolean | String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>选中的值（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>options</td>
          <td>Array</td>
          <td>[]</td>
          <td>N</td>
          <td>以配置形式设置单选组合的选项列表，详见示例〔配置方式〕</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用单选组合</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>选中值变化时是否触发父级表单验证</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-radio-group-events">RadioGroup 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th width="230">类型</th>
          <th width="260">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:value</td>
          <td>Function</td>
          <td>value</td>
          <td>选中值发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>value</td>
          <td>选中值发生变化时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>