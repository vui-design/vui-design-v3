<template>
  <div>
    <h1>Popover 气泡卡片</h1>
    <p>鼠标移入/点击元素，弹出气泡式的卡片浮层</p>
    <h2>何时使用</h2>
    <ul>
      <li>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</li>
      <li>和 <code>Tooltip</code> 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-trigger />
        <vui-example-control />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-placement />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Popover 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultVisible</td>
          <td>默认是否可见（非受控模式）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>是否可见（受控模式），可以使用 <code>v-model</code> 双向绑定</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>title</td>
          <td>气泡卡片的标题</td>
          <td>String | Number | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>content</td>
          <td>气泡卡片的内容</td>
          <td>String | Number | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>触发方式，可选值为 <code>hover</code>、<code>focus</code>、<code>click</code>、<code>contextmenu</code> 或者不设</td>
          <td>String</td>
          <td>hover</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>气泡卡片挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
          <td>String | HTMLElement</td>
          <td>body</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>弹出位置，可选值为 <code>top</code>、<code>top-left</code>、<code>top-right</code>、<code>bottom</code>、<code>bottom-left</code>、<code>bottom-right</code>、<code>left</code>、<code>left-top</code>、<code>left-bottom</code>、<code>right</code>、<code>right-top</code>、<code>right-bottom</code> 或者不设</td>
          <td>String</td>
          <td>top</td>
        </tr>
        <tr>
          <td>mouseEnterDelay</td>
          <td>鼠标移入后延时多少毫秒打开气泡卡片，单位毫秒</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>mouseLeaveDelay</td>
          <td>鼠标移除后延时多少毫秒关闭气泡卡片，单位毫秒</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>是否在关闭时卸载气泡卡片</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>点击 Popover 子元素是否禁止弹出气泡卡片</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>Tooltip 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="180">事件名</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="120">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:visible</td>
          <td>可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
          <td>Function</td>
          <td>visible</td>
        </tr>
        <tr>
          <td>change</td>
          <td>可见状态发生变化时触发的事件回调</td>
          <td>Function</td>
          <td>visible</td>
        </tr>
        <tr>
          <td>open</td>
          <td>打开时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>close</td>
          <td>关闭时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>resize</td>
          <td>尺寸发生变化时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleTrigger from "./examples/trigger/index.vue";
  import VuiExampleControl from "./examples/control/index.vue";
</script>