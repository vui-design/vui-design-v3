<template>
  <vui-article>
    <h1>Message 消息提示</h1>
    <p>全局展示操作反馈信息。</p>
    <h2>何时使用</h2>
    <ul>
    <li>可提供信息、警告、成功和失败等反馈信息。</li>
    <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-type />
        <vui-example-loading />
        <vui-example-closable />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-duration />
        <vui-example-background />
        <vui-example-update />
        <vui-example-more />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <p><code>Message</code> 组件提供了一些静态方法，可以通过以下三种方式使用：</p>
    <ul>
      <li>通过 <code>this.$message</code> 调用</li>
      <li>在 <code>Composition API</code> 中，通过 <code>getCurrentInstance().appContext.config.globalProperties.$message</code> 调用</li>
      <li>导入 <code>Message</code>，通过 <code>Message</code> 本身调用，如上示例</li>
    </ul>
    <p>静态方法及其参数如下所示：</p>
    <ul>
      <li><code>Message.info(content, [duration], onClose)</code></li>
      <li><code>Message.warning(content, [duration], onClose)</code></li>
      <li><code>Message.success(content, [duration], onClose)</code></li>
      <li><code>Message.error(content, [duration], onClose)</code></li>
      <li><code>Message.loading(content, [duration], onClose)</code></li>
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
          <td>content</td>
          <td>提示内容</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>自动关闭的延时时长，单位毫秒；设为 <code>0</code> 时不会自动关闭</td>
          <td>Number</td>
          <td>3000</td>
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
      <li><code>Message.info(config)</code></li>
      <li><code>Message.warning(config)</code></li>
      <li><code>Message.success(config)</code></li>
      <li><code>Message.error(config)</code></li>
      <li><code>Message.loading(config)</code></li>
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
          <td>当前消息提示的唯一标识</td>
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
          <td>content</td>
          <td>提示内容</td>
          <td>String | Number | RenderFunction</td>
          <td>--</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>是否显示关闭按钮</td>
          <td>Boolean</td>
          <td>false</td>
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
          <td>3000</td>
        </tr>
        <tr>
          <td>background</td>
          <td>是否显示背景色</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>关闭时触发的事件回调函数</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <p>调用静态方法将会返回一个消息引用，可以通过该引用更新和关闭消息提示：</p>
    <ul>
      <li><code>message.update(content)</code> / <code>message.update(config)</code></li>
      <li><code>message.close()</code></li>
    </ul>
    <p>更新消息时，若消息内容或自动关闭的延时时长发生变更，则会重置自动关闭定时器。</p>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleClosable from "./examples/closable/index.vue";
  import VuiExampleDuration from "./examples/duration/index.vue";
  import VuiExampleBackground from "./examples/background/index.vue";
  import VuiExampleUpdate from "./examples/update/index.vue";
  import VuiExampleMore from "./examples/more/index.vue";
</script>