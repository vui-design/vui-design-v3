<template>
  <div>
    <h2 id="api-button-props">Button 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="160">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>htmlType</td>
          <td>String</td>
          <td>button</td>
          <td>N</td>
          <td>按钮的原生 <code>type</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type" target="_blank">HTML 标准</a></td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>default</td>
          <td>N</td>
          <td>按钮类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>danger</code>、<code>dashed</code>、<code>text</code> 或者不设</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置按钮为块级元素，宽度撑满父元素</td>
        </tr>
        <tr>
          <td>ghost</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>幽灵属性，使按钮背景透明</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>String</td>
          <td>square</td>
          <td>N</td>
          <td>按钮形状，可选值为 <code>square</code>、<code>round</code>、<code>circle</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>按钮尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>按钮图标类型</td>
        </tr>
        <tr>
          <td>href</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>按钮点击后的跳转地址，指定此属性后按钮的行为和 <code>a</code> 链接一致</td>
        </tr>
        <tr>
          <td>target</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否自动获得焦点</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置按钮为加载状态</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置按钮为禁用状态</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-button-events">Button 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th width="160">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>Function</td>
          <td>event</td>
          <td>点击按钮时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-button-group-props">ButtonGroup 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="160">类型</th>
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
          <td>按钮组合类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>danger</code>、<code>dashed</code> 或者不设</td>
        </tr>
        <tr>
          <td>ghost</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置按钮组合为幽灵状态，使按钮背景透明</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>String</td>
          <td>square</td>
          <td>N</td>
          <td>按钮组合形状，可选值为 <code>shape</code>、<code>round</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>按钮组合尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置按钮组合为禁用状态</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>