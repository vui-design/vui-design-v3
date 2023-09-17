<template>
  <div>
    <h2 id="api-select-props">Select 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th width="300">类型</th>
          <th width="180">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultValue</td>
          <td>String | Number | Boolean | Array</td>
          <td>--</td>
          <td>N</td>
          <td>默认选中值（非受控模式）</td>
        </tr>
        <tr>
          <td>value</td>
          <td>String | Number | Boolean | Array</td>
          <td>--</td>
          <td>N</td>
          <td>当前选中值（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>请选择...</td>
          <td>N</td>
          <td>选择框占位文本</td>
        </tr>
        <tr>
          <td>backfillOptionProp</td>
          <td>String | Function</td>
          <td>children</td>
          <td>N</td>
          <td>回填到选择框的 <code>Option</code> 属性值，可选值为 <code>value</code>、<code>label</code>、<code>children</code> 或者不设</td>
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
          <td>选择框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否支持多选</td>
        </tr>
        <tr>
          <td>maxTagCount</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>多选模式下选择框中最多显示多少个 <code>tag</code> 标签</td>
        </tr>
        <tr>
          <td>maxTagPlaceholder</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>隐藏剩余 <code>tag</code> 标签时显示的内容，参数为剩余数量</td>
        </tr>
        <tr>
          <td>searchable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否支持搜索</td>
        </tr>
        <tr>
          <td>filter</td>
          <td>Boolean | Function</td>
          <td>true</td>
          <td>N</td>
          <td>是否根据搜索关键词进行筛选；当其为一个函数时，会接收 <code>keyword</code>、<code>option</code> 两个参数，当 <code>option</code> 符合条件时，应返回 <code>true</code>，反之返回 <code>false</code></td>
        </tr>
        <tr>
          <td>filterOptionProp</td>
          <td>String</td>
          <td>children</td>
          <td>N</td>
          <td>筛选时按 <code>Option</code> 的指定属性进行过滤，如设置为 <code>children</code> 表示对内嵌内容进行搜索，可选值为 <code>value</code>、<code>label</code>、<code>children</code> 或者不设</td>
        </tr>
        <tr>
          <td>allowCreate</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>多选模式下是否允许用户创建新的项目</td>
        </tr>
        <tr>
          <td>clearKeywordOnSelect</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否在选中选项后自动清空搜索关键词，只在多选模式下有效</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否允许一键清空</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否处于 <code>loading</code> 状态（即当前是否正在进行远程搜索）</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>选中值变化时是否触发父级表单验证</td>
        </tr>
        <tr>
          <td>loadingText</td>
          <td>String</td>
          <td>加载中...</td>
          <td>N</td>
          <td>远程搜索时的文本提示</td>
        </tr>
        <tr>
          <td>notFoundText</td>
          <td>String</td>
          <td>暂无数据</td>
          <td>N</td>
          <td>选项为空时的文本提示</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>String | HTMLElement</td>
          <td>body</td>
          <td>N</td>
          <td>下拉选项挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>String</td>
          <td>bottom-left</td>
          <td>N</td>
          <td>下拉选项的弹出位置，可选值为 <code>top</code>、<code>top-left</code>、<code>top-right</code>、<code>bottom</code>、<code>bottom-left</code>、<code>bottom-right</code> 或者不设</td>
        </tr>
        <tr>
          <td>autofitPopupWidth</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否将下拉选项的宽度设置为选择框宽度</td>
        </tr>
        <tr>
          <td>autofitPopupMinWidth</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否将下拉选项的最小宽度设置为选择框宽度</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否在关闭时卸载下拉选项</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-select-events">Select 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="190">事件名</th>
          <th width="300">类型</th>
          <th width="180">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:value</td>
          <td>Function</td>
          <td>value</td>
          <td>选中值发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>value</td>
          <td>选中值发生变化时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>Function</td>
          <td>event</td>
          <td>选择框获得光标时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>Function</td>
          <td>event</td>
          <td>选择框失去光标时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>clear</td>
          <td>Function</td>
          <td>--</td>
          <td>点击清空按钮时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>search</td>
          <td>Function</td>
          <td>keyword</td>
          <td>搜索关键词发生变化时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-select-option-group-props">OptionGroup 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th width="300">类型</th>
          <th width="180">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>label</td>
          <td>String</td>
          <td>--</td>
          <td>Y</td>
          <td>分组名称，必填</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用该分组下所有选项</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-select-option-props">Option 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th width="300">类型</th>
          <th width="180">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>String | Number | Boolean</td>
          <td>--</td>
          <td>Y</td>
          <td>选项值</td>
        </tr>
        <tr>
          <td>label</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>选项标签</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>