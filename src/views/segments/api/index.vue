<template>
  <div>
    <h2 id="api-segments-props">Segments 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultActiveKey</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>默认选中的分段（非受控模式），未设置该属性时默认选中第一个</td>
        </tr>
        <tr>
          <td>activeKey</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前选中的分段（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>options</td>
          <td>Array</td>
          <td>[]</td>
          <td>N</td>
          <td>以数据化配置形式设置分段控制器的选项列表</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否为块级元素，为 <code>true</code> 时宽度撑满父元素</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>分段控制器的尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用分段控制器</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-segments-events">Segments 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th width="220">类型</th>
          <th width="120">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:activeKey</td>
          <td>Function</td>
          <td>activeKey</td>
          <td>选中分段发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>activeKey</td>
          <td>选中分段发生变化时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-segments-item-props">SegmentsItem 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
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
          <td>分段的唯一标识</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>分段的图标类型/图标</td>
        </tr>
        <tr>
          <td>label</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>分段的标签文本</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用分段</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>