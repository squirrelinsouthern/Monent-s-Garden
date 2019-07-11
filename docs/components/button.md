---
title: Button-按钮
sidebarDepth: 2
---

#BKutton-按钮

## 基础按钮
#### 预览

<ClientOnly>
<button1-demo></button1-demo>
</ClientOnly>


```html{1}
<m-button>默认样式</m-button>
<m-button icon="aixin">icon在左</m-button>
<m-button icon="aixin" where-icon="right">icon在右</m-button>
```

## Loading按钮
#### 预览

<ClientOnly>
<button2-demo></button2-demo>
</ClientOnly>

```html{1}
<m-button icon="smile" :loading="true">loading状态</m-button>
<m-button icon="smile" :loading="loading" @click="loading=!loading" where-icon="right">
点击切换icon
</m-button>
```
## 按钮组
#### 预览

<ClientOnly>
<button3-demo></button3-demo>
</ClientOnly>

```html{1}
<m-button-group>
<m-button icon="last">上一页</m-button>
<m-button>更多</m-button>
<m-button icon="next" where-icon="right">下一页</m-button>
</m-button-group>
```

## Attributes
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |