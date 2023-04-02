<template>
  <vui-article>
    <h1>Drawer 抽屉</h1>
    <p>屏幕边缘滑出的浮层面板。</p>
    <h2>何时使用</h2>
    <p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。</p>
    <ul>
      <li>当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。</li>
      <li>当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-placement />
        <vui-example-headless-and-footless />
        <vui-example-button-props />
        <vui-example-hide-close-button />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-promise />
        <vui-example-customized-footer />
        <vui-example-multi-level />
        <vui-example-get-popup-container />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Drawer 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="200">属性</th>
          <th>说明</th>
          <th width="320">类型</th>
          <th width="100">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultVisible</td>
          <td>抽屉默认是否可见（非受控模式）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>抽屉是否可见（受控模式），可以使用 <code>v-model</code> 双向绑定</td>
          <td>Boolean</td>
          <td>--</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>标题左侧的图标类型/图标</td>
          <td>String | RenderFunction | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>抽屉标题</td>
          <td>String | RenderFunction | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>抽屉底部内容；当不需要底部按钮时，可以设为 <code>false</code></td>
          <td>Boolean | String | RenderFunction | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>showCancelButton</td>
          <td>是否显示取消按钮</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>cancelButtonProps</td>
          <td>自定义取消按钮的属性</td>
          <td>ButtonProps</td>
          <td>--</td>
        </tr>
        <tr>
          <td>cancelText</td>
          <td>取消按钮文字</td>
          <td>String</td>
          <td>取消</td>
        </tr>
        <tr>
          <td>showOkButton</td>
          <td>是否显示确定按钮</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>okButtonProps</td>
          <td>自定义确定按钮的属性</td>
          <td>ButtonProps</td>
          <td>--</td>
        </tr>
        <tr>
          <td>okText</td>
          <td>确定按钮文字</td>
          <td>String</td>
          <td>确定</td>
        </tr>
        <tr>
          <td>autofocusButton</td>
          <td>指定自动获得焦点的按钮，可选值为 <code>cancel</code>、<code>ok</code> 或者不设</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>抽屉打开位置，可选值为 <code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code> 或者不设</td>
          <td>String</td>
          <td>right</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>是否显示右上角的关闭按钮</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>closeText</td>
          <td>关闭按钮文字</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>width</td>
          <td>抽屉宽度，在 <code>placement</code> 为 <code>left</code> 或 <code>right</code> 时使用</td>
          <td>String | Number</td>
          <td>480</td>
        </tr>
        <tr>
          <td>height</td>
          <td>抽屉高度，在 <code>placement</code> 为 <code>top</code> 或 <code>bottom</code> 时使用</td>
          <td>String | Number</td>
          <td>480</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>子抽屉打开时，父级抽屉的位置偏移量</td>
          <td>Number</td>
          <td>160</td>
        </tr>
        <tr>
          <td>backdrop</td>
          <td>是否显示背景遮罩</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>clickBackdropToClose</td>
          <td>点击背景遮罩是否关闭抽屉</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>关闭时销毁抽屉内容（抽屉里的子元素）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>指定抽屉挂载的 HTML 节点</td>
          <td>String | HTMLElement</td>
          <td>body</td>
        </tr>
        <tr>
          <td>class</td>
          <td>自定义抽屉样式类名</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>style</td>
          <td>自定义抽屉样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>headerStyle</td>
          <td>自定义抽屉头部样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>自定义抽屉内容部分样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>footerStyle</td>
          <td>自定义抽屉底部样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>backdropClassName</td>
          <td>自定义背景遮罩样式类名</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>backdropStyle</td>
          <td>自定义背景遮罩样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>Modal 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="200">事件名</th>
          <th>说明</th>
          <th width="320">类型</th>
          <th width="100">回调参数</th>
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
          <td>cancel</td>
          <td>点击取消按钮（或右上角关闭按钮、背景遮罩）的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>点击确定按钮的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>beforeOpen</td>
          <td>抽屉打开前触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>open</td>
          <td>抽屉打开时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>afterOpen</td>
          <td>抽屉打开后（打开动画完成后）触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>beforeClose</td>
          <td>抽屉关闭前触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>close</td>
          <td>抽屉关闭时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>afterClose</td>
          <td>抽屉关闭后（关闭动画完成后）触发的事件回调</td>
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
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleHeadlessAndFootless from "./examples/headless-and-footless/index.vue";
  import VuiExampleButtonProps from "./examples/button-props/index.vue";
  import VuiExampleHideCloseButton from "./examples/hide-close-button/index.vue";
  import VuiExamplePromise from "./examples/promise/index.vue";
  import VuiExampleCustomizedFooter from "./examples/customized-footer/index.vue";
  import VuiExampleMultiLevel from "./examples/multi-level/index.vue";
  import VuiExampleGetPopupContainer from "./examples/get-popup-container/index.vue";
</script>