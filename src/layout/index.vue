<template>
  <vui-layout class="app-layout">
    <vui-layout-header color="light" class="app-layout-header">
      <h1 class="logo">
        <router-link to="/">
          <img src="~src/assets/images/logo.svg" />Vui Design
        </router-link>
      </h1>
      <vui-space v-bind:gutter="40" style="float: right; display: flex;">
        <ul class="nav-list">
          <li class="nav">
            <router-link to="/guide" active-class="active">{{translate("app.nav.guide")}}</router-link>
          </li>
          <li class="nav">
            <router-link to="/components" active-class="active">{{translate("app.nav.components")}}</router-link>
          </li>
        </ul>
        <vui-space block>
          <a href="https://npmjs.org/package/vui-design" target="_blank" class="npm">
            <img src="https://camo.githubusercontent.com/5e58706616d56949dacf3deadaa10179a06bbc69aace9baf79133a22dbd5637e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675692d64657369676e2e7376673f7374796c653d666c61742d737175617265" />
          </a>
          <div class="github">
            <a href="https://github.com/vui-design/vui-design" target="_blank" class="github-repository">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                <path d="M0 524.714667c0 223.36 143.146667 413.269333 342.656 482.986666 26.88 6.826667 22.784-12.373333 22.784-25.344v-88.618666c-155.136 18.176-161.322667-84.48-171.818667-101.589334-21.077333-35.968-70.741333-45.141333-55.936-62.250666 35.328-18.176 71.338667 4.608 112.981334 66.261333 30.165333 44.672 89.002667 37.12 118.912 29.653333a144.64 144.64 0 0 1 39.68-69.546666c-160.682667-28.757333-227.712-126.848-227.712-243.541334 0-56.576 18.688-108.586667 55.253333-150.570666-23.296-69.205333 2.176-128.384 5.546667-137.173334 66.474667-5.973333 135.424 47.573333 140.8 51.754667 37.76-10.197333 80.810667-15.573333 128.981333-15.573333 48.426667 0 91.733333 5.546667 129.706667 15.872 12.8-9.813333 76.885333-55.765333 138.666666-50.133334 3.285333 8.789333 28.16 66.602667 6.272 134.826667 37.077333 42.069333 55.936 94.549333 55.936 151.296 0 116.864-67.413333 215.04-228.565333 243.456a145.92 145.92 0 0 1 43.52 104.106667v128.64c0.896 10.282667 0 20.48 17.194667 20.48 202.410667-68.224 348.16-259.541333 348.16-484.906667C1023.018667 242.176 793.941333 13.312 511.573333 13.312 228.864 13.184 0 242.090667 0 524.714667z" fill="#000000"></path>
              </svg>
            </a>
            <a href="https://github.com/vui-design/vui-design/stargazers" target="_blank" class="github-stargazers">13</a>
          </div>
        </vui-space>
      </vui-space>
    </vui-layout-header>
    <vui-layout class="app-layout-body">
      <vui-layout-sider class="app-layout-body-sider" v-bind:width="240">
        <a href="https://github.com/vui-design/vui-design-pro" target="_blank" class="ad">
          <img src="~src/assets/images/vui-design-pro.png" />
        </a>
        <div class="menu">
          <vui-menu mode="vertical" color="light" v-bind:selectedKey="route.path" v-on:select="handleNavigate">
            <template v-for="item in menu">
              <vui-menu-item-group v-if="item.group" v-bind:key="item.group" v-bind:title="translate('app.menu.' + item.group)">
                <vui-menu-item v-for="child in item.children" v-bind:key="child.path">
                  <router-link v-bind:to="child.path">{{translate("app.menu." + item.group + "-" + child.name)}}</router-link>
                </vui-menu-item>
              </vui-menu-item-group>
              <vui-menu-item v-else v-bind:key="item.path">
                <router-link v-bind:to="item.path">{{translate("app.menu." + item.name)}}</router-link>
              </vui-menu-item>
            </template>
          </vui-menu>
        </div>
      </vui-layout-sider>
      <vui-layout class="app-layout-body-content">
        <vui-layout-content class="app-layout-body-content-body">
          <router-view v-bind:key="route.fullPath" />
        </vui-layout-content>
        <vui-layout-footer class="app-layout-body-content-footer">
          <p>© 2018-{{year}} Coded By Dingwei</p>
        </vui-layout-footer>
      </vui-layout>
    </vui-layout>
  </vui-layout>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import { useI18n } from "vue-i18n";
  import getMenuByRoutes from "../utils/getMenuByRoutes";

  export default defineComponent({
    setup(props, context) {
      // 
      const router = useRouter();
      const route = useRoute();
      const { t: translate } = useI18n();

      // 状态
      const menu = getMenuByRoutes(router.options.routes);
      const year = ref<number>(new Date().getFullYear());

      // 
      const handleNavigate = key => router.push(key);

      // 
      return {
        route,
        menu,
        translate,
        year,
        handleNavigate
      };
    }
  });
