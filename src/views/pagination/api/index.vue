<template>
  <div>
    <h2 id="api-pagination-props">Pagination 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th width="200">类型</th>
          <th width="190">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>simple</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>启用简洁模式</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>分页尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
        <tr>
          <td>align</td>
          <td>String</td>
          <td>left</td>
          <td>N</td>
          <td>水平对齐方式，可选值为 <code>left</code>、<code>center</code>、<code>right</code> 或者不设</td>
        </tr>
        <tr>
          <td>total</td>
          <td>Number</td>
          <td>0</td>
          <td>N</td>
          <td>数据总数</td>
        </tr>
        <tr>
          <td>defaultPage</td>
          <td>Number</td>
          <td>1</td>
          <td>N</td>
          <td>默认页码</td>
        </tr>
        <tr>
          <td>page</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前页码，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>defaultPageSize</td>
          <td>Number</td>
          <td>10</td>
          <td>N</td>
          <td>默认每页条数</td>
        </tr>
        <tr>
          <td>pageSize</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>当前每页条数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>prevPageText</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>替代图标显示的上一页文字</td>
        </tr>
        <tr>
          <td>nextPageText</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>替代图标显示的下一页文字</td>
        </tr>
        <tr>
          <td>showTotal</td>
          <td>Boolean | Function</td>
          <td>false</td>
          <td>N</td>
          <td>用于显示数据总数和当前数据范围</td>
        </tr>
        <tr>
          <td>showPageSizer</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否显示 <code>pageSize</code> 切换器</td>
        </tr>
        <tr>
          <td>pageSizeOptions</td>
          <td>Array</td>
          <td>[10, 20, 30, 40, 50]</td>
          <td>N</td>
          <td>用于指定 <code>pageSize</code> 的可选列表</td>
        </tr>
        <tr>
          <td>showPageJumper</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否可以快速跳转至某一页</td>
        </tr>
        <tr>
          <td>hideOnSinglePage</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>当只有一页时是否隐藏分页</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-pagination-events">Pagination 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="180">事件名</th>
          <th width="200">类型</th>
          <th width="190">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>input</td>
          <td>Function</td>
          <td>page</td>
          <td>页码改变时触发的事件回调，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>page</td>
          <td>页码改变时触发的事件回调</td>
        </tr>
        <tr>
          <td>changePageSize</td>
          <td>Function</td>
          <td>pageSize</td>
          <td>切换 <code>pageSize</code> 时触发的事件回调</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>