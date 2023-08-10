<template>
  <div>
    <h2 id="api-skeleton-props">Skeleton 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="280">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>为 <code>true</code> 时，显示占位图，反之则直接展示子组件</td>
        </tr>
        <tr>
          <td>animated</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否展示动画效果</td>
        </tr>
        <tr>
          <td>avatar</td>
          <td>Boolean | SkeletonAvatarProps</td>
          <td>false</td>
          <td>N</td>
          <td>是否显示头像占位图</td>
        </tr>
        <tr>
          <td>title</td>
          <td>Boolean | SkeletonTitleProps</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示标题占位图</td>
        </tr>
        <tr>
          <td>paragraph</td>
          <td>Boolean | SkeletonParagraphProps</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示段落占位图</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-skeleton-avatar-props">SkeletonAvatarProps 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="280">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>animated</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否展示动画效果</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>String</td>
          <td>circle</td>
          <td>N</td>
          <td>头像占位图的形状，可选值为 <code>circle</code>、<code>square</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String | Number</td>
          <td>medium</td>
          <td>N</td>
          <td>头像占位图的尺寸，预设值为 <code>small</code>、<code>medium</code>、<code>large</code>，可以设置为具体的数值</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-skeleton-title-props">SkeletonTitleProps 属性</h2>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="280">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>animated</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否展示动画效果</td>
        </tr>
        <tr>
          <td>width</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>标题占位图的宽度</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-skeleton-paragraph-props">SkeletonParagraphProps 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="280">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>animated</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否展示动画效果</td>
        </tr>
        <tr>
          <td>rows</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>段落占位图的行数</td>
        </tr>
        <tr>
          <td>width</td>
          <td>String | Number | Array</td>
          <td>--</td>
          <td>N</td>
          <td>段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-skeleton-input-props">SkeletonInputProps 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="280">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>animated</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否展示动画效果</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>使输入框占位图的宽度撑满父元素</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>输入框占位图的尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-skeleton-button-props">SkeletonButtonProps 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="280">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>animated</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否展示动画效果</td>
        </tr>
        <tr>
          <td>block</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>使按钮占位图的宽度撑满父元素</td>
        </tr>
        <tr>
          <td>shape</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>按钮占位图的形状，可选值为 <code>round</code>、<code>circle</code> 或者不设</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>medium</td>
          <td>N</td>
          <td>按钮占位图的尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-skeleton-image-props">SkeletonImageProps 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="280">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>animated</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否展示动画效果</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>