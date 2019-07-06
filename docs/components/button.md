---
title: Button-按钮
sidebarDepth: 2
---

# Button

## 简单用法

#### 预览
####

<button-demo></button-demo>

```html{1}
 <m-button>默认样式</m-button>
<m-button icon="aixin">icon在左</m-button>
<m-button icon="aixin" where-icon="right">icon在右</m-button>
<m-button icon="smile" :loading="true">loading状态</m-button>
<m-button icon="smile" :loading="loading" @click="loading=!loading" where-icon="right">
    点击切换icon
</m-button>
```
:) 说明 
+ 按钮可以设置 icon。 
+ 可接收一个loading属性，当值为 true时，会显示成loading icon。 
+ 当 loading属性和icon属性同时存在时，优先判断 loading，当loading为false时，再显示icon属性指定的图标。