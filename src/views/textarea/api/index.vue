<template>
  <div>
    <h2 id="api-textarea-props">Textarea 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="170">属性</th>
          <th width="230">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultValue</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>默认值（非受控模式）</td>
        </tr>
        <tr>
          <td>value</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>值（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>文本域占位文本</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否含有边框</td>
        </tr>
        <tr>
          <td>showCount</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否显示输入字数</td>
        </tr>
        <tr>
          <td>bytes</td>
          <td>(value: string) => number</td>
          <td>--</td>
          <td>N</td>
          <td>自定义字符长度计算方法，如中文占两个字节</td>
        </tr>
        <tr>
          <td>maxLength</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>允许输入的最大字符数量</td>
        </tr>
        <tr>
          <td>rows</td>
          <td>Number</td>
          <td>4</td>
          <td>N</td>
          <td>默认可见行数</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否自动获得焦点</td>
        </tr>
        <tr>
          <td>autosize</td>
          <td>Boolean | Object</td>
          <td>false</td>
          <td>N</td>
          <td>自适应内容高度，可设置为 <code>true</code>、<code>false</code> 或对象 <code>{ minRows: 4, maxRows: 8 }</code></td>
        </tr>
        <tr>
          <td>resizable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否允许手动拖曳改变高度</td>
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
      </tbody>
    </table>
    <h2 id="api-textarea-events">Textarea 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="170">事件名</th>
          <th width="230">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:value</td>
          <td>Function</td>
          <td>value</td>
          <td>文本域内容变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>value</td>
          <td>文本域内容变化时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>Function</td>
          <td>event</td>
          <td>文本域获取焦点时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>Function</td>
          <td>event</td>
          <td>文本域失去焦点时触发的事件回调函数</td>
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
    <h2 id="api-textarea-methods">Textarea 方法</h2>
    <table class="api-methods">
      <thead>
        <tr>
          <th width="170">方法名</th>
          <th width="230">参数</th>
          <th width="140">参数说明</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>focus</td>
          <td>--</td>
          <td>--</td>
          <td>使文本域获取焦点</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>--</td>
          <td>--</td>
          <td>使文本域失去焦点</td>
        </tr>
        <tr>
          <td>select</td>
          <td>--</td>
          <td>--</td>
          <td>选中文本域内容</td>
        </tr>
        <tr>
          <td>setSelectionRange</td>
          <td>start, end, [direction]</td>
          <td>--</td>
          <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement/setSelectionRange" target="_blank">设置文本域当前选中文本的起始和结束位置</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>