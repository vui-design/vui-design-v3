<template>
  <vui-article>
    <h1>Collapse 折叠面板</h1>
    <p>可以折叠/展开的内容区域。</p>
    <h2>何时使用</h2>
    <ul>
      <li>对复杂区域进行分组和隐藏，保持页面的整洁。</li>
      <li>手风琴是一种特殊的折叠面板，只允许单个内容区域展开。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-accordion />
        <vui-example-borderless />
        <vui-example-ghost />
        <vui-example-extra />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-arrowless />
        <vui-example-arrow-align />
        <vui-example-disabled />
        <vui-example-nested />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Collapse 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultActiveKeys</td>
          <td>默认展开面板的 <code>key</code> 或 <code>key</code> 集合（非受控模式）</td>
          <td>Array | String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>activeKeys</td>
          <td>当前展开面板的 <code>key</code> 或 <code>key</code> 集合（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Array | String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>是否显示外边框</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>showArrow</td>
          <td>是否显示面板的箭头图标</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>arrowAlign</td>
          <td>箭头图标的位置，可选值为 <code>left</code>、<code>right</code> 或者不设</td>
          <td>String</td>
          <td>left</td>
        </tr>
        <tr>
          <td>accordion</td>
          <td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>destroyInactivePanel</td>
          <td>销毁折叠隐藏的面板内容</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用所有面板，禁用后的面板展开与否将无法通过用户交互改变</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>Collapse 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="180">事件名</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="140">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:activeKeys</td>
          <td>切换面板时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Function</td>
          <td>key[] | key</td>
        </tr>
        <tr>
          <td>change</td>
          <td>切换面板时触发的事件回调函数</td>
          <td>Function</td>
          <td>key[] | key</td>
        </tr>
      </tbody>
    </table>
    <h3>CollapsePanel 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>面板唯一标识，默认自动生成</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>面板标题</td>
          <td>String | Number | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>面板标题右侧的附加内容</td>
          <td>String | Number | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>showArrow</td>
          <td>是否显示面板的箭头图标</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>headerStyle</td>
          <td>自定义头部区域样式</td>
          <td>String | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>自定义内容区域样式</td>
          <td>String | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用面板，禁用后的面板展开与否将无法通过用户交互改变</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleAccordion from "./examples/accordion/index.vue";
  import VuiExampleBorderless from "./examples/borderless/index.vue";
  import VuiExampleGhost from "./examples/ghost/index.vue";
  import VuiExampleExtra from "./examples/extra/index.vue";
  import VuiExampleArrowless from "./examples/arrowless/index.vue";
  import VuiExampleArrowAlign from "./examples/arrow-align/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleNested from "./examples/nested/index.vue";
</script>