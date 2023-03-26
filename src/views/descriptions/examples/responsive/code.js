const code =
`<template>
  <div class="example-descriptions-responsive">
    <vui-descriptions bordered v-bind:columns="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }" title="Responsive Descriptions">
      <vui-description label="Product">Cloud Database</vui-description>
      <vui-description label="Billing">Prepaid</vui-description>
      <vui-description label="time">18:00:00</vui-description>
      <vui-description label="Amount">$80.00</vui-description>
      <vui-description label="Discount">$20.00</vui-description>
      <vui-description label="Official">$60.00</vui-description>
      <vui-description label="Config Info">
        <p>Data disk type: MongoDB</p>
        <p>Database version: 3.4</p>
        <p>Package: dds.mongo.mid</p>
        <p>Storage space: 10 GB</p>
        <p>Replication factor: 3</p>
        <p>Region: East China 1</p>
      </vui-description>
    </vui-descriptions>
  </div>
</template>

<style>
  .example-descriptions-responsive .vui-descriptions p { margin:0; }
</style>
`;

export default code;