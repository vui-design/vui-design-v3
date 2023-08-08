<template>
  <div>
    <h2 id="api-input-props">Input / InputPassword 属性</h2>
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
    <h2 id="api-input-events">Input / InputPassword 事件</h2>
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
    <h2 id="api-input-methods">Input / InputPassword 方法</h2>
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
    <h2 id="api-input-search-props">InputSearch 属性</h2>
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
          <td>type</td>
          <td>ButtonType</td>
          <td>default</td>
          <td>N</td>
          <td>按钮类型</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>IconType | Boolean</td>
          <td>search</td>
          <td>N</td>
          <td>按钮图标类型；当不需要图标时，可以设为 <code>false</code></td>
        </tr>
        <tr>
          <td>text</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>按钮文本</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String | Number</td>
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
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>按钮是否为加载中状态</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>输入框是否为禁用状态</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-input-search-events">InputSearch 事件</h2>
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
          <td>输入框内容变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>value</td>
          <td>输入框内容变化时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>search</td>
          <td>Function</td>
          <td>value</td>
          <td>按下回车键或点击按钮时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-input-group-props">InputGroup 属性</h2>
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
          <td>compact</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否使用紧凑模式</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>输入框组合尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>输入框组合是否为禁用状态</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>