<template>
  <div>
    <h2 id="api-badge-props">Badge 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="180">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>count</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>徽标数值</td>
        </tr>
        <tr>
          <td>overflowCount</td>
          <td>Number</td>
          <td>99</td>
          <td>N</td>
          <td>最大显示数值，当 <code>count</code> 大于 <code>overflowCount</code> 限定的值时会显示为 <code>overflowCount+</code></td>
        </tr>
        <tr>
          <td>text</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>徽标文本</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>不显示具体的数值或文本</td>
        </tr>
        <tr>
          <td>status</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>设置徽标为状态点，可选值为 <code>default</code>、<code>processing</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>自定义状态点的颜色，预设颜色详见示例〔多彩徽标〕</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>Array</td>
          <td>--</td>
          <td>N</td>
          <td>设置徽标的位置偏移，格式为 <code>[top, left]</code>，表示徽标距默认位置上方及左侧的偏移量</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>设置鼠标放在徽标上时显示的文字</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>