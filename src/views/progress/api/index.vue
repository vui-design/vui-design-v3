<template>
  <div>
    <h2 id="api-progress-props">Progress 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="160">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>line</td>
          <td>N</td>
          <td>进度条类型，可选值为 <code>line</code>、<code>circle</code>、<code>dashboard</code>、<code>steps</code> 或者不设</td>
        </tr>
        <tr>
          <td>showInfo</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示进度数值或状态图标</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>steps</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>进度条步数，仅在 <code>type="steps"</code> 时有效</td>
        </tr>
        <tr>
          <td>percentage</td>
          <td>Number</td>
          <td>0</td>
          <td>N</td>
          <td>进度百分比，可选值 <code>0</code> 至 <code>100</code></td>
        </tr>
        <tr>
          <td>success</td>
          <td>Number | Object</td>
          <td>--</td>
          <td>N</td>
          <td>成功进度条，仅在 <code>type</code> 不为 <code>steps</code> 时有效；可以写成数值来单独设置进度百分比，或者使用对象形式同时设置百分比及进度条颜色 <code>{ percentage: Number, strokeColor: String }</code></td>
        </tr>
        <tr>
          <td>status</td>
          <td>String</td>
          <td>normal</td>
          <td>N</td>
          <td>状态，可选值 <code>normal</code>、<code>active</code>、<code>exception</code>、<code>success</code> 或者不设，其中 <code>active</code> 状态仅限 <code>line</code> 类型下可用</td>
        </tr>
        <tr>
          <td>width</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>进度环或仪表盘的画布宽度，单位 <code>px</code>，默认值为 <code>{ small: 80, medium: 120, large: 160 }</code></td>
        </tr>
        <tr>
          <td>trackColor</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>未完成分段的颜色</td>
        </tr>
        <tr>
          <td>strokeColor</td>
          <td>String | Array</td>
          <td>--</td>
          <td>N</td>
          <td>进度条颜色，会覆盖 <code>status</code> 状态下的默认颜色，仅在 <code>type="steps"</code> 时支持数组类型</td>
        </tr>
        <tr>
          <td>strokeWidth</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>进度条宽度，单位 <code>px</code>，默认值为 <code>{ small: 6, medium: 8, large: 10 }</code></td>
        </tr>
        <tr>
          <td>strokeLinecap</td>
          <td>String</td>
          <td>round</td>
          <td>N</td>
          <td>进度条的边缘形状，可选值为 <code>round</code>、<code>square</code> 或者不设</td>
        </tr>
        <tr>
          <td>gapDegree</td>
          <td>Number</td>
          <td>75</td>
          <td>N</td>
          <td>仪表盘的缺口角度，仅在 <code>type="dashboard"</code> 时有效，可选值 <code>0</code> 至 <code>295</code></td>
        </tr>
        <tr>
          <td>formatter</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>内容的模板函数，接收 <code>percentage</code> 作为参数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>