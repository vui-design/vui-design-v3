<template>
  <vui-article>
    <h1>Grid 栅格系统</h1>
    <p>24栅格系统。</p>
    <h2>设计理念</h2>
    <div class="example-grid">
      <vui-row>
        <vui-col v-bind:span="24"><div>100%</div></vui-col>
      </vui-row>
      <vui-row>
        <vui-col v-bind:span="6"><div>25%</div></vui-col>
        <vui-col v-bind:span="6"><div>25%</div></vui-col>
        <vui-col v-bind:span="6"><div>25%</div></vui-col>
        <vui-col v-bind:span="6"><div>25%</div></vui-col>
      </vui-row>
      <vui-row>
        <vui-col v-bind:span="8"><div>33.33%</div></vui-col>
        <vui-col v-bind:span="8"><div>33.33%</div></vui-col>
        <vui-col v-bind:span="8"><div>33.33%</div></vui-col>
      </vui-row>
      <vui-row>
        <vui-col v-bind:span="12"><div>50%</div></vui-col>
        <vui-col v-bind:span="12"><div>50%</div></vui-col>
      </vui-row>
      <vui-row>
        <vui-col v-bind:span="16"><div>66.66%</div></vui-col>
        <vui-col v-bind:span="8"><div>33.33%</div></vui-col>
      </vui-row>
    </div>
    <p>在多数业务情况下，Vui Design 需要在设计区域内解决大量信息收纳的问题，因此在 <code>12</code> 栅格系统的基础上，将整个设计建议区域按照 <code>24</code> 等分的原则进行划分。划分之后的信息区块称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。</p>
    <h2>概述</h2>
    <p>布局的栅格化系统，是基于行 <code>row</code> 和列 <code>col</code> 来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
    <ul>
      <li>通过 <code>row</code> 在水平方向建立一组 <code>column</code>（简写 <code>col</code>）</li>
      <li>你的内容应当放置于 <code>col</code> 内，并且只有 <code>col</code> 可以作为 <code>row</code> 的直接元素</li>
      <li>栅格系统中的列是指 <code>1</code> 到 <code>24</code> 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <code>.col-8</code> 来创建</li>
      <li>如果一个 <code>row</code> 中的 <code>col</code> 总和超过 <code>24</code>，那么多余的 <code>col</code> 会作为一个整体另起一行排列</li>
    </ul>
    <h2>Flex 布局</h2>
    <p>Vui Design 的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 <code>order</code> 来定义元素的排列顺序。Flex 布局是基于 <code>24</code> 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</p>
    <h2>代码演示</h2>
    <vui-example-basic-usage />
    <vui-example-gutter />
    <vui-example-offset />
    <vui-example-sort />
    <vui-example-justify />
    <vui-example-align />
    <vui-example-order />
    <vui-example-flex-stretch />
    <vui-example-responsive />
    <vui-example-responsive-more />
    <vui-example-playground />
    <h2 id="example-api">API</h2>
    <h3>Row 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>justify</td>
          <td>水平排列方式，可选值为 <code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code> 或者不设</td>
          <td>String</td>
          <td>start</td>
        </tr>
        <tr>
          <td>align</td>
          <td>垂直对齐方式，可选值为 <code>top</code>、<code>middle</code>、<code>bottom</code> 或者不设</td>
          <td>String</td>
          <td>top</td>
        </tr>
        <tr>
          <td>gutter</td>
          <td>栅格间隔，可以写成像素值或支持响应式的对象来设置水平间隔 <code>{ xs: 8, sm: 16, md: 24 }</code>；或者使用数组形式同时设置 <code>[水平间距, 垂直间距]</code></td>
          <td>Number | Object | Array</td>
          <td>0</td>
        </tr>
        <tr>
          <td>wrap</td>
          <td>是否自动换行</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
    <h3>Col 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>flex</td>
          <td>Flex 布局填充</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>span</td>
          <td>栅格占位格数，可选值为 <code>0~24</code> 的整数，为 <code>0</code> 时相当于 <code>display: none;</code></td>
          <td>Number</td>
          <td>24</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>push</td>
          <td>栅格向右移动格数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>pull</td>
          <td>栅格向左移动格数</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>order</td>
          <td>栅格顺序</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>xs</td>
          <td><code>屏幕 &lt; 576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
          <td>Number | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>sm</td>
          <td><code>屏幕 &ge; 576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
          <td>Number | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>md</td>
          <td><code>屏幕 &ge; 768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
          <td>Number | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>lg</td>
          <td><code>屏幕 &ge; 992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
          <td>Number | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>xl</td>
          <td><code>屏幕 &ge; 1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
          <td>Number | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>xxl</td>
          <td><code>屏幕 &ge; 1600px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
          <td>Number | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>xxxl</td>
          <td><code>屏幕 &ge; 2000px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
          <td>Number | Object</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleGutter from "./examples/gutter/index.vue";
  import VuiExampleOffset from "./examples/offset/index.vue";
  import VuiExampleSort from "./examples/sort/index.vue";
  import VuiExampleJustify from "./examples/justify/index.vue";
  import VuiExampleAlign from "./examples/align/index.vue";
  import VuiExampleOrder from "./examples/order/index.vue";
  import VuiExampleFlexStretch from "./examples/flex-stretch/index.vue";
  import VuiExampleResponsive from "./examples/responsive/index.vue";
  import VuiExampleResponsiveMore from "./examples/responsive-more/index.vue";
  import VuiExamplePlayground from "./examples/playground/index.vue";
</script>

<style>
  .example-grid .vui-row { background-image:linear-gradient(90deg, transparent 4.16666667%, #f5f5f5 4.16666667%, #f5f5f5 8.33333333%, transparent 8.33333333%, transparent 12.5%, #f5f5f5 12.5%, #f5f5f5 16.66666667%, transparent 16.66666667%, transparent 20.83333333%, #f5f5f5 20.83333333%, #f5f5f5 25%, transparent 25%, transparent 29.16666667%, #f5f5f5 29.16666667%, #f5f5f5 33.33333333%, transparent 33.33333333%, transparent 37.5%, #f5f5f5 37.5%, #f5f5f5 41.66666667%, transparent 41.66666667%, transparent 45.83333333%, #f5f5f5 45.83333333%, #f5f5f5 50%, transparent 50%, transparent 54.16666667%, #f5f5f5 54.16666667%, #f5f5f5 58.33333333%, transparent 58.33333333%, transparent 62.5%, #f5f5f5 62.5%, #f5f5f5 66.66666667%, transparent 66.66666667%, transparent 70.83333333%, #f5f5f5 70.83333333%, #f5f5f5 75%, transparent 75%, transparent 79.16666667%, #f5f5f5 79.16666667%, #f5f5f5 83.33333333%, transparent 83.33333333%, transparent 87.5%, #f5f5f5 87.5%, #f5f5f5 91.66666667%, transparent 91.66666667%, transparent 95.83333333%, #f5f5f5 95.83333333%); }
  .example-grid .vui-row + .vui-row { margin-top:16px; }
  .example-grid .vui-row .vui-col div { height:64px; overflow:hidden; text-align:center; line-height:64px; }
  .example-grid .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); color:#fff; }
  .example-grid .vui-row .vui-col:nth-child(even) div { background-color:rgba(255,255,255,0.3); color:#8c8c8c; }
</style>