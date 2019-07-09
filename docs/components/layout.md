---
title: Layout-布局
sidebarDepth: 2
---

# Layout-布局

## 样式1
#### 预览
<layout1-demo></layout1-demo>
```html{1}
<style>
.header{ height: 50px;}
.footer{ height: 50px;}
.content{ height: 100px;}
</style>
<m-layout>
    <m-header>header</m-header>
    <m-content>content</m-content>
    <m-footer>footer</m-footer>
</m-layout>
```
## 样式2
#### 预览
<layout2-demo></layout2-demo>
```html{1}
<style>
.header{ height: 50px;}
.footer{ height: 50px;}
.content{ height: 100px;}
.sider{ width:50px;}
</style>
<m-layout style="height: 100vh;">
    <m-sider>sider</m-sider>
    <m-layout >
        <m-header>header</m-header>
        <m-content>content</m-content>
        <m-footer>footer</m-footer>
    </m-layout>
</m-layout>
```



