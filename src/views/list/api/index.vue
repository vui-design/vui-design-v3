<template>
  <div>
    <h2 id="api-list-props">List 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
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
          <td>设置 <code>ListItem</code> 项目布局，可选值为 <code>horizontal</code>、<code>vertical</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否显示边框</td>
        </tr>
        <tr>
          <td>split</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示分割线</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>当内容还在加载中时，可以用 <code>loading</code> 展示一个占位</td>
        </tr>
        <tr>
          <td>grid</td>
          <td>Object</td>
          <td>--</td>
          <td>N</td>
          <td>列表栅格配置，详见示例〔栅格列表〕</td>
        </tr>
        <tr>
          <td>item</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>项目插槽</td>
        </tr>
        <tr>
          <td>data</td>
          <td>Array</td>
          <td>--</td>
          <td>N</td>
          <td>列表数据，需要和 <code>item</code> 插槽同时使用</td>
        </tr>
        <tr>
          <td>header</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>列表头部内容</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>列表底部内容</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-list-grid-props">List grid 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>gutter</td>
          <td>Number | Object | Array</td>
          <td>16</td>
          <td>N</td>
          <td>栅格间隔，可以写成像素值或支持响应式的对象来设置间隔 <code>{ xs: 8, sm: 16, md: 24 }</code>；或者使用数组形式分别设置 <code>[水平间距, 垂直间距]</code></td>
        </tr>
        <tr>
          <td>span</td>
          <td>Number</td>
          <td>24</td>
          <td>N</td>
          <td>每列的栅格占位格数，可选值为 1~24 的整数</td>
        </tr>
        <tr>
          <td>xs</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &lt; 576px</code> 时每列的栅格占位格数</td>
        </tr>
        <tr>
          <td>sm</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 576px</code> 时每列的栅格占位格数</td>
        </tr>
        <tr>
          <td>md</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 768px</code> 时每列的栅格占位格数</td>
        </tr>
        <tr>
          <td>lg</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 992px</code> 时每列的栅格占位格数</td>
        </tr>
        <tr>
          <td>xl</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 1220px</code> 时每列的栅格占位格数</td>
        </tr>
        <tr>
          <td>xxl</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 1600px</code> 时每列的栅格占位格数</td>
        </tr>
        <tr>
          <td>xxxl</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 2200px</code> 时每列的栅格占位格数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-list-item-props">ListItem 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>actions</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>操作组，根据 <code>List</code> 组件 <code>layout</code> 属性值的不同，位置在列表元素底部或者右侧</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>额外内容，通常用在 <code>layout</code> 为 <code>vertical</code> 的情况下展示右侧内容</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-list-item-meta-props">ListItemMeta 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>avatar</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>列表元素的头像</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>列表元素的标题</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>列表元素的描述内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>