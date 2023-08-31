<template>
  <div>
    <h2 id="api-fullscreen-props">Fullscreen 属性</h2>
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
          <td>defaultEnabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>默认是否全屏（非受控模式）</td>
        </tr>
        <tr>
          <td>enabled</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>当前是否全屏（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-fullscreen-events">Fullscreen 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th width="160">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:enabled</td>
          <td>Function</td>
          <td>enabled</td>
          <td>全屏状态发生变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>enabled</td>
          <td>全屏状态发生变化时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>