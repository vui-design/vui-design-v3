<template>
  <div>
    <h2 id="api-layout-breakpoint">Breakpoint</h2>
    <vui-example-breakpoint />
    <h2 id="api-layout-props">Layout 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="160">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>withSider</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>表示子元素里含有 <code>Sider</code>，一般不用指定；可用于服务端渲染时避免样式闪动</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-layout-header-props">Header 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="160">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>light</td>
          <td>N</td>
          <td>主题颜色，可选值为 <code>light</code>、<code>dark</code>，支持自定义颜色值</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-layout-sider-props">Sider 属性</h2>
    <table class="api-props">
      <thead>
        <tr>
          <th width="160">属性</th>
          <th width="160">类型</th>
          <th width="160">默认值</th>
          <th width="80">必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>light</td>
          <td>N</td>
          <td>主题颜色，可选值为 <code>light</code>、<code>dark</code>，支持自定义颜色值</td>
        </tr>
        <tr>
          <td>width</td>
          <td>String | Number</td>
          <td>200</td>
          <td>N</td>
          <td>宽度</td>
        </tr>
        <tr>
          <td>breakpoint</td>
          <td>String</td>
          <td>--</td>
          <td>N</td>
          <td>触发响应式布局的断点，可选值为 <code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code> 或者不设</td>
        </tr>
        <tr>
          <td>collapsible</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否可折叠</td>
        </tr>
        <tr>
          <td>defaultCollapsed</td>
          <td>Boolean</td>
          <td>false</td>
          <td>N</td>
          <td>是否默认折叠</td>
        </tr>
        <tr>
          <td>collapsed</td>
          <td>Boolean</td>
          <td>--</td>
          <td>N</td>
          <td>当前折叠状态，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>collapsedWidth</td>
          <td>String | Number</td>
          <td>80</td>
          <td>N</td>
          <td>折叠宽度</td>
        </tr>
        <tr>
          <td>showTrigger</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>可折叠状态下是否显示折叠触发器</td>
        </tr>
        <tr>
          <td>trigger</td>
          <td>String | Slot</td>
          <td>--</td>
          <td>N</td>
          <td>自定义折叠触发器图标类型/图标</td>
        </tr>
        <tr>
          <td>showScrollbar</td>
          <td>Boolean</td>
          <td>true</td>
          <td>N</td>
          <td>内容超出时是否显示纵向滚动条</td>
        </tr>
      </tbody>
    </table>
    <h2 id="api-layout-sider-events">Sider 事件</h2>
    <table class="api-events">
      <thead>
        <tr>
          <th width="160">事件名</th>
          <th width="160">类型</th>
          <th width="160">回调参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update:collapsed</td>
          <td>Function</td>
          <td>collapsed</td>
          <td>展开/收起时的事件回调函数，可以使用 <code>v-model</code> 双向绑定数据</td>
        </tr>
        <tr>
          <td>collapse</td>
          <td>Function</td>
          <td>collapsed, type</td>
          <td>展开/收起时的事件回调函数，由点击 <code>trigger</code> 以及响应式反馈两种方式触发</td>
        </tr>
        <tr>
          <td>breakpoint</td>
          <td>Function</td>
          <td>broken</td>
          <td>触发响应式布局断点时的事件回调函数</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBreakpoint from "../examples/examples/breakpoint/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBreakpoint
    }
  });
</script>