<template>
  <vui-article>
    <h1>Avatar 头像</h1>
    <p>用来代表用户或事物，支持图片、图标或字符展示。</p>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-type />
        <vui-example-badge />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-dynamic />
        <vui-example-group />
        <vui-example-responsive />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Avatar 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>shape</td>
          <td>头像形状，可选值为 <code>circle</code>、<code>square</code> 或者不设</td>
          <td>String</td>
          <td>circle</td>
        </tr>
        <tr>
          <td>size</td>
          <td>头像尺寸，预设值为 <code>small</code>、<code>medium</code>、<code>large</code>，可以设置为具体的数值，也可以写成支持响应式的对象 <code>{ xs: "small", sm: "medium", md: "large", lg: 64 }</code></td>
          <td>String | Number | Object</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>src</td>
          <td>图片类头像的资源地址</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>srcset</td>
          <td>图片类头像的响应式资源地址</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>alt</td>
          <td>图片类头像无法显示时的替代文本</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>crossOrigin</td>
          <td><code>CORS</code> 属性设置，可选值为 <code>anonymous</code>、<code>use-credentials</code> 或者不设</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>头像的图标类型/图标</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>gap</td>
          <td>字符类型距离左右两侧边界的像素距离</td>
          <td>Number</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
    <h3>Avatar 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="190">事件名</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="140">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>error</td>
          <td>图片类头像加载失败的事件回调</td>
          <td>Function</td>
          <td>event</td>
        </tr>
      </tbody>
    </table>
    <h3>AvatarGroup 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>shape</td>
          <td>头像形状，可选值为 <code>circle</code>、<code>square</code> 或者不设</td>
          <td>String</td>
          <td>circle</td>
        </tr>
        <tr>
          <td>size</td>
          <td>头像尺寸，预设值为 <code>small</code>、<code>medium</code>、<code>large</code>，可以设置为具体的数值，也可以写成支持响应式的对象 <code>{ xs: "small", sm: "medium", md: "large", lg: 64 }</code></td>
          <td>String | Number | Object</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>maxCount</td>
          <td>显示的最大头像个数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>maxTooltipColor</td>
          <td>多余头像的气泡颜色，可选值为 <code>light</code>、<code>dark</code> 或者不设</td>
          <td>String</td>
          <td>light</td>
        </tr>
        <tr>
          <td>maxTooltipTrigger</td>
          <td>多余头像的气泡触发方式，可选值为 <code>hover</code>、<code>focus</code>、<code>click</code>、<code>contextmenu</code> 或者不设</td>
          <td>String</td>
          <td>hover</td>
        </tr>
        <tr>
          <td>maxTooltipPlacement</td>
          <td>多余头像的气泡弹出位置，可选值为 可选值为 <code>top</code>、<code>top-left</code>、<code>top-right</code>、<code>bottom</code>、<code>bottom-left</code>、<code>bottom-right</code>、<code>left</code>、<code>left-top</code>、<code>left-bottom</code>、<code>right</code>、<code>right-top</code>、<code>right-bottom</code>或者不设</td>
          <td>String</td>
          <td>top</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleBadge from "./examples/badge/index.vue";
  import VuiExampleDynamic from "./examples/dynamic/index.vue";
  import VuiExampleGroup from "./examples/group/index.vue";
  import VuiExampleResponsive from "./examples/responsive/index.vue";
</script>