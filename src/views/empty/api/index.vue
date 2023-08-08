<template>
  <div>
    <h2 id="api-empty-props">Empty 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="240">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>image</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>显示图片，为 <code>String</code> 类型时表示自定义图片地址</td>
        </tr>
        <tr>
          <td>imageStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义图片样式</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String | Boolean | Slot</td>
          <td>true</td>
          <td>N</td>
          <td>自定义描述内容，为 <code>false</code> 时不显示。</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>