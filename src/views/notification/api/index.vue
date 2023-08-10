<template>
  <div>
    <h2 id="api-modal-methods">Notification 静态方法</h2>
    <p><code>Notification</code> 组件提供了一些静态方法，可以通过以下三种方式使用：</p>
    <ul>
      <li>通过 <code>this.$notification</code> 调用</li>
      <li>在 <code>Composition API</code> 中，通过 <code>getCurrentInstance().appContext.config.globalProperties.$notification</code> 调用</li>
      <li>导入 <code>Notification</code>，通过 <code>Notification</code> 本身调用，如上示例</li>
    </ul>
    <p>静态方法及其参数如下所示：</p>
    <ul>
      <li><code>Notification.info(title, [duration], onClose)</code></li>
      <li><code>Notification.warning(title, [duration], onClose)</code></li>
      <li><code>Notification.success(title, [duration], onClose)</code></li>
      <li><code>Notification.error(title, [duration], onClose)</code></li>
    </ul>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">选项</th>
          <th width="280">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
          <td>Y</td>
          <td>通知提醒的标题</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>Number</td>
          <td>5000</td>
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
      <li><code>Notification.info(config)</code></li>
      <li><code>Notification.warning(config)</code></li>
      <li><code>Notification.success(config)</code></li>
      <li><code>Notification.error(config)</code></li>
    </ul>
    <p>其中 <code>config</code> 对象的属性如下所示：</p>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">选项</th>
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
          <td>当前通知提醒的唯一标识</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>自定义图标类型</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
          <td>Y</td>
          <td>通知提醒的标题</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
          <td>N</td>
          <td>通知提醒的描述内容</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>Boolean</td>
          <td>true</td>
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
          <td>5000</td>
          <td>N</td>
          <td>自动关闭的延时时长，单位毫秒；设为 <code>0</code> 时不会自动关闭</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>String | HTMLElement</td>
          <td>body</td>
          <td>N</td>
          <td>通知提醒挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>String</td>
          <td>topRight</td>
          <td>N</td>
          <td>弹出位置，可选值为 <code>topLeft</code>、<code>topRight</code>、<code>bottomLeft</code>、<code>bottomRight</code> 或者不设</td>
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
    <p>调用静态方法将会返回当前通知提醒的引用，可以通过该引用更新和关闭通知提醒：</p>
    <ul>
      <li><code>notification.update(title)</code> / <code>notification.update(config)</code></li>
      <li><code>notification.close()</code></li>
    </ul>
    <p>更新通知提醒时，若标题、描述内容或自动关闭的延时时长发生变更，则会重置自动关闭定时器。</p>
  </div>
</template>