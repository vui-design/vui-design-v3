<template>
  <div>
    <h2 id="api-tooltip-props">Tooltip 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultVisible</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>默认是否可见（非受控模式）</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>是否可见（受控模式），可以使用 <code>v-model</code> 双向绑定</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>dark</td>
          <td>N</td>
          <td>颜色，预设颜色详见示例〔多彩文字提示〕</td>
        </tr>
        <tr>
          <td>content</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>提示内容</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>String</td>
          <td>hover</td>
          <td>N</td>
          <td>触发方式，可选值为 <code>hover</code>、<code>focus</code>、<code>click</code>、<code>contextmenu</code> 或者不设</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>String | HTMLElement</td>
          <td>body</td>
          <td>N</td>
          <td>提示框挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>String</td>
          <td>top</td>
          <td>N</td>
          <td>弹出位置，可选值为 <code>top</code>、<code>top-left</code>、<code>top-right</code>、<code>bottom</code>、<code>bottom-left</code>、<code>bottom-right</code>、<code>left</code>、<code>left-top</code>、<code>left-bottom</code>、<code>right</code>、<code>right-top</code>、<code>right-bottom</code> 或者不设</td>
        </tr>
        <tr>
          <td>mouseEnterDelay</td>
          <td>Number</td>
          <td>100</td>
          <td>N</td>
          <td>鼠标移入后延时多少毫秒打开提示框，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
        </tr>
        <tr>
          <td>mouseLeaveDelay</td>
          <td>Number</td>
          <td>100</td>
          <td>N</td>
          <td>鼠标移除后延时多少毫秒关闭提示框，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否在关闭时卸载提示框</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>点击 <code>Tooltip</code> 子元素是否禁止弹出提示框</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-tooltip-events">Tooltip 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="180">事件名</th>
          <th width="220">类型</th>
          <th width="120">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:visible</td>
          <td>Function</td>
          <td>visible</td>
          <td>可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>visible</td>
          <td>可见状态发生变化时触发的事件回调</td>
        </tr>
        <tr>
          <td>open</td>
          <td>Function</td>
          <td>--</td>
          <td>打开时触发的事件回调</td>
        </tr>
        <tr>
          <td>close</td>
          <td>Function</td>
          <td>--</td>
          <td>关闭时触发的事件回调</td>
        </tr>
        <tr>
          <td>resize</td>
          <td>Function</td>
          <td>--</td>
          <td>尺寸发生变化时触发的事件回调</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>