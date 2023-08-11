<template>
  <div>
    <h2 id="api-watermark-props">Watermark 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="180">类型</th>
          <th width="200">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>width</td>
          <td>Number</td>
          <td>120</td>
          <td>N</td>
          <td>水印的宽度，<code>content</code> 的默认值为自身的宽度</td>
        </tr>
        <tr>
          <td>height</td>
          <td>Number</td>
          <td>64</td>
          <td>N</td>
          <td>水印的高度，<code>content</code> 的默认值为自身的宽度</td>
        </tr>
        <tr>
          <td>content</td>
          <td>String | Array</td>
          <td>--</td>
          <td>N</td>
          <td>水印文字内容</td>
        </tr>
        <tr>
          <td>font</td>
          <td>Object</td>
          <td>--</td>
          <td>N</td>
          <td>水印文字样式，默认值见下文 <code>Font</code> 字体设置</td>
        </tr>
        <tr>
          <td>image</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>水印图片地址，优先级高于 <code>content</code>；为保证图片高清且不被拉伸，建议设置 <code>width</code> 和 <code>height</code>，并上传至少两倍于宽高的图片。</td>
        </tr>
        <tr>
          <td>rotate</td>
          <td>Number</td>
          <td>-20</td>
          <td>N</td>
          <td>水印绘制时，旋转的角度</td>
        </tr>
        <tr>
          <td>gap</td>
          <td>Array</td>
          <td>[100, 100]	</td>
          <td>N</td>
          <td>水印之间的间距</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>Array</td>
          <td>[gap[0]/2, gap[1]/2]	</td>
          <td>N</td>
          <td>水印距离容器左上角的偏移量，默认为 <code>gap/2</code></td>
        </tr>
        <tr>
          <td>zIndex</td>
          <td>Number</td>
          <td>10</td>
          <td>N</td>
          <td>水印元素的 <code>z-index</code> 层级</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-watermark-font-props">Watermark Font 字体设置</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="180">类型</th>
          <th width="200">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>rgba(0,0,0,0.15)</td>
          <td>N</td>
          <td>字体颜色</td>
        </tr>
        <tr>
          <td>fontSize</td>
          <td>Number</td>
          <td>16</td>
          <td>N</td>
          <td>字体大小</td>
        </tr>
        <tr>
          <td>fontWeight</td>
          <td>String | Number</td>
          <td>normal</td>
          <td>N</td>
          <td>字体粗细，可选值为 <code>normal</code>、<code>light</code>、<code>weight</code> 或自定义</td>
        </tr>
        <tr>
          <td>fontStyle</td>
          <td>String</td>
          <td>normal</td>
          <td>N</td>
          <td>字体样式，可选值为 <code>none</code>、<code>normal</code>、<code>italic</code>、<code>oblique</code> 或者不设</td>
        </tr>
        <tr>
          <td>fontFamily</td>
          <td>String</td>
          <td>sans-serif</td>
          <td>N</td>
          <td>字体类型</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>