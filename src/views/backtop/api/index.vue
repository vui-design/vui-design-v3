<template>
  <div>
    <h2 id="api-backtop-props">Backtop 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="200">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>threshold</td>
          <td>Number</td>
          <td>400</td>
          <td>N</td>
          <td>滚动高度达到此阈值才出现 <code>Backtop</code> 按钮</td>
        </tr>
        <tr>
          <td>right</td>
          <td>String | Number</td>
          <td>40</td>
          <td>N</td>
          <td><code>Backtop</code> 按钮距离页面右侧距离</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>String | Number</td>
          <td>40</td>
          <td>N</td>
          <td><code>Backtop</code> 按钮距离页面底部距离</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>Number</td>
          <td>500</td>
          <td>N</td>
          <td>回到顶部滚动动画持续时间，单位毫秒</td>
        </tr>
        <tr>
          <td>getScrollContainer</td>
          <td>Function</td>
          <td>() => window</td>
          <td>N</td>
          <td>指定滚动容器</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-backtop-events">Backtop 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th width="200">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>Function</td>
          <td>event</td>
          <td>点击按钮时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>