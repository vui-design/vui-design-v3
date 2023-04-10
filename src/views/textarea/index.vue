<template>
  <vui-article>
    <h1>Textarea 文本域</h1>
    <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
    <h2>何时使用</h2>
    <ul>
      <li>需要用户输入表单域内容时；</li>
      <li>需要输入多行文本内容时。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-bordered />
        <vui-example-show-count />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-autosize />
        <vui-example-resizable />
        <vui-example-clearable />
        <vui-example-disabled />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Textarea 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>defaultValue</td>
          <td>默认值（非受控模式）</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>value</td>
          <td>值（受控模式），可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>文本域占位文本</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>是否含有边框</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>showCount</td>
          <td>是否显示输入字数</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>bytes</td>
          <td>自定义字符长度计算方法，如中文占两个字节</td>
          <td>(value: string) => number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>maxLength</td>
          <td>允许输入的最大字符数量</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>rows</td>
          <td>默认可见行数</td>
          <td>Number</td>
          <td>4</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>是否自动获得焦点</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>autosize</td>
          <td>自适应内容高度，可设置为 <code>true</code>、<code>false</code> 或对象 <code>{ minRows: 4, maxRows: 8 }</code></td>
          <td>Boolean | Object</td>
          <td>false</td>
        </tr>
        <tr>
          <td>resizable</td>
          <td>是否允许手动拖曳改变高度</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否允许清空</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>输入框是否为只读状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>输入框是否为禁用状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>validator</td>
          <td>值变化时是否触发父级表单验证</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
    <h3>Textarea 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th>说明</th>
          <th width="220">类型</th>
          <th width="140">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:value</td>
          <td>文本域内容变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Function</td>
          <td>value</td>
        </tr>
        <tr>
          <td>change</td>
          <td>文本域内容变化时触发的事件回调函数</td>
          <td>Function</td>
          <td>value</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>文本域获取焦点时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>文本域失去焦点时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>keydown</td>
          <td>键盘按下时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>keyup</td>
          <td>键盘弹起时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>enter</td>
          <td>按下回车键时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>clear</td>
          <td>点击清空按钮时触发的事件回调函数</td>
          <td>Function</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
    <h3>Textarea 方法</h3>
    <table class="example-api-methods">
      <thead>
        <tr>
          <th width="160">方法名</th>
          <th>说明</th>
          <th width="220">参数</th>
          <th width="140">参数说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>focus</td>
          <td>使文本域获取焦点</td>
          <td>--</td>
          <td>--</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>使文本域失去焦点</td>
          <td>--</td>
          <td>--</td>
        </tr>
        <tr>
          <td>select</td>
          <td>选中文本域内容</td>
          <td>--</td>
          <td>--</td>
        </tr>
        <tr>
          <td>setSelectionRange</td>
          <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement/setSelectionRange" target="_blank">设置文本域当前选中文本的起始和结束位置</a></td>
          <td>start, end, [direction]</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleShowCount from "./examples/show-count/index.vue";
  import VuiExampleAutosize from "./examples/autosize/index.vue";
  import VuiExampleResizable from "./examples/resizable/index.vue";
  import VuiExampleClearable from "./examples/clearable/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
</script>