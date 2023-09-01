const code =
`<vui-authorizer value="admin">
  <!-- // Allow administrators to edit -->
  <a href="javascript:;">Edit</a>
  <!-- // Non administrators are only allowed to view -->
  <template v-slot:replacement>
    <a href="javascript:;">View</a>
  </template>
</vui-authorizer>`;

export default code;