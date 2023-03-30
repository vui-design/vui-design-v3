<template>
  <vui-article>
    <h1>Notification 通知提醒</h1>
    <p>全局展示通知提醒信息。</p>
    <h2>何时使用</h2>
    <p>在系统四个角显示通知提醒信息。经常用于以下情况：</p>
    <ul>
      <li>较为复杂的通知内容。</li>
      <li>带有交互的通知，给出用户下一步的行动点。</li>
      <li>系统主动推送。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-type />
        <vui-example-duration />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-placement />
        <vui-example-update />
        <vui-example-more />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
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
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">选项</th>
          <th>说明</th>
          <th width="280">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>通知提醒的标题</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>自动关闭的延时时长，单位毫秒；设为 <code>0</code> 时不会自动关闭</td>
          <td>Number</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>关闭时触发的事件回调函数</td>
          <td>Function</td>
          <td>--</td>
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
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">选项</th>
          <th>说明</th>
          <th width="280">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>当前通知提醒的唯一标识</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>自定义图标类型</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>通知提醒的标题</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
        </tr>
        <tr>
          <td>description</td>
          <td>通知提醒的描述内容</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>是否显示手动关闭按钮</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>closeText</td>
          <td>关闭按钮文本，仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>自动关闭的延时时长，单位毫秒；设为 <code>0</code> 时不会自动关闭</td>
          <td>Number</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>通知提醒挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
          <td>String | HTMLElement</td>
          <td>body</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>弹出位置，可选值为 <code>topLeft</code>、<code>topRight</code>、<code>bottomLeft</code>、<code>bottomRight</code> 或者不设</td>
          <td>String</td>
          <td>topRight</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>关闭时触发的事件回调函数</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <p>调用静态方法将会返回当前通知提醒的引用，可以通过该引用更新和关闭通知提醒：</p>
    <ul>
      <li><code>notification.update(title)</code> / <code>notification.update(config)</code></li>
      <li><code>notification.close()</code></li>
    </ul>
    <p>更新通知提醒时，若标题、描述内容或自动关闭的延时时长发生变更，则会重置自动关闭定时器。</p>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleDuration from "./examples/duration/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleUpdate from "./examples/update/index.vue";
  import VuiExampleMore from "./examples/more/index.vue";
</script>