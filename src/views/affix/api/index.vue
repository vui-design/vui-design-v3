<template>
  <div>
    <h2 id="api-affix-props">Affix 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="220">属性</th>
          <th width="140">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>getScrollContainer</td>
          <td>Function</td>
          <td>() => window</td>
          <td>N</td>
          <td><code>Affix</code> 所属滚动容器，值为一个返回对应 <code>DOM</code> 元素的函数</td>
        </tr>
        <tr>
          <td>getUpperScrollContainer</td>
          <td>Function</td>
          <td>() => window</td>
          <td>N</td>
          <td>滚动容器的外层滚动元素，默认是 <code>window</code>，<code>Affix</code> 将会监听该元素的滚动事件，并实时更新位置；主要是为了解决 <code>getScrollContainer</code> 属性返回非 <code>window</code> 元素时，如果外层元素滚动，可能会导致固钉跑出其所属滚动容器的问题</td>
        </tr>
        <tr>
          <td>offsetTop</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>距离窗口顶部达到指定偏移量后触发</td>
        </tr>
        <tr>
          <td>offsetBottom</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>距离窗口底部达到指定偏移量后触发</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-affix-events">Affix 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="220">事件名</th>
          <th width="140">类型</th>
          <th width="160">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>affixed</td>
          <td>固定状态改变时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>