<template>
  <div>
    <h2 id="api-result-props">Result 属性</h2>
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
          <td>status</td>
          <td>String</td>
          <td>info</td>
          <td>N</td>
          <td>结果状态，决定图标和颜色，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>、<code>comingsoon</code>、<code>403</code>、<code>404</code>、<code>500</code> 或者不设</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义图标类型/图标</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标题</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>描述信息</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>附加内容，一般用于放置操作按钮</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>