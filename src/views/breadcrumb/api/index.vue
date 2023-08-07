<template>
  <div>
    <h2 id="api-breadcrumb-props">Breadcrumb 属性</h2>
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
          <td>separator</td>
          <td>String</td>
          <td>/</td>
          <td>N</td>
          <td>自定义分隔符</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-breadcrumb-item-props">BreadcrumbItem 属性</h2>
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
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>项目图标类型/图标</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>项目标题</td>
        </tr>
        <tr>
          <td>href</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>设置项目点击后的跳转地址，指定此属性后项目的行为和 <code>a</code> 链接一致</td>
        </tr>
        <tr>
          <td>target</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
        </tr>
        <tr>
          <td>menu</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>下拉菜单</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-breadcrumb-item-events">BreadcrumbItem 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th width="160">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>Function</td>
          <td>event</td>
          <td>点击项目时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>