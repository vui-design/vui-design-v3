<template>
  <div>
    <h2 id="api-switch-props">Switch 属性</h2>
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
          <td>type</td>
          <td>String</td>
          <td>circle</td>
          <td>N</td>
          <td>开关类型，可选值为 <code>circle</code>、<code>round</code>、<code>line</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>开关尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否处于加载状态</td>
        </tr>
        <tr>
          <td>defaultChecked</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>默认是否打开（非受控模式）</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>是否打开（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用开关</td>
        </tr>
        <tr>
          <td>checkedValue</td>
          <td>Boolean | String | Number</td>
          <td>true</td>
          <td>N</td>
          <td>自定义开关打开时的值，例如使用 <code>1</code> 来标记打开状态</td>
        </tr>
        <tr>
          <td>uncheckedValue</td>
          <td>Boolean | String | Number</td>
          <td>false</td>
          <td>N</td>
          <td>自定义开关关闭时的值，例如使用 <code>0</code> 来标记关闭状态</td>
        </tr>
        <tr>
          <td>checkedColor</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>自定义开关打开时的 <code>16</code> 进制颜色值</td>
        </tr>
        <tr>
          <td>uncheckedColor</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>自定义开关关闭时的 <code>16</code> 进制颜色值</td>
        </tr>
        <tr>
          <td>checkedText</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义开关打开时的显示内容</td>
        </tr>
        <tr>
          <td>uncheckedText</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义开关关闭时的显示内容</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>开关状态变化时是否触发父级表单验证</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-switch-events">Switch 事件</h2>
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
          <td>开关状态发生变化时触发的事件回调函数，可以使用<code>v-model</code>双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>checkedValue | uncheckedValue</td>
          <td>开关状态发生变化时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>