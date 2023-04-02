<template>
  <vui-article>
    <h1>Backtop 回到顶部</h1>
    <p>返回页面顶部的操作按钮。</p>
    <h2>何时使用</h2>
    <ul>
      <li>当页面内容区域比较长时；</li>
      <li>当用户需要频繁返回顶部查看相关内容时。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-custom />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Backtop 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>threshold</td>
          <td>滚动高度达到此阈值才出现 <code>Backtop</code> 按钮</td>
          <td>Number</td>
          <td>400</td>
        </tr>
        <tr>
          <td>right</td>
          <td><code>Backtop</code> 按钮距离页面右侧距离</td>
          <td>String | Number</td>
          <td>40</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td><code>Backtop</code> 按钮距离页面底部距离</td>
          <td>String | Number</td>
          <td>40</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>回到顶部滚动动画持续时间，单位毫秒</td>
          <td>Number</td>
          <td>500</td>
        </tr>
        <tr>
          <td>getScrollContainer</td>
          <td>指定滚动容器</td>
          <td>Function</td>
          <td>() => window</td>
        </tr>
      </tbody>
    </table>
    <h3>Backtop 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th>说明</th>
          <th width="200">类型</th>
          <th width="140">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击按钮时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleCustom from "./examples/custom/index.vue";
</script>