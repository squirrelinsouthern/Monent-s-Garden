---
title: Grid-栅格
sidebarDepth: 2
---

# Grid-栅格

## 24栏栅格
#### 预览
<grid1-demo></grid1-demo>
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

<m-row>
    <m-col :span="12"><div class="demoCol1">12</div></m-col>
    <m-col :span="12"><div class="demoCol2">12</div></m-col>
</m-row>
<m-row>
    <m-col :span="8"><div class="demoCol1">8</div></m-col>
    <m-col :span="8"><div class="demoCol2">8</div></m-col>
    <m-col :span="8"><div class="demoCol1">8</div></m-col>
</m-row>
<m-row>
    <m-col :span="6"><div class="demoCol1">6</div></m-col>
    <m-col :span="6"><div class="demoCol2">6</div></m-col>
    <m-col :span="6"><div class="demoCol1">6</div></m-col>
    <m-col :span="6"><div class="demoCol2">6</div></m-col>
</m-row>
<m-row>
    <m-col :span="4"><div class="demoCol1">4</div></m-col>
    <m-col :span="4"><div class="demoCol2">4</div></m-col>
    <m-col :span="4"><div class="demoCol1">4</div></m-col>
    <m-col :span="4"><div class="demoCol2">4</div></m-col>
    <m-col :span="4"><div class="demoCol1">4</div></m-col>
    <m-col :span="4"><div class="demoCol2">4</div></m-col>
</m-row>
<m-row>
    <m-col :span="2"><div class="demoCol1">2</div></m-col>
    <m-col :span="2"><div class="demoCol2">2</div></m-col>
    <m-col :span="2"><div class="demoCol1">2</div></m-col>
    <m-col :span="2"><div class="demoCol2">2</div></m-col>
    <m-col :span="2"><div class="demoCol1">2</div></m-col>
    <m-col :span="2"><div class="demoCol2">2</div></m-col>
    <m-col :span="2"><div class="demoCol1">2</div></m-col>
    <m-col :span="2"><div class="demoCol2">2</div></m-col>
    <m-col :span="2"><div class="demoCol1">2</div></m-col>
    <m-col :span="2"><div class="demoCol2">2</div></m-col>
    <m-col :span="2"><div class="demoCol1">2</div></m-col>
    <m-col :span="2"><div class="demoCol2">2</div></m-col>
</m-row>
```
## 设置gutter
#### 预览
<grid2-demo></grid2-demo>
```html{1}
<m-row :gutter="20">
    <m-col :span="8"><div class="demoCol1">8</div></m-col>
    <m-col :span="8"><div class="demoCol2">8</div></m-col>
    <m-col :span="8"><div class="demoCol1">8</div></m-col>
</m-row>
<m-row :gutter="20">
    <m-col :span="6"><div class="demoCol1">6</div></m-col>
    <m-col :span="6"><div class="demoCol2">6</div></m-col>
    <m-col :span="6"><div class="demoCol1">6</div></m-col>
    <m-col :span="6"><div class="demoCol2">6</div></m-col>
</m-row>
```

## 设置空栅格间隙
#### 预览
<grid3-demo></grid3-demo>
```html{1}
<m-row>
    <m-col :span="2"><div class="demoCol1">2</div></m-col>
    <m-col :span="8" :offset="2"><div class="demoCol2">8</div></m-col>
    <m-col :span="2" :offset="4"><div class="demoCol1">2</div></m-col>
    <m-col :span="6"><div class="demoCol2">6</div></m-col>
</m-row>
``` 
## 栅格align的3种对齐方式
#### 预览
<grid4-demo></grid4-demo>
```html{1}
<m-row align="right">
    <m-col :span="6"><div class="demoCol1">6</div></m-col>
    <m-col :span="6"><div class="demoCol2">6</div></m-col>
</m-row>
<m-row align="center">
    <m-col :span="6"><div class="demoCol1">6</div></m-col>
    <m-col :span="6"><div class="demoCol2">6</div></m-col>
</m-row>
<m-row align="left">
    <m-col :span="6"><div class="demoCol1">6</div></m-col>
    <m-col :span="6"><div class="demoCol2">6</div></m-col>
</m-row>
``` 

    
    