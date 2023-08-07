<template>
  <div>
    <h2 id="api-link-props">Link 属性</h2>
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
          <td>链接类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>danger</code> 或者不设</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置链接为块级元素，宽度撑满父元素</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>链接尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>链接图标类型</td>
        </tr>
        <tr>
          <td>href</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>链接点击后的跳转地址</td>
        </tr>
        <tr>
          <td>target</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
        </tr>
        <tr>
          <td>underline</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>鼠标移入时是否显示下划线</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置链接为加载状态</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置链接为禁用状态</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-link-events">Link 事件</h2>
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
          <td>点击链接时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>