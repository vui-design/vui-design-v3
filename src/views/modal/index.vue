<template>
  <vui-article>
    <h1>Modal 对话框</h1>
    <p>模态对话框。</p>
    <h2>何时使用</h2>
    <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 <code>Modal</code> 在当前页面正中打开一个对话框，承载相应的操作。另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 <code>Modal.confirm()</code> 等方法。</p>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-headless-and-footless />
        <vui-example-button-props />
        <vui-example-hide-close-button />
        <vui-example-width />
        <vui-example-position />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-fullscreen />
        <vui-example-draggable />
        <vui-example-promise />
        <vui-example-customized-footer />
        <vui-example-confirm />
        <vui-example-infomation />
        <vui-example-update-and-close />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Modal 属性</h3>
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
          <td>对话框默认是否可见（非受控模式）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>对话框是否可见（受控模式），可以使用 <code>v-model</code> 双向绑定</td>
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
          <td>对话框标题</td>
          <td>String | RenderFunction | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>对话框底部内容；当不需要底部按钮时，可以设为 <code>false</code></td>
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
          <td>对话框宽度；对话框的宽度是响应式的，当屏幕宽度小于 <code>768px</code> 时，宽度会被强制设为 <code>auto</code></td>
          <td>String | Number</td>
          <td>480</td>
        </tr>
        <tr>
          <td>top</td>
          <td>对话框距离页面顶部的距离，垂直居中或全屏显示对话框时该属性无效</td>
          <td>String | Number</td>
          <td>128</td>
        </tr>
        <tr>
          <td>centered</td>
          <td>是否垂直居中显示对话框</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>fullscreen</td>
          <td>是否全屏显示对话框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>draggable</td>
          <td>是否支持拖动，全屏显示状态下不支持</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>backdrop</td>
          <td>是否显示背景遮罩</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>clickBackdropToClose</td>
          <td>点击背景遮罩是否关闭对话框</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>escToClose</td>
          <td>按下 ESC 键关闭对话框</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>关闭时销毁对话框内容（对话框里的子元素）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>指定对话框挂载的 HTML 节点</td>
          <td>String | HTMLElement</td>
          <td>body</td>
        </tr>
        <tr>
          <td>class</td>
          <td>自定义对话框样式类名</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>style</td>
          <td>自定义对话框样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>headerStyle</td>
          <td>自定义对话框头部样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>自定义对话框内容部分样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>footerStyle</td>
          <td>自定义对话框底部样式</td>
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
          <td>对话框打开前触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>open</td>
          <td>对话框打开时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>afterOpen</td>
          <td>对话框打开后（打开动画完成后）触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>beforeClose</td>
          <td>对话框关闭前触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>close</td>
          <td>对话框关闭时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>afterClose</td>
          <td>对话框关闭后（关闭动画完成后）触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>静态方法</h3>
    <p>除了标准组件的使用方式，<code>Modal</code> 组件还提供了一些静态方法，可以通过以下三种方式使用：</p>
    <ul>
      <li>通过 <code>this.$modal</code> 调用</li>
      <li>在 <code>Composition API</code> 中，通过 <code>getCurrentInstance().appContext.config.globalProperties.$modal</code> 调用</li>
      <li>导入 <code>Modal</code>，通过 <code>Modal</code> 本身调用，如上示例</li>
    </ul>
    <p>静态方法及其参数如下所示：</p>
    <ul>
      <li><code>Modal.info(config)</code></li>
      <li><code>Modal.warning(config)</code></li>
      <li><code>Modal.success(config)</code></li>
      <li><code>Modal.error(config)</code></li>
      <li><code>Modal.confirm(config)</code></li>
    </ul>
    <p>其中 <code>config</code> 对象的属性如下所示：</p>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="200">选项</th>
          <th>说明</th>
          <th width="320">类型</th>
          <th width="100">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>icon</td>
          <td>自定义图标类型/图标</td>
          <td>String | RenderFunction</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>对话框标题</td>
          <td>String | RenderFunction</td>
          <td>--</td>
        </tr>
        <tr>
          <td>description</td>
          <td>对话框描述内容</td>
          <td>String | RenderFunction</td>
          <td>--</td>
        </tr>
        <tr>
          <td>cancelButtonProps</td>
          <td>自定义取消按钮的属性，该选项仅在 <code>confirm</code> 对话框中有效</td>
          <td>ButtonProps</td>
          <td>--</td>
        </tr>
        <tr>
          <td>cancelText</td>
          <td>取消按钮文字，该选项仅在 <code>confirm</code> 对话框中有效</td>
          <td>String</td>
          <td>取消</td>
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
          <td>width</td>
          <td>对话框宽度；对话框的宽度是响应式的，当屏幕宽度小于 <code>768px</code> 时，宽度会被强制设为 <code>auto</code></td>
          <td>String | Number</td>
          <td>360</td>
        </tr>
        <tr>
          <td>top</td>
          <td>对话框距离页面顶部的距离，垂直居中或全屏显示对话框时该属性无效</td>
          <td>String | Number</td>
          <td>128</td>
        </tr>
        <tr>
          <td>centered</td>
          <td>是否垂直居中显示对话框</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>backdrop</td>
          <td>是否显示背景遮罩</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>clickBackdropToClose</td>
          <td>点击背景遮罩是否关闭对话框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>escToClose</td>
          <td>按下 ESC 键关闭对话框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>关闭时销毁对话框内容（对话框里的子元素）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>指定对话框挂载的 HTML 节点</td>
          <td>String | HTMLElement</td>
          <td>body</td>
        </tr>
        <tr>
          <td>class</td>
          <td>自定义对话框样式类名</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>style</td>
          <td>自定义对话框样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>自定义对话框内容部分样式</td>
          <td>CSSProperties</td>
          <td>--</td>
        </tr>
        <tr>
          <td>footerStyle</td>
          <td>自定义对话框底部样式</td>
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
        <tr>
          <td>onCancel</td>
          <td>点击取消按钮的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>onOk</td>
          <td>点击确定按钮的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>onBeforeOpen</td>
          <td>对话框打开前触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>onOpen</td>
          <td>对话框打开时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>onAfterOpen</td>
          <td>对话框打开后（打开动画完成后）触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>onBeforeClose</td>
          <td>对话框关闭前触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>对话框关闭时触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>onAfterClose</td>
          <td>对话框关闭后（关闭动画完成后）触发的事件回调</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <p>调用静态方法将会返回当前对话框的引用，可以通过该引用更新和关闭对话框：</p>
    <ul>
      <li><code>modal.update(config)</code></li>
      <li><code>modal.close()</code></li>
    </ul>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleHeadlessAndFootless from "./examples/headless-and-footless/index.vue";
  import VuiExampleButtonProps from "./examples/button-props/index.vue";
  import VuiExampleHideCloseButton from "./examples/hide-close-button/index.vue";
  import VuiExampleWidth from "./examples/width/index.vue";
  import VuiExamplePosition from "./examples/position/index.vue";
  import VuiExampleFullscreen from "./examples/fullscreen/index.vue";
  import VuiExampleDraggable from "./examples/draggable/index.vue";
  import VuiExamplePromise from "./examples/promise/index.vue";
  import VuiExampleCustomizedFooter from "./examples/customized-footer/index.vue";
  import VuiExampleConfirm from "./examples/confirm/index.vue";
  import VuiExampleInfomation from "./examples/infomation/index.vue";
  import VuiExampleUpdateAndClose from "./examples/update-and-close/index.vue";
</script>
