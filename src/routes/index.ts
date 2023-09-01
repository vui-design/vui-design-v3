import Layout from "src/layout/index.vue";

export default [
  {
    path: "/",
    name: "index",
    meta: {
      title: "index",
    },
    redirect: "/guide",
  },

  {
    path: "/guide",
    name: "guide",
    meta: {
      title: "guide",
    },
    component: Layout,
    redirect: "/guide/install",
    children: [
      {
        path: "/guide/install",
        name: "install",
        meta: {
          title: "Install"
        },
        component: () => import("src/views/install/index.vue")
      },
      {
        path: "/guide/getting-started",
        name: "getting-started",
        meta: {
          title: "Getting Started"
        },
        component: () => import("src/views/getting-started/index.vue")
      },
      {
        path: "/guide/use-with-vue-cli",
        name: "use-with-vue-cli",
        meta: {
          title: "Use with vue-cli"
        },
        component: () => import("src/views/use-with-vue-cli/index.vue")
      },
      {
        path: "/guide/theme",
        name: "theme",
        meta: {
          title: "theme"
        },
        component: () => import("src/views/theme/index.vue")
      },
      {
        path: "/guide/i18n",
        name: "i18n",
        meta: {
          title: "i18n"
        },
        component: () => import("src/views/i18n/index.vue")
      },
      {
        path: "/guide/changelog",
        name: "changelog",
        meta: {
          title: "changelog"
        },
        component: () => import("src/views/changelog/index.vue")
      }
    ]
  },

  {
    path: "/components",
    name: "components",
    meta: {
      title: "components"
    },
    component: Layout,
    redirect: "/components/color",
    children: [
      // 通用组件
      {
        path: "/components/color",
        name: "color",
        meta: {
          title: "Color",
          group: "general"
        },
        component: () => import("src/views/color/index.vue")
      },
      {
        path: "/components/icon",
        name: "icon",
        meta: {
          title: "Icon",
          group: "general"
        },
        component: () => import("src/views/icon/index.vue")
      },
      {
        path: "/components/button",
        name: "button",
        meta: {
          title: "Button",
          group: "general"
        },
        component: () => import("src/views/button/index.vue")
      },
      {
        path: "/components/link",
        name: "link",
        meta: {
          title: "Link",
          group: "general"
        },
        component: () => import("src/views/link/index.vue")
      },
      // 布局组件
      {
        path: "/components/divider",
        name: "divider",
        meta: {
          title: "Divider",
          group: "layout"
        },
        component: () => import("src/views/divider/index.vue")
      },
      {
        path: "/components/grid",
        name: "grid",
        meta: {
          title: "Grid",
          group: "layout"
        },
        component: () => import("src/views/grid/index.vue")
      },
      {
        path: "/components/layout",
        name: "layout",
        meta: {
          title: "Layout",
          group: "layout"
        },
        component: () => import("src/views/layout/index.vue")
      },
      {
        path: "/components/space",
        name: "space",
        meta: {
          title: "Space",
          group: "layout"
        },
        component: () => import("src/views/space/index.vue")
      },
      // 导航组件
      {
        path: "/components/anchor",
        name: "anchor",
        meta: {
          title: "Anchor",
          group: "navigation"
        },
        component: () => import("src/views/anchor/index.vue")
      },
      {
        path: "/components/breadcrumb",
        name: "breadcrumb",
        meta: {
          title: "Breadcrumb",
          group: "navigation"
        },
        component: () => import("src/views/breadcrumb/index.vue")
      },
      {
        path: "/components/dropdown",
        name: "dropdown",
        meta: {
          title: "Dropdown",
          group: "navigation"
        },
        component: () => import("src/views/dropdown/index.vue")
      },
      {
        path: "/components/menu",
        name: "menu",
        meta: {
          title: "Menu",
          group: "navigation"
        },
        component: () => import("src/views/menu/index.vue")
      },
      {
        path: "/components/page-header",
        name: "page-header",
        meta: {
          title: "PageHeader",
          group: "navigation"
        },
        component: () => import("src/views/page-header/index.vue")
      },
  //     {
  //       path: "/components/pagination",
  //       name: "pagination",
  //       meta: {
  //         title: "Pagination",
  //         group: "navigation"
  //       },
  //       component: () => import("src/views/pagination/index.vue")
  //     },
      {
        path: "/components/steps",
        name: "steps",
        meta: {
          title: "Steps",
          group: "navigation"
        },
        component: () => import("src/views/steps/index.vue")
      },
      {
        path: "/components/tabs",
        name: "tabs",
        meta: {
          title: "Tabs",
          group: "navigation"
        },
        component: () => import("src/views/tabs/index.vue")
      },
  //     // 数据录入组件
  //     {
  //       path: "/components/cascader",
  //       name: "cascader",
  //       meta: {
  //         title: "Cascader",
  //         group: "data-entry"
  //       },
  //       component: () => import("src/views/cascader/index.vue")
  //     },
  //     {
  //       path: "/components/cascade-transfer",
  //       name: "cascade-transfer",
  //       meta: {
  //         title: "CascadeTransfer",
  //         group: "data-entry"
  //       },
  //       component: () => import("src/views/cascade-transfer/index.vue")
  //     },
      {
        path: "/components/checkbox",
        name: "checkbox",
        meta: {
          title: "Checkbox",
          group: "data-entry"
        },
        component: () => import("src/views/checkbox/index.vue")
      },
  //     {
  //       path: "/components/datepicker",
  //       name: "datepicker",
  //       meta: {
  //         title: "Datepicker",
  //         group: "data-entry"
  //       },
  //       component: () => import("src/views/datepicker/index.vue")
  //     },
  //     */
  //     {
  //       path: "/components/form",
  //       name: "form",
  //       meta: {
  //         title: "Form",
  //         group: "data-entry"
  //       },
  //       component: () => import("src/views/form/index.vue")
  //     },
      {
        path: "/components/input",
        name: "input",
        meta: {
          title: "Input",
          group: "data-entry"
        },
        component: () => import("src/views/input/index.vue")
      },
      {
        path: "/components/input-number",
        name: "input-number",
        meta: {
          title: "InputNumber",
          group: "data-entry"
        },
        component: () => import("src/views/input-number/index.vue")
      },
      {
        path: "/components/radio",
        name: "radio",
        meta: {
          title: "Radio",
          group: "data-entry"
        },
        component: () => import("src/views/radio/index.vue")
      },
      {
        path: "/components/rate",
        name: "rate",
        meta: {
          title: "Rate",
          group: "data-entry"
        },
        component: () => import("src/views/rate/index.vue")
      },
  //     {
  //       path: "/components/select",
  //       name: "select",
  //       meta: {
  //         title: "Select",
  //         group: "data-entry"
  //       },
  //       component: () => import("src/views/select/index.vue")
  //     },
  //     {
  //       path: "/components/slider",
  //       name: "slider",
  //       meta: {
  //         title: "Slider",
  //         group: "data-entry"
  //       },
  //       component: () => import("src/views/slider/index.vue")
  //     },
      {
        path: "/components/switch",
        name: "switch",
        meta: {
          title: "Switch",
          group: "data-entry"
        },
        component: () => import("src/views/switch/index.vue")
      },
      {
        path: "/components/textarea",
        name: "textarea",
        meta: {
          title: "Textarea",
          group: "data-entry"
        },
        component: () => import("src/views/textarea/index.vue")
      },
  //     {
  //       path: "/components/transfer",
  //       name: "transfer",
  //       meta: {
  //         title: "Transfer",
  //         group: "data-entry"
  //       },
  //       component: () => import("src/views/transfer/index.vue")
  //     },
  //     {
  //       path: "/components/upload",
  //       name: "upload",
  //       meta: {
  //         title: "Upload",
  //         group: "data-entry"
  //       },
  //       component: () => import("src/views/upload/index.vue")
  //     },
      // 数据展示组件
      {
        path: "/components/avatar",
        name: "avatar",
        meta: {
          title: "Avatar",
          group: "data-display"
        },
        component: () => import("src/views/avatar/index.vue")
      },
      {
        path: "/components/badge",
        name: "badge",
        meta: {
          title: "Badge",
          group: "data-display"
        },
        component: () => import("src/views/badge/index.vue")
      },
      {
        path: "/components/card",
        name: "card",
        meta: {
          title: "Card",
          group: "data-display"
        },
        component: () => import("src/views/card/index.vue")
      },
      {
        path: "/components/collapse",
        name: "collapse",
        meta: {
          title: "Collapse",
          group: "data-display"
        },
        component: () => import("src/views/collapse/index.vue")
      },
      {
        path: "/components/descriptions",
        name: "descriptions",
        meta: {
          title: "Descriptions",
          group: "data-display"
        },
        component: () => import("src/views/descriptions/index.vue")
      },
      {
        path: "/components/empty",
        name: "empty",
        meta: {
          title: "Empty",
          group: "data-display"
        },
        component: () => import("src/views/empty/index.vue")
      },
  //     {
  //       path: "/components/image",
  //       name: "image",
  //       meta: {
  //         title: "Image",
  //         group: "data-display"
  //       },
  //       component: () => import("src/views/image/index.vue")
  //     },
      {
        path: "/components/list",
        name: "list",
        meta: {
          title: "List",
          group: "data-display"
        },
        component: () => import("src/views/list/index.vue")
      },
      {
        path: "/components/popover",
        name: "popover",
        meta: {
          title: "Popover",
          group: "data-display"
        },
        component: () => import("src/views/popover/index.vue")
      },
      {
        path: "/components/qrcode",
        name: "qrcode",
        meta: {
          title: "Qrcode",
          group: "data-display"
        },
        component: () => import("src/views/qrcode/index.vue")
      },
      {
        path: "/components/ribbon",
        name: "ribbon",
        meta: {
          title: "Ribbon",
          group: "data-display"
        },
        component: () => import("src/views/ribbon/index.vue")
      },
      {
        path: "/components/segments",
        name: "segments",
        meta: {
          title: "segments",
          group: "data-display"
        },
        component: () => import("src/views/segments/index.vue")
      },
      {
        path: "/components/statistic",
        name: "statistic",
        meta: {
          title: "Statistic",
          group: "data-display"
        },
        component: () => import("src/views/statistic/index.vue")
      },
  //     {
  //       path: "/components/table",
  //       name: "table",
  //       meta: {
  //         title: "Table",
  //         group: "data-display"
  //       },
  //       component: () => import("src/views/table/index.vue")
  //     },
      {
        path: "/components/tag",
        name: "tag",
        meta: {
          title: "Tag",
          group: "data-display"
        },
        component: () => import("src/views/tag/index.vue")
      },
      {
        path: "/components/time",
        name: "time",
        meta: {
          title: "Time",
          group: "data-display"
        },
        component: () => import("src/views/time/index.vue")
      },
      {
        path: "/components/timeline",
        name: "timeline",
        meta: {
          title: "Timeline",
          group: "data-display"
        },
        component: () => import("src/views/timeline/index.vue")
      },
      {
        path: "/components/tooltip",
        name: "tooltip",
        meta: {
          title: "Tooltip",
          group: "data-display"
        },
        component: () => import("src/views/tooltip/index.vue")
      },
  //     {
  //       path: "/components/tree",
  //       name: "tree",
  //       meta: {
  //         title: "Tree",
  //         group: "data-display"
  //       },
  //       component: () => import("src/views/tree/index.vue")
  //     },
      {
        path: "/components/trend",
        name: "trend",
        meta: {
          title: "Trend",
          group: "data-display"
        },
        component: () => import("src/views/trend/index.vue")
      },
      {
        path: "/components/watermark",
        name: "watermark",
        meta: {
          title: "Watermark",
          group: "data-display"
        },
        component: () => import("src/views/watermark/index.vue")
      },
      // 反馈
      {
        path: "/components/alert",
        name: "alert",
        meta: {
          title: "Alert",
          group: "feedback"
        },
        component: () => import("src/views/alert/index.vue")
      },
      {
        path: "/components/drawer",
        name: "drawer",
        meta: {
          title: "Drawer",
          group: "feedback"
        },
        component: () => import("src/views/drawer/index.vue")
      },
      {
        path: "/components/message",
        name: "message",
        meta: {
          title: "Message",
          group: "feedback"
        },
        component: () => import("src/views/message/index.vue")
      },
      {
        path: "/components/modal",
        name: "modal",
        meta: {
          title: "Modal",
          group: "feedback"
        },
        component: () => import("src/views/modal/index.vue")
      },
      {
        path: "/components/notification",
        name: "notification",
        meta: {
          title: "Notification",
          group: "feedback"
        },
        component: () => import("src/views/notification/index.vue")
      },
      {
        path: "/components/popconfirm",
        name: "popconfirm",
        meta: {
          title: "Popconfirm",
          group: "feedback"
        },
        component: () => import("src/views/popconfirm/index.vue")
      },
      {
        path: "/components/progress",
        name: "progress",
        meta: {
          title: "Progress",
          group: "feedback"
        },
        component: () => import("src/views/progress/index.vue")
      },
      {
        path: "/components/result",
        name: "result",
        meta: {
          title: "Result",
          group: "feedback"
        },
        component: () => import("src/views/result/index.vue")
      },
      {
        path: "/components/skeleton",
        name: "skeleton",
        meta: {
          title: "Skeleton",
          group: "feedback"
        },
        component: () => import("src/views/skeleton/index.vue")
      },
      {
        path: "/components/spin",
        name: "spin",
        meta: {
          title: "Spin",
          group: "feedback"
        },
        component: () => import("src/views/spin/index.vue")
      },
      // 其它
      {
        path: "/components/affix",
        name: "affix",
        meta: {
          title: "Affix",
          group: "other"
        },
        component: () => import("src/views/affix/index.vue")
      },
      {
        path: "/components/authorizer",
        name: "authorizer",
        meta: {
          title: "Authorizer",
          group: "other"
        },
        component: () => import("src/views/authorizer/index.vue")
      },
      {
        path: "/components/backtop",
        name: "backtop",
        meta: {
          title: "Backtop",
          group: "other"
        },
        component: () => import("src/views/backtop/index.vue")
      },
      {
        path: "/components/fullscreen",
        name: "fullscreen",
        meta: {
          title: "Fullscreen",
          group: "other"
        },
        component: () => import("src/views/fullscreen/index.vue")
      }
    ]
  }
];