<template>
  <div>
    <h2 id="api-statistic-props">Statistic 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="210">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标题</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>附加内容，位于标题右侧</td>
        </tr>
        <tr>
          <td>value</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>数值</td>
        </tr>
        <tr>
          <td>precision</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>数值精度</td>
        </tr>
        <tr>
          <td>decimalSeparator</td>
          <td>String</td>
          <td>.</td>
          <td>N</td>
          <td>设置小数点</td>
        </tr>
        <tr>
          <td>groupSeparator</td>
          <td>String</td>
          <td>,</td>
          <td>N</td>
          <td>设置千分位标识符</td>
        </tr>
        <tr>
          <td>formatter</td>
          <td>Function | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义数值展示，如 <code>value => VNode</code></td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>数值前缀，可通过此属性设置前置图标</td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>数值后缀，可通过此属性设置后置单位</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>底部内容</td>
        </tr>
        <tr>
          <td>headerStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义头部样式</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义内容样式</td>
        </tr>
        <tr>
          <td>footerStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义底部样式</td>
        </tr>
        <tr>
          <td>valueStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义数值区域的样式</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-statistic-countdown-props">Countdown 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="210">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标题</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>附加内容，位于标题右侧</td>
        </tr>
        <tr>
          <td>value</td>
          <td>String | Number | Date</td>
          <td>--</td>
          <td>N</td>
          <td>到期时间，可以是日期字符串、时间戳，或日期对象</td>
        </tr>
        <tr>
          <td>formatter</td>
          <td>String | Function</td>
          <td>HH:mm:ss</td>
          <td>N</td>
          <td>自定义显示格式，为函数类型时接收当前时间戳和到期时间戳作为参数</td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>前缀，可通过此属性设置前置图标</td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>后缀，可通过此属性设置后置单位</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>底部内容</td>
        </tr>
        <tr>
          <td>headerStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义头部样式</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义内容样式</td>
        </tr>
        <tr>
          <td>footerStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义底部样式</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-statistic-countdown-events">Countdown 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th width="210">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>finish</td>
          <td>Function</td>
          <td>--</td>
          <td>倒计时结束时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>