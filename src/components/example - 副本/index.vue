<template>
  <div class="vui-example">
    <div class="vui-example-title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="vui-example-description">
      <slot name="description">{{description}}</slot>
    </div>
    <div ref="case" class="vui-example-case">
      <div class="demo">
        <slot name="demo"></slot>
      </div>
      <div class="action">
        <vui-tooltip content="在 JsFiddle 中打开">
          <a v-bind:href="jsFiddleUrl" target="_blank" class="btn btn-jsfiddle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21zm0-12a5 5 0 1 0-9.994.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10a4 4 0 1 0-3.796-5.265l-1.898-.633A6.003 6.003 0 0 1 17 9z" />
            </svg>
          </a>
        </vui-tooltip>
        <vui-tooltip v-bind:content="tooltips.copy">
          <a href="javascript:;" class="btn btn-copy" v-on:click="handleCopy">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2zm-2 5h6v2H7v-2zm0 4h6v2H7v-2z" />
            </svg>
          </a>
        </vui-tooltip>
        <vui-tooltip v-bind:content="tooltips.expand">
          <a href="javascript:;" class="btn" v-on:click="handleExpand">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" />
            </svg>
          </a>
        </vui-tooltip>
      </div>
      <div ref="codeRef" class="code" v-bind:style="elCodeStyle">
        <highlightjs language="xml" v-bind:code="code" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import type { CSSProperties } from "vue";
  import { defineComponent, ref, computed, nextTick, onMounted } from "vue";

  export default defineComponent({
    props: {
      title: {
        type: String,
        default: undefined
      },
      description: {
        type: String,
        default: undefined
      },
      code: {
        type: String,
        default: undefined
      },
      jsFiddle: {
        type: String,
        default: undefined
      }
    },
    setup(props, context) {
      // 状态
      const ready = ref(false);
      const expanded = ref(false);
      const copied = ref(false);
      const codeHeight = ref(0);

      // DOM 引用
      const codeRef = ref<HTMLDivElement>();

      // 
      const jsFiddleUrl = computed(() => {
        if (!props.jsFiddle) {
          return "javascript:;";
        }

        return "https://jsfiddle.net/" + props.jsFiddle + "/";
      });

      // 
      const tooltips = computed(() => {
        return {
          expand: expanded.value ? "收起代码" : "展开代码",
          copy: copied.value ? "复制成功" : "复制代码"
        };
      });

      // 计算 style 样式
      const elCodeStyle = computed(() => {
        const style: CSSProperties = {};

        if (ready.value) {
          if (expanded.value) {
            style.height = codeHeight.value + "px";
          }
          else {
            style.height = "0px";
          }
        }

        return style;
      });

      // 复制示例代码
      const handleCopy = () => {
        let textarea = document.createElement("textarea");

        textarea.style.position = "absolute";
        textarea.style.top = "0";
        textarea.style.left = "0";
        textarea.style.border = "none";
        textarea.style.margin = "0";
        textarea.style.padding = "0";
        textarea.style.opacity = "0";
        textarea.value = props.code as string;

        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        copied.value = true;

        let timeout: number | undefined = setTimeout(() => {
          copied.value = false;

          clearTimeout(timeout);
          timeout = undefined;
        }, 1000);
      };

      // 展开/收取示例代码
      const handleExpand = () => {
        expanded.value = !expanded.value;
      };

      onMounted(() => {
        nextTick(() => {
          ready.value = true;
          codeHeight.value = codeRef.value?.clientHeight as number;
        });
      });

      return {
        codeRef,
        jsFiddleUrl,
        tooltips,
        elCodeStyle,
        handleCopy,
        handleExpand
      };
    }
  });
</script>

<style>
  .vui-example { color:rgba(0,0,0,0.85); font-size:14px; line-height:2; }
  .vui-example + .vui-example { margin-top:32px; }

  .vui-example-title { margin-bottom:8px; color:rgba(0,0,0,0.85); font-size:20px; font-weight:700; }

  .vui-example-description { margin-bottom:16px; color:rgba(0,0,0,0.65); font-size:14px; font-weight:400; }
  .vui-example-description p { margin:0; }

  .vui-example-case { position:relative; border:1px solid #e6e6e6; border-radius:2px; }
  .vui-example-case .demo { padding:32px; }
  .vui-example-case .title { position:relative; margin:0; }
  .vui-example-case .description { position:relative; padding:24px; }
  .vui-example-case .description ul { list-style:circle; margin-bottom:10px; padding-left:18px; }
  .vui-example-case .description ul li p { margin-bottom:0; }
  .vui-example-case .description ol { list-style:circle; padding-left:18px; }
  .vui-example-case .description ol li p { margin-bottom:0; }
  .vui-example-case .description p { margin:0; }
  .vui-example-case .description code { border-radius:2px; border:1px solid #f0f0f0; background-color:#fafafa; margin:0; padding:2px 4px; color:rgba(0,0,0,0.65); font-size:13px; }
  .vui-example-case .action { display:flex; justify-content:flex-end; align-items:center; padding:12px; }
  .vui-example-case .action .btn { cursor:pointer; display:flex; justify-content:center; align-items:center; width:30px; height:30px; border:1px solid #e6e6e6; border-radius:50%; background-repeat:no-repeat; background-position:50% 50%; color:rgba(0,0,0,0.25); font-size:14px; transition:all 0.2s; }
  .vui-example-case .action .btn + .btn { margin-left:12px; }
  .vui-example-case .action .btn svg { display:block; width:1em; height:1em; fill:currentColor; }
  .vui-example-case .action .btn:hover { border-color:#2d8cf0; background-color:#f6f6f6; color:#2d8cf0; }
  .vui-example-case .code { position:relative; box-sizing:border-box; background-color:#f6f6f6; box-shadow:0 1px 0 0 #e6e6e6 inset; overflow:hidden; transition:height 0.2s ease-in-out; }

  .vui-example-case .code > pre { display:block !important; box-sizing:border-box !important; width:100% !important; margin:0 !important; padding:0 !important; }
  .vui-example-case .code > pre > code { display:block !important; box-sizing:border-box !important; border:none !important; border-radius:0 !important; width:100% !important; height:100% !important; background-color:transparent !important; margin:0 !important; padding:24px !important; overflow-x:hidden; overflow-y:hidden; color:rgba(0,0,0,0.65) !important; font-size:13px !important; font-family:"Lucida Console", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace; }
  .vui-example-case .code > pre > code:hover { overflow-x:auto; overflow-y:hidden; }
</style>