<template>
  <div>
    <h2 id="api-alert-props">Alert 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="180">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>info</td>
          <td>N</td>
          <td>警告提示类型，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
        </tr>
        <tr>
          <td>banner</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否应用顶部公告样式</td>
        </tr>
        <tr>
          <td>showIcon</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否显示图标</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义图标类型/图标，默认根据 <code>type</code> 属性自动设置，仅在 <code>showIcon</code> 为 <code>true</code> 时有效</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否可以关闭</td>
        </tr>
        <tr>
          <td>closeText</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义关闭按钮文本，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
        </tr>
        <tr>
          <td>message</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>警告提示内容</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>警告提示的辅助性描述信息</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-alert-events">Alert 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th width="180">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>close</td>
          <td>Function</td>
          <td>event</td>
          <td>关闭警告提示时的事件回调函数，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>