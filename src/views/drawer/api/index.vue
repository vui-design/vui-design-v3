<template>
  <div>
    <h2 id="api-drawer-props">Drawer 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="200">属性</th>
          <th width="345">类型</th>
          <th width="100">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultVisible</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>抽屉默认是否可见（非受控模式）</td>
        </tr>
        <tr>
          <td>visible</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>抽屉是否可见（受控模式），可以使用 <code>v-model</code> 双向绑定</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String | RenderFunction | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>标题左侧的图标类型/图标</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String | RenderFunction | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>抽屉标题</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>Boolean | String | RenderFunction | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>抽屉底部内容；当不需要底部按钮时，可以设为 <code>false</code></td>
        </tr>
        <tr>
          <td>showCancelButton</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示取消按钮</td>
        </tr>
        <tr>
          <td>cancelButtonProps</td>
          <td>ButtonProps</td>
          <td>--</td>
          <td>N</td>
          <td>自定义取消按钮的属性</td>
        </tr>
        <tr>
          <td>cancelText</td>
          <td>String</td>
          <td>取消</td>
          <td>N</td>
          <td>取消按钮文字</td>
        </tr>
        <tr>
          <td>showOkButton</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示确定按钮</td>
        </tr>
        <tr>
          <td>okButtonProps</td>
          <td>ButtonProps</td>
          <td>--</td>
          <td>N</td>
          <td>自定义确定按钮的属性</td>
        </tr>
        <tr>
          <td>okText</td>
          <td>String</td>
          <td>确定</td>
          <td>N</td>
          <td>确定按钮文字</td>
        </tr>
        <tr>
          <td>autofocusButton</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>指定自动获得焦点的按钮，可选值为 <code>cancel</code>、<code>ok</code> 或者不设</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>String</td>
          <td>right</td>
          <td>N</td>
          <td>抽屉打开位置，可选值为 <code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code> 或者不设</td>
        </tr>
        <tr>
          <td>closable</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示右上角的关闭按钮</td>
        </tr>
        <tr>
          <td>closeText</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>关闭按钮文字</td>
        </tr>
        <tr>
          <td>width</td>
          <td>String | Number</td>
          <td>480</td>
          <td>N</td>
          <td>抽屉宽度，在 <code>placement</code> 为 <code>left</code> 或 <code>right</code> 时使用</td>
        </tr>
        <tr>
          <td>height</td>
          <td>String | Number</td>
          <td>480</td>
          <td>N</td>
          <td>抽屉高度，在 <code>placement</code> 为 <code>top</code> 或 <code>bottom</code> 时使用</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>Number</td>
          <td>160</td>
          <td>N</td>
          <td>子抽屉打开时，父级抽屉的位置偏移量</td>
        </tr>
        <tr>
          <td>backdrop</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示背景遮罩</td>
        </tr>
        <tr>
          <td>clickBackdropToClose</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>点击背景遮罩是否关闭抽屉</td>
        </tr>
        <tr>
          <td>escToClose</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>按下 ESC 键关闭对话框</td>
        </tr>
        <tr>
          <td>destroyOnClose</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>关闭时销毁抽屉内容（抽屉里的子元素）</td>
        </tr>
        <tr>
          <td>getPopupContainer</td>
          <td>String | HTMLElement</td>
          <td>body</td>
          <td>N</td>
          <td>指定抽屉挂载的 HTML 节点</td>
        </tr>
        <tr>
          <td>class</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>自定义抽屉样式类名</td>
        </tr>
        <tr>
          <td>style</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义抽屉样式</td>
        </tr>
        <tr>
          <td>headerStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义抽屉头部样式</td>
        </tr>
        <tr>
          <td>bodyStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义抽屉内容部分样式</td>
        </tr>
        <tr>
          <td>footerStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义抽屉底部样式</td>
        </tr>
        <tr>
          <td>backdropClassName</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>自定义背景遮罩样式类名</td>
        </tr>
        <tr>
          <td>backdropStyle</td>
          <td>CSSProperties</td>
          <td>--</td>
          <td>N</td>
          <td>自定义背景遮罩样式</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-drawer-events">Drawer 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="200">事件名</th>
          <th width="345">类型</th>
          <th width="100">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:visible</td>
          <td>Function</td>
          <td>visible</td>
          <td>可见状态发生变化时触发的事件回调，可以使用 <code>v-model</code> 双向绑定</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>visible</td>
          <td>可见状态发生变化时触发的事件回调</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>Function</td>
          <td>--</td>
          <td>点击取消按钮（或右上角关闭按钮、背景遮罩）的事件回调</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>Function</td>
          <td>--</td>
          <td>点击确定按钮的事件回调</td>
        </tr>
        <tr>
          <td>beforeOpen</td>
          <td>Function</td>
          <td>--</td>
          <td>抽屉打开前触发的事件回调</td>
        </tr>
        <tr>
          <td>open</td>
          <td>Function</td>
          <td>--</td>
          <td>抽屉打开时触发的事件回调</td>
        </tr>
        <tr>
          <td>afterOpen</td>
          <td>Function</td>
          <td>--</td>
          <td>抽屉打开后（打开动画完成后）触发的事件回调</td>
        </tr>
        <tr>
          <td>beforeClose</td>
          <td>Function</td>
          <td>--</td>
          <td>抽屉关闭前触发的事件回调</td>
        </tr>
        <tr>
          <td>close</td>
          <td>Function</td>
          <td>--</td>
          <td>抽屉关闭时触发的事件回调</td>
        </tr>
        <tr>
          <td>afterClose</td>
          <td>Function</td>
          <td>--</td>
          <td>抽屉关闭后（关闭动画完成后）触发的事件回调</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>