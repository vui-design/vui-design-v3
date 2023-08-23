<template>
  <vui-example id="example-timeline-alternate" v-bind:code="code">
    <template v-slot:title>交替显示</template>
    <template v-slot:description>
      <p>内容在时间轴两侧轮流出现。</p>
    </template>
    <template v-slot:demo>
      <div class="example-timeline-alternate">
        <vui-timeline mode="alternate" pending>
          <vui-timeline-item>
            <h4>2018-01-01</h4>
            <p>Create a services site</p>
          </vui-timeline-item>
          <vui-timeline-item color="red">
            <template v-slot:dot>
              <vui-icon type="time" v-bind:size="16" />
            </template>
            <h4>2018-01-01</h4>
            <p>Solve initial network problems</p>
          </vui-timeline-item>
          <vui-timeline-item>
            <h4>2018-01-01</h4>
            <p>Technical testing</p>
          </vui-timeline-item>
          <vui-timeline-item color="green">
            <h4>2018-01-01</h4>
            <p>Network problems being solved</p>
          </vui-timeline-item>
          <vui-timeline-item>
            <template v-slot:dot>
              <vui-icon type="loading" v-bind:size="16" />
            </template>
            <p>Recording...</p>
          </vui-timeline-item>
        </vui-timeline>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
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

<style>
  .example-timeline-alternate h4 { margin:0 0 8px 0; color:#8c8c8c; }
  .example-timeline-alternate p { margin:0; color:#595959; }
</style>