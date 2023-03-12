<template>
  <vui-article>
    <h1>Badge 徽标</h1>
    <p>图标右上角的圆形徽标。</p>
    <h2>何时使用</h2>
    <p>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>
    <h2>代码演示</h2>
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-example-basic-usage />
        <vui-example-overflow-count />
        <vui-example-text />
        <vui-example-dot />
        <vui-example-alone />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-example-offset />
        <vui-example-status />
        <vui-example-colorful />
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Badge 属性</h3>
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
          <td>count</td>
          <td>徽标数值</td>
          <td>Number</td>
          <td>--</td>
        </tr>
        <tr>
          <td>overflowCount</td>
          <td>最大显示数值，当 <code>count</code> 大于 <code>overflowCount</code> 限定的值时会显示为 <code>overflowCount+</code></td>
          <td>Number</td>
          <td>99</td>
        </tr>
        <tr>
          <td>text</td>
          <td>徽标文本</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>不显示具体的数值或文本</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>status</td>
          <td>设置徽标为状态点，可选值为 <code>default</code>、<code>processing</code>、<code>warning</code>、<code>success</code>、<code>error</code> 或者不设</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>color</td>
          <td>自定义状态点的颜色，预设颜色详见示例〔多彩徽标〕</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>设置徽标的位置偏移，格式为 <code>[top, left]</code>，表示徽标距默认位置上方及左侧的偏移量</td>
          <td>Array</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>设置鼠标放在徽标上时显示的文字</td>
          <td>String</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleOverflowCount from "./examples/overflow-count/index.vue";
  import VuiExampleText from "./examples/text/index.vue";
  import VuiExampleDot from "./examples/dot/index.vue";
  import VuiExampleAlone from "./examples/alone/index.vue";
  import VuiExampleOffset from "./examples/offset/index.vue";
  import VuiExampleStatus from "./examples/status/index.vue";
  import VuiExampleColorful from "./examples/colorful/index.vue";
</script>