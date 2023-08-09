<template>
  <div>
    <h2 id="api-time-props">Time 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>relative</td>
          <td>N</td>
          <td>显示类型，可选值为 <code>relative</code>、<code>date</code>、<code>datetime</code> 或者不设</td>
        </tr>
        <tr>
          <td>value</td>
          <td>String | Number | Date</td>
          <td>--</td>
          <td>Y</td>
          <td>需要对比的时间，可以是日期字符串、时间戳或 <code>Date</code> 对象</td>
        </tr>
        <tr>
          <td>interval</td>
          <td>Number</td>
          <td>60</td>
          <td>N</td>
          <td>自动更新间隔，单位：秒</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>