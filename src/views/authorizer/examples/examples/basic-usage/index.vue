<template>
  <vui-example id="example-authorizer-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最基本的用法。</p>
      <p>本示例假定当前用户角色标识为 ["admin", "user"]，即管理员和普通用户！</p>
    </template>
    <template v-slot:demo>
      <vui-config-provider v-bind="configProvider">
        <vui-authorizer value="admin" aaa="1" bbb="2">
          <a href="javascript:;">Edit</a>
          <template v-slot:replacement>
            <a href="javascript:;">View</a>
          </template>
        </vui-authorizer>
      </vui-config-provider>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  const configProvider = {
    authorize: (
      value: string | string[] | undefined,
      attrs: Record<string, unknown>
    ) => {
      if (!value) {
        return true;
      }

      return ["admin", "user"].some(role => typeof value === "string" ? value === role : value.includes(role));
    }
  };

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code,
        configProvider
      };
    }
  });
</script>