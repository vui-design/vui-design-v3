// This file is not used if use https://github.com/ant-design/babel-plugin-import
if (typeof console !== "undefined" && console.warn && typeof window !== "undefined") {
  console.warn("You are using a whole package of Vui Design, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.");
}

import type { App } from "vue";

// Package
import pkg from "../package.json";

// Language
import locale from "./locale";

// General
import Icon from "./components/icon";
import Button, { ButtonGroup } from "./components/button";
import Link from "./components/link";
// Layout
import Divider from "./components/divider";
import { Row, Col } from "./components/grid";
import Layout, { Header, Sider, Content, Footer } from "./components/layout";
import Space from "./components/space";
// Navigation
import Affix from "./components/affix";
import Breadcrumb from "./components/breadcrumb";
import BreadcrumbItem from "./components/breadcrumb-item";
import Dropdown from "./components/dropdown";
import DropdownButton from "./components/dropdown-button";
import DropdownMenu from "./components/dropdown-menu";
import DropdownSubmenu from "./components/dropdown-submenu";
import DropdownMenuItem from "./components/dropdown-menu-item";
import DropdownMenuItemGroup from "./components/dropdown-menu-item-group";
import DropdownMenuDivider from "./components/dropdown-menu-divider";
import Menu from "./components/menu";
import Submenu from "./components/submenu";
import MenuItem from "./components/menu-item";
import MenuItemGroup from "./components/menu-item-group";
import MenuDivider from "./components/menu-divider";
import PageHeader from "./components/page-header";
import Pagination from "./components/pagination";
import Steps from "./components/steps";
import Step from "./components/step";
import Tabs from "./components/tabs";
import TabPanel from "./components/tab-panel";
// Data Entry
import Cascader from "./components/cascader";
import Checkbox, { CheckboxGroup } from "./components/checkbox";
// import Form from "./components/form";
// import FormGroup from "./components/form-group";
// import FormItem from "./components/form-item";
import Input from "./components/input";
import InputGroup from "./components/input-group";
import InputNumber from "./components/input-number";
import Radio, { RadioGroup } from "./components/radio";
import Rate from "./components/rate";
import Select from "./components/select";
import Option from "./components/option";
import OptionGroup from "./components/option-group";
import Slider from "./components/slider";
import Switch from "./components/switch";
import Textarea from "./components/textarea";
import Timeroutine from "./components/timeroutine";
import Transfer from "./components/transfer";
import CascadeTransfer from "./components/cascade-transfer";
import Upload from "./components/upload";
// Data Display
import Avatar, { AvatarGroup } from "./components/avatar";
import Badge from "./components/badge";
import Card, { CardMeta, CardGrid } from "./components/card";
import Cell from "./components/cell";
import CellGroup from "./components/cell-group";
import Collapse from "./components/collapse";
import Panel from "./components/panel";
import Descriptions from "./components/descriptions";
import Description from "./components/description";
import Empty from "./components/empty";
import Image from "./components/image";
import List from "./components/list";
import ListItem from "./components/list-item";
import ListItemMeta from "./components/list-item-meta";
import Popover from "./components/popover";
import Qrcode from "./components/qrcode";
import Ratio from "./components/ratio";
import Ribbon from "./components/ribbon";
import Statistic, { Countdown } from "./components/statistic";
import Table from "./components/table";
import Tag from "./components/tag";
import Time from "./components/time";
import Timeline from "./components/timeline";
import TimelineItem from "./components/timeline-item";
import Tooltip from "./components/tooltip";
import Tree from "./components/tree";
import Watermark from "./components/watermark";
// Feedback
import Alert from "./components/alert";
import Drawer from "./components/drawer";
import Message from "./components/message";
import Modal from "./components/modal";
import Notice from "./components/notice";
import Popconfirm from "./components/popconfirm";
import Progress from "./components/progress";
import Result from "./components/result";
import Skeleton, { SkeletonAvatar, SkeletonTitle, SkeletonParagraph, SkeletonInput, SkeletonButton, SkeletonImage } from "./components/skeleton";
import Spin from "./components/spin";
// Other
import Anchor from "./components/anchor";
import AnchorLink from "./components/anchor-link";
import Authorizer from "./components/authorizer";
import Backtop from "./components/backtop";
import Collapser from "./components/collapser";
import Fullscreen from "./components/fullscreen";
import ResizeObserver from "./components/resize-observer";
import Loading from "./components/loading";

