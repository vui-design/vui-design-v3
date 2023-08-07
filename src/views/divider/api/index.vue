<template>
  <div>
    <h2 id="api-divider-props">Divider 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="120">属性</th>
          <th width="150">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>solid</td>
          <td>N</td>
          <td>分割线的样式类型，可选值为 <code>solid</code>、<code>dashed</code>、<code>dotted</code>、<code>double</code> 或者不设</td>
        </tr>
        <tr>
          <td>direction</td>
          <td>String</td>
          <td>horizontal</td>
          <td>N</td>
          <td>分割线的方向，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
        </tr>
        <tr>
          <td>orientation</td>
          <td>String</td>
          <td>center</td>
          <td>N</td>
          <td>分割线文本的位置，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
        </tr>
        <tr>
          <td>plain</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>文字是否显示为普通正文样式</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>自定义分割线的宽度/高度</td>
        </tr>
        <tr>
          <td>gutter</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>自定义分割线距离两侧内容的间隔</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>