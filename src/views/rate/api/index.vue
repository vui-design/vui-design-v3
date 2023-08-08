<template>
  <div>
    <h2 id="api-rate-props">Rate 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultValue</td>
          <td>Number</td>
          <td>0</td>
          <td>N</td>
          <td>默认评分（非受控模式）</td>
        </tr>
        <tr>
          <td>value</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前评分（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>count</td>
          <td>Number</td>
          <td>5</td>
          <td>N</td>
          <td>Star 总数</td>
        </tr>
        <tr>
          <td>character</td>
          <td>String | Function | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义字符</td>
        </tr>
        <tr>
          <td>tooltips</td>
          <td>Array</td>
          <td>--</td>
          <td>N</td>
          <td>自定义每项的提示信息</td>
        </tr>
        <tr>
          <td>allowHalf</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否允许半选</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否允许再次点击取消评分</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否只读，无法进行交互</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>评分变化时是否触发父级表单验证</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-rate-events">Rate 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th width="220">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:value</td>
          <td>Function</td>
          <td>value</td>
          <td>评分改变时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>value</td>
          <td>评分改变时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>