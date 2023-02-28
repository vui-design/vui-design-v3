const code =
`<template>
  <div class="example-card-loading">
    <vui-switch v-model:checked="loading" />
    <vui-card v-bind:loading="loading">
      <vui-card-meta title="Card title">
        <template v-slot:avatar>
          <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </template>
        <template v-slot:description>This is the description</template>
      </vui-card-meta>
    </vui-card>
    <vui-card>
      <vui-skeleton v-bind:loading="loading" animated avatar>
        <vui-card-meta title="Card title">
          <template v-slot:avatar>
            <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
          <template v-slot:description>This is the description</template>
        </vui-card-meta>
      </vui-skeleton>
      <template v-slot:actions>
        <vui-icon type="edit" />
        <vui-icon type="dustbin" />
        <vui-icon type="more-x" />
      </template>
    </vui-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const loading = ref(true);

      return {
        loading
      };
    }
  });
</script>

<style>
  .example-card-loading .vui-card { margin-top:24px; }
  .example-card-loading p { margin:0; }
  .example-card-loading p + p { margin-top:8px; }
</style>
`;

export default code;