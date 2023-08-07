<template>
  <div>
    <h2 id="api-anchor-props">Anchor 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="200">属性</th>
          <th width="160">类型</th>
          <th width="180">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>affix</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>固钉模式</td>
        </tr>
        <tr>
          <td>showInkInStatic</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>静态位置下是否显示小圆点</td>
        </tr>
        <tr>
          <td>bounds</td>
          <td>Number</td>
          <td>5</td>
          <td>N</td>
          <td>锚点区域边界</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>Number</td>
          <td>0</td>
          <td>N</td>
          <td>锚点滚动偏移量</td>
        </tr>
        <tr>
          <td>getScrollContainer</td>
          <td>Function</td>
          <td>() => window</td>
          <td>N</td>
          <td>指定滚动容器</td>
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
        <tr>
          <td>getCurrentAnchorLink</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>自定义高亮的锚点链接</td>
        </tr>
        <tr>
          <td>preventDefault</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>阻止锚点链接的默认行为，即点击锚点链接时，不将锚点名添加到地址栏</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-anchor-events">Anchor 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="200">事件名</th>
          <th width="160">类型</th>
          <th width="180">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>Function</td>
          <td>e, link</td>
          <td>点击锚点链接时触发的事件回调，返回事件对象及锚点连接</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>newHref, oldHref</td>
          <td>锚点链接改变时触发的事件回调，返回当前锚点连接</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-anchor-link-props">AnchorLink 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="200">属性</th>
          <th width="160">类型</th>
          <th width="180">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>href</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>锚点链接</td>
        </tr>
        <tr>
          <td>target</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>指定在何处显示链接的资源，可选值请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target" target="_blank">HTML 标准</a></td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>文字内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>