<template>
  <vui-article>
    <h1>Tag 标签</h1>
    <p>进行标记和分类的小标签。</p>
    <h2>何时使用</h2>
    <ul>
      <li>用于标记事物的属性和维度。</li>
      <li>进行分类。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-shape />
        <vui-example-size />
        <vui-example-ghost />
        <vui-example-icon />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-checkable />
        <vui-example-hot-tags />
        <vui-example-closable />
        <vui-example-control />
        <vui-example-colorful />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Tag 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="150">属性</th>
          <th width="150">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>bordered</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示外边框</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>标签形状，可选值为 <code>round</code>、<code>mark</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>标签尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>default</td>
          <td>N</td>
          <td>自定义标签的颜色，预设颜色详见示例〔多彩标签〕，支持自定义 16 进制颜色值</td>
        </tr>
        <tr>
          <td>ghost</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>幽灵属性，使标签背景半透明</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标签图标类型/图标</td>
        </tr>
        <tr>
          <td>checkable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>标签是否可以选择</td>
        </tr>
        <tr>
          <td>defaultChecked</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>默认是否选中（非受控模式），仅在 <code>checkable</code> 为 <code>true</code> 时有效</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>是否选中（受控模式），仅在 <code>checkable</code> 为 <code>true</code> 时有效，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>标签是否可以关闭</td>
        </tr>
        <tr>
          <td>defaultVisible</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>默认是否可见（非受控模式），仅在 <code>closable</code> 为 <code>true</code> 时有效</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>是否可见（受控模式），仅在 <code>closable</code> 为 <code>true</code> 时有效，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
      </tbody>
    </table>
    <h3>Tag 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="150">事件名</th>
          <th width="150">类型</th>
          <th width="120">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:checked</td>
          <td>Function</td>
          <td>checked</td>
          <td>选中状态发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>check</td>
          <td>Function</td>
          <td>checked</td>
          <td>选中状态发生变化时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>update:visible</td>
          <td>Function</td>
          <td>visible</td>
          <td>关闭标签时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>close</td>
          <td>Function</td>
          <td>event</td>
          <td>关闭标签时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>click</td>
          <td>Function</td>
          <td>event</td>
          <td>点击标签时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleShape from "./examples/shape/index.vue";
  import VuiExampleGhost from "./examples/ghost/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleClosable from "./examples/closable/index.vue";
  import VuiExampleControl from "./examples/control/index.vue";
  import VuiExampleCheckable from "./examples/checkable/index.vue";
  import VuiExampleHotTags from "./examples/hot-tags/index.vue";
  import VuiExampleColorful from "./examples/colorful/index.vue";
</script>