<template>
  <div>
    <h2 id="api-authorizer-props">Authorizer 属性</h2>
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
          <td>value</td>
          <td>String | Array</td>
          <td>--</td>
          <td>N</td>
          <td>子元素或子组件需要的权限标识，支持数组格式</td>
        </tr>
        <tr>
          <td>authorize</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>自定义权限校验函数（可利用 ConfigProvider 组件全局定义），接收 <code>value</code> 和 <code>attrs</code> 作为参数，其中 <code>attrs</code> 为其它自定义属性</td>
        </tr>
        <tr>
          <td>replacement</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>权限校验未通过时显示的替代元素或组件</td>
        </tr>
      </tbody>
    </table>
    <p>除了预定义的属性之外，<code>Authorizer</code> 组件也支持其它自定义属性，以便实现更为复杂的校验逻辑，如下所示：</p>
    <ul>
      <li><code>&lt;vui-authorizer value="admin" attrA="string"&gt;&lt;/vui-authorizer&gt;</code></li>
      <li><code>&lt;vui-authorizer value="superadmin" attrA="string" v-bind:attrB="123456" /&gt;&lt;/vui-authorizer&gt;</code></li>
    </ul>
    <p>额外的自定义属性将以第二个参数传递给 <code>authorize</code> 权限校验函数。</p>
  </div>
</template>