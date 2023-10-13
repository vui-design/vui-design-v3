<template>
  <div>
    <h2 id="api-cascader-props">Cascader 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th width="190">类型</th>
          <th width="260">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultValue</td>
          <td>Array</td>
          <td>[]</td>
          <td>N</td>
          <td>默认选中值（非受控模式）</td>
        </tr>
        <tr>
          <td>value</td>
          <td>Array</td>
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
          <td>options</td>
          <td>Array</td>
          <td>[]</td>
          <td>N</td>
          <td>可选项数据源</td>
        </tr>
        <tr>
          <td>optionKeys</td>
          <td>CascaderOptionKeys</td>
          <td>--</td>
          <td>N</td>
          <td>自定义 <code>options</code> 选项中的 <code>label</code>、<code>value</code>、<code>children</code> 或 <code>disabled</code> 等字段</td>
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
          <td>trigger</td>
          <td>String</td>
          <td>click</td>
          <td>N</td>
          <td>展开次级菜单的触发方式，可选值为 <code>click</code>、<code>hover</code> 或者不设</td>
        </tr>
        <tr>
          <td>changeOnSelect</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>当此项为 <code>true</code> 时，点选每级菜单选项值都会发生变化</td>
        </tr>
        <tr>
          <td>formatter</td>
          <td>Function</td>
          <td>labels => labels.join(" / ")</td>
          <td>N</td>
          <td>选择后展示的渲染函数，用于自定义显示格式</td>
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
          <td>是否根据输入关键字进行筛选；当其为一个函数时，会接收 <code>keyword</code>、<code>option</code> 两个参数，当 <code>option</code> 符合条件时，应返回 <code>true</code>，反之返回 <code>false</code></td>
        </tr>
        <tr>
          <td>filterOptionProp</td>
          <td>String</td>
          <td>label</td>
          <td>N</td>
          <td>筛选时按 <code>Option</code> 的指定属性进行过滤，可选值为 <code>label</code>、<code>value</code> 或者不设</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否允许清空</td>
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
    <h2 id="api-cascader-events">Cascader 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="190">事件名</th>
          <th width="190">类型</th>
          <th width="260">回调参数</th>
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
          <td>--</td>
          <td>选择框获得光标时触发的事件回调</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>Function</td>
          <td>--</td>
          <td>选择框失去光标时触发的事件回调</td>
        </tr>
        <tr>
          <td>clear</td>
          <td>Function</td>
          <td>--</td>
          <td>点击清空按钮时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>