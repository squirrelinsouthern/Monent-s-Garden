---
title: Tabs-导航栏
sidebarDepth: 2
---

# Tabs-导航栏

## 简单用法
#### 预览

<ClientOnly>
<tabs1-demo></tabs1-demo>
</ClientOnly>

```html{1}
<m-tabs :selected.sync="selectedTab" direction="tabDirection">
    <m-tabs-nav>
        <m-tabs-item name="lotus">《睡莲》</m-tabs-item>
        <m-tabs-item name="willow">《垂柳》</m-tabs-item>
        <m-tabs-item name="bridge">《日本桥》</m-tabs-item>
        <m-tabs-item name="season" disabled><m-icon icon="tishi" style="fill:grey"></m-icon>《四季睡莲》</m-tabs-item>
    </m-tabs-nav>
    <m-tabs-content >
        <m-tabs-pane name="lotus">详细内容</m-tabs-pane>
        <m-tabs-pane name="willow">详细内容</m-tabs-pane>
        <m-tabs-pane name="bridge">详细内容</m-tabs-pane>
    </m-tabs-content>
</m-tabs>
```

## 增加按钮和icon
#### 预览

<ClientOnly>
<tabs2-demo></tabs2-demo>
</ClientOnly>

```html{1}
<m-tabs :selected.sync="selectedTab" direction="tabDirection">
    <m-tabs-nav>
        <template slot="actions">
            <m-button>设置</m-button>
        </template>
        <m-tabs-item name="lotus"><m-icon icon="lotus"></m-icon>《睡莲》</m-tabs-item>
        <m-tabs-item name="willow"><m-icon icon="fan"></m-icon>《垂柳》</m-tabs-item>
        <m-tabs-item name="bridge"><m-icon icon="penjing"></m-icon>《日本桥》</m-tabs-item>
        <m-tabs-item name="season" disabled><m-icon icon="tishi" style="fill:grey"></m-icon>《四季睡莲》</m-tabs-item>
    </m-tabs-nav>
    <m-tabs-content >
        <m-tabs-pane name="lotus">详细内容</m-tabs-pane>
        <m-tabs-pane name="willow">详细内容</m-tabs-pane>
        <m-tabs-pane name="bridge">详细内容</m-tabs-pane>
    </m-tabs-content>
</m-tabs>
```
