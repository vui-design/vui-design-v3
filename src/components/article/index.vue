<template>
  <div class="vui-article">
    <div ref="contentRef" class="vui-article-content">
      <slot></slot>
    </div>
    <div class="vui-article-anchors">
      <vui-anchor v-bind:offset="64" v-bind:offsetTop="96" preventDefault>
        <vui-anchor-link v-for="anchor in anchors" v-bind:key="anchor" v-bind:href="'#' + anchor" v-bind:title="translate(anchor)" />
      </vui-anchor>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, nextTick, onMounted } from "vue";
  import { useI18n } from "vue-i18n";

  export default defineComponent({
    setup(props, context) {
      // 
      const { t } = useI18n();

      // 状态
      const contentRef = ref<HTMLDivElement>();
      const anchors = ref<string[]>([]);

      // 
      const translate = anchor => t("app.anchors." + anchor);

      // 
      const changeAnchors = containter => {
        if (containter) {
          const nodes = containter.querySelectorAll("[id]");
          let value = [];

          nodes.forEach(node => {
            const id = node.getAttribute("id");

            if (id.includes("example-api-") || id.includes("vui-watermark-")) {
              return;
            }

            value.push(id);
          })

          anchors.value = value;
        }
        else {
          anchors.value = [];
        }
      };

      // 
      onMounted(() => {
        nextTick(() => changeAnchors(contentRef.value));
      });

      // 
      return {
        contentRef,
        anchors,
        translate
      };
    }
  });
</script>

<style>
	.vui-article { display:flex; align-items:stretch; }

	.vui-article-content { flex:1; overflow:hidden; color:rgba(0,0,0,0.85); font-size:14px; line-height:2; }
	.vui-article-content h1 { font-size:28px; font-weight:600; }
	.vui-article-content h2 { font-size:24px; font-weight:600; }
	.vui-article-content h3 { font-size:16px; font-weight:600; }
	.vui-article-content h4 { font-size:14px; font-weight:600; }
	.vui-article-content p { font-size:14px; }
	.vui-article-content blockquote { border-left:4px solid #e6e6e6; margin:16px 0; padding-left:12px; }
	.vui-article-content blockquote p { margin-bottom:0; color:rgba(0,0,0,0.45); }
	.vui-article-content table { width:100%; margin:16px 0; }
	.vui-article-content table th { border:1px solid #f0f0f0; background-color:#fafafa; padding:8px 16px; font-size:13px; text-align:left; vertical-align:top; }
	.vui-article-content table td { border:1px solid #f0f0f0; padding:8px 16px; font-size:13px; text-align:left; vertical-align:top; }
	.vui-article-content table td pre { margin:0; }
	.vui-article-content table.example-api-props th:nth-child(1) { white-space:nowrap; }
	.vui-article-content table.example-api-props th:nth-child(2) {  }
	.vui-article-content table.example-api-props th:nth-child(3) {  }
	.vui-article-content table.example-api-props th:nth-child(4) { white-space:nowrap; }
	.vui-article-content table.example-api-props td:nth-child(1) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
	.vui-article-content table.example-api-props td:nth-child(2) {  }
	.vui-article-content table.example-api-props td:nth-child(3) { color:#ff4d4f; font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; }
	.vui-article-content table.example-api-props td:nth-child(4) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
	.vui-article-content table.example-api-events th:nth-child(1) { white-space:nowrap; }
	.vui-article-content table.example-api-events th:nth-child(2) {  }
	.vui-article-content table.example-api-events th:nth-child(3) {  }
	.vui-article-content table.example-api-events th:nth-child(4) { white-space:nowrap; }
	.vui-article-content table.example-api-events td:nth-child(1) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
	.vui-article-content table.example-api-events td:nth-child(2) {  }
	.vui-article-content table.example-api-events td:nth-child(3) { color:#ff4d4f; font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; }
	.vui-article-content table.example-api-events td:nth-child(4) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-content table.example-api-methods th:nth-child(1) { white-space:nowrap; }
	.vui-article-content table.example-api-methods th:nth-child(2) {  }
	.vui-article-content table.example-api-methods th:nth-child(3) {  }
	.vui-article-content table.example-api-methods th:nth-child(4) { white-space:nowrap; }
	.vui-article-content table.example-api-methods td:nth-child(1) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
	.vui-article-content table.example-api-methods td:nth-child(2) {  }
	.vui-article-content table.example-api-methods td:nth-child(3) { color:#ff4d4f; font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; }
	.vui-article-content table.example-api-methods td:nth-child(4) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
	.vui-article-content ul { list-style:circle; padding-left:18px; }
	.vui-article-content ul li p { margin-bottom:0; }
	.vui-article-content ol { list-style:circle; padding-left:18px; }
	.vui-article-content ol li { margin-bottom:4px; }
	.vui-article-content ol li p { margin-bottom:0; }
	.vui-article-content pre { margin:16px 0; }
	.vui-article-content code { border-radius:2px; border:1px solid #f0f0f0; background-color:#fafafa; margin:0; padding:2px 4px; color:rgba(0,0,0,0.65); font-size:13px; }
	.vui-article-content pre code { padding:12px 16px; }
	.vui-article-content > .vui-row + h2 { margin-top:0.5em; }
	.vui-article-content > .vui-row + p { margin-top:1em; }

	.vui-article-anchors { width:120px; margin-left:32px; }
	.vui-article-anchors .vui-anchor { font-size:12px; }
</style>