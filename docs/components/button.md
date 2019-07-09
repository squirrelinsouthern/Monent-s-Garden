---
title: Button-按钮
sidebarDepth: 2
---

# Button-按钮

## 基础按钮
#### 预览
<button1-demo></button1-demo>
```html{1}
<m-button>默认样式</m-button>
<m-button icon="aixin">icon在左</m-button>
<m-button icon="aixin" where-icon="right">icon在右</m-button>
```

## Loading按钮
#### 预览
<button2-demo></button2-demo>
```html{1}
<m-button icon="smile" :loading="true">loading状态</m-button>
<m-button icon="smile" :loading="loading" @click="loading=!loading" where-icon="right">
    点击切换icon
</m-button>
```
## 按钮组
#### 预览
<button3-demo></button3-demo>
```html{1}
<m-button-group>
    <m-button icon="last">上一页</m-button>
    <m-button>更多</m-button>
    <m-button icon="next" where-icon="right">下一页</m-button>
</m-button-group>
```

:) 说明 
+ 按钮可以设置 icon。 
+ 可接收一个loading属性，当值为 true时，会显示成loading icon。 
+ 当 loading属性和icon属性同时存在时，优先判断 loading，当loading为false时，再显示icon属性指定的图标。