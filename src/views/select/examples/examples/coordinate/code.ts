const code =
`<template>
  <div class="example-select-coordinate">
    <vui-select v-model:value="province" placeholder="Please select">
      <vui-option v-for="item in provinces" v-bind:key="item" v-bind:value="item">
        {{item}}
      </vui-option>
    </vui-select>
    <vui-select v-model:value="city" placeholder="Please select">
      <vui-option v-for="item in cities" v-bind:key="item" v-bind:value="item">
        {{item}}
      </vui-option>
    </vui-select>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  const map: Record<string, string[]> = {
    Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
    Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"]
  };

  export default defineComponent({
    setup() {
      const provinces = ref<string[]>(["Zhejiang", "Jiangsu"]);
      const cities = ref<string[]>(map["Zhejiang"]);

      const province = ref<string>(provinces.value[0]);
      const city = ref<string>(cities.value[0]);

      watch(province, (value: string) => {
        cities.value = map[value];
        city.value = cities.value[0];
      });

      return {
        provinces,
        cities,
        province,
        city
      };
    }
  });
</script>

<style>
  .example-select-coordinate .vui-select + .vui-select { margin-left:16px; }
</style>
`;

export default code;