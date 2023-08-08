<template>
  <div>
    <h2 id="api-card-props">Card 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="200">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>icon</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>卡片图标类型/图标，位于标题左侧</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>卡片标题</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>卡片右上角的操作区域</td>
        </tr>
        <tr>
          <td>cover</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>卡片封面地址/封面，位于标题栏下方</td>
        </tr>
        <tr>
          <td>actions</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>卡片操作组，位于底部</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>卡片底部内容</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否具有边框</td>
        </tr>
        <tr>
          <td>shadow</td>
          <td>String</td>
          <td>never</td>
          <td>N</td>
          <td>卡片阴影，可选值为 <code>never</code>、<code>hover</code>、<code>always</code> 或者不设</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>当卡片内容还在加载中时，可以用 <code>loading</code> 展示一个占位</td>
        </tr>
        <tr>
          <td>headerStyle</td>
          <td>String | Object</td>
          <td>--</td>
          <td>N</td>
          <td>自定义头部区域样式</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>String | Object</td>
          <td>--</td>
          <td>N</td>
          <td>自定义内容区域样式</td>
        </tr>
        <tr>
          <td>footerStyle</td>
          <td>String | Object</td>
          <td>--</td>
          <td>N</td>
          <td>自定义底部区域样式</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-card-meta-props">CardMeta 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th width="200">类型</th>
          <th width="140">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>avatar</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>头像地址/头像</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标题</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>描述内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>