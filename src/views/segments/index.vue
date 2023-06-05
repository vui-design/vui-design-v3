<template>
  <vui-article>
    <h1>Segments 分段控制器</h1>
    <p>分段控制器。</p>
    <h2>何时使用</h2>
    <ul>
      <li>用于展示多个选项并允许用户选择其中单个选项；</li>
      <li>当切换选中选项时，关联区域的内容会发生变化。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-example-basic-usage />
    <vui-example-options />
    <vui-example-block />
    <vui-example-size />
    <vui-example-icon />
    <vui-example-disabled />
    <vui-example-dynamic />
    <vui-example-custom />
    <h2 id="example-api">API</h2>
    <h3>Segments 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultActiveKey</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>默认选中的分段（非受控模式），未设置该属性时默认选中第一个</td>
        </tr>
        <tr>
          <td>activeKey</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前选中的分段（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>options</td>
          <td>Array</td>
          <td>[]</td>
          <td>N</td>
          <td>以数据化配置形式设置分段控制器的选项列表</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否为块级元素，为 <code>true</code> 时宽度撑满父元素</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>分段控制器的尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用分段控制器</td>
        </tr>
      </tbody>
    </table>
    <h3>Segments 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="160">事件</th>
          <th width="340">参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:activeKey</td>
          <td>activeKey</td>
          <td>选中分段发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>activeKey</td>
          <td>选中分段发生变化时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h3>SegmentsItem 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>String | Number</td>
          <td>--</td>
          <td>Y</td>
          <td>分段的唯一标识</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>分段的图标类型/图标</td>
        </tr>
        <tr>
          <td>label</td>
          <td>String | Number | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>分段的标签文本</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用分段</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleOptions from "./examples/options/index.vue";
  import VuiExampleBlock from "./examples/block/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleDynamic from "./examples/dynamic/index.vue";
  import VuiExampleCustom from "./examples/custom/index.vue";
</script>