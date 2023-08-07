<template>
  <div>
    <h2 id="api-space-props">Space 属性</h2>
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
          <td>block</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>设置 <code>Space</code> 为块级元素，宽度撑满父元素</td>
        </tr>
        <tr>
          <td>direction</td>
          <td>String</td>
          <td>horizontal</td>
          <td>N</td>
          <td>项目排列方向，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
        </tr>
        <tr>
          <td>wrap</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否自动换行，仅在 <code>direction</code> 为 <code>horizontal</code> 时有效</td>
        </tr>
        <tr>
          <td>justify</td>
          <td>String</td>
          <td>start</td>
          <td>N</td>
          <td>项目在主轴上的对齐方式，可选值为 <code>start</code>、<code>center</code>、<code>end</code>、<code>around</code>、<code>between</code> 或者不设，仅在 <code>direction</code> 为 <code>horizontal</code> 时有效</td>
        </tr>
        <tr>
          <td>align</td>
          <td>String</td>
          <td>center</td>
          <td>N</td>
          <td>项目在交叉轴上的对齐方式，可选值为 <code>start</code>、<code>center</code>、<code>end</code>、<code>baseline</code>、<code>stretch</code> 或者不设，仅在 <code>direction</code> 为 <code>horizontal</code> 时有效</td>
        </tr>
        <tr>
          <td>divider</td>
          <td>Boolean | String | Number</td>
          <td>false</td>
          <td>N</td>
          <td>是否在项目间插入分割线，可设置为具体的数值，用于指定分割线高度，仅在 <code>direction</code> 为 <code>horizontal</code> 时有效</td>
        </tr>
        <tr>
          <td>gutter</td>
          <td>String | Number | Array</td>
          <td>medium</td>
          <td>N</td>
          <td>项目间距，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设，支持自定义间距大小</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>