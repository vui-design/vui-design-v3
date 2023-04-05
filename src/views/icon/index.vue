<template>
  <vui-article>
    <h1>Icon 图标</h1>
    <p>语义化的矢量图形。</p>
    <h2>如何使用</h2>
    <p>使用 <code>Icon</code> 组件，指定图标对应的 <code>type</code> 属性即可，示例代码：</p>
    <vui-example-icon />
    <p>渲染后为：</p>
    <vui-example-html />
    <h2>代码演示</h2>
    <vui-example-basic-usage />
    <h2 id="example-icon-list">图标集合</h2>
    <div style="display: flex; margin-bottom: 24px;">
      <vui-radio-group v-model:value="category" type="button" size="large">
        <vui-radio v-bind:value="1">
          <vui-icon type="apps" />
          <span style="margin-left: 8px;">全部</span>
        </vui-radio>
        <vui-radio v-bind:value="2">
          <vui-icon type="search" />
          <span style="margin-left: 8px;">线框风格</span>
        </vui-radio>
        <vui-radio v-bind:value="3">
          <vui-icon type="search-filled" />
          <span style="margin-left: 8px;">实底风格</span>
        </vui-radio>
      </vui-radio-group>
      <vui-input v-model:value="keyword" size="large" style="margin-left: 16px;" placeholder="在此搜索图标，点击图标可复制组件代码" />
    </div>
    <vui-row>
      <vui-col v-for="type in types" v-bind:key="type" v-bind:span="3">
        <div v-if="category === 1 || category === 2" title="点击复制" class="icon" v-on:click="handleCopy(type)">
          <div class="icon-gallery">
            <vui-icon v-bind:type="type" />
          </div>
          <div class="icon-type">{{type}}</div>
        </div>
        <div v-if="category === 1 || category === 3" title="点击复制" class="icon" v-on:click="handleCopy(type + '-filled')">
          <div class="icon-gallery">
            <vui-icon v-bind:type="type + '-filled'" />
          </div>
          <div class="icon-type">{{type}}-filled</div>
        </div>
      </vui-col>
    </vui-row>
    <h2 id="example-api">API</h2>
    <h3>Icon 属性</h3>
    <table class="example-api-props">
      <thead>
        <tr>
          <th width="120">属性</th>
          <th>说明</th>
          <th width="180">类型</th>
          <th width="120">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>图标类型</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>color</td>
          <td>图标颜色</td>
          <td>String</td>
          <td>--</td>
        </tr>
        <tr>
          <td>size</td>
          <td>图标尺寸，单位 <code>px</code></td>
          <td>String | Number</td>
          <td>--</td>
        </tr>
      </tbody>
    </table>
  </vui-article>
</template>

<script setup lang="ts">
  import { ref, computed } from "vue";
  import { Message } from "vui-design";
  import VuiArticle from "../../components/article/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleHtml from "./examples/html/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import icons from "./icons";

  const category = ref<number>(1);
  const keyword = ref<string>("");
  const types = computed(() => keyword.value ? icons.includes(keyword.value) : icons);

  const handleCopy = (type: string) => {
    // 创建隐藏的 Textarea 标签，并将组件代码放入其中
    let textarea = document.createElement("textarea");

    textarea.style.position = "absolute";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.border = "none";
    textarea.style.margin = "0";
    textarea.style.padding = "0";
    textarea.style.opacity = "0";
    textarea.value = `<vui-icon type="${type}" />`;

    document.body.appendChild(textarea);

    // 复制 Textarea 标签的文本
    textarea.select();
    document.execCommand("copy");

    // 移除 Textarea 标签
    document.body.removeChild(textarea);

    // 提示
    Message.success("图标已经复制到剪切板！");
  };
</script>

<style>
  .icon { cursor:pointer; box-sizing:border-box; border-radius:2px; border:1px solid #fff; background-color:#fafafa; padding:10px; }
  .icon .icon-gallery { padding:10px 0;color:#595959; font-size:24px; text-align:center; line-height:1; }
  .icon .icon-type { padding:10px 0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; color:#a6a6a6; font-size:14px; text-align:center; line-height:1; }

  .icon:hover { border-color:#2d8cf0; }
  .icon:hover .icon-gallery { color:#2d8cf0; }
  .icon:hover .icon-type { color:#2d8cf0; }
</style>