</script>

<style>
  .app-layout { position:relative; min-height:100vh; background-color:#fff; padding-top:64px; }

  .app-layout-header { position:fixed; top:0; left:0; right:0; z-index:100; border-bottom:1px solid #f0f0f0; padding:0 20px; }
  .app-layout-header .logo { float:left; display:block; margin:0; padding:16px 0; }
  .app-layout-header .logo a { display:flex; justify-content:flex-start; align-items:center; color:rgba(0,0,0,0.85); font-size:18px; font-weight:500; line-height:32px; }
  .app-layout-header .logo img { display:block; width:32px; height:32px; margin-right:16px; }
  .app-layout-header .nav-list { display:flex; justify-content:flex-start; align-items:center; height:64px; list-style:none; margin:0; padding:0; }
  .app-layout-header .nav { height:64px; }
  .app-layout-header .nav a { display:block; height:64px; border-bottom:2px solid transparent; color:rgba(0,0,0,0.85); font-size:16px; line-height:64px; transition:all 0.2s; }
  .app-layout-header .nav a:hover { border-bottom-color:#2d8cf0; color:#2d8cf0; }
  .app-layout-header .nav a.active { border-bottom-color:#2d8cf0; color:#2d8cf0; }
  .app-layout-header .nav + .nav { margin-left:40px; }
  .app-layout-header .npm { display:block; height:20px; }
  .app-layout-header .npm img { display:block; max-height:100%; }
  .app-layout-header .github { display:flex; justify-content:flex-start; align-items:center; }
  .app-layout-header .github .github-repository { display:block; width:20px; height:20px; margin:2px 0; }
  .app-layout-header .github .github-repository svg { display:block; width:100%; height:100%; }
  .app-layout-header .github .github-stargazers { position:relative; display:block; border:1px solid #e0e0e0; border-radius:2px; background-color:#fff; margin-left:12px; padding:4px 8px; color:rgba(0,0,0,0.85); font-size:14px; line-height:1; }
  .app-layout-header .github .github-stargazers:before { content:""; position:absolute; top:50%; left:0; width:8px; height:8px; border-width:1px; border-style:solid; border-color:#e0e0e0 transparent transparent #e0e0e0; border-radius:2px; background-color:#fff; margin-top:-4px; margin-left:-4px; transform:rotate(-45deg); }

  .app-layout-body { background-color:#fff; }
  .app-layout-body-sider { position:fixed; left:0; top:0; bottom:0; border-right:1px solid #f0f0f0; background-color:#fff; padding-top:64px; }
  .app-layout-body-sider .ad { display:block; height:84px; border-radius:2px; background-color:#fafafa; margin:16px 16px 0 16px; overflow:hidden; opacity:0.9; transition:all 0.2s; }
  .app-layout-body-sider .ad img { display:block; width:100%; }
  .app-layout-body-sider .ad:hover { opacity:1; }
  .app-layout-body-sider .menu { padding:16px 0; }
  .app-layout-body-content { background-color:#fff; padding-left:241px; }
  .app-layout-body-content .app-layout-body-content-body { padding:32px; }
  .app-layout-body-content .app-layout-body-content-footer { border-top:1px solid #f0f0f0; padding:32px; text-align:center; }
</style>