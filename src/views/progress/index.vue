<template>
  <vui-article>
    <h1>Progress 进度条</h1>
    <p>展示操作的当前进度。</p>
    <h2>何时使用</h2>
    <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
    <ul>
      <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；</li>
      <li>当需要显示一个操作完成的百分比时。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-line />
        <vui-example-line-small />
        <vui-example-circle />
        <vui-example-circle-small />
        <vui-example-dashboard />
        <vui-example-dynamic />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-segment />
        <vui-example-formatter />
        <vui-example-stroke-color />
        <vui-example-stroke-linecap />
        <vui-example-steps />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Progress 共用属性</h3>
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
          <td>进度条类型，可选值为 <code>line</code>、<code>circle</code>、<code>dashboard</code>、<code>steps</code> 或者不设</td>
          <td>String</td>
          <td>line</td>
        </tr>
        <tr>
          <td>showInfo</td>
          <td>是否显示进度数值或状态图标</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>size</td>
          <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>steps</td>
          <td>进度条步数，该属性仅在 <code>type="steps"</code> 时有效</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>percentage</td>
          <td>进度百分比，可选值 <code>0</code> 至 <code>100</code></td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>success</td>
          <td>成功进度条，该属性仅在 <code>type</code> 不为 <code>steps</code> 时有效；可以写成数值来单独设置进度百分比，或者使用对象形式同时设置百分比及进度条颜色 <code>{ percentage: Number, strokeColor: String }</code></td>
          <td>Number | Object</td>
          <td>--</td>
        </tr>
        <tr>
          <td>status</td>
          <td>状态，可选值 <code>normal</code>、<code>active</code>、<code>exception</code>、<code>success</code> 或者不设，其中 <code>active</code> 状态仅限 <code>line</code> 类型下可用</td>
          <td>String</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>width</td>
          <td>进度环或仪表盘的画布宽度，单位 <code>px</code>，默认值为 <code>{ small: 80, medium: 120, large: 160 }</code></td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>trackColor</td>
          <td>未完成分段的颜色</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>strokeColor</td>
          <td>进度条颜色，会覆盖 <code>status</code> 状态下的默认颜色，仅在 <code>type="steps"</code> 时支持数组类型</td>
          <td>String | Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>strokeWidth</td>
          <td>进度条宽度，单位 <code>px</code>，默认值为 <code>{ small: 6, medium: 8, large: 10 }</code></td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>strokeLinecap</td>
          <td>进度条的边缘形状，可选值为 <code>round</code>、<code>square</code> 或者不设</td>
          <td>String</td>
          <td>round</td>
        </tr>
        <tr>
          <td>gapDegree</td>
          <td>仪表盘的缺口角度，该属性仅在 <code>type="dashboard"</code> 时有效，可选值 <code>0</code> 至 <code>295</code></td>
          <td>Number</td>
          <td>75</td>
        </tr>
        <tr>
          <td>formatter</td>
          <td>内容的模板函数，接收 <code>percentage</code> 作为参数</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleLine from "./examples/line/index.vue";
  import VuiExampleLineSmall from "./examples/line-small/index.vue";
  import VuiExampleCircle from "./examples/circle/index.vue";
  import VuiExampleCircleSmall from "./examples/circle-small/index.vue";
  import VuiExampleDashboard from "./examples/dashboard/index.vue";
  import VuiExampleDynamic from "./examples/dynamic/index.vue";
  import VuiExampleSegment from "./examples/segment/index.vue";
  import VuiExampleFormatter from "./examples/formatter/index.vue";
  import VuiExampleStrokeColor from "./examples/stroke-color/index.vue";
  import VuiExampleStrokeLinecap from "./examples/stroke-linecap/index.vue";
  import VuiExampleSteps from "./examples/steps/index.vue";
</script>