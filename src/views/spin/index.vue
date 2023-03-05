<template>
  <div>
    <h1>Spin 加载中</h1>
    <p>用于页面和区块的加载中状态。</p>
    <h2>何时使用</h2>
    <p>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-size />
        <vui-example-inside />
        <vui-example-nested />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-delay />
        <vui-example-indicator />
        <vui-example-message />
        <vui-example-fullscreen />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Spin 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>size</td>
          <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>spinning</td>
          <td>是否为加载中状态</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>delay</td>
          <td>延迟显示加载效果的时间，单位毫秒（防止闪烁）</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>indicator</td>
          <td>自定义加载指示符</td>
          <td>Function | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>message</td>
          <td>消息文案</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>全局方法</h3>
    <p>除了标准组件的使用方式，Vui Design 还精心封装了一个全局方法，用来创建一次性的全屏加载提示。您可以通过以下三种方式来使用：</p>
    <ul>
      <li>通过 <code>this.$spin.spinning(options)</code> 调用</li>
      <li>在 Composition API 中，通过 <code>getCurrentInstance().appContext.config.globalProperties.$spin.spinning(options)</code> 调用</li>
      <li>导入 <code>Spin</code>，通过 <code>Spin</code> 本身调用，如示例〔全屏加载〕</li>
    </ul>
    <p>以上方法隐式的创建及维护 <code>Spin</code> 组件，并在取消时移除。参数 <code>options</code> 可以是字符串或对象。当为字符串时，仅仅表示消息文案；当为对象时，具体说明如下：</p>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>size</td>
          <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>large</td>
        </tr>
        <tr>
          <td>background</td>
          <td>自定义遮罩背景</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>delay</td>
          <td>延迟显示加载效果的时间，单位毫秒（防止闪烁）</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>indicator</td>
          <td>自定义加载指示符</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>message</td>
          <td>消息文案</td>
          <td>String</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <p>调用全局方法时会返回一个引用，例如 <code>const spin = this.$spin.spinning(options)</code>，可以通过 <code>spin</code> 引用更新和取消加载提示，详见上述示例。</p>
    <ul>
      <li><code>spin.update(options)</code></li>
      <li><code>spin.cancel()</code></li>
    </ul>
    <p>其中 <code>spin.upadte</code> 方法的参数 <code>options</code> 同 <code>this.$spin.spinning</code> 一致。</p>
  </div>
</template>

<script setup lang="ts">
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleInside from "./examples/inside/index.vue";
  import VuiExampleNested from "./examples/nested/index.vue";
  import VuiExampleDelay from "./examples/delay/index.vue";
  import VuiExampleIndicator from "./examples/indicator/index.vue";
  import VuiExampleMessage from "./examples/message/index.vue";
  import VuiExampleFullscreen from "./examples/fullscreen/index.vue";
</script>