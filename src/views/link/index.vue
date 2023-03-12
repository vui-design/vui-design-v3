<template>
  <vui-article>
    <h1>Link  文字链接</h1>
    <p>文字超链接。</p>
    <h2>何时使用</h2>
    <ul>
      <li>用作操作按钮。</li>
      <li>用于从一张页面链接到另一张页面。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-type />
        <vui-example-icon />
        <vui-example-size />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-underline />
        <vui-example-loading />
        <vui-example-disabled />
        <vui-example-link />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Link 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="160">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>链接类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>danger</code> 或者不设</td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>block</td>
          <td>设置链接为块级元素，宽度撑满父元素</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>链接尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>链接图标类型</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>href</td>
          <td>链接点击后的跳转地址</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>target</td>
          <td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>underline</td>
          <td>鼠标移入时是否显示下划线</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>设置链接为加载状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>设置链接为禁用状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>Link 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th>说明</th>
          <th width="160">类型</th>
          <th width="140">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击链接时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleUnderline from "./examples/underline/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleLink from "./examples/link/index.vue";
</script>