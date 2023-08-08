<template>
  <div>
    <h2 id="api-avatar-props">Avatar 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>shape</td>
          <td>String</td>
          <td>circle</td>
          <td>N</td>
          <td>头像形状，可选值为 <code>circle</code>、<code>square</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String | Number | Object</td>
          <td>medium</td>
          <td>N</td>
          <td>头像尺寸，预设值为 <code>small</code>、<code>medium</code>、<code>large</code>，可以设置为具体的数值，也可以写成支持响应式的对象 <code>{ xs: "small", sm: "medium", md: "large", lg: 64 }</code></td>
        </tr>
        <tr>
          <td>src</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>图片类头像的资源地址</td>
        </tr>
        <tr>
          <td>srcset</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>图片类头像的响应式资源地址</td>
        </tr>
        <tr>
          <td>alt</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>图片类头像无法显示时的替代文本</td>
        </tr>
        <tr>
          <td>crossOrigin</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td><code>CORS</code> 属性设置，可选值为 <code>anonymous</code>、<code>use-credentials</code> 或者不设</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>头像的图标类型/图标</td>
        </tr>
        <tr>
          <td>gap</td>
          <td>Number</td>
          <td>4</td>
          <td>N</td>
          <td>字符类型距离左右两侧边界的像素距离</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-avatar-events">Avatar 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="190">事件名</th>
          <th width="220">类型</th>
          <th width="140">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>error</td>
          <td>Function</td>
          <td>event</td>
          <td>图片类头像加载失败的事件回调</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-avatar-group-props">AvatarGroup 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="190">属性</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>shape</td>
          <td>String</td>
          <td>circle</td>
          <td>N</td>
          <td>头像形状，可选值为 <code>circle</code>、<code>square</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String | Number | Object</td>
          <td>medium</td>
          <td>N</td>
          <td>头像尺寸，预设值为 <code>small</code>、<code>medium</code>、<code>large</code>，可以设置为具体的数值，也可以写成支持响应式的对象 <code>{ xs: "small", sm: "medium", md: "large", lg: 64 }</code></td>
        </tr>
        <tr>
          <td>maxCount</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>显示的最大头像个数</td>
        </tr>
        <tr>
          <td>maxTooltipColor</td>
          <td>String</td>
          <td>light</td>
          <td>N</td>
          <td>多余头像的气泡颜色，可选值为 <code>light</code>、<code>dark</code> 或者不设</td>
        </tr>
        <tr>
          <td>maxTooltipTrigger</td>
          <td>String</td>
          <td>hover</td>
          <td>N</td>
          <td>多余头像的气泡触发方式，可选值为 <code>hover</code>、<code>focus</code>、<code>click</code>、<code>contextmenu</code> 或者不设</td>
        </tr>
        <tr>
          <td>maxTooltipPlacement</td>
          <td>String</td>
          <td>top</td>
          <td>N</td>
          <td>多余头像的气泡弹出位置，可选值为 可选值为 <code>top</code>、<code>top-left</code>、<code>top-right</code>、<code>bottom</code>、<code>bottom-left</code>、<code>bottom-right</code>、<code>left</code>、<code>left-top</code>、<code>left-bottom</code>、<code>right</code>、<code>right-top</code>、<code>right-bottom</code>或者不设</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>