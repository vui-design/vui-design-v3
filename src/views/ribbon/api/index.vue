<template>
  <div>
    <h2 id="api-ribbon-props">Ribbon 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="140">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>primary</td>
          <td>N</td>
          <td>缎带类型，可选值为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
        </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>自定义缎带的颜色，会覆盖 <code>type</code> 类型下的默认颜色。预设颜色详见示例〔多彩缎带〕</td>
        </tr>
        <tr>
          <td>text</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>缎带文本</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>String</td>
          <td>right</td>
          <td>N</td>
          <td>缎带位置，可选值为 <code>left</code>、<code>right</code> 或者不设</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>