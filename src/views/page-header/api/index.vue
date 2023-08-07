<template>
  <div>
    <h2 id="api-page-header-props">PageHeader 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>breadcrumb</td>
          <td>Array | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>面包屑配置；为数组类型时，详细项目属性请参考 <router-link to="/components/breadcrumb">BreadcrumbItem</router-link> 组件</td>
        </tr>
        <tr>
          <td>backIcon</td>
          <td>Boolean | String | Slot</td>
          <td>true</td>
          <td>N</td>
          <td>自定义后退按钮图标类型/图标，为 <code>true</code> 时使用默认图标，若为 <code>false</code> 则不渲染</td>
        </tr>
        <tr>
          <td>avatar</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标题左侧的头像地址/头像</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标题</td>
        </tr>
        <tr>
          <td>subTitle</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>副标题</td>
        </tr>
        <tr>
          <td>tags</td>
          <td>Array | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标题右侧的 <code>Tag</code> 列表，如 <code>[{ color: "red", title: "Tag" }]</code></td>
        </tr>
        <tr>
          <td>extra</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>操作区，位于标题行的行尾</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td><code>PageHeader</code> 的页脚，一般用于渲染横向导航菜单</td>
        </tr>
        <tr>
          <td>ghost</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td><code>PageHeader</code> 的背景类型，将会改变背景颜色</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-page-header-events">PageHeader 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th width="220">类型</th>
          <th width="160">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>back</td>
          <td>Function</td>
          <td>event</td>
          <td>返回按钮的点击事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>