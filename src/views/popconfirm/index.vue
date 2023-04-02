<template>
  <vui-article>
    <h1>Popconfirm 气泡确认框</h1>
    <p>点击元素，弹出气泡式的确认框。</p>
    <h2>何时使用</h2>
    <ul>
      <li>目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。</li>
      <li>和 Confirm 弹出的全屏居中模态对话框相比，交互形式更轻量。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-icon />
        <vui-example-local />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-trigger-condition />
        <vui-example-promise />
        <vui-example-placement />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Popconfirm 属性</h3>
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
          <td>--</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>确认框的图标或图标类型</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>确认框的标题</td>
          <td>String | Number | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>触发方式，可选值为 <code>hover</code>、<code>focus</code>、<code>click</code>、<code>contextmenu</code> 或者不设</td>
          <td>String</td>
          <td>click</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>确认框挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
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
          <td>cancelType</td>
          <td>取消按钮类型</td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>cancelText</td>
          <td>取消按钮文本</td>
          <td>String</td>
          <td>取消</td>
        </tr>
        <tr>
          <td>okType</td>
          <td>确认按钮类型</td>
          <td>String</td>
          <td>primary</td>
        </tr>
        <tr>
          <td>okText</td>
          <td>确认按钮文本</td>
          <td>String</td>
          <td>确认</td>
        </tr>
        <tr>
          <td>mouseEnterDelay</td>
          <td>鼠标移入后延时多少毫秒打开确认框，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>mouseLeaveDelay</td>
          <td>鼠标移除后延时多少毫秒关闭确认框，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>是否在关闭时卸载确认框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>点击 Popconfirm 子元素是否禁止弹出确认框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>Popconfirm 事件</h3>
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
        <tr>
          <td>cancel</td>
          <td>点击取消按钮的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>点击确认按钮的事件回调</td>
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
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleLocal from "./examples/local/index.vue";
  import VuiExampleTriggerCondition from "./examples/trigger-condition/index.vue";
  import VuiExamplePromise from "./examples/promise/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
</script>