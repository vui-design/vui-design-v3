<template>
  <div>
    <h2 id="api-timeline-props">Timeline 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="160">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>mode</td>
          <td>String</td>
          <td>left</td>
          <td>N</td>
          <td>设置时间轴点和主体内容的相对位置，可选值为 <code>left</code>、<code>alternate</code>、<code>right</code> 或者不设</td>
        </tr>
        <tr>
          <td>reverse</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>节点倒序排列</td>
        </tr>
        <tr>
          <td>pending</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>指定最后一个节点是否为幽灵节点</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-timeline-item-props">TimelineItem 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="160">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>blue</td>
          <td>N</td>
          <td>指定轴点颜色，预设 <code>gray</code>、<code>blue</code>、<code>yellow</code>、<code>green</code> 和 <code>red</code> 五种颜色，支持自定义颜色值</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义时间轴点</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>