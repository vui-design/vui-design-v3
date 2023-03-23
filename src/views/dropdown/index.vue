<template>
  <vui-article>
    <h1>Dropdown 下拉菜单</h1>
    <p>向下弹出的菜单列表。</p>
    <h2>何时使用</h2>
    <p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-other-elements />
        <vui-example-trigger />
        <vui-example-contextmenu />
        <vui-example-event />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-cascaded />
        <vui-example-placement />
        <vui-example-button />
        <vui-example-button-loading />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Dropdown 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultVisible</td>
          <td>菜单默认是否可见（非受控模式）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>菜单是否可见（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Boolean</td>
          <td>--</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>触发方式，触发方式，可选值为 <code>hover</code>、<code>focus</code>、<code>click</code>、<code>contextmenu</code> 或者不设</td>
          <td>String</td>
          <td>hover</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>菜单挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
          <td>String | HTMLElement</td>
          <td>body</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>弹出位置，可选值为 <code>top</code>、<code>top-left</code>、<code>top-right</code>、<code>bottom</code>、<code>bottom-left</code>、<code>bottom-right</code> 或者不设</td>
          <td>String</td>
          <td>bottom-left</td>
        </tr>
        <tr>
          <td>autofitPopupWidth</td>
          <td>是否将菜单的宽度设置为触发器宽度</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>autofitPopupMinWidth</td>
          <td>是否将菜单的最小宽度设置为触发器宽度</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>mouseEnterDelay</td>
          <td>鼠标移入后延时多少毫秒打开菜单，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>mouseLeaveDelay</td>
          <td>鼠标移除后延时多少毫秒关闭菜单，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>是否在关闭时卸载菜单</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>点击 <code>Dropdown</code> 子元素是否禁止弹出菜单</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>Dropdown 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="180">事件名</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:visible</td>
          <td>菜单可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
          <td>Function</td>
          <td>visible</td>
        </tr>
        <tr>
          <td>change</td>
          <td>菜单可见状态发生变化时触发的事件回调</td>
          <td>Function</td>
          <td>visible</td>
        </tr>
        <tr>
          <td>open</td>
          <td>菜单打开时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>close</td>
          <td>菜单关闭时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>resize</td>
          <td>菜单尺寸发生变化时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>DropdownButton 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>danger</code>、<code>dashed</code> 或者不设</td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>ghost</td>
          <td>设置按钮为幽灵状态，使按钮背景透明</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>按钮形状，可选值为 <code>round</code> 或者不设</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>size</td>
          <td>按钮尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>自定义右侧按钮图标类型/图标</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>defaultVisible</td>
          <td>菜单默认是否可见（非受控模式）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>菜单是否可见（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Boolean</td>
          <td>--</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>触发方式，触发方式，可选值为 <code>hover</code>、<code>focus</code>、<code>click</code>、<code>contextmenu</code> 或者不设</td>
          <td>String</td>
          <td>hover</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>菜单挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
          <td>String | HTMLElement</td>
          <td>body</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>弹出位置，可选值为 <code>top</code>、<code>top-left</code>、<code>top-right</code>、<code>bottom</code>、<code>bottom-left</code>、<code>bottom-right</code> 或者不设</td>
          <td>String</td>
          <td>bottom-left</td>
        </tr>
        <tr>
          <td>autofitPopupWidth</td>
          <td>是否将菜单的宽度设置为触发器宽度</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>autofitPopupMinWidth</td>
          <td>是否将菜单的最小宽度设置为触发器宽度</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>mouseEnterDelay</td>
          <td>鼠标移入后延时多少毫秒打开菜单，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>mouseLeaveDelay</td>
          <td>鼠标移除后延时多少毫秒关闭菜单，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>是否在关闭时卸载菜单</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>点击 <code>Dropdown</code> 子元素是否禁止弹出菜单</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>DropdownButton 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="180">事件名</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>左侧按钮点击时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>update:visible</td>
          <td>菜单可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
          <td>Function</td>
          <td>visible</td>
        </tr>
        <tr>
          <td>change</td>
          <td>菜单可见状态发生变化时触发的事件回调</td>
          <td>Function</td>
          <td>visible</td>
        </tr>
        <tr>
          <td>open</td>
          <td>菜单打开时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>close</td>
          <td>菜单关闭时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>resize</td>
          <td>菜单尺寸发生变化时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleOtherElements from "./examples/other-elements/index.vue";
  import VuiExampleTrigger from "./examples/trigger/index.vue";
  import VuiExampleContextmenu from "./examples/contextmenu/index.vue";
  import VuiExampleEvent from "./examples/event/index.vue";
  import VuiExampleCascaded from "./examples/cascaded/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleButton from "./examples/button/index.vue";
  import VuiExampleButtonLoading from "./examples/button-loading/index.vue";
</script>