<template>
  <div>
    <h2 id="guide-layout-design-rules">设计规则</h2>
    <h3>尺寸</h3>
    <p>一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。</p>
    <ul>
      <li>顶部导航（大部分系统）：一级导航高度 <code>64px</code>，二级导航 <code>48px</code>。</li>
      <li>顶部导航（展示类页面）：一级导航高度 <code>80px</code>，二级导航 <code>56px</code>。</li>
      <li>顶部导航高度的范围计算公式为：<code>48 + 8n</code>。</li>
      <li>侧边导航宽度的范围计算公式：<code>200 + 8n</code>。</li>
    </ul>
    <h3>交互</h3>
    <ul>
      <li>一级导航和末级的导航需要在可视化的层面被强调出来；</li>
      <li>当前项应该在呈现上优先级最高；</li>
      <li>当导航收起的时候，当前项的样式自动赋予给它的上一个层级；</li>
      <li>左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。</li>
    </ul>
    <h3>视觉</h3>
    <p>导航样式上需要根据信息层级合理的选择样式：</p>
    <ul>
      <li>大色块强调 — 建议用于底色为深色系时，当前页面父级的导航项。</li>
      <li>高亮火柴棍 — 当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。</li>
      <li>字体高亮变色 — 从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。</li>
      <li>字体放大 — <code>12px</code>、<code>14px</code> 是导航的标准字号，<code>14px</code> 字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。</li>
    </ul>
    <h3>组件概述</h3>
    <ul>
      <li><code>Layout</code> — 布局容器，其下可嵌套 <code>Header</code>、<code>Sider</code>、<code>Content</code>、<code>Footer</code> 或 <code>Layout</code> 本身，可以放在任何父容器中。</li>
      <li><code>Header</code> — 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
      <li><code>Sider</code> — 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
      <li><code>Content</code> — 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
      <li><code>Footer</code> — 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。</li>
    </ul>
    <p>注意：采用 <code>flex</code> 布局实现，请注意<a href="https://caniuse.com/#search=flex" target="_blank">浏览器兼容性</a>问题。</p>
    <h2 id="guide-layout-when-to-use">何时使用</h2>
    <p>布局用于页面区域划分，稳定地呈现相对应的内容。页面布局通常划分为：顶部区域（Header）、侧边区域（Sider）、内容区域（Content）和底部区域（Footer）。</p>
  </div>
</template>