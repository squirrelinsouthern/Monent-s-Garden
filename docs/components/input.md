---
title: Input-输入框
sidebarDepth: 2
---

# Input-输入框

## 简单用法
#### 预览
####
<input-demo></input-demo>
```html{1}
<div class="box">
        <m-input placeholder="请在此输入"></m-input>
        <m-input placeholder="不可更改" :no-change="true"></m-input>
        <m-input placeholder="禁止输入" :stop-use="true"></m-input>
    </div>
    <div class="box">
        <m-input placeholder="检测" error="输入不正确"></m-input>
    </div>
    <div class="box">
        <m-input placeholder="change事件" @input="inputChange"></m-input>
        <m-input placeholder="你可以输入改变我" v-model="message"></m-input>
        <span>{{message}}</span>
    </div>
```