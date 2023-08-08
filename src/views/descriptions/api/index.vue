<template>
  <div>
    <h2 id="api-descriptions-props">Descriptions 属性</h2>
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
          <td>layout</td>
          <td>String</td>
          <td>horizontal</td>
          <td>N</td>
          <td>描述列表的布局方式，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否显示边框</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>描述列表的尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>描述列表的标题，显示在最顶部</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>描述列表的操作区，显示在标题的右侧</td>
        </tr>
        <tr>
          <td>columns</td>
          <td>Number | Object</td>
          <td>3</td>
          <td>N</td>
          <td>描述列表的列数，即一行中显示的 <code>Description</code> 数量，可以写成支持响应式的对象 <code>{ xs: 1, sm: 2, md: 3 }</code></td>
        </tr>
        <tr>
          <td>colon</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>描述标签右侧是否显示冒号，在不含边框的描述列表中默认为 <code>true</code>，即显示冒号</td>
        </tr>
        <tr>
          <td>labelWidth</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>描述标签的宽度，设为 <code>String</code> 类型时支持百分比宽度；该属性仅在 <code>layout</code> 为 <code>horizontal</code> 且含有边框的描述列表中有效</td>
        </tr>
        <tr>
          <td>labelAlign</td>
          <td>String</td>
          <td>left</td>
          <td>N</td>
          <td>描述标签的文本对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设；该属性仅在 <code>layout</code> 为 <code>horizontal</code> 且含有边框的描述列表中有效</td>
        </tr>
        <tr>
          <td>labelStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义描述标签样式</td>
        </tr>
        <tr>
          <td>contentStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义内容区样式</td>
        </tr>
        <tr>
          <td>tableStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义内容区表格样式</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-descriptions-description-props">Description 属性</h2>
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
          <td>label</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>描述标签</td>
        </tr>
        <tr>
          <td>span</td>
          <td>Number</td>
          <td>1</td>
          <td>N</td>
          <td>所占的列数</td>
        </tr>
        <tr>
          <td>labelStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义描述标签样式</td>
        </tr>
        <tr>
          <td>contentStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义内容样式</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>