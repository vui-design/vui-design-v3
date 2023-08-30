<template>
  <div>
    <h2 id="api-steps-props">Steps 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
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
          <td>default</td>
          <td>N</td>
          <td>步骤条类型，可选值为 <code>default</code>、<code>dot</code>、<code>navigation</code> 或者不设</td>
        </tr>
        <tr>
          <td>direction</td>
          <td>String</td>
          <td>horizontal</td>
          <td>N</td>
          <td>步骤条方向，目前支持水平 <code>horizontal</code> 和竖直 <code>vertical</code> 两种方向</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>步骤条尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>step</td>
          <td>Number</td>
          <td>0</td>
          <td>N</td>
          <td>当前步骤，从 <code>0</code> 开始记数</td>
        </tr>
        <tr>
          <td>status</td>
          <td>String</td>
          <td>process</td>
          <td>N</td>
          <td>当前步骤的状态，可选值为 <code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code> 或者不设；在子组件 <code>Step</code> 中，可以通过 <code>status</code> 属性覆盖状态</td>
        </tr>
        <tr>
          <td>changeOnTitle</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>仅在步骤标题上点击时触发 <code>change</code> 事件，默认点击步骤标题、图标或描述时均触发；该属性仅在绑定了 <code>onChange</code> 事件时有效</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义点状步骤条的步骤点，可以设置为一个作用域插槽来实现带有 <code>Tooltip</code> 功能的步骤点</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-steps-events">Steps 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th width="220">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>index</td>
          <td>点击步骤时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-steps-step-props">Step 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义步骤图标类型/图标</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>Y</td>
          <td>步骤标题</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>步骤详细描述</td>
        </tr>
        <tr>
          <td>status</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>步骤状态，可选值为 <code>wait</code>、<code>process</code>、<code>finish</code>、<code>error</code> 或者不设；若不设置该属性，则根据父级 <code>Steps</code> 组件的 <code>step</code> 和 <code>status</code> 属性自动指定状态</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>禁用点击</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>