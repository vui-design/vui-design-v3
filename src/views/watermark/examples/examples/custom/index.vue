<template>
  <vui-example id="example-watermark-custom" v-bind:code="code">
    <template v-slot:title>自定义配置</template>
    <template v-slot:description>
      <p>通过自定义参数配置预览水印效果。</p>
    </template>
    <template v-slot:demo>
      <vui-watermark v-bind="settings">
        <div class="example-watermark-custom">
          <div class="example-watermark-custom-main">
            <p>The light-speed iteration of the digital world makes products more complex. However, human consciousness and attention resources are limited. Facing this design contradiction, the pursuit of natural interaction will be the consistent direction of Ant Design.</p>
            <p>Natural user cognition: According to cognitive psychology, about 80% of external information is obtained through visual channels. The most important visual elements in the interface design, including layout, colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user's cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels such as hearing, touch can create a richer and more natural product experience.</p>
            <p>Natural user behavior: In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to save users' mental and physical resources and make human-computer interaction more natural.</p>
            <p>
              <img
                style="position: relative; z-index: 10; width: 100%; max-width: 800px;"
                src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
                alt="示例图片"
              />
            </p>
          </div>
          <div class="example-watermark-custom-sider">
            <dl>
              <dt>Content</dt>
              <dd>
                <vui-input v-model:value="settings.content" placeholder="content" />
              </dd>
            </dl>
            <dl>
              <dt>FontSize</dt>
              <dd>
                <vui-input-number v-model:value="settings.font.fontSize" v-bind:min="0" v-bind:max="100" placeholder="fontSize" />
              </dd>
            </dl>
            <dl>
              <dt>Rotate</dt>
              <dd>
                <vui-input-number v-model:value="settings.rotate" v-bind:min="-180" v-bind:max="180" placeholder="rotate" />
              </dd>
            </dl>
            <dl>
              <dt>Gap</dt>
              <dd>
                <vui-space>
                  <vui-input-number v-model:value="settings.gap[0]" placeholder="gapX" />
                  <vui-input-number v-model:value="settings.gap[1]" placeholder="gapY" />
                </vui-space>
              </dd>
            </dl>
            <dl>
              <dt>Offset</dt>
              <dd>
                <vui-space>
                  <vui-input-number v-model:value="settings.offset[0]" placeholder="offsetLeft" />
                  <vui-input-number v-model:value="settings.offset[1]" placeholder="offsetTop" />
                </vui-space>
              </dd>
            </dl>
            <dl>
              <dt>zIndex</dt>
              <dd>
                <vui-input-number v-model:value="settings.zIndex" v-bind:min="0" v-bind:max="100" placeholder="zIndex" />
              </dd>
            </dl>
          </div>
        </div>
      </vui-watermark>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, reactive } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const settings = reactive({
        content: "Vui Design Vue",
        font: {
          fontSize: 16
        },
        rotate: -20,
        gap: [100, 100] as [number, number],
        offset: [],
        zIndex: 10
      });

      return {
        code,
        settings
      };
    }
  });
</script>

<style>
  .example-watermark-custom { display:flex; justify-content:flex-start; align-items:stretch; }

  .example-watermark-custom-main { flex:1; }

  .example-watermark-custom-sider { border-left:1px solid #eee; margin-left:32px; padding-left:32px; }
  .example-watermark-custom-sider dl { margin:0; }
  .example-watermark-custom-sider dl + dl { margin-top:32px; }
  .example-watermark-custom-sider dl dt { color:#262626; font-size:16px; }
  .example-watermark-custom-sider dl dd { margin:8px 0 0 0; }
</style>