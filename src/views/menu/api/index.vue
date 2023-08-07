<template>
  <div>
    <h2 id="api-menu-props">Menu 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>mode</td>
          <td>String</td>
          <td>horizontal</td>
          <td>N</td>
          <td>菜单类型，可选值为 <code>horizontal</code>、<code>vertical</code>、<code>inline</code> 或者不设</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>light</td>
          <td>N</td>
          <td>主题颜色，可选值为 <code>light</code>、<code>dark</code> 或者不设</td>
        </tr>
        <tr>
          <td>indent</td>
          <td>Number</td>
          <td>22</td>
          <td>N</td>
          <td>层级之间的缩进量</td>
        </tr>
        <tr>
          <td>accordion</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否开启手风琴效果</td>
        </tr>
        <tr>
          <td>selectable</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否允许选中</td>
        </tr>
        <tr>
          <td>defaultCollapsed</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>默认是否折叠收起菜单（非受控模式）</td>
        </tr>
        <tr>
          <td>collapsed</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>是否折叠收起菜单（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>defaultOpenKeys</td>
          <td>Array</td>
          <td>[]</td>
          <td>N</td>
          <td>默认展开的 <code>Submenu</code> 子菜单 <code>key</code> 值数组（非受控模式）</td>
        </tr>
        <tr>
          <td>openKeys</td>
          <td>Array</td>
          <td>--</td>
          <td>N</td>
          <td>当前展开的 <code>Submenu</code> 子菜单 <code>key</code> 值数组（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>defaultSelectedKey</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>默认选中的 <code>MenuItem</code> 菜单项 <code>key</code> 值数组（非受控模式）</td>
        </tr>
        <tr>
          <td>selectedKey</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前选中的 <code>MenuItem</code> 菜单项 <code>key</code> 值数组（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-menu-events">Menu 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="180">事件名</th>
          <th width="200">类型</th>
          <th width="160">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:openKeys</td>
          <td>Function</td>
          <td>keys[]</td>
          <td><code>Submenu</code> 打开/关闭时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>update:selectedKey</td>
          <td>Function</td>
          <td>key</td>
          <td><code>MenuItem</code> 被选中时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>toggle</td>
          <td>Function</td>
          <td>keys[]</td>
          <td><code>Submenu</code> 打开/关闭时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>select</td>
          <td>Function</td>
          <td>key</td>
          <td><code>MenuItem</code> 被选中时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>click</td>
          <td>Function</td>
          <td>key</td>
          <td><code>MenuItem</code> 被点击时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-submenu-props">Submenu 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>子菜单的唯一标识</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>子菜单的图标类型/图标</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>子菜单的标题</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>String</td>
          <td>hover</td>
          <td>N</td>
          <td>打开子菜单的触发方式，可选值为 <code>hover</code>、<code>click</code> 或者不设</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>String | HTMLElement</td>
          <td>body</td>
          <td>N</td>
          <td>子菜单弹出框挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用子菜单</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-menu-item-props">MenuItem 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>菜单项的唯一标识</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>菜单项的图标类型/图标</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>菜单项的标题</td>
        </tr>
        <tr>
          <td>href</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>设置菜单项点击后的跳转地址，指定此属性后菜单项的行为和 <code>a</code> 链接一致</td>
        </tr>
        <tr>
          <td>target</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
        </tr>
        <tr>
          <td>danger</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否为危险菜单项</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用菜单项</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-menu-item-group-props">MenuItemGroup 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>分组标题</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用分组</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-menu-item-divider-props">MenuItemDivider 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>gutter</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>分割线距离两侧内容的间隔，单位 <code>px</code></td>
        </tr>
        <tr>
          <td>dashed</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否为虚线样式</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>