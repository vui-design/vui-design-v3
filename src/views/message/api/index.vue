<template>
  <div>
    <h2 id="api-message-methods">Message 静态方法</h2>
    <p><code>Message</code> 组件提供了一些静态方法，可以通过以下三种方式使用：</p>
    <ul>
      <li>通过 <code>this.$message</code> 调用；</li>
      <li>在 <code>Composition API</code> 中，通过 <code>getCurrentInstance().appContext.config.globalProperties.$message</code> 调用；</li>
      <li>导入 <code>Message</code>，通过 <code>Message</code> 本身调用，如文档示例所示。</li>
    </ul>
    <p>静态方法及其参数如下所示：</p>
    <ul>
      <li><code>Message.info(content, [duration], onClose)</code></li>
      <li><code>Message.warning(content, [duration], onClose)</code></li>
      <li><code>Message.success(content, [duration], onClose)</code></li>
      <li><code>Message.error(content, [duration], onClose)</code></li>
      <li><code>Message.loading(content, [duration], onClose)</code></li>
    </ul>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">选项</th>
          <th width="280">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>content</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
          <td>Y</td>
          <td>提示内容</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>Number</td>
          <td>3000</td>
          <td>N</td>
          <td>自动关闭的延时时长，单位毫秒；设为 <code>0</code> 时不会自动关闭</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>关闭时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <p>也可以使用对象的形式传递参数：</p>
    <ul>
      <li><code>Message.info(config)</code></li>
      <li><code>Message.warning(config)</code></li>
      <li><code>Message.success(config)</code></li>
      <li><code>Message.error(config)</code></li>
      <li><code>Message.loading(config)</code></li>
    </ul>
    <p>其中 <code>config</code> 对象的属性如下所示：</p>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">选项</th>
          <th width="280">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前消息提示的唯一标识</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>自定义图标类型</td>
        </tr>
        <tr>
          <td>content</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
          <td>Y</td>
          <td>消息提示的内容</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否显示手动关闭按钮</td>
        </tr>
        <tr>
          <td>closeText</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>关闭按钮文本，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>Number</td>
          <td>3000</td>
          <td>N</td>
          <td>自动关闭的延时时长，单位毫秒；设为 <code>0</code> 时不会自动关闭</td>
        </tr>
        <tr>
          <td>background</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否显示背景色</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>String | HTMLElement</td>
          <td>body</td>
          <td>N</td>
          <td>消息提示挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>关闭时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <p>调用静态方法将会返回当前消息提示的引用，可以通过该引用更新和关闭消息提示：</p>
    <ul>
      <li><code>message.update(content)</code> / <code>message.update(config)</code></li>
      <li><code>message.close()</code></li>
    </ul>
    <p>更新消息提示时，若内容或自动关闭的延时时长发生变更，则会重置自动关闭定时器。</p>
  </div>
</template>