const components = [
  // General
  Icon,
  Button,
  ButtonGroup,
  Link,
  // Layout
  Divider,
  Row,
  Col,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Space,
  // Navigation
  Affix,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownSubmenu,
  DropdownMenuItem,
  DropdownMenuItemGroup,
  DropdownMenuDivider,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  MenuDivider,
  PageHeader,
  Pagination,
  Steps,
  Step,
  Tabs,
  TabPanel,
  // Data Entry
  Cascader,
  Checkbox,
  CheckboxGroup,
  // Form,
  // FormGroup,
  // FormItem,
  Input,
  InputGroup,
  InputNumber,
  Radio,
  RadioGroup,
  Rate,
  Select,
  Option,
  OptionGroup,
  Slider,
  Switch,
  Textarea,
  Timeroutine,
  Transfer,
  CascadeTransfer,
  Upload,
  // Data Display
  Avatar,
  AvatarGroup,
  Badge,
  Card,
  CardGrid,
  CardMeta,
  Cell,
  CellGroup,
  Collapse,
  Panel,
  Descriptions,
  Description,
  Empty,
  Image,
  List,
  ListItem,
  ListItemMeta,
  Popover,
  Qrcode,
  Ratio,
  Ribbon,
  Statistic,
  Countdown,
  Table,
  Tag,
  Time,
  Timeline,
  TimelineItem,
  Tooltip,
  Tree,
  Watermark,
  // Feedback
  Alert,
  Drawer,
  Message,
  Modal,
  Notice,
  Popconfirm,
  Progress,
  Result,
  Skeleton,
  SkeletonAvatar,
  SkeletonTitle,
  SkeletonParagraph,
  SkeletonInput,
  SkeletonButton,
  SkeletonImage,
  Spin,
  // Other
  Anchor,
  AnchorLink,
  Authorizer,
  Backtop,
  Collapser,
  Fullscreen,
  ResizeObserver
];

const install = function(app: App, options = {}) {
  if (install.installed) {
    return;
  }

  if (options.locale) {
    locale.use(options.locale);
  }

  if (options.i18n) {
    locale.i18n(options.i18n);
  }

  components.forEach(component => {
    app.component(component.name, component);
  });

  app.config.globalProperties.$vui = {
    classNamePrefix: "vui",
    size: options.size || "",
    zIndex: options.zIndex || 2000,
    authorize: options.authorize
  };
  app.config.globalProperties.$notice = Notice;
  app.config.globalProperties.$message = Message;
  app.config.globalProperties.$modal = Modal;
  app.config.globalProperties.$spin = Spin;
  app.config.globalProperties.$loading = Loading;
};

export {
  // General
  Icon,
  Button,
  ButtonGroup,
  Link,
  // Layout
  Divider,
  Row,
  Col,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Space,
  // Navigation
  Affix,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownSubmenu,
  DropdownMenuItem,
  DropdownMenuItemGroup,
  DropdownMenuDivider,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  MenuDivider,
  PageHeader,
  Pagination,
  Steps,
  Step,
  Tabs,
  TabPanel,
  // Data Entry
  Cascader,
  Checkbox,
  CheckboxGroup,
  // Form,
  // FormGroup,
  // FormItem,
  Input,
  InputGroup,
  InputNumber,
  Radio,
  RadioGroup,
  Rate,
  Select,
  Option,
  OptionGroup,
  Slider,
  Switch,
  Textarea,
  Timeroutine,
  Transfer,
  CascadeTransfer,
  Upload,
  // Data Display
  Avatar,
  AvatarGroup,
  Badge,
  Card,
  CardGrid,
  CardMeta,
  Cell,
  CellGroup,
  Collapse,
  Panel,
  Descriptions,
  Description,
  Empty,
  Image,
  List,
  ListItem,
  ListItemMeta,
  Popover,
  Qrcode,
  Ratio,
  Ribbon,
  Statistic,
  Countdown,
  Table,
  Tag,
  Time,
  Timeline,
  TimelineItem,
  Tooltip,
  Tree,
  Watermark,
  // Feedback
  Alert,
  Drawer,
  Message,
  Modal,
  Notice,
  Popconfirm,
  Progress,
  Result,
  Skeleton,
  SkeletonAvatar,
  SkeletonTitle,
  SkeletonParagraph,
  SkeletonInput,
  SkeletonButton,
  SkeletonImage,
  Spin,
  // Other
  Anchor,
  AnchorLink,
  Authorizer,
  Backtop,
  Collapser,
  Fullscreen,
  ResizeObserver,
  Loading
};

export default {
  version: pkg.version,
  install,
  // locale: locale.use,
  // i18n: locale.i18n
};