<template>
  <vui-article>
    <h1>Result 结果</h1>
    <p>用于反馈一系列操作任务的处理结果。</p>
    <h2>何时使用</h2>
    <p>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</p>
    <h2>代码演示</h2>
    <vui-example-info />
    <vui-example-warning />
    <vui-example-success />
    <vui-example-error />
    <vui-example-comingsoon />
    <vui-example-403 />
    <vui-example-404 />
    <vui-example-500 />
    <vui-example-custom-icon />
    <h2 id="example-api">API</h2>
    <h3>Result 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="140">属性</th>
          <th>说明</th>
          <th width="160">类型</th>
          <th width="140">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>status</td>
          <td>结果状态，决定图标和颜色，可选值为 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>、<code>comingsoon</code>、<code>403</code>、<code>404</code>、<code>500</code> 或者不设</td>
          <td>String</td>
          <td>info</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>自定义图标类型/图标</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>title</td>
          <td>标题</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>description</td>
          <td>描述信息</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
        <tr>
          <td>extra</td>
          <td>附加内容，一般用于放置操作按钮</td>
          <td>String | Slot</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleInfo from "./examples/info/index.vue";
  import VuiExampleWarning from "./examples/warning/index.vue";
  import VuiExampleSuccess from "./examples/success/index.vue";
  import VuiExampleError from "./examples/error/index.vue";
  import VuiExampleComingsoon from "./examples/comingsoon/index.vue";
  import VuiExample403 from "./examples/403/index.vue";
  import VuiExample404 from "./examples/404/index.vue";
  import VuiExample500 from "./examples/500/index.vue";
  import VuiExampleCustomIcon from "./examples/custom-icon/index.vue";
</script>