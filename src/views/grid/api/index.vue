<template>
  <div>
    <h2 id="api-grid-row-props">Row 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>justify</td>
          <td>String</td>
          <td>start</td>
          <td>N</td>
          <td>水平排列方式，可选值为 <code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code> 或者不设</td>
        </tr>
        <tr>
          <td>align</td>
          <td>String</td>
          <td>top</td>
          <td>N</td>
          <td>垂直对齐方式，可选值为 <code>top</code>、<code>middle</code>、<code>bottom</code> 或者不设</td>
        </tr>
        <tr>
          <td>gutter</td>
          <td>Number | Object | Array</td>
          <td>0</td>
          <td>N</td>
          <td>栅格间隔，可以写成像素值或支持响应式的对象来设置水平间隔 <code>{ xs: 8, sm: 16, md: 24 }</code>；或者使用数组形式同时设置 <code>[水平间距, 垂直间距]</code></td>
        </tr>
        <tr>
          <td>wrap</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否自动换行</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-grid-col-props">Col 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="220">类型</th>
          <th width="120">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>flex</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>Flex 布局填充</td>
        </tr>
        <tr>
          <td>span</td>
          <td>Number</td>
          <td>24</td>
          <td>N</td>
          <td>栅格占位格数，可选值为 <code>0~24</code> 的整数，为 <code>0</code> 时相当于 <code>display: none;</code></td>
        </tr>
        <tr>
          <td>offset</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
        </tr>
        <tr>
          <td>push</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>栅格向右移动格数</td>
        </tr>
        <tr>
          <td>pull</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>栅格向左移动格数</td>
        </tr>
        <tr>
          <td>order</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>栅格顺序</td>
        </tr>
        <tr>
          <td>xs</td>
          <td>Number | Object</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &lt; 576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        </tr>
        <tr>
          <td>sm</td>
          <td>Number | Object</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 576px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        </tr>
        <tr>
          <td>md</td>
          <td>Number | Object</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        </tr>
        <tr>
          <td>lg</td>
          <td>Number | Object</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        </tr>
        <tr>
          <td>xl</td>
          <td>Number | Object</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        </tr>
        <tr>
          <td>xxl</td>
          <td>Number | Object</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 1600px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        </tr>
        <tr>
          <td>xxxl</td>
          <td>Number | Object</td>
          <td>--</td>
          <td>N</td>
          <td><code>屏幕 &ge; 2000px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>