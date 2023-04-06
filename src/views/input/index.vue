<template>
  <vui-article>
    <h1>Input 输入框</h1>
    <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
    <h2>何时使用</h2>
    <ul>
      <li>需要用户输入表单域内容时；</li>
      <li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
    </ul>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-password />
        <vui-example-prepend-append />
        <vui-example-prefix-suffix />
        <vui-example-size />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-bordered />
        <vui-example-clearable />
        <vui-example-disabled />
        <vui-example-tooltip />
        <vui-example-group />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Input 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>输入框类型，同原生 <code>input</code> 标签的 <code>type</code> 属性</td>
          <td>String</td>
          <td>text</td>
        </tr>
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
          <td>输入框占位文本</td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>maxLength</td>
          <td>最大输入长度</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>prepend</td>
          <td>前置标签</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>append</td>
          <td>后置标签</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>前缀图标类型/图标</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>后缀图标类型/图标</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>size</td>
          <td>输入框尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>bordered</td>
          <td>是否含有边框</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>是否自动获得焦点</td>
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
          <td>设置输入框为只读状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>设置输入框为禁用状态</td>
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
    <h3>Input 事件</h3>
    <table class="example-api-events">
      <thead>
        <tr>
          <th width="140">事件名</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:value</td>
          <td>输入框内容变化时触发的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
          <td>Function</td>
          <td>value</td>
        </tr>
        <tr>
          <td>change</td>
          <td>输入框内容变化时触发的事件回调函数</td>
          <td>Function</td>
          <td>value</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>输入框获取焦点时触发的事件回调函数</td>
          <td>Function</td>
          <td>event</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>输入框失去焦点时触发的事件回调函数</td>
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
          <td>event</td>
        </tr>
      </tbody>
    </table>
    <h3>InputGroup 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>compact</td>
          <td>是否使用紧凑模式</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>输入框组合尺寸，可选值为 <code>small</code>、<code>medium</code>、<code>large</code> 或者不设</td>
          <td>String</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>设置输入框组合为禁用状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePassword from "./examples/password/index.vue";
  import VuiExamplePrependAppend from "./examples/prepend-append/index.vue";
  import VuiExamplePrefixSuffix from "./examples/prefix-suffix/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleClearable from "./examples/clearable/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleTooltip from "./examples/tooltip/index.vue";
  import VuiExampleGroup from "./examples/group/index.vue";
</script>