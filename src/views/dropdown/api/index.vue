<template>
  <div>
    <h2 id="api-dropdown-props">Dropdown 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th width="190">类型</th>
          <th width="140">默认值</th>
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
          <td>菜单默认是否可见（非受控模式）</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>菜单是否可见（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
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
          <td>菜单挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>String</td>
          <td>bottom-left</td>
          <td>N</td>
          <td>弹出位置，可选值为 <code>top</code>、<code>top-left</code>、<code>top-right</code>、<code>bottom</code>、<code>bottom-left</code>、<code>bottom-right</code> 或者不设</td>
        </tr>
        <tr>
          <td>autofitPopupWidth</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否将菜单的宽度设置为触发器宽度</td>
        </tr>
        <tr>
          <td>autofitPopupMinWidth</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否将菜单的最小宽度设置为触发器宽度</td>
        </tr>
        <tr>
          <td>mouseEnterDelay</td>
          <td>Number</td>
          <td>100</td>
          <td>N</td>
          <td>鼠标移入后延时多少毫秒打开菜单，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
        </tr>
        <tr>
          <td>mouseLeaveDelay</td>
          <td>Number</td>
          <td>100</td>
          <td>N</td>
          <td>鼠标移除后延时多少毫秒关闭菜单，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否在关闭时卸载菜单</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>点击 <code>Dropdown</code> 子元素是否禁止弹出菜单</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-dropdown-events">Dropdown 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="190">事件名</th>
          <th width="190">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:visible</td>
          <td>Function</td>
          <td>visible</td>
          <td>菜单可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>visible</td>
          <td>菜单可见状态发生变化时触发的事件回调</td>
        </tr>
        <tr>
          <td>open</td>
          <td>Function</td>
          <td>--</td>
          <td>菜单打开时触发的事件回调</td>
        </tr>
        <tr>
          <td>close</td>
          <td>Function</td>
          <td>--</td>
          <td>菜单关闭时触发的事件回调</td>
        </tr>
        <tr>
          <td>resize</td>
          <td>Function</td>
          <td>--</td>
          <td>菜单尺寸发生变化时触发的事件回调</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-dropdown-button-props">DropdownButton 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th width="190">类型</th>
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
          <td>按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>danger</code>、<code>dashed</code> 或者不设</td>
        </tr>
        <tr>
          <td>ghost</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置按钮为幽灵状态，使按钮背景透明</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>按钮形状，可选值为 <code>round</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>按钮尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义右侧按钮图标类型/图标</td>
        </tr>
        <tr>
          <td>defaultVisible</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>菜单默认是否可见（非受控模式）</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>菜单是否可见（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
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
          <td>菜单挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>String</td>
          <td>bottom-left</td>
          <td>N</td>
          <td>弹出位置，可选值为 <code>top</code>、<code>top-left</code>、<code>top-right</code>、<code>bottom</code>、<code>bottom-left</code>、<code>bottom-right</code> 或者不设</td>
        </tr>
        <tr>
          <td>autofitPopupWidth</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否将菜单的宽度设置为触发器宽度</td>
        </tr>
        <tr>
          <td>autofitPopupMinWidth</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否将菜单的最小宽度设置为触发器宽度</td>
        </tr>
        <tr>
          <td>mouseEnterDelay</td>
          <td>Number</td>
          <td>100</td>
          <td>N</td>
          <td>鼠标移入后延时多少毫秒打开菜单，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
        </tr>
        <tr>
          <td>mouseLeaveDelay</td>
          <td>Number</td>
          <td>100</td>
          <td>N</td>
          <td>鼠标移除后延时多少毫秒关闭菜单，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否在关闭时卸载菜单</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>点击 <code>Dropdown</code> 子元素是否禁止弹出菜单</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-dropdown-button-events">DropdownButton 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="190">事件名</th>
          <th width="190">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>Function</td>
          <td>event</td>
          <td>左侧按钮点击时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>update:visible</td>
          <td>Function</td>
          <td>visible</td>
          <td>菜单可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>visible</td>
          <td>菜单可见状态发生变化时触发的事件回调</td>
        </tr>
        <tr>
          <td>open</td>
          <td>Function</td>
          <td>--</td>
          <td>菜单打开时触发的事件回调</td>
        </tr>
        <tr>
          <td>close</td>
          <td>Function</td>
          <td>--</td>
          <td>菜单关闭时触发的事件回调</td>
        </tr>
        <tr>
          <td>resize</td>
          <td>Function</td>
          <td>--</td>
          <td>菜单尺寸发生变化时触发的事件回调</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>