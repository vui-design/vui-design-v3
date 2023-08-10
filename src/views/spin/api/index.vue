<template>
  <div>
    <h2 id="api-spin-props">Spin 属性</h2>
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
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>spinning</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否为加载中状态</td>
        </tr>
        <tr>
          <td>delay</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>延迟显示加载效果的时间，单位毫秒（防止闪烁）</td>
        </tr>
        <tr>
          <td>indicator</td>
          <td>Function | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义加载指示符</td>
        </tr>
        <tr>
          <td>message</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>消息文案</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-spin-methods">Spin 全局方法</h2>
    <p>除了标准组件的使用方式，Vui Design 还精心封装了一个全局方法，用来创建一次性的全屏加载提示。您可以通过以下三种方式来使用：</p>
    <ul>
      <li>通过 <code>this.$spin.spinning(options)</code> 调用</li>
      <li>在 Composition API 中，通过 <code>getCurrentInstance().appContext.config.globalProperties.$spin.spinning(options)</code> 调用</li>
      <li>导入 <code>Spin</code>，通过 <code>Spin</code> 本身调用，如示例〔全屏加载〕</li>
    </ul>
    <p>以上方法隐式的创建及维护 <code>Spin</code> 组件，并在取消时移除。参数 <code>options</code> 可以是字符串或对象。当为字符串时，仅仅表示消息文案；当为对象时，具体说明如下：</p>
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
          <td>size</td>
          <td>String</td>
          <td>large</td>
          <td>N</td>
          <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>background</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>自定义遮罩背景</td>
        </tr>
        <tr>
          <td>delay</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>延迟显示加载效果的时间，单位毫秒（防止闪烁）</td>
        </tr>
        <tr>
          <td>indicator</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>自定义加载指示符</td>
        </tr>
        <tr>
          <td>message</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>消息文案</td>
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