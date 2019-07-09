---
title: Response-响应式布局
sidebarDepth: 2
---

# Response-响应式布局

## 基础响应式 
#### 预览(尺寸：ipad、narrowPc、pc、widePc)
<response1-demo></response1-demo>
```html{1}
.demoCol1 {
   height: 40px;border: 1px solid #f3628d;border-radius: 4px;
   background: #ffb7d1;color:#f3628d;font-size: 16px;display: flex;
   justify-content: center;align-items: center;margin: 4px 0
}
.demoCol2 {
   height: 40px;border: 1px solid #5C8DF6;border-radius: 4px;
   background: #b1d3ff;color:#5C8DF6;font-size: 16px;display: flex;
   justify-content: center;align-items: center;margin: 4px 0
}
<m-row :gutter="8">
    <m-col :span="12" :ipad="{span:8}" :narrow-pc="{span:16}">
        <div class="demoCol1">响应式</div>
    </m-col>
    <m-col :span="12" :ipad="{span:16}" :narrow-pc="{span:8}">
        <div class="demoCol2">响应式</div>
    </m-col>
</m-row>
```

## 可设置offset空白间隙
#### 预览
<response2-demo></response2-demo>
```html{1}
 <m-row :gutter="8">
    <m-col :span="12" :ipad="{span:6,offset:2}" :narrow-pc="{span:12,offset:4}">
        <div class="demoCol1">响应式</div>
    </m-col>
    <m-col :span="12" :ipad="{span:12,offset:4}" :narrow-pc="{span:6,offset:2}">
        <div class="demoCol2">响应式</div>
    </m-col>
</m-row>
```


