# 莫奈的花园  
一个Vue UI组件 

[![Build Status](https://www.travis-ci.org/squirrelinsouthern/Monent-s-Garden.svg?branch=master)](https://www.travis-ci.org/squirrelinsouthern/Monent-s-Garden)

By squirrel


### ◎开始使用
####1、添加CSS样式

使用本框架前，请在CSS中写入以下代码：
```
*,*::before,*::after {box-sizing:border-box;}
```
还有一些默认样式的CSS代码：
```
html {
    --button-height: 36px;
    --font-size: 14px;
    --border-radius: 4px;
    --button-color-font: white;
    --button-bg: #5C8DF6;
    --button-bg-active: #507BD8;
    --button-bg-hover: #75a0ff;
    --button-shadow: 2px 2px 4px rgba(79, 100, 230, 0.5);
}
```
#####2、安装
```
npm i --save monet-garden-ui

```
#####3、引入button的UI为例
```
import { Button } from 'monet-garden-ui'
import 'monet-garden-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'm-button':Button
  }
}
```
