<template>
  <div>
    <h2 id="api-tabs-props">Tabs 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>line</td>
          <td>N</td>
          <td>页签基本样式，可选值为 <code>line</code>、<code>card</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>页签尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>defaultActiveKey</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>默认激活的页签（非受控模式），未设置该属性时默认激活第一个</td>
        </tr>
        <tr>
          <td>activeKey</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前激活的页签（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>addable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否可以添加页签</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否允许关闭页签</td>
        </tr>
        <tr>
          <td>destroyOnHide</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>隐藏时销毁 <code>TabPanel</code> 的子元素</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>页签右侧附加内容</td>
        </tr>
        <tr>
          <td>headerStyle</td>
          <td>String | Object</td>
          <td>--</td>
          <td>N</td>
          <td>用于设置页签头部的样式</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>String | Object</td>
          <td>--</td>
          <td>N</td>
          <td>用于设置页签内容部分的样式</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-tabs-events">Tabs 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th width="220">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:activeKey</td>
          <td>Function</td>
          <td>activeKey</td>
          <td>切换页签时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>activeKey</td>
          <td>切换页签时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>add</td>
          <td>Function</td>
          <td>--</td>
          <td>添加页签时触发的事件回调函数，仅在 <code>addable</code> 属性为 <code>true</code> 时有效</td>
        </tr>
        <tr>
          <td>close</td>
          <td>Function</td>
          <td>key</td>
          <td>关闭页签时触发的事件回调函数，仅在 <code>closable</code> 属性为 <code>true</code> 时有效</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-tabs-panel-props">TabPanel 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>String | Number</td>
          <td>--</td>
          <td>Y</td>
          <td>当前页签唯一标识，对应父级 <code>Tabs</code> 组件的 <code>activeKey</code> 值</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>当前页签图标类型/图标</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>当前页签标题</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>是否允许关闭当前页签，默认继承父级 <code>Tabs</code> 组件的 <code>closable</code> 属性</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用当前页签</td>
        </tr>
        <tr>
          <td>destroyOnHide</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>隐藏时销毁 <code>TabPanel</code> 的子元素，默认继承父级 <code>Tabs</code> 组件的 <code>destroyOnHide</code> 属性</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>