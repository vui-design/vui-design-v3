<template>
  <div>
    <h2 id="api-input-number-props">InputNumber 属性</h2>
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
          <td>--</td>
          <td>N</td>
          <td>默认值（非受控模式）</td>
        </tr>
        <tr>
          <td>value</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>值（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>min</td>
          <td>Number</td>
          <td>-Infinity</td>
          <td>N</td>
          <td>最小值</td>
        </tr>
        <tr>
          <td>max</td>
          <td>Number</td>
          <td>Infinity</td>
          <td>N</td>
          <td>最大值</td>
        </tr>
        <tr>
          <td>step</td>
          <td>Number</td>
          <td>1</td>
          <td>N</td>
          <td>每次改变的步长，可以是小数</td>
        </tr>
        <tr>
          <td>precision</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>数值精度，必须为 <code>0</code> 或大于 <code>0</code> 的整数</td>
        </tr>
        <tr>
          <td>formatter</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>指定输入框展示值的格式</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>输入框占位文本</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否含有边框</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>输入框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否自动获得焦点</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否允许清空</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>输入框是否为只读状态</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>输入框是否为禁用状态</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>值变化时是否触发父级表单验证</td>
        </tr>
        <tr>
          <td>addonBefore</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>前置标签</td>
        </tr>
        <tr>
          <td>addonAfter</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>后置标签</td>
        </tr>
        <tr>
          <td>affixBefore</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>前缀图标类型/图标</td>
        </tr>
        <tr>
          <td>affixAfter</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>后缀图标类型/图标</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-input-number-events">InputNumber 事件</h2>
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
          <td>输入框内容变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>value</td>
          <td>输入框内容变化时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>Function</td>
          <td>event</td>
          <td>输入框获取焦点时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>Function</td>
          <td>event</td>
          <td>输入框失去焦点时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>keydown</td>
          <td>Function</td>
          <td>event</td>
          <td>键盘按下时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>keyup</td>
          <td>Function</td>
          <td>event</td>
          <td>键盘弹起时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>enter</td>
          <td>Function</td>
          <td>event</td>
          <td>按下回车键时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>clear</td>
          <td>Function</td>
          <td>--</td>
          <td>点击清空按钮时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-input-number-methods">InputNumber 方法</h2>
    <table class="api-methods">
      <thead>
        <tr>
          <th width="160">方法名</th>
          <th width="220">参数</th>
          <th width="140">参数说明</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>focus</td>
          <td>--</td>
          <td>--</td>
          <td>使输入框获取焦点</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>--</td>
          <td>--</td>
          <td>使输入框失去焦点</td>
        </tr>
        <tr>
          <td>select</td>
          <td>--</td>
          <td>--</td>
          <td>选中输入框内容</td>
        </tr>
        <tr>
          <td>setSelectionRange</td>
          <td>start, end, [direction]</td>
          <td>--</td>
          <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement/setSelectionRange" target="_blank">设置输入框当前选中文本的起始和结束位置</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>