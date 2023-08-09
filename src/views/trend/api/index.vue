<template>
  <div>
    <h2 id="api-trend-props">Trend 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="160">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前值</td>
        </tr>
        <tr>
          <td>target</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>目标值/对比值</td>
        </tr>
        <tr>
          <td>ratio</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>自定义趋势值，设置此属性后 <code>value</code> 及 <code>target</code> 属性无效</td>
        </tr>
        <tr>
          <td>precision</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>数值精度，必须为 <code>0</code> 或大于 <code>0</code> 的整数</td>
        </tr>
        <tr>
          <td>label</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标签文本</td>
        </tr>
        <tr>
          <td>downwardColor</td>
          <td>String</td>
          <td>#52c41a</td>
          <td>N</td>
          <td>下降趋势的颜色</td>
        </tr>
        <tr>
          <td>upwardColor</td>
          <td>String</td>
          <td>#ff4d4f</td>
          <td>N</td>
          <td>上升趋势的颜色</td>
        </tr>
        <tr>
          <td>reverseColor</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>颜色反转，仅在使用默认颜色时生效</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String | Slot</td>
          <td>NaN</td>
          <td>N</td>
          <td>趋势值无效时的占位文本</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>