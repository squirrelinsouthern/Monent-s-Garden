---
title: Input-输入框
sidebarDepth: 2
---

# Input-输入框

## 基础用法
#### 预览
<ClientOnly>
    <input1-demo></input1-demo>
</ClientOnly>

```html{1}
<m-input placeholder="请在此输入"></m-input>
<m-input placeholder="不可更改" :no-change="true"></m-input>
<m-input placeholder="禁止输入" :stop-use="true"></m-input>
```
## error状态
#### 预览
<ClientOnly>
    <input2-demo></input2-demo>
</ClientOnly>

```html{1}
<m-input placeholder="检测" error="输入不正确"></m-input>
```
## 双向绑定
#### 预览
<ClientOnly>
    <input3-demo></input3-demo>
</ClientOnly>

```html{1}
<m-input placeholder="change事件" @input="inputChange"></m-input>
<m-input placeholder="你可以输入改变我" v-model="message"></m-input>
<span>{{message}}</span>
```





