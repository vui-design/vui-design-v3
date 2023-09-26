<template>
  <div>
    <h2 id="api-upload-props">Upload 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th width="200">类型</th>
          <th width="210">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>showSelection</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示文件选择按钮，可用于在上传一定数量的文件后隐藏选择按钮</td>
        </tr>
        <tr>
          <td>defaultFileList</td>
          <td>UploadFile[]</td>
          <td>[]</td>
          <td>N</td>
          <td>默认文件列表</td>
        </tr>
        <tr>
          <td>fileList</td>
          <td>UploadFile[]</td>
          <td>--</td>
          <td>N</td>
          <td>当前文件列表</td>
        </tr>
        <tr>
          <td>showFileList</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否显示文件列表</td>
        </tr>
        <tr>
          <td>listType</td>
          <td>String</td>
          <td>text</td>
          <td>N</td>
          <td>文件列表展示类型，可选值为 <code>text</code>、<code>picture</code>、<code>picture-card</code> 或者不设</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>Slot</td>
          <td>--</td>
          <td>N</td>
          <td>额外内容，位于选择按钮右侧，可用于设置描述信息或手动上传按钮</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否支持多文件上传</td>
        </tr>
        <tr>
          <td>draggable</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否支持拖拽上传</td>
        </tr>
        <tr>
          <td>directory</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否支持文件夹上传</td>
        </tr>
        <tr>
          <td>accept</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>允许上传的文件类型，详见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/file#accept" target="_blank">HTML标准</a></td>
        </tr>
        <tr>
          <td>request</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>覆盖默认的上传行为，可自定义上传实现</td>
        </tr>
        <tr>
          <td>action</td>
          <td>String</td>
          <td>--</td>
          <td>Y</td>
          <td>设置上传请求的地址</td>
        </tr>
        <tr>
          <td>headers</td>
          <td>Object</td>
          <td>--</td>
          <td>N</td>
          <td>设置上传请求的头部信息</td>
        </tr>
        <tr>
          <td>withCredentials</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>上传请求是否携带 <code>cookie</code> 信息</td>
        </tr>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>file</td>
          <td>N</td>
          <td>设置上传请求的文件参数名称</td>
        </tr>
        <tr>
          <td>data</td>
          <td>Object | Function</td>
          <td>--</td>
          <td>N</td>
          <td>设置上传请求的额外参数或返回额外参数的函数</td>
        </tr>
        <tr>
          <td>autoUpload</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>是否启用自动上传，即选取文件后立即进行上传</td>
        </tr>
        <tr>
          <td>beforeUpload</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>上传文件之前的钩子函数，参数为待上传的原始文件对象；若返回 <code>false</code> 则停止上传；支持返回一个 <code>Promise</code> 对象，<code>Promise</code> 对象 <code>resolve</code> 时开始上传（<code>resolve</code> 传入 <code>File</code> 或 <code>Blob</code> 对象则上传 <code>resolve</code> 传入对象），<code>reject</code> 时则停止上传</td>
        </tr>
        <tr>
          <td>beforeRemove</td>
          <td>Function</td>
          <td>--</td>
          <td>N</td>
          <td>删除文件之前的钩子函数，接收 <code>file</code>、<code>fileList</code> 作为参数；若返回 <code>false</code> 则禁止删除；支持返回一个 <code>Promise</code> 对象，<code>Promise</code> 对象 <code>resolve</code> 时允许删除，<code>reject</code> 时则禁止删除</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否禁用</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>文件状态发生变化时是否触发父级表单验证</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-upload-events">Upload 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="180">事件名</th>
          <th width="200">类型</th>
          <th width="210">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:fileList</td>
          <td>Function</td>
          <td>
            <div>fileList: UploadFile[]</div>
          </td>
          <td>文件状态发生变化时触发的事件回调函数，选择文件、上传中/成功/失败、删除文件时均会调用，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Function</td>
          <td>
            <div>fileList: UploadFile[]</div>
            <div>file: UploadFile</div>
          </td>
          <td>文件状态发生变化时触发的事件回调函数，选择文件、上传中/成功/失败、删除文件时均会调用</td>
        </tr>
        <tr>
          <td>select</td>
          <td>Function</td>
          <td>
            <div>fileList: UploadFile[]</div>
            <div>file: UploadFile</div>
          </td>
          <td>选择文件时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>progress</td>
          <td>Function</td>
          <td>
            <div>fileList: UploadFile[]</div>
            <div>file: UploadFile</div>
          </td>
          <td>文件上传时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>success</td>
          <td>Function</td>
          <td>
            <div>fileList: UploadFile[]</div>
            <div>file: UploadFile</div>
          </td>
          <td>文件上传成功时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>error</td>
          <td>Function</td>
          <td>
            <div>fileList: UploadFile[]</div>
            <div>file: UploadFile</div>
          </td>
          <td>文件上传失败时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>preview</td>
          <td>Function</td>
          <td>
            <div>file: UploadFile</div>
          </td>
          <td>点击预览按钮时触发的事件回调函数</td>
        </tr>
        <tr>
          <td>remove</td>
          <td>Function</td>
          <td>
            <div>fileList: UploadFile[]</div>
            <div>file: UploadFile</div>
          </td>
          <td>点击删除按钮时触发的事件回调函数</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-upload-methods">Upload 方法</h2>
    <table class="api-methods">
      <thead>
        <tr>
          <th width="180">方法名</th>
          <th width="200">类型</th>
          <th width="210">参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>upload</td>
          <td>Function</td>
          <td>
            <div>file?: UploadFile</div>
          </td>
          <td>手动触发上传，未设置参数时将上传所有待上传的文件</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>Function</td>
          <td>
            <div>file?: UploadFile</div>
          </td>
          <td>取消上传，未设置参数时将取消所有上传中的文件</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-upload-file-props">UploadFile 属性</h2>
    <p>组件返回的文件对象，非 <code>File</code> 原生对象（其继承自 <code>File</code>，附带了额外的属性用于渲染）。</p>
    <table class="api-props">
      <thead>
        <tr>
          <th width="180">属性</th>
          <th width="200">类型</th>
          <th width="210">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>String | Number</td>
          <td>--</td>
          <td>N</td>
          <td>唯一标识符，未设置时将自动生成</td>
        </tr>
        <tr>
          <td>name</td>
          <td>String</td>
          <td>--</td>
          <td>Y</td>
          <td>文件名称</td>
        </tr>
        <tr>
          <td>url</td>
          <td>String</td>
          <td>--</td>
          <td>Y</td>
          <td>文件链接地址</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>文件类型</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>文件大小</td>
        </tr>
        <tr>
          <td>lastModified</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>文件最近一次修改时间</td>
        </tr>
        <tr>
          <td>webkitRelativePath</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>文件磁盘路径</td>
        </tr>
        <tr>
          <td>status</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>文件状态，未设置时将自动设为 <code>success</code> 状态</td>
        </tr>
        <tr>
          <td>percentage</td>
          <td>Number</td>
          <td>--</td>
          <td>N</td>
          <td>文件上传进度，未设置时将在 <code>ready</code> 状态下设为 <code>0%</code>，其它状态下为 <code>100%</code></td>
        </tr>
        <tr>
          <td>progress</td>
          <td>ProgressEvent</td>
          <td>--</td>
          <td>N</td>
          <td>文件上传进度信息</td>
        </tr>
        <tr>
          <td>response</td>
          <td>any</td>
          <td>--</td>
          <td>N</td>
          <td>文件上传成功的响应信息</td>
        </tr>
        <tr>
          <td>error</td>
          <td>Error | ProgressEvent</td>
          <td>--</td>
          <td>N</td>
          <td>文件上传失败的错误信息</td>
        </tr>
        <tr>
          <td>rawFile</td>
          <td>File</td>
          <td>--</td>
          <td>N</td>
          <td>原始文件对象</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>