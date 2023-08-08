<template>
  <div>
    <h2 id="api-collapse-props">Collapse 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultActiveKeys</td>
          <td>Array | String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>默认展开面板的 <code>key</code> 或 <code>key</code> 集合（非受控模式）</td>
        </tr>
        <tr>
          <td>activeKeys</td>
          <td>Array | String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前展开面板的 <code>key</code> 或 <code>key</code> 集合（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示外边框</td>
        </tr>
        <tr>
          <td>showArrow</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示面板的箭头图标</td>
        </tr>
        <tr>
          <td>arrowAlign</td>
          <td>String</td>
          <td>left</td>
          <td>N</td>
          <td>箭头图标的位置，可选值为 <code>left</code>、<code>right</code> 或者不设</td>
        </tr>
        <tr>
          <td>accordion</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
        </tr>
        <tr>
          <td>destroyInactivePanel</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>销毁折叠隐藏的面板内容</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用所有面板，禁用后的面板展开与否将无法通过用户交互改变</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-collapse-events">Collapse 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="190">事件名</th>
          <th width="220">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:activeKeys</td>
          <td>Function</td>
          <td>key[] | key</td>
          <td>切换面板时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>key[] | key</td>
          <td>切换面板时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-collapse-panel-props">CollapsePanel 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
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
          <td>N</td>
          <td>面板唯一标识，默认自动生成</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>面板标题</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>面板标题右侧的附加内容</td>
        </tr>
        <tr>
          <td>showArrow</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示面板的箭头图标</td>
        </tr>
        <tr>
          <td>headerStyle</td>
          <td>String | Object</td>
          <td>--</td>
          <td>N</td>
          <td>自定义头部区域样式</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>String | Object</td>
          <td>--</td>
          <td>N</td>
          <td>自定义内容区域样式</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用面板，禁用后的面板展开与否将无法通过用户交互改变</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>