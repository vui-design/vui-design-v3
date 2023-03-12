<template>
  <vui-article>
    <h1>List 列表</h1>
    <p>通用列表。</p>
    <h2>何时使用</h2>
    <p>最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。</p>
    <h2>代码演示</h2>
    <vui-example-simple />
    <vui-example-basic-usage />
    <vui-example-loading />
    <vui-example-load-more />
    <vui-example-vertical />
    <vui-example-grid />
    <vui-example-resposive />
    <h2 id="example-api">API</h2>
    <h3>List 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>layout</td>
          <td>设置 <code>ListItem</code> 项目布局，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
          <td>String</td>
          <td>horizontal</td>
        </tr>
        <tr>
          <td>size</td>
          <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>是否显示边框</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>split</td>
          <td>是否显示分割线</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>当内容还在加载中时，可以用 <code>loading</code> 展示一个占位</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>grid</td>
          <td>列表栅格配置，详见示例〔栅格列表〕</td>
          <td>Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>item</td>
          <td>项目插槽</td>
          <td>Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>data</td>
          <td>列表数据，需要和 <code>item</code> 插槽同时使用</td>
          <td>Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>header</td>
          <td>列表头部内容</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>列表底部内容</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>List grid 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>gutter</td>
          <td>栅格间隔，可以写成像素值或支持响应式的对象来设置间隔 <code>{ xs: 8, sm: 16, md: 24 }</code>；或者使用数组形式分别设置 <code>[水平间距, 垂直间距]</code></td>
          <td>Number | Object | Array</td>
          <td>16</td>
        </tr>
        <tr>
          <td>span</td>
          <td>每列的栅格占位格数，可选值为 1~24 的整数</td>
          <td>Number</td>
          <td>24</td>
        </tr>
        <tr>
          <td>xs</td>
          <td><code>屏幕 &lt; 576px</code> 时每列的栅格占位格数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>sm</td>
          <td><code>屏幕 &ge; 576px</code> 时每列的栅格占位格数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>md</td>
          <td><code>屏幕 &ge; 768px</code> 时每列的栅格占位格数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>lg</td>
          <td><code>屏幕 &ge; 992px</code> 时每列的栅格占位格数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>xl</td>
          <td><code>屏幕 &ge; 1200px</code> 时每列的栅格占位格数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>xxl</td>
          <td><code>屏幕 &ge; 1600px</code> 时每列的栅格占位格数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>xxxl</td>
          <td><code>屏幕 &ge; 2000px</code> 时每列的栅格占位格数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>ListItem 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>actions</td>
          <td>操作组，根据 <code>List</code> 组件 <code>layout</code> 属性值的不同，位置在列表元素底部或者右侧</td>
          <td>Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>额外内容，通常用在 <code>layout</code> 为 <code>vertical</code> 的情况下展示右侧内容</td>
          <td>Slot</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>ListItemMeta 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>avatar</td>
          <td>列表元素的头像</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>列表元素的标题</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>description</td>
          <td>列表元素的描述内容</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleSimple from "./examples/simple/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleLoadMore from "./examples/load-more/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleGrid from "./examples/grid/index.vue";
  import VuiExampleResposive from "./examples/resposive/index.vue";
</script>