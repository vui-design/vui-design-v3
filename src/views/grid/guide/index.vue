<template>
  <div>
    <h2 id="guide-grid-design-concept">设计理念</h2>
    <div class="example-grid">
      <vui-row>
        <vui-col v-bind:span="24"><div>100%</div></vui-col>
      </vui-row>
      <vui-row>
        <vui-col v-bind:span="6"><div>25%</div></vui-col>
        <vui-col v-bind:span="6"><div>25%</div></vui-col>
        <vui-col v-bind:span="6"><div>25%</div></vui-col>
        <vui-col v-bind:span="6"><div>25%</div></vui-col>
      </vui-row>
      <vui-row>
        <vui-col v-bind:span="8"><div>33.33%</div></vui-col>
        <vui-col v-bind:span="8"><div>33.33%</div></vui-col>
        <vui-col v-bind:span="8"><div>33.33%</div></vui-col>
      </vui-row>
      <vui-row>
        <vui-col v-bind:span="12"><div>50%</div></vui-col>
        <vui-col v-bind:span="12"><div>50%</div></vui-col>
      </vui-row>
      <vui-row>
        <vui-col v-bind:span="16"><div>66.66%</div></vui-col>
        <vui-col v-bind:span="8"><div>33.33%</div></vui-col>
      </vui-row>
    </div>
    <p>在多数业务情况下，Vui Design 需要在设计区域内解决大量信息收纳的问题，因此在 <code>12</code> 栅格系统的基础上，将整个设计建议区域按照 <code>24</code> 等分的原则进行划分。</p>
    <p>划分之后的信息区块称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。</p>
    <h2 id="guide-grid-overview">概述</h2>
    <p>布局的栅格化系统，是基于行 <code>row</code> 和列 <code>col</code> 来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
    <ul>
      <li>通过 <code>row</code> 在水平方向建立一组 <code>column</code>（简写 <code>col</code>）</li>
      <li>你的内容应当放置于 <code>col</code> 内，并且只有 <code>col</code> 可以作为 <code>row</code> 的直接元素</li>
      <li>栅格系统中的列是指 <code>1</code> 到 <code>24</code> 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <code>.col-8</code> 来创建</li>
      <li>如果一个 <code>row</code> 中的 <code>col</code> 总和超过 <code>24</code>，那么多余的 <code>col</code> 会作为一个整体另起一行排列</li>
    </ul>
    <h2 id="guide-grid-flex">Flex 布局</h2>
    <p>Vui Design 的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 <code>order</code> 来定义元素的排列顺序。</p>
    <p>布局是基于 <code>24</code> 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。</p>
    <h2 id="guide-grid-when-to-use">何时使用</h2>
    <p>栅格通常用于内容区域的布局设计。</p>
  </div>
</template>

<style>
  .example-grid { margin-bottom:1em; }
  .example-grid .vui-row { background-image:linear-gradient(90deg, transparent 4.16666667%, #f5f5f5 4.16666667%, #f5f5f5 8.33333333%, transparent 8.33333333%, transparent 12.5%, #f5f5f5 12.5%, #f5f5f5 16.66666667%, transparent 16.66666667%, transparent 20.83333333%, #f5f5f5 20.83333333%, #f5f5f5 25%, transparent 25%, transparent 29.16666667%, #f5f5f5 29.16666667%, #f5f5f5 33.33333333%, transparent 33.33333333%, transparent 37.5%, #f5f5f5 37.5%, #f5f5f5 41.66666667%, transparent 41.66666667%, transparent 45.83333333%, #f5f5f5 45.83333333%, #f5f5f5 50%, transparent 50%, transparent 54.16666667%, #f5f5f5 54.16666667%, #f5f5f5 58.33333333%, transparent 58.33333333%, transparent 62.5%, #f5f5f5 62.5%, #f5f5f5 66.66666667%, transparent 66.66666667%, transparent 70.83333333%, #f5f5f5 70.83333333%, #f5f5f5 75%, transparent 75%, transparent 79.16666667%, #f5f5f5 79.16666667%, #f5f5f5 83.33333333%, transparent 83.33333333%, transparent 87.5%, #f5f5f5 87.5%, #f5f5f5 91.66666667%, transparent 91.66666667%, transparent 95.83333333%, #f5f5f5 95.83333333%); }
  .example-grid .vui-row + .vui-row { margin-top:16px; }
  .example-grid .vui-row .vui-col div { height:64px; overflow:hidden; text-align:center; line-height:64px; }
  .example-grid .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); color:#fff; }
  .example-grid .vui-row .vui-col:nth-child(even) div { background-color:rgba(255,255,255,0.3); color:#8c8c8c; }
</style>