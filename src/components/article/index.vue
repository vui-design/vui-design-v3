<template>
  <div class="vui-article">
    <div class="vui-article-header">
      <div class="vui-article-header-content">
        <slot name="header"></slot>
      </div>
    </div>
    <div v-if="showSegments" class="vui-article-segments">
      <div class="vui-article-segments-content">
        <slot name="segments"></slot>
      </div>
    </div>
    <div ref="contentRef" class="vui-article-body">
      <div class="vui-article-body-content">
        <slot></slot>
      </div>
      <div class="vui-article-body-anchors">
        <vui-anchor v-bind:offset="64" v-bind:offsetTop="96" preventDefault>
          <vui-anchor-link v-for="anchor in anchors" v-bind:key="anchor" v-bind:href="'#' + anchor" v-bind:title="translate(anchor)" />
        </vui-anchor>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, watch, nextTick } from "vue";
  import { useI18n } from "vue-i18n";
  import { useRoute } from "vue-router";

  export default defineComponent({
    setup(props, context) {
      // 
      const showSegments = computed(() => !!context.slots.segments);

      // 状态
      const contentRef = ref<HTMLDivElement>();
      const anchors = ref<string[]>([]);

      // 
      const { t } = useI18n();
      const translate = (anchor: string) => t("app.anchors." + anchor);

      // 
      const changeAnchors = (containter: HTMLElement) => {
        if (containter) {
          const nodes = containter.querySelectorAll("[id]");
          let value: string[] = [];

          nodes.forEach(node => {
            const id: string = node.getAttribute("id") as string;

            if (id.includes("example-api-") || id.includes("vui-watermark-")) {
              return;
            }

            value.push(id);
          });

          anchors.value = value;
        }
        else {
          anchors.value = [];
        }
      };

      // 
      const activeKey = ref<string>("");
      const route = useRoute();

      watch(route, newRoute => {
        let tab = newRoute.query.tab as string;

        if (!tab) {
          tab = "examples";
        }

        if (activeKey.value === tab) {
          return;
        }

        activeKey.value = tab;
        nextTick(() => changeAnchors(contentRef.value!));
      }, {
        immediate: true,
        deep: true
      });

      // 
      return {
        contentRef,
        showSegments,
        anchors,
        translate
      };
    }
  });
</script>

<style>
  .vui-article { color:rgba(0,0,0,0.85); font-size:14px; line-height:2; }

  .vui-article-header { position:relative; z-index:1; border-bottom:1px solid #f0f0f0; background:url("../../assets/images/components.png") no-repeat calc(100% - 32px) 0; padding:32px 304px 56px 32px; }
  .vui-article-header-content { max-width:1000px; margin:0 auto; }
  .vui-article-header-content h1 { margin:0; font-size:48px; font-weight:700; }
  .vui-article-header-content p { margin:0; color:rgba(0,0,0,0.65); }

  .vui-article-segments { position:relative; z-index:2; height:0; padding:0 304px 0 32px; }
  .vui-article-segments-content { max-width:1000px; margin:0 auto; transform:translate(0, -50%); }
  .vui-article-segments-content .vui-segments-large {  }
  .vui-article-segments-content .vui-segments-large .vui-segments-item { padding:0 32px; }

  .vui-article-body { position:relative; z-index:1; padding:56px 304px 32px 32px; }
  .vui-article-body-content { max-width:1000px; margin:0 auto; }
  .vui-article-body-content h2 { font-size:20px; font-weight:600; }
  .vui-article-body-content h3 { font-size:16px; font-weight:600; }
  .vui-article-body-content p { font-size:14px; }
  .vui-article-body-content blockquote { border-left:4px solid #e6e6e6; margin:16px 0; padding-left:12px; }
  .vui-article-body-content blockquote p { margin-bottom:0; color:rgba(0,0,0,0.45); }
  .vui-article-body-content table { width:100%; margin:16px 0; }
  .vui-article-body-content table th { border:1px solid #f0f0f0; background-color:#fafafa; padding:8px 16px; font-size:14px; text-align:left; vertical-align:top; }
  .vui-article-body-content table td { border:1px solid #f0f0f0; padding:8px 16px; font-size:14px; text-align:left; vertical-align:top; }
  .vui-article-body-content table td pre { margin:0; }
  .vui-article-body-content table.api-props td:nth-child(1) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-body-content table.api-props td:nth-child(2) { color:#ff4d4f; font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-body-content table.api-props td:nth-child(3) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-body-content table.api-props td:nth-child(4) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-body-content table.api-props td:nth-child(5) {  }
  .vui-article-body-content table.api-events td:nth-child(1) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-body-content table.api-events td:nth-child(2) { color:#ff4d4f; font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-body-content table.api-events td:nth-child(3) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-body-content table.api-events td:nth-child(4) {  }
  .vui-article-body-content table.api-methods td:nth-child(1) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-body-content table.api-methods td:nth-child(2) { font-family:"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace; white-space:nowrap; }
  .vui-article-body-content table.api-methods td:nth-child(3) {  }
  .vui-article-body-content table.api-methods td:nth-child(4) {  }
  .vui-article-body-content ul { list-style:circle; padding-left:18px; }
  .vui-article-body-content ul li p { margin-bottom:0; }
  .vui-article-body-content ol { list-style:circle; padding-left:18px; }
  .vui-article-body-content ol li { margin-bottom:4px; }
  .vui-article-body-content ol li p { margin-bottom:0; }
  .vui-article-body-content pre { margin:16px 0; }
  .vui-article-body-content code { border-radius:2px; border:1px solid #f0f0f0; background-color:#fafafa; margin:0; padding:2px 4px; color:rgba(0,0,0,0.65); font-size:13px; }
  .vui-article-body-content pre code { padding:12px 16px; }
  .vui-article-body-content > .vui-row + h2 { margin-top:0.5em; }
  .vui-article-body-content > .vui-row + p { margin-top:1em; }
  .vui-article-body-anchors { position:absolute; top:56px; right:32px; width:240px; }
  .vui-article-body-anchors .vui-anchor { font-size:12px; }

  @media screen and (max-device-width:1440px) {
    .vui-article-header { padding:32px 224px 56px 32px; }

    .vui-article-segments { padding:0 224px 0 32px; }

    .vui-article-body { padding:56px 224px 32px 32px; }
    .vui-article-body-anchors { width:160px; }
  }
</style>