<template>
  <vui-article>
    <h1>Anchor 锚点</h1>
    <p>用于跳转到页面指定位置。</p>
    <h2>何时使用</h2>
    <p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p>
    <h2>代码演示</h2>
    <vui-example-basic-usage />
    <vui-example-open-in-new-window />
    <vui-example-static />
    <vui-example-customize-highlight />
    <vui-example-offset />
    <vui-example-click />
    <vui-example-change />
    <h2 id="example-api">API</h2>
    <h3>Anchor 属性</h3>
    <table id="example-api-anchor-props" class="example-api-props">
      <thead>
        <tr>
          <th width="200">属性</th>
          <th>说明</th>
          <th width="160">类型</th>
          <th width="180">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>affix</td>
          <td>固钉模式</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>showInkInStatic</td>
          <td>静态位置下是否显示小圆点</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>bounds</td>
          <td>锚点区域边界</td>
          <td>Number</td>
          <td>5</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>锚点滚动偏移量</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>getScrollContainer</td>
          <td>指定滚动容器</td>
          <td>Function</td>
          <td>() => window</td>
        </tr>
        <tr>
          <td>offsetTop</td>
          <td>距离窗口顶部达到指定偏移量后触发</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>offsetBottom</td>
          <td>距离窗口底部达到指定偏移量后触发</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>getCurrentAnchorLink</td>
          <td>自定义高亮的锚点链接</td>
          <td>Function</td>
          <td>--</td>
        </tr>
        <tr>
          <td>preventDefault</td>
          <td>阻止锚点链接的默认行为，即点击锚点链接时，不将锚点名添加到地址栏</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <h3>Anchor 事件</h3>
    <table id="example-api-anchor-events" class="example-api-events">
      <thead>
        <tr>
          <th width="200">事件名</th>
          <th>说明</th>
          <th width="160">类型</th>
          <th width="180">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击锚点链接时触发的事件回调，返回事件对象及锚点连接</td>
          <td>Function</td>
          <td>e, link</td>
        </tr>
        <tr>
          <td>change</td>
          <td>锚点链接改变时触发的事件回调，返回当前锚点连接</td>
          <td>Function</td>
          <td>newHref, oldHref</td>
        </tr>
      </tbody>
    </table>
    <h3>AnchorLink 属性</h3>
    <table id="example-api-anchor-link-props" class="example-api-props">
      <thead>
        <tr>
          <th width="200">属性</th>
          <th>说明</th>
          <th width="160">类型</th>
          <th width="180">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>href</td>
          <td>锚点链接</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>文字内容</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>target</td>
          <td>指定在何处显示链接的资源</td>
          <td>String</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleOpenInNewWindow from "./examples/open-in-new-window/index.vue";
  import VuiExampleStatic from "./examples/static/index.vue";
  import VuiExampleCustomizeHighlight from "./examples/customize-highlight/index.vue";
  import VuiExampleOffset from "./examples/offset/index.vue";
  import VuiExampleClick from "./examples/click/index.vue";
  import VuiExampleChange from "./examples/change/index.vue";
</script>