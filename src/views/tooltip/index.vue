<template>
  <vui-article>
    <h1>Tooltip 文字提示</h1>
    <p>简单的文字提示气泡框。</p>
    <h2>何时使用</h2>
    <ul>
      <li>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</li>
      <li>可用来代替系统默认的 <code>title</code> 提示，提供一个按钮/文字/操作的文案解释。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-customized-content />
        <vui-example-trigger />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-placement />
        <vui-example-colorful />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Tooltip 属性</h3>
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
          <td>color</td>
          <td>颜色，预设颜色详见示例〔多彩文字提示〕</td>
          <td>String</td>
          <td>dark</td>
        </tr>
        <tr>
          <td>content</td>
          <td>提示内容</td>
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
          <td>提示框挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
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
          <td>鼠标移入后延时多少毫秒打开提示框，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>mouseLeaveDelay</td>
          <td>鼠标移除后延时多少毫秒关闭提示框，仅在 <code>trigger</code> 为 <code>hover</code> 时生效</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>是否在关闭时卸载提示框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>点击 <code>Tooltip</code> 子元素是否禁止弹出提示框</td>
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
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleCustomizedContent from "./examples/customized-content/index.vue";
  import VuiExampleTrigger from "./examples/trigger/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleColorful from "./examples/colorful/index.vue";
</script>