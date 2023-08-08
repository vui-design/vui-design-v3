<template>
  <div>
    <h2 id="api-qrcode-props">Qrcode 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="140">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>String</td>
          <td>--</td>
          <td>Y</td>
          <td>要编码的字符串</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Number</td>
          <td>160</td>
          <td>N</td>
          <td>二维码的宽高尺寸，单位为 <code>px</code>，只允许生成正方形二维码</td>
        </tr>
        <tr>
          <td>image</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>二维码中图片的地址（目前只支持图片地址）</td>
        </tr>
        <tr>
          <td>imageSize</td>
          <td>Number</td>
          <td>40</td>
          <td>N</td>
          <td>二维码中图片的尺寸，单位为 <code>px</code></td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否含有边框</td>
        </tr>
        <tr>
          <td>status</td>
          <td>String</td>
          <td>active</td>
          <td>N</td>
          <td>二维码状态，可选值为 <code>active</code>、<code>loading</code>、<code>expired</code> 或者不设</td>
        </tr>
        <tr>
          <td>correctLevel</td>
          <td>Number</td>
          <td>3</td>
          <td>N</td>
          <td>纠错级别，可选值为 <code>0</code>、<code>1</code>、<code>2</code>、<code>3</code>，数字越大说明所需纠错级别越大</td>
        </tr>
        <tr>
          <td>background</td>
          <td>String</td>
          <td>#ffffff</td>
          <td>N</td>
          <td>二维码背景色</td>
        </tr>
        <tr>
          <td>foreground</td>
          <td>String</td>
          <td>#000000</td>
          <td>N</td>
          <td>二维码前景色</td>
        </tr>
        <tr>
          <td>pdground</td>
          <td>String</td>
          <td>#000000</td>
          <td>N</td>
          <td>二维码三个角的颜色</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-qrcode-events">Qrcode 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th width="140">类型</th>
          <th width="160">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>refresh</td>
          <td>Function</td>
          <td>--</td>
          <td>点击刷新按钮时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-qrcode-methods">Qrcode 方法</h2>
    <table class="api-methods">
      <thead>
        <tr>
          <th width="140">方法名</th>
          <th width="140">参数</th>
          <th width="160">参数说明</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>download</td>
          <td>filename</td>
          <td>自定义下载文件名</td>
          <td>下载二维码</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>