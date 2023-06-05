<template>
  <vui-example id="example-segments-custom" v-bind:code="code">
    <template v-slot:demo>
      <vui-space direction="vertical">
        <vui-segments>
          <vui-segments-item key="user1">
            <div style="padding: 8px 4px 0;">
              <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <div>User 1</div>
            </div>
          </vui-segments-item>
          <vui-segments-item key="user2">
            <div style="padding: 8px 4px 0;">
              <vui-avatar style="background-color: #faad14;">U</vui-avatar>
              <div>User 2</div>
            </div>
          </vui-segments-item>
          <vui-segments-item key="user3">
            <div style="padding: 8px 4px 0;">
              <vui-avatar icon="user" style="background-color: #52c41a;" />
              <div>User 3</div>
            </div>
          </vui-segments-item>
        </vui-segments>
        <vui-segments>
          <vui-segments-item key="spring">
            <div style="padding: 4px;">
              <div>Spring</div>
              <div style="opacity: 0.65;">Jan-Mar</div>
            </div>
          </vui-segments-item>
          <vui-segments-item key="summer">
            <div style="padding: 4px;">
              <div>Summer</div>
              <div style="opacity: 0.65;">Apr-Jun</div>
            </div>
          </vui-segments-item>
          <vui-segments-item key="autumn">
            <div style="padding: 4px;">
              <div>Autumn</div>
              <div style="opacity: 0.65;">Jul-Sept</div>
            </div>
          </vui-segments-item>
          <vui-segments-item key="winter">
            <div style="padding: 4px;">
              <div>Winter</div>
              <div style="opacity: 0.65;">Oct-Dec</div>
            </div>
          </vui-segments-item>
        </vui-segments>
      </vui-space>
    </template>
    <template v-slot:title>自定义渲染</template>
    <template v-slot:description>
      <p>使用插槽自定义渲染每一个 <code>Segments</code> 项目。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>