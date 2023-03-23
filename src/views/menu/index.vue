<template>
  <vui-article>
    <h1>Menu 导航菜单</h1>
    <p>为页面和功能提供导航的菜单列表。</p>
    <h2>何时使用</h2>
    <p>导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。</p>
    <h2>代码演示</h2>
    <vui-example-horizontal />
    <vui-example-vertical />
    <vui-example-inline />
    <vui-example-inline-collapsed />
    <vui-example-color />
    <vui-example-accordion />
    <vui-example-switch-mode />
    <h2 id="example-api">API</h2>
    <h3>Menu 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>mode</td>
          <td>菜单类型，可选值为 <code>horizontal</code>、<code>vertical</code>、<code>inline</code> 或者不设</td>
          <td>String</td>
          <td>horizontal</td>
        </tr>
        <tr>
          <td>color</td>
          <td>主题颜色，可选值为 <code>light</code>、<code>dark</code> 或者不设</td>
          <td>String</td>
          <td>light</td>
        </tr>
        <tr>
          <td>indent</td>
          <td>层级之间的缩进量</td>
          <td>Number</td>
          <td>22</td>
        </tr>
        <tr>
          <td>accordion</td>
          <td>是否开启手风琴效果</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>selectable</td>
          <td>是否允许选中</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>defaultCollapsed</td>
          <td>默认是否折叠收起菜单（非受控模式）</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>collapsed</td>
          <td>是否折叠收起菜单（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Boolean</td>
          <td>--</td>
        </tr>
        <tr>
          <td>defaultOpenKeys</td>
          <td>默认展开的 <code>Submenu</code> 子菜单 <code>key</code> 值数组（非受控模式）</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>openKeys</td>
          <td>当前展开的 <code>Submenu</code> 子菜单 <code>key</code> 值数组（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>defaultSelectedKey</td>
          <td>默认选中的 <code>MenuItem</code> 菜单项 <code>key</code> 值数组（非受控模式）</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>selectedKey</td>
          <td>当前选中的 <code>MenuItem</code> 菜单项 <code>key</code> 值数组（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>Menu 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="160">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:openKeys</td>
          <td><code>Submenu</code> 打开/关闭时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Function</td>
          <td>keys[]</td>
        </tr>
        <tr>
          <td>update:selectedKey</td>
          <td><code>MenuItem</code> 被选中时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Function</td>
          <td>key</td>
        </tr>
        <tr>
          <td>toggle</td>
          <td><code>Submenu</code> 打开/关闭时触发的事件回调函数</td>
          <td>Function</td>
          <td>keys[]</td>
        </tr>
        <tr>
          <td>select</td>
          <td><code>MenuItem</code> 被选中时触发的事件回调函数</td>
          <td>Function</td>
          <td>key</td>
        </tr>
        <tr>
          <td>click</td>
          <td><code>MenuItem</code> 被点击时触发的事件回调函数</td>
          <td>Function</td>
          <td>key</td>
        </tr>
      </tbody>
    </table>
    <h3>Submenu 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>子菜单的唯一标识</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>子菜单的图标类型/图标</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>子菜单的标题</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>打开子菜单的触发方式，可选值为 <code>hover</code>、<code>click</code> 或者不设</td>
          <td>String</td>
          <td>hover</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>子菜单弹出框挂载的 HTML 节点，默认渲染到 <code>document.body</code> 上</td>
          <td>String | HTMLElement</td>
          <td>body</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用子菜单</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>MenuItem 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>key</td>
          <td>菜单项的唯一标识</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>菜单项的图标类型/图标</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>菜单项的标题</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>href</td>
          <td>设置菜单项点击后的跳转地址，指定此属性后菜单项的行为和 <code>a</code> 链接一致</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>target</td>
          <td>相当于 <code>a</code> 链接的 <code>target</code> 属性，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用菜单项</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>MenuItemGroup 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>分组标题</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用分组</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>MenuItemDivider 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="160">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>gutter</td>
          <td>分割线距离两侧内容的间隔，单位 <code>px</code></td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>dashed</td>
          <td>是否为虚线样式</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleHorizontal from "./examples/horizontal/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleInline from "./examples/inline/index.vue";
  import VuiExampleInlineCollapsed from "./examples/inline-collapsed/index.vue";
  import VuiExampleColor from "./examples/color/index.vue";
  import VuiExampleAccordion from "./examples/accordion/index.vue";
  import VuiExampleSwitchMode from "./examples/switch-mode/index.vue";
</script>